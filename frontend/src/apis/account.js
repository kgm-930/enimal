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

// 재화 전환(충전)
export const chargeSave = async (DATA) => {
  const res = await API_ACCOUNT.post("/credit",{
    data : DATA,
  });
  return res.data;
};

// AI 이미지 생성
export const makeImg = async (DATA) => {
  const res = await API_ACCOUNT.post("주소 결정 필요",{
    data : DATA,
  });
  return res.data;
};

// NFT 데이터 저장
export const saveMetadata = async (DATA) => {
  const res = await API_ACCOUNT.post("주소 결정 필요",{
    data : DATA,
  });
  return res.data;
};


