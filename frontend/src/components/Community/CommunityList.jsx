import React, { useState, useEffect } from "react";
import "./CommunityCard.scss";

import { getCommunityList } from '@apis/community'
import CommunityCard from "./CommunityCard";


function CommunityList() {
  const [page,setPage] = useState(0)
  const [articles,setArticles] = useState([])
  useEffect(()=>{
    const params = {pageSize: 9 , lastIdx: page}
    getCommunityList(params).then(res =>{
      setArticles(res.data)
      setPage(pre => pre+1)
    })
  },[])



  return (
    <div className="cardList flex">
      { articles.map(article => {
        console.log(article)
        return (
          <CommunityCard key={article.idx} data={article} />
        )
      })}
    </div>

    
  )
}

export default CommunityList;