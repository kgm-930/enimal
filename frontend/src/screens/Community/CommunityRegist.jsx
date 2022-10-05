import React, { useState } from "react";
import "./CommunityRegist.scss";

import clickLogo from "@assets/icons/ads_click_black_24dp.svg"
import { getCreateArticle } from "@apis/community";
import { useNavigate } from "react-router-dom";

function CommunityRegist() {

  const [Title, setTitle] = useState(null)
  const [Content, setContent] = useState(null)
  const navigate = useNavigate();



  function createArticle(e) {
    e.preventDefault();
    const DATA = {
      title: Title,
      content: Content,
      picture: "asdf"
    }
    getCreateArticle(DATA).then(res => {
      console.log(res)
      navigate(`/community/detail/${res.data.idx}`,{state:{badge:res.data.modalName}})
    })
  }
  function chaengtitle(e) {
    setTitle(e.target.value)
  }
  function chaengcontent(e) {
    setContent(e.target.value)
  }
  return (
    <div className="container flex">
      <div className="regi">
        <div className="regi_pagetitle notoBold fs-36">
          자랑게시판
        </div>
        <div className="divide" />
        <div className="regi_content flex justify-center">
          <div className="regi_content_img">
            <img src={clickLogo} alt="클릭로고" />
          </div>
        </div>
        <div className="regi_text">
          <input className="regi_text_title notoMid fs-24" onChange={e => chaengtitle(e)} style={{ width: '900px' }} placeholder="제목을 입력해주세요" />

          <div className="divide" />
          <textarea className="regi_text_write notoReg fs-20 regi_textarea" onChange={e => chaengcontent(e)} placeholder="내용을 입력해주세요." />

        </div>
        <div className="regi_button flex">
          <button type="button" className="notoBold fs-24" onClick={e => createArticle(e)}>
            등록하기
          </button>
        </div>
      </div>
    
    </div>
  )
}

export default CommunityRegist;