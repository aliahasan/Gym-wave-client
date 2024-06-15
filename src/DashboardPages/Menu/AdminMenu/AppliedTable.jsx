/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import Modal from "../../../Components/Modal/Modal";
import { updateUser } from "../../../Api/Api";
import toast from "react-hot-toast";

const AppliedTable = ({ user , refetch }) => {
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleConfirm = async (id) => {
    try {
      await updateUser(id);
      toast.success("User role updated successfully");
      refetch()
      handleCloseModal();
    } catch (error) {
      setError(error.message || "An error occurred");
      toast.error(error.message || "Failed to update user role");
    }
  };
  return (
    <>
      <tr>
        <td className="px-5 text-center py-5 border-b border-gray-200 bg-white text-sm">
          <img src={user?.image_url} alt="" className="w-12 h-12" />
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">{user?.email}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">{user?.name}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">{user?.role}</p>
        </td>

        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <button className="text-center" onClick={handleOpenModal}>
            <FaEye className="text-2xl" />
          </button>
        </td>
      </tr>

      <Modal
        show={showModal}
        onClose={handleCloseModal}
        user={user}
        handleConfirm={handleConfirm}
      />
    </>
  );
};

export default AppliedTable;
