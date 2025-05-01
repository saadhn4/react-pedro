import React, { useState, useEffect, use } from "react";

const Text = () => {
  const [text, setText] = useState("");
  useEffect(() => {
    console.log("Component mounted");
    return () => {
      console.log("Component unmounted");
    };
  }, []);
  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <h1>{text}</h1>
    </>
  );
};

export default Text;
