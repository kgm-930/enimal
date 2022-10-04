import { API_DRAW } from "./index";

// 전체뽑기
export const getAllDraw = async () => {
  const res = await API_DRAW.post("/draw/all");
  return res.data;
};

// 선택뽑기
export const getSelectDraw = async () => {
  const res = await API_DRAW.get("/draw/select");
  return res.data;
};