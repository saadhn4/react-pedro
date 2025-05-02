import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Home = () => {
  const { data,isLoading, isError } = useQuery({
    queryKey: ["cat"],
    queryFn: async () => {
      const res = await axios.get("https://catfact.ninja/fact");
      return res.data;
    },
  });

  return (
    <div>
      <h1>Home Page</h1>
      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>There was some error</h2>}
      {data && <p>{data.fact}</p>}
    </div>
  );
};

export default Home;
