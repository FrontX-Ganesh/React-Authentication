/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import style from "./Login.module.css";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const userNameRef = useRef("");
  const passWordRef = useRef("");
  const [error, setError] = useState(undefined);
  const {
    state: { fromPage },
  } = useLocation();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (
      userNameRef.current.value === "ganesh" &&
      passWordRef.current.value === "ganesh"
    ) {
      localStorage.setItem("login", true);
      !fromPage ? navigate("/hello-ganesh") : navigate(`${fromPage}`);
    } else {
      setError("Invalid username or password");
    }
  };
  return (
    <>
      <form>
        <input
          ref={userNameRef}
          type="text"
          id="username"
          className={`${style.usernameInput}`}
          placeholder="Enter Username"
        />
        <input
          ref={passWordRef}
          type="password"
          id="password"
          className={`${style.passwordInput}`}
          placeholder="Enter Password"
        />
        <button className={`${style.submitButton}`} onClick={handleFormSubmit}>
          Submit
        </button>
        {error && <p className={`${style.error}`}>{error}</p>}
      </form>
    </>
  );
};

export default Login;
