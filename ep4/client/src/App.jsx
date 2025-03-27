import React, { useState } from "react";
import Two from "./Two";
import Three from "./Three";
import Four from "./Four";
import Exercise from "./Exercise";
const App = () => {
  const [age, setAge] = useState(0);
  const increaseAge = () => {
    setAge(age + 1);
    console.log(age);
  };
  return (
    <div className="App">
      {age}
      <button onClick={increaseAge}>Increase</button>
      <hr />
      <Two />
      <hr />
      <Three />
      <hr />
      <Four />
      <hr />
      <Exercise />
    </div>
  );
};

export default App;
