import { reauthenticateWithCredential } from "firebase/auth";
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
