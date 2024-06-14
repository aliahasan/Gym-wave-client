/* eslint-disable react/prop-types */
import React from "react";
import Container from "../../Components/Container/Container";
import { PiSpinnerBold } from "react-icons/pi";

const AddArticlesForm = ({ handleSubmit, loading }) => {
  return (
    <Container>
      <div className="mt-20 w-10/12 mx-auto">
        <div className="text-center my-10 pb-2">
          <h3 className="text-3xl md:text-5xl underline underline-offset-[15px]">
            Share Your Thoughts
          </h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-1 md:gap-y-5">
            <div className="space-y-6">
              <div className="space-y-1 text-sm">
                <label htmlFor="title" className="block text-gray-500">
                  Title
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-700 border border-rose-300  focus:outline-rose-500 rounded-md"
                  type="text"
                  name="title"
                  id="title"
                  placeholder="title of article"
                  required
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-1 text-sm">
                <label htmlFor="title" className="block text-gray-500">
                  Choose Image
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-700 border border-rose-300  focus:outline-rose-500 rounded-md"
                  type="file"
                  name="image"
                  id="image"
                  accept="image/*"
                  required
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-1 text-sm">
                <label htmlFor="title" className="block text-gray-500">
                  Date
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-700 border border-rose-300  focus:outline-rose-500 rounded-md"
                  type="date"
                  name="date"
                  id="date"
                  placeholder="Date"
                  required
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-1 text-sm">
                <label htmlFor="title" className="block text-gray-500">
                  Enter Youtube Video Link
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-700 border border-rose-300  focus:outline-rose-500 rounded-md"
                  type="url"
                  name="video"
                  id="video"
                  placeholder="video url"
                />
              </div>
            </div>
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="description" className="block text-gray-600">
              Description
            </label>

            <textarea
              id="description"
              className="block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 "
              name="description"
            ></textarea>
          </div>
          <button
            disabled={loading}
            type="submit"
            className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500"
          >
            {loading ? (
              <PiSpinnerBold className="animate-spin m-auto text-2xl" />
            ) : (
              " Save & Continue"
            )}
          </button>
        </form>
      </div>
    </Container>
  );
};

export default AddArticlesForm;
