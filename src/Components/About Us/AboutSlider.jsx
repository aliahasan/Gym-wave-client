import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';
const AboutSlider = () => {
    return (
        <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src="/gymroom1.jpg" alt=""  />
        </SwiperSlide>
        <SwiperSlide><img src="/gymroom2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/gymroom3.jpg" alt="" /></SwiperSlide>
      </Swiper>
    );
};

export default AboutSlider;