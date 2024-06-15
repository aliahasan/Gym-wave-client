/* eslint-disable react/prop-types */
import React from "react";

const Modal = ({ show, onClose, handleConfirm, user }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center pt-[20vh]">
      <div className="bg-white p-8 rounded shadow-lg w-1/3">
        <h2 className="text-xl mb-4">User Details</h2>
        <p>
          <strong>Availability : </strong> {user?.availableInDay}
        </p>
        <p>
          <strong>Skills:</strong> {user?.skills}
        </p>
        <p>
          <strong>Role:</strong> {user?.role}
        </p>
        <div className="mt-4 flex justify-center gap-x-5">
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => handleConfirm(user?._id)}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
