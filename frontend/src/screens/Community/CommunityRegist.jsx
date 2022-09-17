import React from "react";
import "./CommunityRegist.scss";

import clickLogo from "@assets/icons/ads_click_black_24dp.svg"

function CommunityRegist() {
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
          <div className="regi_text_title notoMid fs-24">
            제목
          </div>
          <div className="divide" />
          <div className="regi_text_write notoReg fs-20">
            내용을 입력해주세요.
          </div>
        </div>
        <div className="regi_button flex">
          <button type="button" className="notoBold fs-24">
            등록하기
          </button>
        </div>
      </div>
    </div>
  )
}

export default CommunityRegist;