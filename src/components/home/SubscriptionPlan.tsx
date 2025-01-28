import React from "react";
import PrimaryButton from "../shared/shared-button/PrimaryButton";

const SubscriptionPlan = () => {
  return (
    <div className="container text-center mt-[30px] grid gap-11">
      <div className="grid gap-6">
        <h1 className="text-3xl md:text-5xl font-extrabold md:leading-[57px] text-black capitalize tracking-[0.48px]">
          at home workouts for every fitness level
        </h1>
        <p className="text-base leading-[25px] capitalize">
          Unlock Limitless Workouts – Strength, Mobility, and Cardio Sessions
          with Kaisa’s Elite Coaching Team
        </p>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mx-auto">
        <div className="w-[350px] lg:w-[384px] h-[313px] p-5 shadow-shadowMd rounded-2xl">
          <h4 className="uppercase text-2xl font-medium leading-7 text-black2 mb-4">
            Plan 2
          </h4>
          <h2 className="text-5xl font-semibold leading-[48px] capitalize mb-5">
            Monthly
          </h2>
          <h3 className="text-[32px] font-extrabold uppercase leading-[38px] text-black mb-3">
            $<span>20</span>
          </h3>
          <p className="capitalize font-bold text-base text-black2 leading-5 mb-10">
            USD, Billed Monthly
          </p>
          <PrimaryButton
            className="w-full font-bold leading-5"
            text="Buy Now"
          />
        </div>
        <div className="w-[350px] lg:w-[384px] h-[313px] p-5 shadow-shadowMd rounded-2xl">
          <h4 className="uppercase text-2xl font-medium leading-7 text-black2 mb-4">
            Plan 2
          </h4>
          <h2 className="text-5xl font-semibold leading-[48px] capitalize mb-5">
            Monthly
          </h2>
          <h3 className="text-[32px] font-extrabold uppercase leading-[38px] text-black mb-3">
            $<span>20</span>
          </h3>
          <p className="capitalize font-bold text-base text-black2 leading-5 mb-10">
            USD, Billed Monthly
          </p>
          <PrimaryButton
            className="w-full font-bold leading-5"
            text="Buy Now"
          />
        </div>
        <div className="w-[350px] lg:w-[384px] h-[313px] p-5 shadow-shadowMd rounded-2xl">
          <h4 className="uppercase text-2xl font-medium leading-7 text-black2 mb-4">
            Plan 2
          </h4>
          <h2 className="text-5xl font-semibold leading-[48px] capitalize mb-5">
            Monthly
          </h2>
          <h3 className="text-[32px] font-extrabold uppercase leading-[38px] text-black mb-3">
            $<span>20</span>
          </h3>
          <p className="capitalize font-bold text-base text-black2 leading-5 mb-10">
            USD, Billed Monthly
          </p>
          <PrimaryButton
            className="w-full font-bold leading-5"
            text="Buy Now"
          />
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlan;
