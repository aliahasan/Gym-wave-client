/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import "./CheckOutForm.css";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { bookings, payments } from "../../../Api/Api";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckOutForm = ({ bookingData }) => {
  const navigate = useNavigate();
  const { loading, user } = useAuth();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const axiosSecure = useAxiosSecure();
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    if (bookingData.price > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: bookingData.price })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        })
        .catch((error) => {
          console.error("Error creating payment intent:", error);
        });
    }
  }, [bookingData, axiosSecure]);
  console.log(bookingData);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("payment error", error);
      setCardError(error.message);
    } else {
      setCardError("");
      console.log("payment method", paymentMethod);
    }
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
      console.log(confirmError);
      setCardError(confirmError.message);
    }
    console.log("payment intent", paymentIntent);
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
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
        const text = `your booking is successful !`;
        Swal.fire({
          title: "Congratulations",
          text: text,
          icon: "success",
        });
        navigate("/");
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      } finally {
        setProcessing(false);
      }
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} >
     <div className="flex flex-col ">
     <div>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      </div>
      <div className="">
        <button
          className="px-8 py-2 bg-red-400"
          type="submit"
          disabled={!stripe || loading || !clientSecret || processing}
        >
          Pay
        </button>
      </div>
      {cardError && <div className="card-error">{cardError}</div>}
     </div>
    </form>
  );
};

export default CheckOutForm;
