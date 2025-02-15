import React from "react";
import { Swiper , SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import wood1 from '../assets/image/wood1.jpg';
import wood2 from '../assets/image/wood2.jpg';
import wood3 from '../assets/image/wood3.jpg';

const Slider = () => {
    const images = [ wood1, wood2, wood3, wood3, wood2, wood1];

    return(
        <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        >
            {images.map((url, index) => (
        <SwiperSlide key={index}>
          <img src={url} alt={`Slide ${index + 1}`}/>
        </SwiperSlide>
      ))}

        </Swiper>
    )
}

export default Slider;