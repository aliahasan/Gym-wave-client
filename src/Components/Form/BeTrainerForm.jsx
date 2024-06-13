import React, { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import Container from "../Container/Container";
import { PiSpinnerBold } from "react-icons/pi";
import { imageUpload } from "../../Api/utils/imagebb";
import { generateTimeSlots } from "../../Api/utils/timeSlot";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { BeTrainer } from "../../Api/Api";

const BeTrainerForm = () => {
  const { loading, user, setLoading } = useAuth();
  const [skills, setSkills] = useState([]);
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleDates = (item) => {
    setDates(item.selection);
  };

  const handleSkills = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSkills([...skills, value]);
    } else {
      setSkills(skills.filter((skill) => skill !== value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const age = form.age.value;
    const image = form.image.files[0];
    const availableInDay = await generateTimeSlots(start, end);
    const experience = form.experience.value;
    const description = form.description.value;
    const availableWeakFrom = dates.startDate;
    const availableInWeakTo = dates.endDate;

    try {
      const image_url = await imageUpload(image);
      const trainerInfo = {
        name,
        email,
        age,
        image_url,
        skills,
        availableInDay,
        availableWeakFrom,
        availableInWeakTo,
        experience,
        description,
      };
      console.log(trainerInfo);
      await BeTrainer(trainerInfo);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
    setLoading(false)
    form.reset();
  };

  return (
    <Container>
      <div className="mt-20 w-10/12 lg:w-9/12 mx-auto">
        <div className="text-center my-10 pb-2">
          <h3 className="text-3xl md:text-5xl underline underline-offset-[15px]">
            Be a Trainer
          </h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-1 md:gap-y-5">
            <div className="space-y-6">
              <div className="space-y-1 text-sm">
                <label htmlFor="title" className="block text-gray-500">
                  Name
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-700 border border-rose-300  focus:outline-rose-500 rounded-md"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="your name"
                  required
                  defaultValue={user?.displayName}
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-1 text-sm">
                <label htmlFor="title" className="block text-gray-500">
                  Email
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-700 border border-rose-300  focus:outline-rose-500 rounded-md"
                  type="email"
                  name="email"
                  id="email"
                  defaultValue={user?.email}
                  readOnly
                  required
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-1 text-sm">
                <label htmlFor="title" className="block text-gray-500">
                  Age
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-700 border border-rose-300  focus:outline-rose-500 rounded-md"
                  type="number"
                  name="age"
                  id="age"
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

            <div className="space-y-1">
              <label htmlFor="location" className="block text-gray-600">
                Select Availability in weak
              </label>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <DateRange
                  rangeColors={["#F43F5E"]}
                  editableDateInputs={true}
                  onChange={(item) => handleDates(item)}
                  moveRangeOnFirstSelection={false}
                  ranges={[dates]}
                  minDate={new Date()}
                />
              </div>
            </div>
            <div className="flex flex-col justify-center gap-y-10">
              <div className="space-y-6">
                <div className="space-y-1 text-sm">
                  <label htmlFor="slots" className="block text-gray-500">
                    Available From
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-700 border border-rose-300  focus:outline-rose-500 rounded-md"
                    type="time"
                    name="time"
                    id="time"
                    value={start}
                    onChange={(e) => setStart(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="space-y-6">
                <div className="space-y-1 text-sm">
                  <label htmlFor="slots" className="block text-gray-500">
                    Available To
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-700 border border-rose-300  focus:outline-rose-500 rounded-md"
                    type="time"
                    name="time"
                    id="time"
                    value={end}
                    onChange={(e) => setEnd(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="space-y-6">
                <div className="space-y-1 text-sm">
                  <label htmlFor="slots" className="block text-gray-500">
                   Experiences
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-700 border border-rose-300  focus:outline-rose-500 rounded-md"
                    type="text"
                    name="experience"
                    id="experience"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-1 text-sm w-full">
            <label htmlFor="description" className="block text-gray-600">
              Select your skill
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 justify-between  px-4 py-3 text-gray-700 border border-rose-300  focus:outline-rose-500 rounded-md my-10">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-600"
                  name="skills"
                  value="Strength training"
                  onChange={handleSkills}
                />
                <span className="ml-2">Strength Training</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-600"
                  name="skills"
                  value="Cardio"
                  onChange={handleSkills}
                />
                <span className="ml-2">Cardio</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-600"
                  name="skills"
                  value="Yoga"
                  onChange={handleSkills}
                />
                <span className="ml-2">Yoga</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-600"
                  name="skills"
                  value="Nutrition"
                  onChange={handleSkills}
                />
                <span className="ml-2">Nutrition</span>
              </label>

              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-600"
                  name="skills"
                  value="Personal training"
                  onChange={handleSkills}
                />
                <span className="ml-2">Personal Training</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-600"
                  name="skills"
                  value="Group training"
                  onChange={handleSkills}
                />
                <span className="ml-2">Group Training</span>
              </label>
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
              required
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
              " Apply"
            )}
          </button>
        </form>
      </div>
    </Container>
  );
};

export default BeTrainerForm;
