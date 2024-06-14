/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const TrainerCard = ({ trainer }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl rounded-lg overflow-hidden">
      <figure className="overflow-hidden">
        <img
          src={trainer?.image_url}
          alt={trainer?.name}
          className="object-cover w-full h-auto transform transition-transform duration-500 hover:scale-105"
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="text-xl font-bold mb-2">{trainer?.name}</h2>
        <p className="text-gray-700 mb-4">
          Experience of {trainer?.experience} years
        </p>
        <Link
          to={`/trainers/${trainer._id}`}
          className="block w-full text-center"
        >
          <button className="py-2 w-full bg-red-400 text-white rounded-md hover:bg-red-500 transition-colors duration-300">
            Read more...
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TrainerCard;
