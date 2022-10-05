import { API_HOME } from "./index";

// eslint-disable-next-line import/prefer-default-export
export const getTodayAnimal = async () => {
  const res = await API_HOME.get("/todayAnimal");
  // console.log(res.data)
  return res.data;
};

// 컬렉션 랭킹
export const getRankc = async (PARAMS) => {
  const res = await API_HOME.get("/rank/collection",
  { params : PARAMS});
  console.log(res)
  return res.data;
};

// 기부금 랭킹
export const getRankd = async (PARAMS) => {
  const res = await API_HOME.get("/rank/donation",
  { params : PARAMS});
  console.log(res)
  return res.data;
};

