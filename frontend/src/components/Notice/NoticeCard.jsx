import React from "react";
import { Link } from "react-router-dom";
import "./NoticeCard.scss";

function NoticeCard(props) {
  const { idx,data } = props;
  const date = new Date(data.noticeTime);
  const noticeTime=`${date.getFullYear()}년${(date.getMonth()+1)}월${date.getDate()}일 ${date.getHours()}시${date.getMinutes()}분`;

  return (
    <Link to={`/notice/animal/${data.idx}`}>
      <div className="notiCard flex">
        <div className="notiCard_num flex notoMid fs-20">{idx}</div>
        <div className="notiCard_title flex notoMid fs-20">{data.title}</div>
        <div className="notiCard_time flex notoMid fs-16">{noticeTime}</div>
      </div>
      <div className="divide" />
    </Link>
  );
}

export default NoticeCard;
