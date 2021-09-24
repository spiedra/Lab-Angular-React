import React from "react";
import { useParams } from "react-router";

const Home = () => {
  const { userName } = useParams();
  return (
    <>
      <h1>Welcome {userName}!</h1>
    </>
  );
};

export default Home;
