import React,{ useState, useEffect } from "react";
import './MyArticles.scss'
import { getMyArtilce } from "@apis/mypage";
import ArticleCard from "./ArticleCard";

function MyArticles() {
  const [page,setPage] = useState(0)
  const [myArticles,setMyArticles] = useState([])
  useEffect(()=>{
    const params = {pageSize: 100 , lastIdx: page}
    getMyArtilce(params).then(res =>{
      console.log(res)
      setMyArticles(res.data)
      setPage(pre => pre+1)
      console.log(res)
    })
  },[])

  return (
    <div className="MyArticlesBox">
      <h1 className="fs-40 notoBold">내 게시글</h1>
      <hr />
      {myArticles.length >0 ?
      <div className="MyArticles flex">
        { myArticles.map(article => {
          console.log(article)
          return (
            <ArticleCard data={article} />
          )
        })}
      </div>
      : 
      <div className="flex">
        <h1 className="fs-22 notoBold">작성하신 글이 없습니다</h1>
      </div>
      }
    </div>
  );
}

export default MyArticles;
