import React from "react";
import clsx from "clsx";

interface ButtonProps {
  title: string;
  addStyle?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  title,
  addStyle,
  onClick,
  type = "button"
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        "bg-sky-500 hover:bg-sky-600 active:scale-95 px-6 py-2.5 rounded-full focus:outline-none focus:ring-4 focus:ring-sky-200 font-[Montserrat] font-semibold text-white text-sm text-center transition shadow-md shadow-sky-500/20 cursor-pointer",
        addStyle
      )}
    >
      {title}
    </button>
  );
};

export default Button;
