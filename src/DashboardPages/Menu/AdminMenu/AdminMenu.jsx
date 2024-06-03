import React from "react";
import MenuItem from "../MenuItem";

const AdminMenu = () => {
  return (
    <>
      <MenuItem  label={"All Subscribers"} address="all-subscribers"></MenuItem>
      <MenuItem  label={"All Trainers"} address="all-trainers"></MenuItem>
      <MenuItem  label={"Applied Trainer"} address="applied-trainers"></MenuItem>
      <MenuItem  label={"Balance"} address="balance"></MenuItem>
    </>
  );
};

export default AdminMenu;
