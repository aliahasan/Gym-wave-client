import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../DashboardPages/Sidebar";

const DashBoardLayout = () => {
  return (
    <div>
      <div className="relative min-h-screen md:flex">
        <Sidebar></Sidebar>
        <div className="flex flex-col flex-1 md:ml-64 ">
          <div className=" flex-grow min-h-screen">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
