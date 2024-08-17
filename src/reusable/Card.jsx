import React from "react";

const Card = ({ type, price, title, handleJoin }) => {
  return (
    <div className="flex justify-center my-8 md:my-4 lg:my-0">
      <div
        className={`${
          type === "silver"
            ? "bg-[#EDEDED] w-80 p-4"
            : type === "gold"
            ? "bg-[#D6FB00] w-80 p-4"
            : "bg-[#EDEDED] w-80 p-4"
        } `}
      >
        {type === "silver" && (
          <div className="text-center py-10 px-4">
            <p className="uppercase text-2xl font-semibold mb-6">{title}</p>
            <hr className="my-6 border-t-2 border-black" />
            <p className="text-justify">
              Whether you are visiting F7 on business or are just taking your
              personal fitness one day at a time, we would like to invite you to
              experience all that GymWave has to offer.
            </p>
            <hr className="my-6 border-t-2 border-black" />
            <h3 className="uppercase text-2xl font-semibold">
              ${price}/Per day
            </h3>
          </div>
        )}

        {type === "gold" && (
          <div className="text-center py-10 px-4">
            <h1 className="uppercase text-2xl font-semibold mb-6">{title}</h1>
            <hr className="my-6 border-t-2 border-black" />
            <p className="text-justify">
              The Gold package offers a premium experience with additional
              benefits tailored for your convenience and needs. Enjoy exclusive
              access to premium facilities. Join the gold package for a full
              year of unparalleled fitness services and amenities.
            </p>
            <hr className="my-6 border-t-2 border-black" />
            <h3 className="uppercase text-2xl font-semibold">
              ${price}/Per Month
            </h3>
          </div>
        )}

        {type === "diamond" && (
          <div className="text-center py-10 px-4">
            <h1 className="uppercase text-2xl font-semibold mb-6">{title}</h1>
            <hr className="my-6 border-t-2 border-black" />
            <p className="text-justify">
              The Diamond package provides the ultimate luxury experience with
              exclusive perks for our esteemed members. This package includes
              VIP access to all facilities, personalized coaching, and more. 
              Commit to excellence with the Diamond package and enjoy the best GymWave has to offer.
            </p>
            <hr className="my-6 border-t-2 border-black" />
            <h3 className="uppercase text-2xl font-semibold">
              ${price}/Per Year
            </h3>
          </div>
        )}

        <div className="text-center py-5">
          <button
            className="py-2 px-4 bg-sky-300 hover:bg-sky-400 transition duration-200 ease-in-out rounded-md"
            onClick={() => handleJoin(type)}
          >
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
