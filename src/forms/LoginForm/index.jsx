import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginFormSchema from "./validation";
import { useFormik } from "formik";

// Logos
import googleLogo from "../../assets/logos/google.png";
import microsoftLogo from "../../assets/logos/microsoft.png";
import facebookLogo from "../../assets/logos/facebook.png";

function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const Router = useNavigate();

  // Remember me - state
  const [rememberMe, setRememberMe] = useState();

  const onSubmit = async (values, actions) => {
    setIsLoading(true);
    // TO-DO: Send API request to server
    await axios
      .post("", {
        email: values.email,
        password: values.password,
      })
      .then((res) => {})
      .catch((err) => {});
  };

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginFormSchema,
    onSubmit,
  });

  return (
    <form className="flex flex-col mt-10 items-center">
      <div className="w-full relative my-1 lg:w-1/4">
        {/* <label
          htmlFor="email"
          className="text-sm absolute left-0 text-solyntaYellow font-semibold"
        >
          Email Address
        </label> */}
        <input
          className="w-full h-16 bg-cosretBlue-300 px-8 text-black text-sm mt-7 focus:outline-none border-[2px] rounded-lg bg-transparent border-accountableGrey"
          id="email"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Email Address"
        />

        <p className="text-left mt-3 text-xs">
          {errors.email ? errors.email : ""}
        </p>
      </div>
      <div className="w-full relative my-1 lg:w-1/4">
        {/* <label
          htmlFor="password"
          className="text-sm absolute left-0 text-solyntaYellow font-semibold"
        >
          Password
        </label> */}
        <input
          className="w-full h-16 bg-cosretBlue-300 px-8 text-black text-sm mt-7 focus:outline-none border-[2px] rounded-lg bg-transparent border-accountableGrey"
          id="password"
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          placeholder="Password"
        />

        <p className="text-left mt-3 text-xs">
          {errors.password ? errors.password : ""}
        </p>
      </div>

      {/* Action buttons */}
      <div className="w-full lg:w-1/4">
        <button
          className="h-12 px-7 py-2 w-full rounded-lg bg-accountableGrey text-white"
          onClick={() => {}}
        >
          Sign In
        </button>
        {/* Don't have an account? */}
        <p className="text-center mt-4">
          Don't have an account?{" "}
          <Link
            to="/auth/signup"
            className="text-accountableBrightGreen font-semibold"
          >
            Sign up
          </Link>
        </p>
      </div>

      <div className="flex items-center my-7">
        <hr className="bg-gray-500 border-none h-[0.5px] w-40" />
        <p className="bg-gray-300 p-1 text-gray-500">OR</p>
        <hr className="bg-gray-500 border-none h-[0.5px] w-40" />
      </div>

      <div className="w-full lg:w-1/4 flex flex-col gap-y-4">
        <button
          className="h-12 px-7 py-2 w-full rounded-lg bg-accountableDarkBlack flex items-center justify-center gap-x-3 text-white"
          onClick={() => {}}
        >
          <img src={googleLogo} alt="Sign in with Google" />
          <span>Sign In With Google</span>
        </button>
        <button
          className="h-12 px-7 py-2 w-full rounded-lg bg-accountableDarkBlack flex items-center justify-center gap-x-3 text-white"
          onClick={() => {}}
        >
          <img src={microsoftLogo} alt="Sign in with Google" />
          <span>Sign In With Microsoft</span>
        </button>
        <button
          className="h-12 px-7 py-2 w-full rounded-lg bg-accountableDarkBlack flex items-center justify-center gap-x-3 text-white"
          onClick={() => {}}
        >
          <img src={facebookLogo} alt="Sign in with Google" />
          <span>Sign In With Facebook</span>
        </button>
      </div>

      <small className="mt-4">
        Google{" "}
        <a
          href=""
          target="_blank"
          className="text-xs underline underline-offset-2"
        >
          Privacy Policy
        </a>{" "}
        and{" "}
        <a
          href=""
          target="_blank"
          className="text-xs underline underline-offset-2"
        >
          Terms of Service
        </a>{" "}
        apply
      </small>
    </form>
  );
}

export default LoginForm;
