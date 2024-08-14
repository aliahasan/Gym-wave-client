import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative overflow-hidden md:h-[70vh]">
      <div className="banner">
        <img
          className="w-full h-full object-cover"
          src="/banner1.jpg"
          alt="Banner"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
            Welcome to Our Gym
          </h1>
          <p className="text-lg md:text-2xl font-semibold text-yellow-400">
            Your fitness journey starts here
          </p>
          <Link to="/classes"> 
            <button className="mt-4 px-6 py-2 bg-indigo-600 rounded-full text-white hover:bg-indigo-700 transition">
              Join Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
