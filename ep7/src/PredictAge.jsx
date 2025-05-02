import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const PredictAge = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);
  async function apiCall(e) {
    try {
      const res = await axios.get(`https://api.agify.io/?name=${name}`);
      setAge(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Predict Age</h1>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={apiCall}>Predict Age</button>
      {age && <p>Name: {age.name}</p>}
      {age && <p>Age: {age.age}</p>}
    </div>
  );
};

export default PredictAge;
