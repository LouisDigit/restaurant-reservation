interface SecondaryButtonProps {
  text: string;
  onClick?: () => void;
  type: "button" | "submit" | "reset" | undefined;
  disabled?: boolean | undefined;
  cssClass?: string;
}

const SecondaryButton = ({
  text,
  onClick,
  cssClass,
  type,
  disabled,
}: SecondaryButtonProps) => {
  const buttonClasses = `${
    cssClass ? cssClass : ""
  } px-4 py-2   flex gap-3 items-center justify-center  ${
    disabled
      ? "bg-darkBg border-darkBg text-fontColor cursor-not-allowed  "
      : "border text-black bg-primaryColor border-primaryColor hover:bg-gray-100"
  }`;
  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonClasses}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default SecondaryButton;
