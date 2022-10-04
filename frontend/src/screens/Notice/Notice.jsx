import React,{ useState,useEffect } from "react";
import "./Notice.scss";


import NoticeList from "@components/Notice/NoticeList";
import { Link } from "react-router-dom";


import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Notice() {
  const [now,setNow] = useState(1);
  const [page,setPage] = useState(1);
  
  useEffect(()=>{
    if (now) {
      console.log(now)
      document.getElementById(now).classList.add('selectedNum')
    }
    
  },[now])

  function leftbutton(e){
    e.preventDefault();
    if (page !== 1) {
      setPage(pre=>pre-1)
      setNow(pre=>pre-5)
    }
  }
  function rightbutton(e){
    e.preventDefault();
    setPage(pre=>pre+1)
    setNow(pre => pre+5)
  }
  function numberbutton(e){
    e.preventDefault();
    document.getElementById(now).classList.remove('selectedNum')
    setNow(Number(e.target.id))
  }
  


  return (
    <div className="container">
      <div className="notice">
        <div className="notice_pagetitle notoBold fs-36">공지사항</div>
        <div className=" flex justify-center align-center">
          { localStorage.MyNick === 'Enimal' ?
          <Link to="/notice/regist" type="button" className="notoBold fs-24 notice_regi">
            등록하기
          </Link>
          :null
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
          <NoticeList page={now} />
        </div>
      </div>
      <div className="text-center">
        <FontAwesomeIcon className="pagenation_button notoBold" onClick={e=>leftbutton(e)} icon={faAngleLeft} />
        <button type='button' className="pagenation_button fs-22 notoBold" id={(page-1)*5+1} onClick={e=>numberbutton(e)} >{(page-1)*5+1}</button>
        <button type='button' className="pagenation_button fs-22 notoBold" id={(page-1)*5+2} onClick={e=>numberbutton(e)} >{(page-1)*5+2}</button>
        <button type='button' className="pagenation_button fs-22 notoBold" id={(page-1)*5+3} onClick={e=>numberbutton(e)} >{(page-1)*5+3}</button>
        <button type='button' className="pagenation_button fs-22 notoBold" id={(page-1)*5+4} onClick={e=>numberbutton(e)} >{(page-1)*5+4}</button>
        <button type='button' className="pagenation_button fs-22 notoBold" id={(page-1)*5+5} onClick={e=>numberbutton(e)} >{(page-1)*5+5}</button>
        <FontAwesomeIcon className="pagenation_button notoBold" onClick={e=>rightbutton(e)} icon={faAngleRight} />
      </div>
    </div>
  );
}
export default Notice;
