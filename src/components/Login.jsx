import React, { useRef } from "react";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { checkSignInFormValidation } from "../utils/validations";
import Header from "./Header";
import { DEFAULT_BACKGROUND, IMAGE_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const email = useRef(null);
  const password = useRef(null);
  const displayName = useRef(null);

  const handleButtonClick = () => {
    const message = checkSignInFormValidation(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;
    if (!isSignInForm) {
      // Sign up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          // console.log(user);
          updateProfile(user, {
            displayName: displayName.current.value,
            photoURL: IMAGE_AVATAR,
          })
            .then(() => {})
            .catch((error) => {
              setErrorMessage(error.errorMessage);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {})
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={DEFAULT_BACKGROUND} alt="background" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white opacity-80 rounded-xs"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={displayName}
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 w-full bg-gray-400 rounded-xs"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 my-2 w-full bg-gray-400 rounded-xs"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full bg-gray-400 rounded-xs"
        />
        {errorMessage && (
          <h3 className="text-red-500 font-bold">{errorMessage}</h3>
        )}
        <button
          type="submit"
          className="p-4 my-4 w-full bg-red-700 rounded-xs"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
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
