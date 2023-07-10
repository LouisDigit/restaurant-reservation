import React from "react";

interface InputBookProps {
  type: "text" | "date" | "number";
  name?: undefined | string;
  placeholder?: undefined | string;
}

const InputBook = ({ type, name, placeholder }: InputBookProps) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="border border-fontColor px-4 py-2 bg-transparent text-fontColor"
    />
  );
};

export default InputBook;