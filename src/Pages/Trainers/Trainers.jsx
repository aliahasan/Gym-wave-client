import React from "react";
import Container from "../../Components/Container/Container";
import { useQuery } from "@tanstack/react-query";
import { axiosCommon } from "../../Hooks/useAxiosCommon";
import Loading from "../../Shared/Loading/Loading";
import TrainerCard from "./TrainerCard";

const Trainers = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["trainers"],
    queryFn: async () => {
      const response = await axiosCommon.get("/trainers");
      return response.data;
    },
  });

  if (isLoading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <Container>
        <div className="mb-12">
          <img
            src="/trainer.jpg"
            alt="Trainer"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="bg-[#191919] text-white py-20 mb-20">
          <div className="text-center text-5xl py-8">
            <h1>Digital Coaching</h1>
          </div>
          <div className="w-3/4 mx-auto text-lg">
            <div className="flex justify-center items-center leading-8 mb-12">
              <p>
                Its more than a workout, its an experience in modern-day fitness
                technology. Each individual fitness exercise is explained to you
                by a coach in a high-quality video. Use your home fitness
                equipment or train with your body weight.
              </p>
            </div>
            <div className="flex justify-between items-center text-center my-12">
              <div>
                <p className="text-2xl font-bold">01</p>
                <p>Train from home</p>
              </div>
              <div>
                <p className="text-2xl font-bold">02</p>
                <p>Individual trainings</p>
              </div>
              <div>
                <p className="text-2xl font-bold">03</p>
                <p>Personal coach</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {data.map((trainer) => (
              <TrainerCard key={trainer._id} trainer={trainer} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Trainers;
