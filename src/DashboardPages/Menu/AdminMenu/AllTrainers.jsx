import React from "react";
import { allTrainers } from "../../../Api/Api";
import Loading from "../../../Shared/Loading/Loading";
import { useQuery } from "@tanstack/react-query";
import Container from "../../../Components/Container/Container";
import TrainerTable from "./TrainerTable";

const AllTrainers = () => {
  const {
    data: trainers = [],
    isLoading,
    error,
    refetch
  } = useQuery({
    queryKey: ["trainer-for-admin"],
    queryFn: allTrainers,
  });

  if (isLoading) return <Loading></Loading>;
  if (error) return <div>Error loading classes</div>;

  if (isLoading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;
  console.log(trainers);
  return (
  <>
   <Container>
   <div className='container mx-auto px-4 sm:px-8'>
    {/* <Helmet>
      <title>Manage Users</title>
    </Helmet> */}
    <div className='py-8'>
      <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
        <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
          <table className='min-w-full leading-normal'>
            <thead>
              <tr>
                <th
                  scope='col'
                  className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                >
                  Image
                </th>
                <th
                  scope='col'
                  className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                >
                  Email
                </th>
                <th
                  scope='col'
                  className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                >
                Name
                </th>
                <th
                  scope='col'
                  className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                >
                 Role
                </th>

                <th
                  scope='col'
                  className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                >
                Pay salary
                </th>
              </tr>
            </thead>
            <tbody>
              {trainers.map(trainer => (
                <TrainerTable
                  key={trainer?._id}
                  trainer={trainer}
                  refetch={refetch}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
   </Container>
</>
  )
};

export default AllTrainers;
