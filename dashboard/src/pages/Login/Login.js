import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history("/");
    }
  }, []);
  async function login() {
    console.warn(email, password);
    let item = { email, password };
    let result = await fetch("https://restful-booker.herokuapp.com/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    result = result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    history("/");
  }
  return (
    <div className="cont">
      <div className="container">
        <div className="board">.Board</div>
      </div>
      <div className="right-side">
        <div className="sign-in-text">Sign In</div>
        <div className="subtext">Sign in to your account</div>
        <div className="button">Google Sign In</div>
        <div className="button">Sign in with Apple</div>
        <div className="login-form">
          <label className="input-label">Email address</label>
          <input
            type="text"
            className="input-field"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="input-label">Password</label>
          <input
            type="password"
            className="input-field"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        onClick={login}
        <div className="forgot-password">Forgot password?</div>
        <div className="sign-in-button">
          Sign In
          <p>dont have a account register here</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
