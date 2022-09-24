import React, { useState, useEffect } from "react";
// import "./NoticeCard.scss";

import { getNoticeList } from "@apis/notice";
import NoticeCard from "./NoticeCard";



function NoticeList() {
  const [page,setPage] = useState(0)
  const [articles,setArticles] = useState([])

  useEffect(()=>{
    const params = {pageSize: 9 , lastIdx: page}
    getNoticeList(params).then(res =>{
      setArticles(res.data)
      setPage(pre => pre+1)
    })
  },[])


  return (
    <div className="noticeList">
      { articles.map(article => {
        console.log(article)
        return (
          <NoticeCard key={article.idx} data={article} />
        )
      })}

    </div>
  );
}

export default NoticeList;
