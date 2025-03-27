import React, { useState } from "react";

const Exercise = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  const handleZero = () => {
    setCount(0);
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Exercise</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleZero}>Set To Zero</button>
    </div>
  );
};

export default Exercise;
