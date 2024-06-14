import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getClasses } from "../../Api/Api";
import Loading from "../../Shared/Loading/Loading";
import ClassCard from "./ClassCard";
import Container from "../../Components/Container/Container";

const Classes = () => {
  const {
    data: classes = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["classes"],
    queryFn: getClasses,
  });

  if (isLoading) return <Loading></Loading>;
  if (error) return <div>Error loading classes</div>;


  return (
    <div>
      <div className="text-center my-10">
        <h1 className="text-3xl md:text-5xl font-semibold">Classes</h1>
      </div>
      <div className="bg-[#191919]">
        <div className="py-24 flex items-center justify-center mx-auto ">
          <div className="text-center leading-8 text-lg w-[50%] text-white">
            <p>
              We set the standard for quality in group fitness training .The
              variety of programs , value, and level of quality are unmatched in
              the neighborhood . We may be an old school gym, but we are with
              the times and provide contemporary classes in various disciplines
              , including yoga, Pilates and Boxing and many more{" "}
            </p>
          </div>
        </div>
      </div>
      <div>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
            {classes &&
              classes.map((classItem) => (
                <ClassCard
                  classItem={classItem}
                  key={classItem._id}
                ></ClassCard>
              ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Classes;
