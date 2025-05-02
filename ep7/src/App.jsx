import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import PredictAge from "./PredictAge";
import Exercise from "./Exercise";

const App = () => {
  const [data, setData] = useState({});
  async function getData() {
    try {
      const res = await axios.get("https://catfact.ninja/fact");
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <button onClick={getData}>Generate cat fact</button>
      {data && <p>{data.fact}</p>}
      <hr />
      <PredictAge />
      <hr />
      <Exercise />
    </div>
  );
};

export default App;
