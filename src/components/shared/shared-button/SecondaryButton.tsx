import React from "react";

interface ScondaryButtonProps {
  className?: string;
  text: string;
}

const ScondaryButton: React.FC<ScondaryButtonProps> = ({ className, text }) => {
  return (
    <div
      className={`py-5 rounded-lg leading-5 uppercase text-white bg-secondary ${className}`}
    >
      {text}
    </div>
  );
};

export default ScondaryButton;
