import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams, useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import { fetchTrainerDetails } from "../../Api/Api";
import Container from "../../Components/Container/Container";

const TrainerDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery({
    queryKey: ["trainerDetails", id],
    queryFn: () => fetchTrainerDetails(id),
  });

  if (isLoading) return <Loading />;

  if (error) return <div>Error: {error.message}</div>;

  const handleSlotClick = (slot) => {
    navigate(`/trainers/booking`, {
      state: { slot, trainerId: id, trainerName: data.name },
    });
  };

  return (
    <div>
      <Container>
        <div className="grid grid-cols-1  md:grid-cols-2 ">
          <div className="">
            <img src={data.image_url} alt={data.name} />
            <div className="md:pr-10 text-justify my-6">
              <p>Description: {data.description}</p>
            </div>
          </div>
          <div>
            <div className="bg-gray-100 px-4 p-10">
              <div className="text-center">
                <p className="text-center text-3xl py-2">{data.name}</p>
              </div>
              <p className="text-xl">Skills : {data.skills.join(", ")}</p>
              <p className="my-4 text-2xl">Experience of : {data.experience}</p>
              <p>Available Time slot : </p>
              <div className="grid grid-cols-3 gap-2 pb">
                {data?.availableInDay.map((slot, index) => (
                  <button
                    key={index}
                    onClick={() => handleSlotClick(slot)}
                    className="my-2 gap-y-3 px-2 py-4 text-center bg-gray-300 cursor-pointer"
                  >
                    {slot}
                  </button>
                ))}
              </div>

              <span className="font-bold ">
                Click your favorite time slot to book a trainer{" "}
              </span>
              <div>social icons here---------</div>
            </div>
            <div className="text-center my-5 bg-green-300 py-6">
              <p>Want to be a professional Trainer?</p>
              <div>
                <Link to={"/trainers/betrainer"}>
                  <button className="btn">Become a trainer</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TrainerDetails;
