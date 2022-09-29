import { API_HOME } from "./index";

// eslint-disable-next-line import/prefer-default-export
export const getTodayAnimal = async () => {
  const res = await API_HOME.get("/todayAnimal");
  // console.log(res.data)
  return res.data;
};
