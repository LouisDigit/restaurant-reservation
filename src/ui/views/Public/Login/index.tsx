import React, { useEffect, useState } from "react";
import Input from "../../../components/Input/Input";
import { LoginCredentials } from "../../../../domain/entities/auth-types";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../..";
import { useAppDispatch } from "../../../../store/hooks";
import { useAppSelector } from "../../../../store/hooks";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { signIn } from "../../../../domain/usecases/auth-slice";
import { isUserAuthenticatedSelector } from "../../../../domain/usecases/auth-slice";
import { authLoading } from "../../../../domain/usecases/auth-slice";
import { authError } from "../../../../domain/usecases/auth-slice";
import SecondaryButton from "../../../components/Button/SecondaryButton";
import logo from "./../../../../assets/LandingPage/restaurant-logo.svg";

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authenticated = useAppSelector(isUserAuthenticatedSelector);
  const loading = useAppSelector(authLoading);
  const error = useAppSelector(authError);

  const [userLogin, setUserLogin] = useState<LoginCredentials>({
    email: "",
    password: "",
  });
  const [enabledButton, setEnabledButton] = useState<boolean>(false);

  useEffect(() => {
    if (userLogin.email !== "" && userLogin.password !== "") {
      setEnabledButton(false);
    } else {
      setEnabledButton(true);
    }
  }, [userLogin, authenticated, loading]);

  const handleLabelFocus = (
    event: React.MouseEvent<HTMLLabelElement, MouseEvent>
  ) => {
    const htmlForValue = event.currentTarget.getAttribute("for");
    const inputElement = document.querySelector(
      `input[name="${htmlForValue}"]`
    ) as HTMLInputElement;

    if (inputElement) {
      inputElement.focus();
    }
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserLogin((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(signIn(userLogin));
  };

  if (authenticated) {
    navigate("/");
  }

  return (
    <>
      <section className="w-full py-16 bg-cover flex justify-center items-center bg-white">
        {loading ? (
          <div className="loader-content">
            <div className="spinner"></div>
          </div>
        ) : (
          <div className="flex flex-col rounded-lg items-center sm:px-5 md:px-0 w-full">
            <Link to="/">
              <img src={logo} alt="logo_la_note" className="w-32" />
            </Link>

            <h1 className="text-3xl font-semibold">
              Log in to your admin account
            </h1>
            <h6 className="text-md font-light my-5">
              Welcome back! Please enter your details.
            </h6>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 px-5 py-3 sm:w-full lg:w-[26rem] w-full"
            >
              {error ? (
                <span className="text-fontColor bg-error text-center py-2 rounded-lg">
                  {error.toString()}
                </span>
              ) : (
                <></>
              )}
              <Input
                type="email"
                id="email"
                onLabelClick={handleLabelFocus}
                onChange={handleInput}
                label="Email"
                placeholder="Enter your email"
                name="email"
                required={true}
              />
              <div className="flex flex-col">
                <Input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  onLabelClick={handleLabelFocus}
                  label="Password"
                  onChange={handleInput}
                  name="password"
                  required={true}
                />
              </div>

              <SecondaryButton
                text="Sign In"
                type="submit"
                disabled={enabledButton}
              />
            </form>
          </div>
        )}
      </section>
    </>
  );
};

export default Login;
