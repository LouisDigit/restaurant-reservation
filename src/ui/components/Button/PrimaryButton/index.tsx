import React from "react";

interface PrimaryButtonProps {
  text: null | string;
  bgColor?: null | string;
  bgColorHover?: null | string;
  fontColor?: null | string;
  borderColor?: null | string;
  borderColorHover?: null | string;
}

const PrimaryButton = ({
  text,
  bgColor,
  bgColorHover,
  fontColor,
  borderColor,
  borderColorHover,
}: PrimaryButtonProps) => {
  return (
    <button
      className={`${bgColor ? bgColor : "bg-primaryColor"} ${
        bgColorHover ? bgColorHover : "hover:bg-fontColor"
      } ${fontColor ? fontColor : "text-darkBg"} ${
        borderColor ? borderColor : "border-primaryColor"
      } ${
        borderColorHover ? borderColorHover : ""
      } px-8 py-3 h-14  ease-in-out duration-300 border whitespace-nowrap  w-fit font-serif font-medium`}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
