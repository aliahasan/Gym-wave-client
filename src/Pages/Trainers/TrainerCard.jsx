/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const TrainerCard = ({ trainer }) => {
  return (
    <div className="card  bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full transform transition-transform duration-300 hover:scale-105">
      <figure className="overflow-hidden">
        <img
          src={trainer?.image_url}
          alt={trainer?.name}
          className="object-cover w-full h-64"
        />
      </figure>
      <div className="card-body p-6 flex-1 flex flex-col">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          {trainer?.name}
        </h2>
        <p className="text-md text-gray-600 mb-6">
          {trainer?.experience} years of experience
        </p>
        <div className="mt-auto">
          <Link to={`/trainers/${trainer._id}`} className="block w-full">
            <button className="py-2 w-full bg-red-400 text-white rounded-md hover:bg-red-500 transition-colors duration-300">
              Read more...
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrainerCard;
