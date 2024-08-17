import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineBars } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import MenuItem from "./Menu/MenuItem";
import TrainerMenu from "./Menu/TrainerMenu/TrainerMenu";
import AdminMenu from "./Menu/AdminMenu/AdminMenu";
import UserMenu from "./Menu/UserMenu/UserMenu";
import useRole from "../Hooks/useRole";

const Sidebar = () => {
  const { role } = useRole();
  const [isActive, setIsActive] = useState(false);

  const handleSideBar = () => {
    setIsActive(!isActive);
  };

  const handleMenuItemClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden items-center">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link to="/">Gym-wave</Link>
          </div>
        </div>
        <div>
          <button onClick={handleSideBar} className="p-4 focus:outline-none">
            {isActive ? (
              <RxCross2 className="h-5 w-5" />
            ) : (
              <AiOutlineBars className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      <aside
        className={`z-10 absolute md:fixed flex flex-col justify-between overflow-x-hidden bg-[#F9F9F9] w-64 space-y-6 md:top-0 inset-y-0 left-0 transform ${
          isActive ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition duration-300 ease-in-out`}
      >
        <div>
          <div className="w-full hidden md:flex px-4 py-4 shadow-sm justify-center items-center bg-white mx-auto">
            <Link to="/">Gym wave</Link>
          </div>
          <div className="flex flex-col justify-between items-center flex-1">
            <nav>
              <MenuItem
                label={"DashBoard"}
                address={"/dashboard"}
                handleMenuItemClick={handleMenuItemClick}
              />
              {(role === "admin" || role === "trainer") && (
                <MenuItem
                  label={"Post Article"}
                  address={"/dashboard/add-article"}
                  handleMenuItemClick={handleMenuItemClick}
                />
              )}
              {role === "admin" && (
                <AdminMenu handleMenuItemClick={handleMenuItemClick} />
              )}
              {role === "trainer" && (
                <TrainerMenu handleMenuItemClick={handleMenuItemClick} />
              )}
              {role === "member" && (
                <UserMenu handleMenuItemClick={handleMenuItemClick} />
              )}
              <MenuItem
                label={"Back to Home"}
                address={"/"}
                handleMenuItemClick={handleMenuItemClick}
              />
            </nav>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
