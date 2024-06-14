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

// get booking data for trainers
export const getBookedSlot = async (email) => {
  const { data } = await axiosSecure.get(`/bookings/trainers?email=${email}`);
  return data;
};

export const payments = async (paymentInfo) => {
  const response = await axiosSecure.post("/payments", paymentInfo);
  return response.data;
};

// get all the slots
export const getTrainerData = async (email) => {
  const { data } = await axiosSecure.get(`/users/${email}`);
  return data?.availableInDay;
};

export const getAppliedTrainers = async () => {
  const { data } = await axiosSecure.get("/applied-trainers");
  return data;
};

export const updateUser = async (id) => {
  const { data } = await axiosSecure.post(`/update/user/${id}`);
  return data;
};
