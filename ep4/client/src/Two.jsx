import React, { useState } from "react";

const Two = () => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => {
    // event.target.value targets whatever im writing inside the input field
    setInputValue(event.target.value);
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Working with inputs</h1>
      <input type="text" onChange={handleChange} />
      <p>You typed: {inputValue}</p>
    </div>
  );
};

export default Two;
