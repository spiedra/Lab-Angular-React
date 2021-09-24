import React from "react";
import "./Button.css";

const Button = ({ text, handleSubmit }) => {
  return (
    <>
      <button className="component-btn" type="button" onClick={handleSubmit}>
        {text}
      </button>
    </>
  );
};

export default Button;
