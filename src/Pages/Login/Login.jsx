import React from "react";
import "./Login.css";

import { Link, useNavigate } from "react-router-dom";

const Login = ({ signup, setSignup }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSignup(!signup);
    navigate("/");
  };

  return (
    <div className="Login">
      <div className="Login__wrapper">
        <div className="Login__top">
          <h2>Welcome To Food's Restaurant</h2>
          <p>Login to your account</p>
        </div>
        <div className="Login__center">
          <form onSubmit={(e) => handleSubmit(e)}>
            <input type={"email"} placeholder="Enter email" required />

            <input type={"password"} placeholder="Enter password" required />
            <button className="Login__btn" type="submit">
              Login
            </button>
          </form>
        </div>
        <div className="Login__bottom">
          <p>
            Not Registered?{" "}
            <span
              style={{ cursor: "pointer", color: "#ed2f09", fontWeight: 600 }}
            >
              <Link
                to={"/signup"}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {" "}
                SignUp
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
