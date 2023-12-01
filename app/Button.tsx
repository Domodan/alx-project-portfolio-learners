"use client";
import React from "react";
type Props = {
  styles: string;
  children: React.ReactNode;
  handleClick?: () => void;
  type?: "submit" | "button";
  isDisabled?: boolean;
};
const Button = ({
  styles,
  children,
  handleClick,
  type = "button",
  isDisabled,
}: Props) => {
  return (
    <button
      className={`rounded px-1 sm:px-5 py-2 ${styles}`}
      onClick={handleClick}
      type={type}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;
