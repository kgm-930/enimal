import React from "react";
import "./NoticeCard.scss";

function NoticeCard() {
  return (
    <>
      <div className="notiCard flex">
        <div className="notiCard_num flex notoMid fs-24">1</div>
        <div className="notiCard_title flex notoMid fs-24">공지입니다.</div>
        <div className="notiCard_time flex notoMid fs-24">2022.09.02</div>
      </div>
      <div className="divide" />
    </>
  );
}

export default NoticeCard;
