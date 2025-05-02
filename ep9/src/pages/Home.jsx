import React from "react";
import { useContext } from "react";
import { userContext } from "../App";
const Home = () => {
  const { user } = useContext(userContext);
  return (
    <div>
      <h1>This Is Home Page And User Is: {user}</h1>
    </div>
  );
};

export default Home;
