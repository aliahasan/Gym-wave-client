import { axiosCommon } from "../Hooks/useAxiosCommon";

export const subscribe = async (info) => {
  const { data } = await axiosCommon.post("/subscribers", info);
  console.log(data);
  return data;
};
