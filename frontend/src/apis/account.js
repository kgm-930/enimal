import { API_ACCOUNT } from "./index";

// 지갑 연결
export const getLogin = async (DATA) => {
  const res = await API_ACCOUNT.post("/user/login", DATA);
  return res.data;
};

// 재화 조회
export const getSave = async (DATA) => {
  const res = await API_ACCOUNT.post("/user/login", DATA);
  return res.data;
};

// 프로필 조회
export const getProfile = async (DATA) => {
  const res = await API_ACCOUNT.post(`/user/profile/${DATA}`);
  return res.data;
};


// 내 게시글 조회
export const getMyArtilce = async (PARAMS) => {
  const res = await API_ACCOUNT.get("/user/post",{
    params : PARAMS,
  });
  return res.data;
};
