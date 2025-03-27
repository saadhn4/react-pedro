import React, { useState } from "react";

const Four = () => {
  const [color, setColor] = useState("black");

  const changeColor = () => {
    setColor(color === "black" ? "red" : "black");
  };
  return (
    <div>
      <h1 style={{ color }}>HI I AM TEXT</h1>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
};

export default Four;
