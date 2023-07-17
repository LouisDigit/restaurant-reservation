interface TextAreaProps {
  name?: undefined | string;
  placeholder?: undefined | string;
  border?: "dark";
}

const TextArea = ({ name, placeholder, border }: TextAreaProps) => {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      className={`border ${
        border ? "border-darkBg text-darkBg" : "border-fontColor text-fontColor"
      } px-4 py-2 bg-transparent`}
    />
  );
};

export default TextArea;
