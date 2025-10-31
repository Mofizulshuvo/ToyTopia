// BannerSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";  
import image3 from "../assets/images/image3.jpg";
import image4 from "../assets/images/image4.jpg";

const Slider = () => {
  return (
    <div className="max-w-5xl mx-auto my-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        <SwiperSlide>
          <img
            src={image1}
            alt="Banner 1"
            className="w-full rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={image2}
            alt="Banner 2"
            className="w-full rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={image3}
            alt="Banner 3"
            className="w-full rounded-lg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
