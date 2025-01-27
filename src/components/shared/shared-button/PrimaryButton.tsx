import React from "react";

interface PrimaryButtonProps {
  className?: string;
  text: string;
  isLoading?: boolean;
  type?: "submit" | "button" | "reset";
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  className,
  text,
  isLoading = false,
  type = "button",
}) => {
  return (
    <button
      className={`cursor-pointer py-2 md:py-5 rounded-lg leading-5 uppercase text-black bg-primary hover:bg-white border border-primary transition-all duration-300 ${className}`}
      type={type}
      disabled={isLoading}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
