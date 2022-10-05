import React, { useState, useEffect } from "react";
import "./Notice.scss";




import { Link } from "react-router-dom";

import { getNoticeList } from "@apis/notice";


import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NoticeCard from "../../components/Notice/NoticeCard";

function Notice() {
  const [now, setNow] = useState(1);
  const [page, setPage] = useState(1);
  const [pagelength, setPagelength] = useState(1);
  const [articlesView,setArticlesView] = useState([]);
  const [articles, setArticles] = useState([]);
  
  useEffect(() => {
    const params = { pageSize: 100, lastIdx: 0 }
    getNoticeList(params).then(res => {
      console.log(res)
      setArticles(res.data)
      setPagelength(Math.ceil(res.data.length / 10))
      setArticlesView(res.data.slice(0,10))
    })
  }, [])

  function leftbutton(e) {
    e.preventDefault();
    if (page !== 1) {
      setPage(pre => pre - 1)
      setNow(pre => pre - 5)
    }
  }
  function rightbutton(e) {
    e.preventDefault();
    if (page < pagelength) {
      setPage(pre => pre + 1)
      setNow(pre => pre + 5)
    }

  }
  function numberbutton(e) {
    e.preventDefault();
    document.getElementById(now).classList.remove('selectedNum')
    setNow(Number(e.target.id))
    setArticlesView(articles.slice((e.target.id-1)*10,(e.target.id-1)*10+10))
  }

  const NumberList = []
    for (let i=1; i<6; i+=1){
      if ((page - 1)*5+i <= pagelength) {
        if (now === (page - 1)*5+i) {
          NumberList.push(<button type='button' className="pagenation_button fs-22 notoBold selectedNum" id={(page-1)*5+1} onClick={e => numberbutton(e)} >{(page - 1) * 5 + i}</button>)
        }
        else{
           NumberList.push(<button type='button' className="pagenation_button fs-22 notoBold" id={(page-1)*5+1} onClick={e => numberbutton(e)} >{(page - 1) * 5 + i}</button>)
        }
       
      }
    }

  console.log(articlesView)
  return (
    <div className="containerBox">
      <div className="notice">
        <div className="notice_pagetitle notoBold fs-36">공지사항</div>
        <div className=" flex justify-center align-center">
          {localStorage.MyNick === 'Enimal' ?
            <Link to="/notice/regist" type="button" className="notoBold fs-24 notice_regi">
              등록하기
            </Link>
            : null
          }

        </div>
        <div className="divide" />
        <div className="notice_table flex">
          <p className="notice_table_one notoBold fs-24">번호</p>
          <p className="notice_table_two notoBold fs-24">제목</p>
          <p className="notice_table_three notoBold fs-24">등록일</p>
        </div>
        <div className="divide" />
        <div className="notice_list">
          <div className="noticeList">
            {articlesView.map(article => {
              const A = parseInt((page - 1) * 9, 10)
              const B = parseInt(articles.indexOf(article) + 1, 10)
              return (
                <NoticeCard idx={A + B} key={article.idx} data={article} />
              )
            })
            }

          </div>
        </div>
      </div>
      <div className="flex align-center justify-center">
        <FontAwesomeIcon className="pagenation_button notoBold" onClick={e => leftbutton(e)} icon={faAngleLeft} />
        {NumberList}
        <FontAwesomeIcon className="pagenation_button notoBold" onClick={e => rightbutton(e)} icon={faAngleRight} />
      </div>
    </div>
  );
}
export default Notice;
