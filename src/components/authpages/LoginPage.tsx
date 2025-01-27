"use client";

import { IFormInput } from "@/types/formInput";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import PrimaryButton from "../shared/shared-button/PrimaryButton";
import Link from "next/link";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  //   const router = useRouter();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log(data);
    // try {
    //   const res = await signIn(data).unwrap();
    //   console.log(res);
    //   if (res.success === true) {
    //     dispatch(setUser(res));
    //     // Optionally store token if needed
    //     if (res?.data?.accessToken) {
    //       localStorage.setItem("accessToken", res?.data?.accessToken);
    //       Cookies.set("accessToken", res?.data?.accessToken, { expires: 7 });
    //     }

    //     toast.success("Login successful!");
    //     router.push("/");
    //   } else {
    //     console.log(res);
    //     toast.error(res?.status || "An error occurred");
    //   }
    // } catch (error: any) {
    //   if (
    //     error?.data?.err?.statusCode === 400 &&
    //     error?.data?.message ===
    //       "OTP verification send on your email. Check your email address."
    //   ) {
    //     router.push("/email-verify");
    //     localStorage.setItem("email", data.email); // Save email to localStorage
    //     toast.error("Please check your email to verify");
    //   }
    // }
  };
  return (
    <div className="md:w-[636px]">
      <div className="grid gap-6">
        <h1 className="text-5xl font-bold leading-[57px] capitalize text-black">
          Login
        </h1>
        <p className=" font-medium leading-5 capitalize text-base">
          enter your account
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
            <div className="grid gap-4">
              <label
                htmlFor="password"
                className="block text-left font-bold leading-5 text-base"
              >
                Password*
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full border border-black2/20 rounded-lg px-5 py-[22px] text-black2 font-bold placeholder:text-black2"
                {...register("password", {
                  required: "Password is required",
                  minLength: 6,
                })}
              />
              {errors?.password && (
                <p className="text-red-500 text-sm text-left">
                  {errors?.password?.message}*
                </p>
              )}
            </div>
          </div>
          <PrimaryButton
            className="font-bold leading-5 text-black mt-10"
            text="Login"
            type="submit"
          />
        </form>
      </div>
      <Link
        href="/signup"
        className="text-black2 leading-5 font-medium text-base"
      >
        Already have an account? <span className="font-bold">Sign Up</span>
      </Link>
    </div>
  );
};

export default LoginPage;
