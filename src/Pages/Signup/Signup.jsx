import React from "react";
import "./Signup.css";

import { Link, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    navigate("/login");
  };

  return (
    <div className="signup">
      <div className="signup__wrapper" alt="vector1">
        <div className="signup__top">
          <h2>Welcome To Food's Restaurant</h2>
          <p>create a new account</p>
        </div>
        <div className="signup__center">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type={"text"}
              placeholder="Enter Full name"
              {...register("fullName", { required: true, maxLength: 14 })}
            />
            {errors.fullName && <p>Full name should be less than 8 chracter</p>}
            <input
              type={"email"}
              placeholder="Enter email"
              {...register("email", {
                required: true,
                pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\w{2,3})+$/,
              })}
            />
            {errors.email && <p>Please check the email</p>}
            <input
              type={"password"}
              placeholder="Create New password (min 8 - max 14 || Abcd1234)"
              {...register("password", {
                required: true,
                pattern: /^[A-Za-z]\w{7,14}$/,
              })}
            />
            {errors.password && <p>Please check the Password</p>}
            <button type="submit" className="signup__btn">
              signup
            </button>
          </form>
          <p className="signup__policy">
            By continuing, you agree to our{" "}
            <span style={{ cursor: "pointer", color: "#c9c2f6" }}>
              {" "}
              Terms of Service
            </span>{" "}
            <br />
            and{" "}
            <span style={{ cursor: "pointer", color: "#c9c2f6" }}>
              Privacy policy
            </span>
            .
          </p>
        </div>
        <div className="signup__bottom">
          <p>
            Already a member?{" "}
            <span
              style={{ cursor: "pointer", color: "#ed2f09", fontWeight: 600 }}
            >
              <Link
                to={"/login"}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {" "}
                Log in
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
