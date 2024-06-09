import React from "react";
import "./Login.css";
const Login = () => {
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
          <input type="text" className="input-field" />
          <label className="input-label">Password</label>
          <input type="password" className="input-field" />
        </div>
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
