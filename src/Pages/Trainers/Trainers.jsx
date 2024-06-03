import React from "react";
import TrainerDetails from "./TrainerDetails";
import { useState } from "react";
import TimeRangePicker from "@wojtekmaj/react-timerange-picker";
import Container from "../../Components/Container/Container";

const Trainers = () => {
  const generateTimeSlots = () => {
    const slots = [];
    // Loop through each hour from 9:00 AM to 2:00 PM
    for (let hour = 9; hour <= 14; hour++) {
      // Format the hour and push it to the slots array
      slots.push(`${hour % 12 || 12}:00 ${hour < 12 ? 'AM' : 'PM'}`);
    }
    return slots;
  }
  return (
    <div>
      <Container>
        <div>
          This is Trainers
          <TrainerDetails></TrainerDetails>
        </div>

        <div>
      <h2>Available Time Slots</h2>
      <ul>
        {/* Render each time slot */}
        {generateTimeSlots().map((slot, index) => (
          
          <li key={index}>{slot}</li>
        
        ))}
      </ul>
    </div>
    <div>
     
    </div>
      </Container>
    </div>
  );
};

export default Trainers;
