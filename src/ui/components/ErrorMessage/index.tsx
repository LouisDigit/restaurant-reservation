import React from "react";

interface ErrorMessageProps {
  text: string;
}

const ErrorMessage = ({ text }: ErrorMessageProps) => {
  return (
    <p className="text-error border border-error rounded-full px-5 py-2 w-fit hover:bg-error hover:text-fontColor ease-in-out duration-150">
      {text}
    </p>
  );
};

export default ErrorMessage;
