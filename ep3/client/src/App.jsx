import React, { useDeferredValue } from "react";
import "./App.css";
import Lists from "./Lists";
import Users from "./Users";
import Exercise from "./Exercise";

const App = () => {
  const age = 17;
  const isGreen = true;

  const users = [
    {
      name: "Jake",
      age: 21,
    },
    {
      name: "Pedro",
      age: 20,
    },
  ];

  return (
    <div className="App">
      {age >= 18 ? <h1>Over age</h1> : <h1>Underage</h1>}
      <h1 style={{ color: isGreen ? "green" : "red" }}>This has color</h1>

      {/* only appears since isGreen is true right now  */}
      {isGreen && <h1>Right now isGreen is True</h1>}
      {!isGreen && <h1>Right now isGreen is false</h1>}
      <hr />
      <Lists />
      <hr />
      <h1>Mapping</h1>
      {users.map((user, key) => {
        return <Users name={user.name} age={user.age} />;
      })}
      <hr />
      <h1>Exercise</h1>
      <Exercise />
    </div>
  );
};

export default App;
