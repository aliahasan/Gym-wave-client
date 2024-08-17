import React from "react";
import { GiCheckMark } from "react-icons/gi";
const Benefit = () => {
  return (
    <div>
      <div>
        <h1 className="uppercase text-4xl my-8">Member Benefit</h1>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-y-2 md:gap-y-0">
        <div  className="space-y-2">
          <div className="flex items-center  gap-x-2">
            <GiCheckMark  />
            <p>Every class is booked in advance</p>
          </div>
          <div className="flex items-center gap-x-2">
            <GiCheckMark  />
            <p>Unlimited access to all equipment</p>
          </div>
        </div>
        <div  className="space-y-2">
          <div className="flex items-center gap-x-2">
            <GiCheckMark   />
            <p>Top-tier fitness programs</p>
          </div>
          <div className="flex items-center gap-x-2 ">
            <GiCheckMark  />
            <p>Complimentary Personal Training</p>
          </div>
        </div>
        <div  className="space-y-2">
          <div className="flex items-center  gap-x-2">
            <GiCheckMark  />

            <p>30% off for family members</p>
          </div>
          <div className="flex  items-center gap-x-2 ">
            <GiCheckMark  />
            <p>15% off your first purchase at The Shop</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
