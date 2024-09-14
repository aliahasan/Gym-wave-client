/* eslint-disable react/prop-types */
import Container from "../../Components/Container/Container";
import { PiSpinnerBold } from "react-icons/pi";
import ReactQuill from "react-quill";
import { modules } from "../../Api/utils/minicode";
import 'react-quill/dist/quill.snow.css';
const AddArticlesForm = ({
  handleSubmit,
  description,
  setDescription,
  isSubmitting,
}) => {
  const handleDescription = (value) => {
    setDescription(value);
  };

  return (
    <Container>
      <div className="mt-20 w-10/12 mx-auto">
        <div className="text-center my-10 pb-2">
          <h3 className="text-3xl md:text-5xl underline underline-offset-[15px]">
            Share Your Thoughts
          </h3>
        </div>
        <form onSubmit={(e) => handleSubmit(e, description)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-1 md:gap-y-5">
            <div className="space-y-6">
              <div className="space-y-1 text-sm">
                <label htmlFor="title" className="block text-gray-500">
                  Title
                </label>
                <input
                  className="w-full px-3 py-5 text-gray-700 shadow-sm border border-r-gray-200 focus:outline-rose-500"
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Title of article"
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
                  className="w-full px-3 py-4 text-gray-700 shadow-sm border border-r-gray-200 focus:outline-rose-500"
                  type="file"
                  name="image"
                  id="image"
                  accept="image/*"
                  required
                />
              </div>
            </div>
          </div>

          <div className="space-y-1 text-sm my-10">
            <label htmlFor="description" className="block text-gray-600">
              Description
            </label>

            {/* ReactQuill Editor */}
            <ReactQuill
             placeholder="Write something from here"
              modules={modules}
              value={description}
              onChange={handleDescription}
              theme="snow"
              className="rounded-md h-[50vh] "
            />
          </div>

          <button
            disabled={isSubmitting}
            type="submit"
            className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <PiSpinnerBold className="animate-spin  text-2xl" />
                <p className="pl-3">Please wait....</p>
              </div>
            ) : (
              "Save & Continue"
            )}
          </button>
        </form>
      </div>
    </Container>
  );
};

export default AddArticlesForm;
