import React, { useState } from "react";
import { subscribe } from "../../../Api/Api";
import toast from "react-hot-toast";
import useAuth from "../../../Hooks/useAuth";
import { PiSpinnerBold } from "react-icons/pi";

const NewsLetter = () => {
  const { loading } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const info = { name, email };
    try {
      const response = await subscribe(info);
      if (response.insertedId) {
        toast.success("Thank you for staying with us 🤗");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMessage(error.response.data.message);
        toast.error(errorMessage);
      } else {
        toast.error("An error occurred");
      }
    }
    form.reset();
  };

  return (
    <div className="bg-[#FBF9F1]">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center justify-center py-20">
          <div className="space-y-1 text-sm w-1/2">
            <label htmlFor="name" className="block text-gray-600">
              Your Name
            </label>
            <input
              className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md"
              name="name"
              id="name"
              type="text"
              placeholder="name"
              required
            />
          </div>
          <div className="space-y-1 text-sm w-1/2">
            <label htmlFor="email" className="block text-gray-600">
              Your email
            </label>
            <input
              className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md"
              name="email"
              id="email"
              type="email"
              placeholder="email"
              required
            />
          </div>
          <button
            disabled={loading}
            type="submit"
            className="w-1/2 p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500"
          >
            {loading ? (
              <PiSpinnerBold className="animate-spin m-auto text-2xl" />
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewsLetter;
