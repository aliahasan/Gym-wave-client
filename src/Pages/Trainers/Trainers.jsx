import React from "react";
import Container from "../../Components/Container/Container";
import { useQuery } from "@tanstack/react-query";
import { axiosCommon } from "../../Hooks/useAxiosCommon";
import Loading from "../../Shared/Loading/Loading";
import TrainerCard from "./TrainerCard";

const Trainers = () => {
  const { data, isPending } = useQuery({
    queryKey: ["train"],
    queryFn: async () => {
      const response = await axiosCommon.get("/trainers");
      return response.data;
    },
  });
  console.log(data);
  if (isPending) return <Loading></Loading>;
  return (
    <div>
      <Container>
        <div className="">
          <img src="/trainer.jpg" alt="" />
        </div>
        <div className="bg-[#191919] text-white py-20 mb-20">
          <div className="text-center text-5xl py-8">
            <h1>Digital Coaching</h1>
          </div>
          <div className=" w-3/4 mx-auto text-lg">
            <div className="flex justify-center items-center leading-8">
              <p>
                Its more than a workout. its an experience in modern day fitness
                technology. Each individual fitness exercise is explained to you
                by a coach in a high-quality video. Use your home fitness
                equipment or train with your body weight
              </p>
            </div>
            <div className="flex justify-between items-center my-12">
              <p>
                01 <br />
                <span>Train from home</span>
              </p>
              <p>
                02
                <br />
                <span>Individual trainings</span>
              </p>
              <p>
                03
                <br />
                <span>Personal coach</span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto">
            {data.map((trainer) => (
              <TrainerCard key={trainer._id} trainer={trainer}></TrainerCard>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Trainers;
