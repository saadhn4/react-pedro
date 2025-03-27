import React, { useState } from "react";

const Three = () => {
  const [showText, setShowText] = useState(true);

  const toggleText = () => {
    if (showText) {
      setShowText(false);
    } else {
      setShowText(true);
    }
  };
  return (
    <div>
      {showText && <h1>HI MY NAME IS SAAD</h1>}
      <button onClick={toggleText}>Show/Hide</button>
    </div>
  );
};

export default Three;
