import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 mt-[64px] md:mt-[89px]">
        <div className="min-h-[calc(100vh-80px)]">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
