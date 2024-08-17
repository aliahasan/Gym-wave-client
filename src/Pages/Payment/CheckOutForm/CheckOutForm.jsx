/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { bookings, payments } from "../../../Api/Api";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckOutForm = ({ bookingData }) => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if (bookingData.price > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: bookingData.price })
        .then((res) => {
          setClientSecret(res.data?.clientSecret);
        })
        .catch((error) => {
          console.error("Error creating payment intent:", error);
        });
    }
  }, [bookingData, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
      return;
    }

    setCardError("");
    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      setCardError(confirmError.message);
      setProcessing(false);
      return;
    }

    if (paymentIntent.status === "succeeded") {
      const bookingInfo = {
        ...bookingData,
        date: new Date(),
      };

      const paymentInfo = {
        email: user?.email,
        date: new Date(),
        transactionId: paymentIntent.id,
        price: bookingData.price,
        item: bookingData?.packageName,
      };

      try {
        await bookings(bookingInfo);
        await payments(paymentInfo);
        localStorage.removeItem("bookingData");
        Swal.fire({
          title: "Congratulations",
          text: "Your booking is successful!",
          icon: "success",
        });
        navigate("/");
      } catch (error) {
        toast.error(error.message);
      } finally {
        setProcessing(false);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full  max-w-lg mx-auto p-4 shadow-lg rounded-md bg-white"
    >
      <div className="flex flex-col space-y-4">
        <>
          {clientSecret && (
            <div className="w-full">
              <CardElement
                options={{
                  style: {
                    base: {
                      fontSize: "16px",
                      color: "#424770",
                      "::placeholder": { color: "#aab7c4" },
                    },
                    invalid: { color: "#9e2146" },
                  }
                }}
              />
            </div>
          )}
          {cardError && (
            <p className="text-red-500 text-sm text-center">{cardError}</p>
          )}
          <button
            type="submit"
            className="btn bg-green-400"
            disabled={!stripe || processing}
          >
            {processing ? "Processing..." : "Pay Now"}
          </button>
        </>
      </div>
    </form>
  );
};

export default CheckOutForm;
