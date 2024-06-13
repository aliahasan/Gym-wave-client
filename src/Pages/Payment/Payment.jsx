import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { slot, trainerId, trainerName, packageName, price } = location.state;

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    // Add other fields as necessary
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleConfirmClick = async () => {
    try {
      await axios.post("/api/bookings", {
        trainerId,
        trainerName,
        slot,
        packageName,
        price,
        ...userInfo,
      });
      navigate("/confirmation");
    } catch (error) {
      console.error("Error saving booking info:", error);
    }
  };

  return (
    <div>
      <h1>Payment Page</h1>
      <p>Trainer: {trainerName}</p>
      <p>Slot: {slot}</p>
      <p>Package: {packageName}</p>
      <p>Price: ${price}</p>
      <input
        type="text"
        name="name"
        value={userInfo.name}
        onChange={handleInputChange}
        placeholder="Your Name"
      />
      <input
        type="email"
        name="email"
        value={userInfo.email}
        onChange={handleInputChange}
        placeholder="Your Email"
      />
      {/* Add other input fields as necessary */}
      <button onClick={handleConfirmClick}>Confirm</button>
    </div>
  );
};

export default Payment;
