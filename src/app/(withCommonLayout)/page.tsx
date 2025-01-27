import About from "@/components/home/About";
import Banner from "@/components/home/Banner";
import FindClass from "@/components/home/FindClass";
import SubscriptionPlan from "@/components/home/SubscriptionPlan";
import React from "react";

const page = () => {
  return (
    <div>
      <Banner />
      <SubscriptionPlan />
      <FindClass />
      <About />
    </div>
  );
};

export default page;
