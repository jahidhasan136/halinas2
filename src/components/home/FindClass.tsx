"use client";

import React from "react";
import ClassCard from "../allCards/ClassCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const FindClass = () => {
  return (
    <div className="container mt-[60px] lg:mt-[120px]">
      <div className="grid gap-4 xl:gap-0 xl:flex justify-between items-center mb-11">
        <h2 className="text-black text-5xl font-extrabold leading-[57px] capitalize text-nowrap">
          Find A Class
        </h2>
        <p className="text-black2 text-base leading-[25px] capitalize">
          A healthy body is a body that feels capable, energized, and ready for
          anything, not one that fits a mold.
        </p>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          1940: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <div className="flex items-center gap-6">
          <SwiperSlide>
            <ClassCard />
          </SwiperSlide>
          <SwiperSlide>
            <ClassCard />
          </SwiperSlide>
          <SwiperSlide>
            <ClassCard />
          </SwiperSlide>
          <SwiperSlide>
            <ClassCard />
          </SwiperSlide>
          <SwiperSlide>
            <ClassCard />
          </SwiperSlide>
          <SwiperSlide>
            <ClassCard />
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};

export default FindClass;
