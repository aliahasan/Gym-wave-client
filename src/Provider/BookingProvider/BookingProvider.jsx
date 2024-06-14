/* eslint-disable react/prop-types */
import React, { createContext, useState, useEffect } from "react";

export const BookingContext = createContext();

const BookingProvider = ({ children }) => {
  const [bookingData, setBookingData] = useState(() => {
    // Load initial state from localStorage if available
    const savedBookingData = localStorage.getItem("bookingData");
    return savedBookingData ? JSON.parse(savedBookingData) : {};
  });

  useEffect(() => {
    // Save bookingData to localStorage whenever it changes
    localStorage.setItem("bookingData", JSON.stringify(bookingData));
  }, [bookingData]);

  return (
    <BookingContext.Provider value={{ bookingData, setBookingData }}>
      {children}
    </BookingContext.Provider>
  );
};

export default BookingProvider;
