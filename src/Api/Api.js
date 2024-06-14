import { axiosCommon } from "../Hooks/useAxiosCommon";
import { axiosSecure } from "../Hooks/useAxiosSecure";

export const subscribe = async (info) => {
  const { data } = await axiosCommon.post("/subscribers", info);
  console.log(data);
  return data;
};

export const postBlog = async (article) => {
  const { data } = await axiosSecure.post("articles/", article);
  console.log(data);
  return data;
};

export const BeTrainer = async (trainerInfo) => {
  const { data } = await axiosSecure.post("/trainers", trainerInfo);
  console.log(data);
  return data;
};

export const allTrainers = async () => {
  const { data } = await axiosCommon.get("/trainers");
  return data;
};

export const fetchTrainerDetails = async (id) => {
  const response = await axiosSecure.get(`/trainers/${id}`);
  return response.data;
};

export const getClasses = async () => {
  const { data } = await axiosCommon.get("/classes");
  return data;
};

export const fetchClassDetails = async (id) => {
  const response = await axiosSecure.get(`/classes/${id}`);
  return response.data;
};

export const bookings = async (bookingInfo) => {
  const response = await axiosSecure.post("/bookings", bookingInfo);
  return response.data;
};

export const payments = async (paymentInfo) => {
  const response = await axiosSecure.post("/payments", paymentInfo);
  return response.data;
};
