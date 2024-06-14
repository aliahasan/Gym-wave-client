import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../Hooks/useAuth";
import { getBookedSlot } from "../../../Api/Api";
import Loading from "../../../Shared/Loading/Loading";
import Container from "../../../Components/Container/Container";

const BookedSlot = () => {
  const { user, loading } = useAuth();
  const {
    data: bookedSlot = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["bookedSlot", user?.email],
    enabled: !loading,
    queryFn: async () => await getBookedSlot(user?.email),
  });
  if (isLoading) return <Loading></Loading>;
  console.log(bookedSlot);
  return (
    <div>
      <Container>
        <div className="mt-10">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {bookedSlot &&
              bookedSlot.map((item, index) => (
                <div key={index}>
                  <div className="card w-96  shadow-md">
                    <figure>
                      <img src={item?.buyerInfo?.buyerPhoto} className="w-64" />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title text-2xl">
                        {item?.buyerInfo?.buyerName}
                      </h2>
                      <p className="text-xl">{item?.buyerInfo?.buyerEmail}</p>
                      <div >
                       <h1 className="text-xl">Booked Slot : {item?.slot}</h1>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BookedSlot;
