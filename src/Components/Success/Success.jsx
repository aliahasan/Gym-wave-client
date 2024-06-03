import React, { useEffect, useState } from "react";
import { axiosCommon } from "../../Hooks/useAxiosCommon";
import ReviewSlide from "../ReviewSlide/ReviewSlide";
const Success = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const response = await axiosCommon.get("/reviews");
        setReviews(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getReviews();
  }, []);
  return (
    <div className="text-center">
      <div className="md:text-center text-start">
        <h1 className="text-3xl font-bold pb-8 md:pb-0 text-[#191919]">
          Together We
          <span>
            <h1 className="text-7xl md:text-[80px] font-bold">Succeed</h1>
          </span>
        </h1>
        <div className="md:mt-8 border border-yellow-400"></div>
      </div>
      <div className="md:mt-12 mt-8 relative">
        <ReviewSlide reviews={reviews}></ReviewSlide>
      </div>
    </div>
  );
};

export default Success;
