import { API_ACCOUNT } from "./index";

// 지갑 연결
export const getLogin = async (DATA) => {
  const res = await API_ACCOUNT.post("/user/login", DATA);
  return res.data;
};

// 아이디 삭제
export const getDeleteUser = async () => {
  const res = await API_ACCOUNT.delete("/user");
  return res.data;
};


// 재화 조회
export const getSave = async (DATA) => {
  const res = await API_ACCOUNT.post("/user/login", DATA);
  return res.data;
};
