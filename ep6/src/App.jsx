import React, { useState } from "react";
import Text from "./Text";

const App = () => {
  const [showText, setShowText] = useState(false);
  const handleClick = () => setShowText(!showText);
  return (
    <div>
      <h1>Show text or nah?</h1>
      <button onClick={handleClick}>{showText ? "Hide" : "Show"}</button>
      <p>{showText && <Text/>}</p>
    </div>
  );
};

export default App;
