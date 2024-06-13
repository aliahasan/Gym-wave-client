/* eslint-disable react/prop-types */
import { PiSpinnerBold } from "react-icons/pi";
import useAuth from "../../../Hooks/useAuth";
import Container from "../../../Components/Container/Container";

const AddClassForm = ({
  handleChange,
  handleSubmit,
  classCategory,
  classType,
}) => {
  const { loading } = useAuth();

  return (
    <Container>
      <div className="mt-20 w-10/12 mx-auto">
        <div className="text-center my-10 pb-2">
          <h3 className="text-3xl md:text-5xl underline underline-offset-[15px]">
            Add your class
          </h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-1 md:gap-y-5">
            <div className="space-y-6">
              <div className="space-y-1 text-sm">
                <label htmlFor="name" className="block text-gray-500">
                  Name
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-700 border border-rose-300  focus:outline-rose-500 rounded-md"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="name of class"
                  required
                />
              </div>
            </div>
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
                <label htmlFor="duration" className="block text-gray-500">
                  Duration
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-700 border border-rose-300  focus:outline-rose-500 rounded-md"
                  type="text"
                  name="duration"
                  id="duration"
                  placeholder="Duration"
                  required
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-1 text-sm">
                <label htmlFor="image" className="block text-gray-500">
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
                <label htmlFor="price" className="block text-gray-500">
                  Price
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-700 border border-rose-300  focus:outline-rose-500 rounded-md"
                  type="number"
                  name="price"
                  id="price"
                  placeholder="Price"
                  required
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-1 text-sm">
                <label htmlFor="classType" className="block text-gray-500">
                  Class Type
                </label>
                <select
                  required
                  id="classType"
                  name="type"
                  value={classType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-gray-700 border border-rose-300  focus:outline-rose-500 rounded-md"
                >
                  <option value="" disabled>
                    Select type
                  </option>
                  <option value="normal">Normal</option>
                  <option value="silver">Silver</option>
                  <option value="gold">Gold</option>
                  <option value="diamond">Diamond</option>
                </select>
              </div>
            </div>
            <div className="space-y-6 ">
              <div className="space-y-1 text-sm ">
                <label htmlFor="days" className="block text-gray-500">
                  Workout days
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-700 border border-rose-300  focus:outline-rose-500 rounded-md"
                  type="text"
                  name="days"
                  id="days"
                  placeholder="type workout days"
                  required
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-1 text-sm">
                <label htmlFor="classCategory" className="block text-gray-500">
                  Class Category
                </label>
                <select
                  required
                  id="classCategory"
                  name="category"
                  value={classCategory}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-gray-700 border border-rose-300  focus:outline-rose-500 rounded-md"
                >
                  <option value="" disabled>
                    Select Category
                  </option>
                  <option value="outdoor">OutDoor</option>
                  <option value="group training">Group Training</option>
                  <option value="personal training">Personal Training</option>
                </select>
              </div>
            </div>
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="description" className="block text-gray-600">
              Description
            </label>
            <textarea
              required
              id="description"
              className="block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500"
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
              "Save & Continue"
            )}
          </button>
        </form>
      </div>
    </Container>
  );
};

export default AddClassForm;
