import React from "react";

interface PrimaryButtonProps {
  className?: string;
  text: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ className, text }) => {
  return (
    <div
      className={`py-5 rounded-lg leading-5 uppercase text-black bg-primary ${className}`}
    >
      {text}
    </div>
  );
};

export default PrimaryButton;
