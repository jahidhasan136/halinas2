import Image from "next/image";
import React from "react";
import classImg from "@/assets/class.svg";
import classOverlay from "@/assets/class-overlay.svg";

const ClassCard = () => {
  return (
    <div className="relative w-[282px] h-[252px] rounded-2xl mx-auto">
      <Image
        width={282}
        height={252}
        src={classImg}
        alt="Yoga Class"
        className="rounded-2xl"
      />
      <Image
        width={282}
        height={252}
        src={classOverlay}
        alt="Overlay Image"
        className="absolute top-0 rounded-2xl"
      />
      <div className="absolute top-0 text-white grid place-content-between h-full p-5">
        <p className="font-medium leading-5 text-base capitalize">28:20</p>
        <div className="grid gap-2">
          <p className="font-medium leading-5 capitalize text-base">
            Beginner | Kaisa
          </p>
          <h3 className="font-bold leading-5 text-lg capitalize">
            No Weights, No problem
          </h3>
          <p className="font-medium leading-5 capitalize text-base">
            Mobility | Strenth
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
