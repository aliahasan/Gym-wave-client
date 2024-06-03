import React from "react";
import MenuItem from "../MenuItem";

const UserMenu = () => {
  return (
    <>
      <MenuItem icon={""} label={"Activity"} address={"activities"}></MenuItem>
      <MenuItem icon={""} label={"Recommended class"} address={"recommended-class"}></MenuItem>
      <MenuItem icon={""} label={"Profile"} address={"profile"}></MenuItem>
    </>
  );
};

export default UserMenu;
