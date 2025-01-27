"use client";

import React from "react";
import PrimaryButton from "../shared/shared-button/PrimaryButton";
import { SubmitHandler, useForm } from "react-hook-form";
import { IFormInput } from "@/types/formInput";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
// import { useRouter } from "next/navigation";
// import { toast } from "sonner";

const SignupPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<IFormInput>();

  //   const router = useRouter();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log(data);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // const { confirmPassword, ...filteredData } = data;
    // try {
    //   const res = await createUser(filteredData).unwrap();
    //   if (res.success === true) {
    //     toast(res.message);
    //     router.push("/login");
    //   }
    //   // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // } catch (error) {}
  };
  return (
    <div className="md:w-[636px]">
      <div className="grid gap-6">
        <h1 className="text-5xl font-bold leading-[57px] capitalize text-black">
          Sign Up
        </h1>
        <p className=" font-medium leading-5 capitalize text-base">
          join our 100% free creative network
        </p>
      </div>
      <div className="mb-4 mt-11">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-6">
            <div className="grid gap-4">
              <label
                htmlFor="name"
                className="block text-left font-bold leading-5 text-base"
              >
                Name*
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full border border-black2/20 rounded-lg px-5 py-[22px] text-black2 font-bold placeholder:text-black2"
                {...register("name", { required: "Name is required" })}
              />
              {errors?.name?.message && (
                <p className="text-red-500 text-sm text-left">
                  {errors?.name?.message}*
                </p>
              )}
            </div>
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
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Enter your password"
                  className="w-full border border-black2/20 rounded-lg px-5 py-[22px] text-black2 font-bold placeholder:text-black2"
                  {...register("password", {
                    required: "Password is required",
                    minLength: 6,
                  })}
                />

                <button
                  className="absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 transform"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <Eye className="h-4 w-4" />
                  ) : (
                    <EyeOff className="h-4 w-4" />
                  )}
                  <span className="sr-only">
                    {showPassword ? "Hide password" : "Show password"}
                  </span>
                </button>
              </div>
              {errors?.password && (
                <p className="text-red-500 text-sm text-left">
                  {errors?.password?.message}*
                </p>
              )}
            </div>
            <div className="grid gap-4">
              <label
                htmlFor="confirmPassword"
                className="block text-left font-bold leading-5 text-base"
              >
                Confirm Password*
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  className="w-full border border-black2/20 rounded-lg px-5 py-[22px] text-black2 font-bold placeholder:text-black2"
                  {...register("confirmPassword", {
                    required: "Confirm Password is required",
                    validate: (value) =>
                      value === getValues("password") ||
                      "Passwords do not match",
                  })}
                />

                <button
                  className="absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 transform"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <Eye className="h-4 w-4" />
                  ) : (
                    <EyeOff className="h-4 w-4" />
                  )}
                  <span className="sr-only">
                    {showConfirmPassword ? "Hide password" : "Show password"}
                  </span>
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm text-left">
                  {errors?.confirmPassword?.message}*
                </p>
              )}
            </div>
          </div>
          <PrimaryButton
            className="font-bold leading-5 text-black mt-10 w-full"
            text="Sign Up"
            type="submit"
          />
        </form>
      </div>
      <Link
        href="/login"
        className="text-black2 leading-5 font-medium text-base"
      >
        Already have an account? <span className="font-bold">log in</span>
      </Link>
    </div>
  );
};

export default SignupPage;
