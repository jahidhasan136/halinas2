import Image from "next/image";
import React from "react";
import bannerImg from "@/assets/banner.svg";
import PrimaryButton from "../shared/shared-button/PrimaryButton";

const Banner = () => {
  return (
    <div className="relative">
      <Image className="w-full bg-cover" src={bannerImg} alt="" />
      <div className="absolute top-0 bottom-0 right-0 left-0 grid place-content-center text-center gap-2 md:gap-5 lg:gap-10">
        <div className="grid lg:gap-6">
          <h1 className="font-bold text-lg md:text-3xl lg:text-5xl xl:text-[72px] md:leading-[72px] text-white">
            Self Care Shouldn’t be <br /> a Luxury
          </h1>
          <p className="text-xs md:text-base leadign-[25px] text-white">
            Feel good in your own skin every day Because self-care is a right
            not a reward
          </p>
        </div>
        <div>
          <PrimaryButton className="px-6 font-bold" text="Join Now" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
