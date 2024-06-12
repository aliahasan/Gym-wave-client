/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const TrainerCard = ({ trainer }) => {
  console.log(trainer);
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={trainer?.image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{trainer?.name}</h2>
        <p>Experiences of {trainer?.experience}</p>
        <Link
          to={`/trainers/${trainer._id}`}
          className="w-full text-center bg-red-400 py-2 rounded-sm text-white"
        >
          <div>
            <button>Read more...</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TrainerCard;
