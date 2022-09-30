import React from "react";
import "./Notice.scss";

import NoticeList from "@components/Notice/NoticeList";
import { Link } from "react-router-dom";

function Notice() {
  return (
    <div className="container flex">
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
          <NoticeList />
        </div>
      </div>
    </div>
  );
}
export default Notice;
