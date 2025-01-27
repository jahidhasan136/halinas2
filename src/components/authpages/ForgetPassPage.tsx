"use client";

import PrimaryButton from "@/components/shared/shared-button/PrimaryButton";
import { IFormInput } from "@/types/formInput";
import Link from "next/link";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const ForgetPassPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log("Form Data:", data);
    // if (Object.keys(errors).length > 0) {
    //   console.log("Errors:", errors);
    // }
    // try {
    //   const res = await forgotPassword(data).unwrap();
    //   toast(res.message);
    //   if (res.success === true) {
    //     console.log(res);
    //     // router.push("/reset-password");
    //   }
    //   // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // } catch (error) {}
  };
  return (
    <div className="md:w-[636px]">
      <div className="grid gap-6">
        <h1 className="text-5xl font-bold leading-[57px] capitalize text-black">
          Forget Password
        </h1>
        <p className=" font-medium leading-5 capitalize text-base">
          Forget Your Password
        </p>
      </div>
      <div className="mb-4 mt-11">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-6">
            <div className="grid gap-4">
              <label
                htmlFor="email"
                className="block text-left font-bold leading-5 text-base"
              >
                Email*
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full border border-black2/20 rounded-lg px-5 py-[22px] text-black2 font-bold placeholder:text-black2"
                {...register("email", {
                  required: "Email is required",
                  pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                })}
              />
              {errors?.email && (
                <p className="text-red-500 text-sm text-left">
                  {errors?.email?.message}*
                </p>
              )}
            </div>

            <Link
              href="/signup"
              className="text-black2 leading-5 font-medium text-base text-left"
            >
              Remember the password? <span className="font-bold">Sign Up</span>
            </Link>
          </div>
          <PrimaryButton
            className="font-bold leading-5 text-black mt-10"
            text="Send Code"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default ForgetPassPage;
