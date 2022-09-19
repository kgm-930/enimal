import React from "react";
import "./NoticeRegist.scss";

function NoticeRegist() {
  return (
    <div className="container flex">
      <div className="notiRegi">
        <div className="notiRegi_pgtitle notoBold fs-36">
          공지사항
        </div>
        <div className="notiRegi_text">
          <div className="notiRegi_text_title notoMid fs-24">
            제목
          </div>
          <div className="divide" />
          <div className="notiRegi_text_write notoReg fs-20">
            내용을 입력해주세요.
          </div>
        </div>
        <div className="notiRegi_button flex">
          <button type="button" className="notoBold fs-24">
            등록하기
          </button>
        </div>

      </div>
    </div>
  );
}

export default NoticeRegist;
