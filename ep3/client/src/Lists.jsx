import React from "react";

const Lists = () => {
  const names = ["Saad", "Suha", "Sheza", "Ayaan", "Raihan","Lukas"];
  return (
    <div>
      <h1>Lists</h1>
      {names.map((name, key) => {
        return <h1 key={key}>{name}</h1>;
      })}
    </div>
  );
};

export default Lists;
