import { API_COMMUNITY } from "./index";

// 커뮤니티 게시글 리스트 조회
export const getCommunityList = async () => {
  const res = await API_COMMUNITY.get("/board");
  return res.data;
};

