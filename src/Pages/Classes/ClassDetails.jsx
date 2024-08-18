import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchClassDetails } from "../../Api/Api";
import Loading from "../../Shared/Loading/Loading";
import DOMPurify from "dompurify";

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

  return (
    <div className="container mx-auto px-6 py-2">
      {/* Class Header Section */}
      <div className="bg-white shadow  overflow-hidden">
        <img
          src={classItem?.image}
          alt={classItem?.name}
          className="w-full md:h-[600px] object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {classItem?.title}
          </h1>
          <p
           className="py-4"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(classItem.description),
          }}
        ></p>
          <div className="flex items-center space-x-4 mb-4">
            <img
              src={classItem?.author?.photo}
              alt={classItem?.author?.name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="text-lg font-semibold text-gray-800">
                {classItem?.author?.name}
              </p>
              <p className="text-sm text-gray-500">
                {classItem?.author?.email}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between">
            <p className="text-xl font-bold text-gray-800">
              ${classItem?.price}
            </p>
            <button
              onClick={() => navigate("/trainers")}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>

      {/* Extra Section - Class Details */}
      <div className="shadow bg-white">
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Class Information
          </h2>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <p className="text-lg text-gray-600 uppercase">
                CATEGORY -- {classItem?.category}
              </p>
            </div>
            <div>
              <p className="text-lg text-gray-600 uppercase">
                {" "}
                Class Days -- {classItem?.days}
              </p>
            </div>
          </div>
        </div>

        {/* Extra Section - Class Benefits */}
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Join This Class?
          </h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Expert instructors with years of experience</li>
            <li>Comprehensive class materials and resources</li>
            <li>Flexible scheduling options</li>
            <li>Supportive and interactive community</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ClassDetails;
