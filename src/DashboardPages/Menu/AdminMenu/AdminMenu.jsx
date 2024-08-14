import React from "react";
import MenuItem from "../MenuItem";

// eslint-disable-next-line react/prop-types
const AdminMenu = ({ handleMenuItemClick }) => {
  return (
    <>
      <MenuItem
        handleMenuItemClick={handleMenuItemClick}
        label={"All Subscribers"}
        address="all-subscribers"
      ></MenuItem>
      <MenuItem
        handleMenuItemClick={handleMenuItemClick}
        label={"All Trainers"}
        address="all-trainers"
      ></MenuItem>
      <MenuItem
        handleMenuItemClick={handleMenuItemClick}
        label={"Applied Trainer"}
        address="applied-trainers"
      ></MenuItem>
      <MenuItem
        handleMenuItemClick={handleMenuItemClick}
        label={"Balance"}
        address="balance"
      ></MenuItem>
    </>
  );
};

export default AdminMenu;
