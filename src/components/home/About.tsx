import Image from "next/image";
import React from "react";
import aboutImage from "@/assets/about.svg";

const About = () => {
  return (
    <div className="container grid grid-cols-2 gap-6 mt-[120px]">
      <div>
        <p className="capitalize text-base leading-5 text-black2 mb-4">
          About Us
        </p>
        <h2 className="capitalize text-5xl font-extrabold leading-[57px] tracking-[0.48px] mb-6">
          Health Is A Feeling Not A Look
        </h2>
        <p className="text-base leading-[25px]">
          My mission is to help you uncover your inner strength and feel truly
          confident in who you are, beyond just physical appearances. At Just
          Move, we believe movement is a powerful tool to transform not just
          your body but also your mindset and outlook on life. We are more than
          just workouts—we are a supportive, inclusive community focused on
          redefining what it means to live a healthy, fulfilling life. Here, we
          celebrate progress over perfection, self-love over comparison, and the
          joy that comes from embracing a balanced, empowered lifestyle.
        </p>
      </div>
      <div>
        <Image src={aboutImage} alt="about image" />
      </div>
    </div>
  );
};

export default About;
