import React from 'react';
import Lottie from "lottie-react";
import animationData from "../../../public/nodata.json"
const NoData = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
        <Lottie 
          animationData={animationData}
          className="w-72 h-72 md:w-96 md:h-96"
        />
       
      </div>
    );
};



export default NoData;