/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const ClassCard = ({ classItem }) => {
  console.log(classItem);
  return (
    <div className="card w-96 bg-base-100 shadow-md rounded-sm overflow-hidden">
      <figure className="overflow-hidden">
        <img
          src={classItem?.image}
          alt="image"
          className="object-cover w-full  rounded-t-sm transform transition-transform hover:scale-105 duration-300"
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="text-2xl font-semibold mb-2">{classItem?.name}</h2>
        <p className="text-md text-gray-600 mb-4">{classItem?.title}</p>
        <div className="flex justify-between items-center mb-4">
          <p className="text-md">Price: ${classItem?.price}</p>
          <p className="text-md">Duration: {classItem?.duration} min</p>
        </div>
        <Link to={`/classes/${classItem._id}`} className="block w-full">
          <button className="py-2 px-4 bg-rose-400 text-white rounded-md w-full">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ClassCard;
