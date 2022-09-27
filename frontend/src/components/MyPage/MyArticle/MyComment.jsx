import React,{ useState,useEffect } from "react";
import './MyArticles.scss'

import { getMyComment } from "@apis/mypage";

import CommentCard from "./CommentCard";



function MyComment() {
  const [page,setPage] = useState(0)
  const [myComments,setMyComments] = useState([])
  useEffect(()=>{
    const params = {pageSize: 9 , lastIdx: page}
    getMyComment(params).then(res=>{
      console.log(res)
      setMyComments(res.data)
      setPage(pre => pre+1)
    })
  },[])

  console.log(myComments)

  return (
    <div className="MyArticlesBox">
      <h1 className="fs-40 notoBold">내 댓글</h1>
      <hr />
      <div>
          {myComments.map(comment => {
            console.log(comment)
            return (
              <CommentCard data={comment} />
            )
          })}
      </div>

    </div>
  );
}

export default MyComment;