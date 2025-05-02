import axios from "axios";
import React from "react";
import { useState } from "react";

const Exercise = () => {
  const [excuse, setExcuse] = useState(null);

  const generateExcuse = async (category) => {
    try {
      const res = await axios.get(
        `https://excuser-three.vercel.app/v1/excuse/${category}/`
      );
      setExcuse(res.data[0].excuse);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Exercise</h1>
      <h2>Generate An Excuse</h2>
      <button onClick={() => generateExcuse("family")}>Family</button>
      <button onClick={() => generateExcuse("party")}>Party</button>
      <button onClick={() => generateExcuse("office")}>Office</button>
      {excuse && <p>{excuse}</p>}
    </div>
  );
};

export default Exercise;
