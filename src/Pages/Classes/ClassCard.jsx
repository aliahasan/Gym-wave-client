/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const ClassCard = ({ classItem }) => {
  return (
    <div className="card bg-base-100 shadow-md rounded-sm overflow-hidden flex flex-col h-full">
      <Link to={`/classes/${classItem._id}`} className="block w-full p-4">
        <figure className="overflow-hidden">
          <img
            src={classItem?.image}
            alt="image"
            className="object-cover w-full h-72 rounded-t-sm transform transition-transform hover:scale-105 duration-300"
          />
        </figure>
        <div className="card-body p-4 flex-1">
          <h2 className="text-xl font-bold mb-2 text-gray-800">
            {classItem?.name}
          </h2>
          <p className="text-sm text-gray-600 mb-4">{classItem?.title}</p>
          <div className="flex justify-between items-center text-gray-700 mb-4">
            <p className="text-md font-medium">Price: ${classItem?.price}</p>
            <p className="text-md font-medium">Duration: {classItem?.duration} min</p>
          </div>
        </div>
      </Link>
      <div className="mt-auto p-4">
        <Link to={`/trainers`} className="block w-full">
          <button className="py-2 px-4 bg-rose-400 text-white rounded w-full hover:bg-rose-500 transition-colors duration-300">
            Join Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ClassCard;
