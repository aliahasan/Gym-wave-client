import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Booking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { slot, trainerId, trainerName } = location.state;

  const handleJoinNowClick = (packageName) => {
    const price = packageName === 'Silver' ? 100 : packageName === 'Gold' ? 200 : 300; 
    navigate(`/payment`, { state: { slot, trainerId, trainerName, packageName, price } });
  };
  return (
    <div>
      <h1>Booking for Slot: {slot}</h1>
      <h2>Trainer: {trainerName}</h2>
      <div className="plans">
        <div className="plan">
          <h3>Silver Plan</h3>
          <p>Includes X classes and Y facilities.</p>
          <button onClick={() => handleJoinNowClick('Silver')}>Join Now</button>
        </div>
        <div className="plan">
          <h3>Gold Plan</h3>
          <p>Includes A classes and B facilities.</p>
          <button onClick={() => handleJoinNowClick('Gold')}>Join Now</button>
        </div>
        <div className="plan">
          <h3>Diamond Plan</h3>
          <p>Includes M classes and N facilities.</p>
          <button onClick={() => handleJoinNowClick('Diamond')}>Join Now</button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
