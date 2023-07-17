interface InputBookProps {
  type: "text" | "date" | "number";
  name?: undefined | string;
  placeholder?: undefined | string;
  border?: "dark";
}

const InputBook = ({ type, name, placeholder, border }: InputBookProps) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={`border ${
        border ? "border-darkBg text-darkBg" : "border-fontColor text-fontColor"
      } px-4 py-2 bg-transparent `}
    />
  );
};

export default InputBook;
