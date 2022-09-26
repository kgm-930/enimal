import { API_COMMUNITY } from "./index";

// 커뮤니티 게시글 리스트 조회
export const getCommunityList = async (PARAMS) => {
  console.log(PARAMS)
  const res = await API_COMMUNITY.get("/boardList",
  {
    params : PARAMS,
  });
  console.log(res)
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
  const res = await API_COMMUNITY.get(`/boardList/${index}`)
  return res.data;
};

// 댓글 생성
export const getCreateComment = async (PARAMS,comment) => {
  console.log(comment)
  const res = await API_COMMUNITY.post("/comment",
  {
    params : PARAMS,
    data : comment
  });
  console.log(res)
  return res.data;
};