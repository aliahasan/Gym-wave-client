import React from "react";
import PropTypes from "prop-types";
import { BeatLoader } from "react-spinners";

const Loading = ({ smallHeight }) => {
  return (
    <div
      className={`${smallHeight ? "h-[250px]" : "h-[70vh]"}
        flex  flex-col justify-center items-center
        `}
    >
      <BeatLoader></BeatLoader>
    </div>
  );
};
Loading.propTypes = {
  smallHeight: PropTypes.bool,
};
export default Loading;
