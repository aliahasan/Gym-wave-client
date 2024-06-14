/* eslint-disable react/prop-types */
import React from "react";

const TrainerTable = ({ trainer }) => {
  console.log(trainer);
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <img src={trainer?.image_url} alt="" className="w-12 h-12" />
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{trainer?.email}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{trainer?.name}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{trainer?.role}</p>
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <button className="relative cursor-pointer inline-block px-3 py-2 font-semibold text-white rounded leading-tight bg-green-500 ">
          Pay now
        </button>
      </td>
    </tr>
  );
};

export default TrainerTable;
