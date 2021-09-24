import React from "react";

const Label = (props) => {
  // Otra manera de pasar propiedades a componentes
  const { text } = props;
  return (
    <>
      <label>{text}</label>
    </>
  );
};

export default Label;
