import PrimaryButton from "../../../components/Button/PrimaryButton";
import errorImage from "./../../../../assets/Error/ErrorImage.png";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/");
  };
  return (
    <section className="flex flex-col gap-5 justify-center items-center py-16">
      <h1 className="text-[16rem] flex items-center gap-3">
        4 <img src={errorImage} alt="error" className="w-[225px] h-[225px]" />4
      </h1>
      <h2 className="font-serif text-3xl">
        Whoops, Nothing delicious to find here!
      </h2>
      <p className="text-sm">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <PrimaryButton onClick={handleRedirect} text="Back to Home" />
    </section>
  );
};

export default Error;
