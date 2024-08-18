/* eslint-disable react/no-unescaped-entities */
import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams, useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import { fetchTrainerDetails } from "../../Api/Api";
import Container from "../../Components/Container/Container";
import useAuth from "../../Hooks/useAuth";
import { BookingContext } from "../../Provider/BookingProvider/BookingProvider";
import DOMPurify from "dompurify";

const TrainerDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { setBookingData } = useContext(BookingContext);

  const { data, isLoading, error } = useQuery({
    queryKey: ["trainerDetails", id],
    queryFn: () => fetchTrainerDetails(id),
  });

  if (isLoading) return <Loading />;

  if (error) return <div>Error: {error.message}</div>;

  const handleSlotBooking = (slot) => {
    setBookingData({
      slot,
      trainer: {
        trainerId: id,
        name: data.name,
        image: data?.image_url,
        email: data?.email,
      },
    });
    navigate("/trainers/booking");
  };

  return (
    <div className="py-2">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-6 ">
          {/* Trainer Image and Description */}
          <div className="">
            <div className="flex flex-col items-center">
              <img
                src={data?.image_url}
                alt={data?.name}
                className="w-full h-auto rounded-lg mb-6"
              />
              <p className="text-3xl font-bold text-gray-800">{data?.name}</p>
            </div>
            <div className="text-justify mt-6">
              <p
                className="text-lg leading-relaxed text-gray-700"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(data?.description),
                }}
              ></p>
            </div>
            <p className="text-xl mt-6 text-gray-700">
              <strong>Skills:</strong> {data?.skills.join(", ")}
            </p>
            <p className="text-xl mt-4 text-gray-700">
              <strong>Experience:</strong> {data?.experience}
            </p>
            <div className="mt-6">
              <p className="text-lg font-semibold text-gray-800">Week Availability:</p>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {data?.availableInWeek?.map((day, index) => (
                  <button
                    key={index}
                    className="px-4 py-2 bg-blue-100 rounded-md text-center cursor-pointer hover:bg-blue-200 transition-colors"
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Trainer Details and Booking */}
          <div>
            <div className="mb-6">
              <p className="text-lg font-semibold text-gray-800 uppercase">
                Available Time Slots  
              </p>
              <p className="mt-4 w-3/4 text-sm font-bold text-gray-600 animate-bounce py-2 pl-2 rounded">
                Click your favorite time slot to book a trainer.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {data?.availableSlots?.map((slot, index) => (
                  <button
                    key={index}
                    onClick={() => handleSlotBooking(slot)}
                    className="px-4 py-2 bg-blue-100 rounded-md text-center cursor-pointer hover:bg-blue-200 transition-colors"
                  >
                    {slot}
                  </button>
                ))}
              </div>
           
            </div>

            {/* Additional Section: Certifications */}
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                Certifications
              </h3>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Certified Personal Trainer (CPT)</li>
                <li>Nutrition Specialist Certification</li>
                <li>Advanced Strength and Conditioning Certification</li>
              </ul>
            </div>

            {/* Additional Section: Testimonials */}
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                Testimonials
              </h3>
              <p className="text-gray-700 italic">
                "The best trainer I've ever worked with! My fitness journey has
                been transformed thanks to their guidance." - Client X
              </p>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-green-100 py-6 rounded-lg">
              <p className="text-lg font-semibold text-gray-800">
                Want to be a professional Trainer?
              </p>
              <Link to={"/trainers/betrainer"}>
                <button className="mt-3 py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700">
                  Become a Trainer
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TrainerDetails;
