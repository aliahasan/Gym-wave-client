/* eslint-disable react/prop-types */
import { PiSpinnerBold } from "react-icons/pi";
import Container from "../../../Components/Container/Container";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { modules } from "../../../Api/utils/minicode";

// Reusable Input Field Component
const InputField = ({ label, name, type = "text", placeholder, required = true }) => (
  <div className="space-y-1 text-sm">
    <label htmlFor={name} className="block text-gray-500">
      {label}
    </label>
    <input
      className="w-full px-3 py-5 text-gray-700 shadow-sm border border-r-gray-200 focus:outline-rose-500"
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      required={required}
    />
  </div>
);

// Reusable File Input Field Component
const FileInputField = ({ label, name, required = true }) => (
  <div className="space-y-1 text-sm">
    <label htmlFor={name} className="block text-gray-500">
      {label}
    </label>
    <input
      className="w-full px-3 py-5 text-gray-700 shadow-sm border border-r-gray-200 focus:outline-rose-500"
      type="file"
      name={name}
      id={name}
      accept="image/*"
      required={required}
    />
  </div>
);

// Reusable Select Field Component
const SelectField = ({ label, name, value, onChange, options, required = true }) => (
  <div className="space-y-1 text-sm">
    <label htmlFor={name} className="block text-gray-500">
      {label}
    </label>
    <select
      required={required}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-3 py-5 text-gray-700 shadow-sm border border-r-gray-200 focus:outline-rose-500"
    >
      <option value="" disabled>
        Select {label.toLowerCase()}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

const AddClassForm = ({
  handleChange,
  handleSubmit,
  description,
  setDescription,
  classCategory,
  classType,
  isSubmitting,
}) => {
  // Handle Quill editor changes
  const handleDescription = (value) => {
    setDescription(value);
  };

  return (
    <Container>
      <div className="mt-20 w-10/12 mx-auto">
        <div className="text-center my-10 pb-2">
          <h3 className="text-3xl md:text-5xl underline underline-offset-[15px]">
            Add Your Class
          </h3>
        </div>
        <form onSubmit={(e) => handleSubmit(e, description)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-1 md:gap-y-5">
            <InputField label="Name" name="name" placeholder="Name of class" />
            <InputField label="Title" name="title" placeholder="Title of class" />
            <InputField label="Duration" name="duration" placeholder="Duration" />
            <FileInputField label="Choose Image" name="image" />
            <InputField label="Price" name="price" type="number" placeholder="Price" />
            <SelectField
              label="Class Type"
              name="classType"
              value={classType}
              onChange={handleChange}
              options={[
                { value: "normal", label: "Normal" },
                { value: "silver", label: "Silver" },
                { value: "gold", label: "Gold" },
                { value: "diamond", label: "Diamond" },
              ]}
            />
            <InputField label="Workout Days" name="days" placeholder="(sat, sun, mon...)" />
            <SelectField
              label="Class Category"
              name="category"
              value={classCategory}
              onChange={handleChange}
              options={[
                { value: "outdoor", label: "Outdoor" },
                { value: "group training", label: "Group Training" },
                { value: "personal training", label: "Personal Training" },
              ]}
            />
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
              className="rounded-md h-64 "
            />
          </div>
          <button
            disabled={isSubmitting}
            type="submit"
            className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500"
          >
            {isSubmitting ? (
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
