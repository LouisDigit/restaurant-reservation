interface SuccessMessageProps {
  text: string;
}

const SuccessMessage = ({ text }: SuccessMessageProps) => {
  return (
    <p className="text-success border border-success rounded-full px-5 py-2 w-fit hover:bg-success mx-auto hover:text-fontColor ease-in-out duration-150">
      {text}
    </p>
  );
};

export default SuccessMessage;
