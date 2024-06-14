import React, { useContext, useState } from "react";
import { BookingContext } from "../../Provider/BookingProvider/BookingProvider";
import useAuth from "../../Hooks/useAuth";
import Loading from "../../Shared/Loading/Loading";
import Container from "../../Components/Container/Container";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm/CheckOutForm";
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
  const { loading } = useAuth();
  const { bookingData } = useContext(BookingContext);
  console.log(bookingData);
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <Container>
        <div className="text-center my-10">
          <h1 className="text-4xl">Payment For Booking</h1>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 lg:mt-20">
          <div className="w-1/2 text-2xl">
            <p>Your booking slot : {bookingData?.slot}</p>
            <p>Package name : {bookingData?.packageName}</p>
            <p>price : {bookingData?.price}</p>
          </div>
          <div className="w-1/2">
            <Elements stripe={stripePromise}>
              <CheckOutForm bookingData={bookingData}></CheckOutForm>
            </Elements>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Payment;
