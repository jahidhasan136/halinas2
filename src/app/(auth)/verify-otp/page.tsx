import OtpVerify from "@/components/authpages/OtpVerify";
import React from "react";

const page = () => {
  return (
    <div className="container grid place-content-center items-center text-center min-h-screen pt-10 2xl:pt-0 pb-[60px] 2xl:pb-0">
      <OtpVerify />
    </div>
  );
};

export default page;