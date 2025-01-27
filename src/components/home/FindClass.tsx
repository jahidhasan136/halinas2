import React from "react";
import ClassCard from "../allCards/ClassCard";

const FindClass = () => {
  return (
    <div className="container mt-[60px] lg:mt-[120px]">
      <div className="flex justify-between items-center">
        <h2 className="text-black text-5xl font-extrabold leading-[57px] capitalize">
          Find A Class
        </h2>
        <p className="text-black2 text-base leading-[25px] capitalize">
          A healthy body is a body that feels capable, energized, and ready for
          anything, not one <br /> that fits a mold.
        </p>
      </div>
      <div className="mt-11 flex items-center gap-6">
        <ClassCard />
        <ClassCard />
        <ClassCard />
        <ClassCard />
      </div>
    </div>
  );
};

export default FindClass;
