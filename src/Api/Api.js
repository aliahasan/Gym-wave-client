import { axiosCommon } from "../Hooks/useAxiosCommon";
import { axiosSecure } from "../Hooks/useAxiosSecure";

export const subscribers = async (info) => {
  const { data } = await axiosCommon.post("/subscribers", info);
  console.log(data);
  return data;
};
export const getSubscribers = async () => {
  const { data } = await axiosSecure.get("/subscribers");
  console.log(data);
  return data;
};

export const postBlog = async (article) => {
  const { data } = await axiosSecure.post("articles/", article);
  console.log(data);
  return data;
};

export const beTrainer = async (trainerInfo) => {
  const { data } = await axiosSecure.post("/applied-trainers", trainerInfo);
  console.log(data);
  return data;
};

// get all trainer for admin
export const allTrainers = async () => {
  const { data } = await axiosSecure.get("/trainers");
  console.log(data);
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
