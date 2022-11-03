import React from "react";
import "./Button.css";

const Button = ({ text, bgColor, color }) => {
  return (
    <div className="btn__wrapper">
      <button
        className="btn"
        style={{ backgroundColor: `${bgColor}`, color: `${color}` }}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
