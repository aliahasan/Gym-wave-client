import axios from "axios";
import React, { useEffect, useState } from "react";
import { axiosCommon } from "../../../Hooks/useAxiosCommon";

const Schedules = () => {
  const [schedules, setSchedules] = useState([]);
  useEffect(() => {
    const getSchedules = async () => {
      try {
        const response = await axiosCommon.get("/schedules");
        setSchedules(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getSchedules();
  }, []);
console.log(schedules?.map(item => item.activities.map(item2 => console.log(item2))))
  return (
    <div className="p-8">
   <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Time</th>
        <th>Sunday</th>
        <th>Monday</th>
        <th>Tuesday</th>
        <th>Wednesday</th>
      </tr>
    </thead>
    <tbody>
{/* 
   {
    schedules.map(schedule => schedule.activities.map(item => console.log(item)))
   } */}
   <tr>
    <th>1</th>
    <th>2</th>
    <th>3</th>
    <th>4</th>
   </tr>
     
    </tbody>
  </table>
</div>
    
  </div>
  );
};

export default Schedules;
