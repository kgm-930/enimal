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
export const getMySave = async () => {
  const res = await API_ACCOUNT.get("/user/credit");
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


