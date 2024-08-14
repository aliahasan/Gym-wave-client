import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getSubscribers } from "../../../Api/Api";
import Loading from "../../../Shared/Loading/Loading";
import SubscriberTable from "./SubscriberTable";
import Container from "../../../Components/Container/Container";

const AllSubscribers = () => {
  const {
    data: subscribers = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["subscribers"],
    queryFn: getSubscribers,
  });

  if (isLoading) return <Loading></Loading>;
  if (error) return <div>Error loading classes</div>;

  if (isLoading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;
  console.log(subscribers);
  return (
    <>
      <Container>
        <div className="container mx-auto px-4 sm:px-8">
          <div className="py-8">
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block w-full mx-auto shadow rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800   text-sm uppercase font-normal"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800   text-sm uppercase font-normal"
                      >
                        Email
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {subscribers.map((subscriber) => (
                      <SubscriberTable
                        subscriber={subscriber}
                        key={subscriber._id}
                      ></SubscriberTable>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default AllSubscribers;
