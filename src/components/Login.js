import React, { useRef, useState } from "react";
import Header from "./Header";
import { NETFLIX_BG } from "../utils/photo_constant";
import { validateLoginForm } from "../utils/ValidateLoginForm";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/fireBase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const toogleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  const handleLogin = () => {
    const errorMessage = validateLoginForm(
      isSignIn ? "" : name.current.value,
      email.current.value,
      password.current.value,
      isSignIn
    );
    console.log(errorMessage);
    setErrorMessage(errorMessage);
    if (errorMessage) return;
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log("Account created:", user);
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName }));
              navigate("/browse");
            })
            .catch((error) => {});
        })
        .catch((error) => {
          setErrorMessage(error.code + " " + error.message);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          navigate("/browse");
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    }
  };
  return (
    <div>
      <Header />
      <img
        src={NETFLIX_BG}
        alt="background"
        className="absolute h-full w-full"
      />
      <div className="z-30 bg-[rgba(0,0,0,0.8)] w-3/12 absolute p-8 my-40 mx-auto left-0 right-0">
        <p className="text-white font-bold text-3xl pb-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </p>
        <form onSubmit={(e) => e.preventDefault()}>
          {!isSignIn && (
            <input
              ref={name}
              type="text"
              placeholder="Name"
              className="my-4 w-full p-3 bg-transparent border border-gray-400 rounded-md text-white"
            />
          )}
          <input
            ref={email}
            type="email"
            placeholder="Email"
            className="my-4 w-full p-3 bg-transparent border border-gray-400 rounded-md text-white"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="my-4 w-full p-3 bg-transparent border border-gray-400 rounded-md text-white"
          />
          <button
            className="my-4 w-full p-3 bg-red-500 rounded-md text-white font-bold"
            onClick={handleLogin}
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
        </form>
        {errorMessage && (
          <p className="text-red-500 font-bold">{errorMessage}</p>
        )}
        {isSignIn ? (
          <p className="text-gray-300 my-4">
            New to Netflix?{" "}
            <span
              className="text-white cursor-pointer hover:underline"
              onClick={toogleSignIn}
            >
              Sign up now.
            </span>
          </p>
        ) : (
          <p className="text-gray-300 my-4">
            Already have account?{" "}
            <span
              className="text-white cursor-pointer hover:underline"
              onClick={toogleSignIn}
            >
              Sign In now.
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
