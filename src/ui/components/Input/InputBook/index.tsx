interface InputBookProps {
  type: "text" | "date" | "number" | "email" | "time";
  name?: undefined | string;
  placeholder?: undefined | string;
  border?: "dark";
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputBook = ({
  type,
  required,
  name,
  placeholder,
  onChange,
  border,
}: InputBookProps) => {
  return (
    <input
      type={type}
      name={name}
      required={required}
      placeholder={placeholder}
      onChange={onChange}
      className={`border ${
        border ? "border-darkBg text-darkBg" : "border-fontColor text-fontColor"
      } px-4 py-2 bg-transparent `}
    />
  );
};

export default InputBook;
