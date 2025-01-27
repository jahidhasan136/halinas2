"use client";

import { Input } from "@/components/ui/input";
import { IFormInput } from "@/types/formInput";
// import { useVerifyUserMutation } from "@/redux/api/authApi";
// import { setUser } from "@/redux/slice/userSlice";
// import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import PrimaryButton from "../shared/shared-button/PrimaryButton";
// import { useDispatch } from "react-redux";
// import { toast } from "sonner";

const OtpVerify = () => {
  const [code, setCode] = useState<string[]>(Array(6).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  //   const [verifyUser, { isLoading }] = useVerifyUserMutation();
  //   const dispatch = useDispatch();
  //   const router = useRouter();

  const {
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async () => {
    // const verificationCode = code.join("");
    // if (!verificationCode || verificationCode.length !== 6) {
    //   toast("Please enter a valid verification code.");
    //   return;
    // }
    // const email = localStorage.getItem("email");
    // const filteredData = {
    //   otp: parseInt(verificationCode),
    //   email: email,
    // };
    // console.log("Form Data:", filteredData);
    // try {
    //   const res = await verifyUser(filteredData).unwrap();
    //   console.log(res);
    //   if (res?.success === true) {
    //     dispatch(setUser(res));
    //     toast(res?.message);
    //     // localStorage.removeItem("email");
    //     router.push("/login");
    //   }
    //   // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // } catch (error) {}
  };
  const handleChange = (index: number, value: string) => {
    if (value.length <= 1 && /^[0-9]*$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Auto-focus next input
      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    if (/^[0-9]*$/.test(pastedData)) {
      const newCode = [...code];
      pastedData.split("").forEach((char, index) => {
        if (index < 6) newCode[index] = char;
      });
      setCode(newCode);
      // Focus last input or next empty input
      const lastFilledIndex = newCode.findIndex((char) => !char);
      const focusIndex = lastFilledIndex === -1 ? 5 : lastFilledIndex;
      inputRefs.current[focusIndex]?.focus();
    }
  };
  return (
    <div className="text-center grid gap-8">
      <div className="grid gap-2">
        <h1 className="font-outfit text-3xl lg:text-4xl font-semibold leading-[43px] text-gray800 tracking-[0.72px]">
          Verify Email
        </h1>
        <p className="text-gray600 leading-[25px] capitalize text-base">
          Please check your email for a 6-Digit Verification Code
        </p>
      </div>
      <div className="flex items-center gap-6 mx-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="text-center space-x-4 flex justify-center items-center">
            {code.map((digit, index) => (
              <Input
                key={index}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                className="w-12 h-12 text-center text-lg font-semibold border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            ))}
            {errors.otp && (
              <p className="text-red-500 text-sm">{errors.otp.message}</p>
            )}
          </div>

          <PrimaryButton type="submit" className="w-full font-bold leading-5" text="Submit" />
        </form>
      </div>
    </div>
  );
};

export default OtpVerify;
