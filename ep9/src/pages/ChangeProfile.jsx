import React from "react";
import { useState } from "react";
import { userContext } from "../App";
import { useContext } from "react";

const ChangeProfile = () => {
  const { setUser } = useContext(userContext);
  const [newUser, setNewUser] = useState("");
  return (
    <div>
      <input
        type="text"
        value={newUser}
        onChange={(e) => setNewUser(e.target.value)}
      />
      <button
        onClick={() => {
          setUser(newUser);
        }}
      >
        Update username
      </button>
    </div>
  );
};

export default ChangeProfile;
