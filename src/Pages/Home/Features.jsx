import React from "react";
import features from "../../../public/feature.json";

const Features = () => {
  return (
    <div className="py-10 md:py-20 bg-gradient-to-b from-gray-900 to-gray-700 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
                <img
                  className="w-20 mx-auto pt-8"
                  src={feature.image}
                  alt={feature.title}
                />
              <div className="p-6 text-center">
                <h2 className="text-2xl font-bold text-white mb-2">
                  {feature.title}
                </h2>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
