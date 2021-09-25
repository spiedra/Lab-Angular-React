import React, { useState } from "react";

// Components
import Label from "./Components/Label/Label";
import Title from "./Components/Title/Title";
import Input from "./Components/Input/Input";

// Style
import "./Login.css";
import Button from "./Components/Button/Button";
import { useHistory } from "react-router-dom";

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleChange = (name, value) => {
    if (name === "userName") {
      setUser(value);
    } else {
      setPassword(value);
    }

    console.log("Name: " + user + " value: " + password);
  };

  const handleSubmit = () => {
    history.push("/home/" + user);
  };

  return (
    <>
      <div className="main-container">
        <Title text="Login" />
        <Label text="User name" />
        <Input
          props={{
            name: "userName",
            placeholder: "Enter your user name",
            type: "text",
          }}
          handleChange={handleChange}
        />
        <Label text="Password" />
        <Input
          props={{
            name: "password",
            placeholder: "Enter your password",
            type: "password",
          }}
          handleChange={handleChange}
        />
        <Button text="Ok" handleSubmit={handleSubmit} />
      </div>
    </>
  );
}

export default Login;
