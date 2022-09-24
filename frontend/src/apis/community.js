import { API_COMMUNITY } from "./index";

// 커뮤니티 게시글 리스트 조회
export const getCommunityList = async (PARAMS) => {
  const res = await API_COMMUNITY.get("/boardList",
  {
    params : PARAMS,
  });
  return res.data;
};

// 커뮤니티 게시글 작성
export const getCreateArticle = async (DATA) => {
  const res = await API_COMMUNITY.post("/board",
  {
    data : DATA
  })
  return res.data;
};

// 커뮤니티 상세 페이지
export const getArticleDetail = async (index) => {
  const res = await API_COMMUNITY.get(`/board/${index}`)
  return res.data;
};