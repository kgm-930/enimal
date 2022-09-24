import { API_NOTICE } from "./index";

// 공지사항 리스트 조회
export const getNoticeList = async (PARAMS) => {
  const res = await API_NOTICE.get("/noticeList",
  {
    params : PARAMS,
  });
  return res.data;
};

export const getCreateNotice = async (PARAMS) => {
  const res = await API_NOTICE.get("/noticeList",
  {
    params : PARAMS,
  });
  return res.data;
};