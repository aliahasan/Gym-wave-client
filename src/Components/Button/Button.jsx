/* eslint-disable react/prop-types */
import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Button = ({ text }) => {
  return (
    <div>
      <Link className="flex items-center gap-x-4 ">
        <div>
          <MdOutlineKeyboardDoubleArrowRight className="inline text-6xl text-[#D6FB00]" />
        </div>
        <p className=" relative inline-block transition-all duration-300 border-b-2 border-transparent hover:border-black">
          <span className="">
            <button className="text-black">{text}</button>{" "}
          </span>
        </p>
      </Link>
    </div>
  );
};

export default Button;
