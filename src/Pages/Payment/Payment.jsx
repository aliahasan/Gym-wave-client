import React, { useContext } from "react";
import { BookingContext } from "../../Provider/BookingProvider/BookingProvider";
import useAuth from "../../Hooks/useAuth";
import Loading from "../../Shared/Loading/Loading";
import Container from "../../Components/Container/Container";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm/CheckOutForm";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FcDataEncryption } from "react-icons/fc";
import { MdPrivacyTip } from "react-icons/md";
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
  const { loading } = useAuth();
  const { bookingData } = useContext(BookingContext);

  if (loading) {
    return <Loading />;
  }

  if (!bookingData) {
    return (
      <Container>
        <div className="text-center my-10">
          <h1 className="text-4xl font-bold">No Booking Data Found</h1>
        </div>
      </Container>
    );
  }

  return (
    <div className=" py-12">
      <Container>
        <div className="text-center my-10">
          <h1 className="text-5xl font-extrabold text-green-600">
            Complete Your Payment
          </h1>
          <p className="text-gray-500 mt-4">
            Please review your booking details and proceed to secure payment.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-8 lg:mt-20">
          {/* Booking Information */}
          <div className="md:w-1/2 bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-3xl font-semibold mb-4 text-gray-700">
              Booking Details
            </h2>
            <p className="text-xl mb-2">
              <span className="font-bold text-gray-600">Booking Slot:</span>{" "}
              {bookingData.slot}
            </p>
            <p className="text-xl mb-2">
              <span className="font-bold text-gray-600">Package Type:</span>{" "}
              {bookingData.packageName}
            </p>
            <p className="text-xl mb-2">
              <span className="font-bold text-gray-600">Trainer Name:</span>{" "}
              {bookingData?.trainer?.name}
            </p>
            <p className="text-xl mb-2">
              <span className="font-bold text-gray-600">Price:</span> $
              {bookingData.price}
            </p>
            <div className="mt-6 text-green-500 font-medium">
              <p>100% Satisfaction Guaranteed</p>
            </div>
          </div>

          {/* Payment Section */}
          <div className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-3xl font-semibold mb-4 text-gray-700">
              Payment Details
            </h2>
            <div className="my-[30px]">
              <Elements stripe={stripePromise}>
                <CheckOutForm bookingData={bookingData} />
              </Elements>
            </div>
            <p className="text-gray-500 mt-4 text-center">
              Secure payment powered by Stripe
            </p>
          </div>
        </div>

        {/* Security Assurance Section */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-green-600 mb-4">
            Your Payment is Secure
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            We use industry-leading encryption to ensure your payment
            information is safe and secure. You can rest assured that your
            personal data is protected.
          </p>
          <div className="flex justify-center items-center gap-4 mt-6">
            <RiSecurePaymentLine className="w-12 h-12" />
            <FcDataEncryption className="w-12 h-12" />
            <MdPrivacyTip className="w-12 h-12" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Payment;
