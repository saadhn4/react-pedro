import React from "react";
import ChangeProfile from "./ChangeProfile";
import { userContext } from "../App";
import { useContext } from "react";
const Menu = () => {
  const { user } = useContext(userContext);
  return (
    <div>
      <div>
        Profile/Menu Page and user is: {user} <ChangeProfile />
      </div>
    </div>
  );
};

export default Menu;
