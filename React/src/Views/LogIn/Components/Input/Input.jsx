import React from "react";

const Input = ({ props, handleChange }) => {
  return (
    <>
      <input
        name={props.name}
        placeholder={props.placeholder}
        type={props.type}
        onChange={(e) => handleChange(e.target.name, e.target.value)}
      />
    </>
  );
};

export default Input;