/* eslint-disable react/prop-types */
import React, { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import Container from "../Container/Container";
import { PiSpinnerBold } from "react-icons/pi";
import { imageUpload } from "../../Api/utils/imagebb";
import { generateTimeSlots } from "../../Api/utils/timeSlot";
import { beTrainer } from "../../Api/Api";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import toast from "react-hot-toast";
import useRole from "../../Hooks/useRole";
import { modules } from "../../utils/Utilty";

// Reusable Input Component
const InputField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  readOnly = false,
  required = true,
  ...props
}) => (
  <div className="space-y-1 text-sm">
    <label htmlFor={name} className="block text-gray-500">
      {label}
    </label>
    <input
      className="w-full px-3 py-5 text-gray-700 shadow-sm border border-r-gray-200 focus:outline-rose-500"
      type={type}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      readOnly={readOnly}
      required={required}
      {...props}
    />
  </div>
);

// Reusable Checkbox Component
const CheckboxField = ({ label, value, onChange, checked = false }) => (
  <label className="inline-flex items-center">
    <input
      type="checkbox"
      className="form-checkbox text-blue-600"
      value={value}
      onChange={onChange}
      checked={checked}
    />
    <span className="ml-2">{label}</span>
  </label>
);

const BeTrainerForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();
  const { userId, role } = useRole();
  const [skills, setSkills] = useState([]);
  const [availableInWeek, setAvailableInWeek] = useState([]);
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [description, setDescription] = useState("");

  const handleSkills = (e) => {
    const { value, checked } = e.target;
    setSkills(
      checked ? [...skills, value] : skills.filter((skill) => skill !== value)
    );
  };

  const handleDay = (e) => {
    const { value, checked } = e.target;
    setAvailableInWeek(
      checked
        ? [...availableInWeek, value]
        : availableInWeek.filter((day) => day !== value)
    );
  };

  const handleDescription = (value) => {
    setDescription(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const age = form.age.value;
    const image = form.image.files[0];
    const availableInDay = generateTimeSlots(start, end);
    const experience = form.experience.value;

    try {
      const image_url = await imageUpload(image);
      const trainerInfo = {
        name,
        email,
        age,
        image_url,
        skills,
        availableInWeek,
        availableInDay,
        experience,
        description,
        userId,
        role,
      };
      await beTrainer(trainerInfo);
      toast.success("Successfully applied as a trainer!");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }

    form.reset();
  };

  return (
    <Container>
      <div className="mt-10 w-10/12 lg:w-9/12 mx-auto">
        <div className="text-center my-10 pb-2">
          <h3 className="text-3xl md:text-5xl underline underline-offset-[15px]">
            Be a Trainer
          </h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
            <InputField
              label="Name"
              name="name"
              readOnly
              value={user?.displayName}
            />
            <InputField
              label="Email"
              name="email"
              type="email"
              readOnly
              value={user?.email}
            />
            <InputField label="Age" name="age" type="number" />
            <InputField
              label="Choose Image"
              name="image"
              type="file"
              accept="image/*"
            />
            <InputField
              label="Available From"
              name="time"
              type="time"
              value={start}
              onChange={(e) => setStart(e.target.value)}
            />
            <InputField
              label="Available To"
              name="time"
              type="time"
              value={end}
              onChange={(e) => setEnd(e.target.value)}
            />
            <InputField label="Experiences" name="experience" />
          </div>
          <div className="space-y-1 text-sm w-full py-4">
            <label htmlFor="skills" className="block text-gray-600">
              Select your skill
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-3 px-4 py-4 text-gray-700 border border-gray-200 my-10 shadow-sm">
              {[
                "Strength training",
                "Cardio",
                "Yoga",
                "Nutrition",
                "Personal training",
                "Group training",
              ].map((skill) => (
                <CheckboxField
                  key={skill}
                  label={skill}
                  value={skill}
                  onChange={handleSkills}
                  checked={skills.includes(skill)}
                />
              ))}
            </div>
          </div>
          <div>
            <label htmlFor="availableInWeek" className="block text-gray-600">
              Availability in week
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-3 px-4 py-3 text-gray-700 border border-gray-200 my-2 shadow-sm">
              {[
                "Saturday",
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
              ].map((day) => (
                <CheckboxField
                  key={day}
                  label={day}
                  value={day}
                  onChange={handleDay}
                  checked={availableInWeek.includes(day)}
                />
              ))}
            </div>
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="description" className="block text-gray-600">
              Description
            </label>
            <ReactQuill
              modules={modules}
              value={description}
              onChange={handleDescription}
              theme="snow"
              className="rounded-md h-[40vh] "
            />
          </div>
        </form>

        {/* Button outside form */}
        <div className="mt-5 text-center">
          <button
            disabled={isLoading}
            onClick={handleSubmit}
            className="w-full p-3 mt-20 md:mt-12  text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500 hover:bg-rose-600"
          >
            {isLoading ? (
              <PiSpinnerBold className="animate-spin m-auto text-2xl" />
            ) : (
              "Apply"
            )}
          </button>
        </div>
      </div>
    </Container>
  );
};

export default BeTrainerForm;
