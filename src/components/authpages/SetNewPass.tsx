"use client";

import React, { useState } from "react";
import PrimaryButton from "../shared/shared-button/PrimaryButton";
import { SubmitHandler, useForm } from "react-hook-form";
import { IFormInput } from "@/types/formInput";
import { Eye, EyeOff } from "lucide-react";

const SetNewPass = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log(data);
  };
  return (
    <div className="md:w-[636px]">
      <div className="grid gap-6">
        <h1 className="text-5xl font-bold leading-[57px] capitalize text-black">
          Change new password
        </h1>
        <p className=" font-medium leading-5 capitalize text-base">
          Enter a different password with the previous!
        </p>
      </div>
      <div className="mb-4 mt-11">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-6">
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
            text="Reset Password"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default SetNewPass;
