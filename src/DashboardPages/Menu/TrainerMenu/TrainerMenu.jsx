import React from "react";
import MenuItem from "../MenuItem";

const TrainerMenu = () => {
  return (
    <>
      <MenuItem label={"Add class"} address={"add-class"}></MenuItem>

      <MenuItem label={"Manage Member"} address={"manage-members"}></MenuItem>

      <MenuItem label={"Manage Slots"} address={"manage-slots"}></MenuItem>
    </>
  );
};

export default TrainerMenu;
