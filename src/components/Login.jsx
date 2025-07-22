import React from "react";
import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a927b1ee-784d-494a-aa80-cf7a062d2523/web/IN-en-20250714-TRIFECTA-perspective_5acb7337-c372-45ec-ae12-ddb110e6ad78_medium.jpg"
          alt="background"
        />
      </div>
      <form className="absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white opacity-80 rounded-xs">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 w-full bg-gray-400 rounded-xs"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-2 w-full bg-gray-400 rounded-xs"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full bg-gray-400 rounded-xs"
        />
        <button className="p-4 my-4 w-full bg-red-700 rounded-xs">
          Sign In
        </button>
        <p className="text-gray-500">
          {isSignInForm ? "New to Netflix? " : "Already registered? "}
          <b
            className="text-white hover:underline cursor-pointer"
            onClick={() => setIsSignInForm((prev) => !prev)}
          >
            {isSignInForm ? "Sign up now" : "Sign In now"}
          </b>
        </p>
      </form>
    </div>
  );
};

export default Login;
