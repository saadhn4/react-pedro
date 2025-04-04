import React from "react";

const Exercise = () => {
  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
  ];
  return (
    <div>
      {planets.map((planet, key) => {
        return planet.isGasPlanet && <h1>{planet.name}</h1>;
      })}
    </div>
  );
};

export default Exercise;
