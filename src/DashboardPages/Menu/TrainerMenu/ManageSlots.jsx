import React from "react";
import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { getTrainerData } from "../../../Api/Api";
import Loading from "../../../Shared/Loading/Loading";
import Container from "../../../Components/Container/Container";
import BookedSlot from "./BookedSlot";

const ManageSlots = () => {
  const { user, loading } = useAuth();
  const {
    data: slots = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["trainerData", user?.email],
    enabled: !loading,
    queryFn: async () => await getTrainerData(user?.email),
  });
  console.log(slots);
  if (isLoading) return <Loading></Loading>;
  return (
    <div className="mt-10">
      <div>
        <div>
          <h1 className="text-4xl text-center text-green-500 underline-offset-8 underline">
            My Slots
          </h1>
        </div>
        <Container>
          <div>
            <div className="grid grid-cols-3 gap-4 mt-4">
              {slots.map((slot, index) => (
                <button
                  key={index}
                  className="px-4 py-2 bg-gray-300 rounded-md text-center cursor-pointer hover:bg-gray-400 transition-colors"
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
        </Container>
        <div>
          <BookedSlot></BookedSlot>
        </div>
      </div>
    </div>
  );
};

export default ManageSlots;
