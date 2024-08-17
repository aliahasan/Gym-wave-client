import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams, useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import { fetchTrainerDetails } from "../../Api/Api";
import Container from "../../Components/Container/Container";
import useAuth from "../../Hooks/useAuth";
import { BookingContext } from "../../Provider/BookingProvider/BookingProvider";

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
    <div>
      <div className="mt-5">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col items-center">
              <img
                src={data?.image_url}
                alt={data?.name}
                className="w-full h-auto rounded-lg"
              />
              <div className="text-justify my-6">
                <p className="text-lg leading-relaxed">
                  Description: {data?.description}
                </p>
              </div>
            </div>
            <div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <div className="text-center mb-4">
                  <p className="text-3xl font-bold">{data?.name}</p>
                </div>
                <p className="text-xl mb-2">
                  <strong>Skills:</strong> {data?.skills.join(", ")}
                </p>
                <p className="text-xl mb-4">
                  <strong>Experience:</strong> {data?.experience}
                </p>
                <p className="text-lg font-semibold">Available Time Slots:</p>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {data?.availableInDay?.map((slot, index) => (
                    <button
                      key={index}
                      onClick={() => handleSlotBooking(slot)}
                      className="px-4 py-2 bg-gray-300 rounded-md text-center cursor-pointer hover:bg-gray-400 transition-colors"
                    >
                      {slot}
                    </button>
                  ))}
                </div>
                <p className="mt-4 text-sm font-bold">
                  Click your favorite time slot to book a trainer
                </p>
                <div className="mt-6">{/* Add social icons here */}</div>
              </div>
              <div className="text-center my-5 bg-green-300 py-6 rounded-lg shadow-md">
                <p className="text-lg font-semibold">
                  Want to be a professional Trainer?
                </p>
                <Link to={"/trainers/betrainer"}>
                  <button className="mt-3 py-2 px-4 bg-rose-400 text-white rounded-md">
                    Become a Trainer
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default TrainerDetails;
