import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getAppliedTrainers, updateUser } from "../../../Api/Api";
import useAuth from "../../../Hooks/useAuth";

const AppliedTrainers = () => {
  const { loading } = useAuth();
  const { data: appliedTrainers = [], refetch } = useQuery({
    queryKey: ["applied-trainers"],
    enabled: !loading,
    queryFn: async () => await getAppliedTrainers(),
  });
  console.log(appliedTrainers);
const handleUpdate = async(id) =>{
    console.log(id)
    await updateUser(id)
}


  return (
    <div>
      <div>
        {appliedTrainers &&
          appliedTrainers.map((user) => <div key={user._id}>
            <div>
                <p>{user?.email}</p>
                <div>
                    <button
                    onClick={() => handleUpdate(user?._id)}
                    >Action</button>
                </div>
            </div>
          </div>)}
      </div>
    </div>
  );
};

export default AppliedTrainers;
