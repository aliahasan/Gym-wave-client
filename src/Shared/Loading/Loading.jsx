import React from "react";
import PropTypes from "prop-types";
import { ColorRing } from "react-loader-spinner";
const Loading = ({ smallHeight }) => {
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center
        ${smallHeight ? "h-[250px]" : "h-full"}`}
    >
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
    </div>
  );
};

Loading.propTypes = {
  smallHeight: PropTypes.bool,
};

export default Loading;
