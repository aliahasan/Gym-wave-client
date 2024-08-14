import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchClassDetails } from "../../Api/Api";
import Loading from "../../Shared/Loading/Loading";

const ClassDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    data: classItem,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["classDetails", id],
    queryFn: () => fetchClassDetails(id),
  });

  if (isLoading) return <Loading />;

  if (error) return <div>Error: {error.message}</div>;
  console.log(classItem);
  return (
    <div>
      <div>
        <img src={classItem?.image} alt="image" />
      </div>
    </div>
  );
};

export default ClassDetails;
