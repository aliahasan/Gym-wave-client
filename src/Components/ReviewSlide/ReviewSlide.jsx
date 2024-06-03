/* eslint-disable react/prop-types */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Button from "../Button/Button";
const ReviewSlide = ({ reviews }) => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {reviews &&
          reviews.slice(0, 4).map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col md:flex-row items-center justify-center gap-x-10">
                <div className="w1/2">
                  <img
                    src={review?.image}
                    alt=""
                    className="w-80 md:w-64 lg:w-96 flex float-end"
                  />
                </div>
                <div className="md:w-1/2 leading-8 text-justify px-6 md:px-0 lg:w-1/3 ">
                  <p className="py-4 text-lg lg:text-xl lg:leading-10 text-[#191919]">
                    {review.description}
                  </p>
                  <p>{review?.name}</p>
                  <div className="mt-8">
                    <Button text="More review"></Button>
                    <div className="border border-yellow-400 my-10 "></div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default ReviewSlide;
