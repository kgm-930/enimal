import React,{ useState, useEffect } from "react";
import './MyArticles.scss'
import { getMyArtilce } from "@apis/account";
import CommunityCard from "../../Community/CommunityCard";

function MyArticles() {
  const [page,setPage] = useState(0)
  const [myArticles,setMyArticles] = useState([])
  useEffect(()=>{
    const params = {pageSize: 9 , lastIdx: page}
    getMyArtilce(params).then(res =>{
      setMyArticles(res.data)
      setPage(pre => pre+1)
    })
  },[])

  return (
    <div className="MyArticlesBox">
      <h1 className="fs-40 notoBold">내 게시글</h1>
      <hr />
      <div className="MyArticles flex">
        { myArticles.map(article => {
          console.log(article)
          return (
            <CommunityCard />
          )
        })}
      </div>
    </div>
  );
}

export default MyArticles;
