import React, { useEffect, useState } from "react";
import "./CommunityDetail.scss";

import profiledummy from "@assets/images/person.png";
import picdummy from "@assets/images/coco.jpeg";
import CommunityComment from "@components/Community/CommunityComment"
import { useParams } from "react-router-dom";

import { getArticleDetail, getCreateComment } from "@apis/community"

function CommunityRegist() {
  const articleId = useParams().index;
  const [data, setData] = useState(null);
  const [time, setTime] = useState(null);
  const [comment, setComment] = useState(null);
  const [myComment, setMyComment] = useState(null);

  useEffect(() => {
    getArticleDetail(articleId).then(res => {
      console.log(res)
      setData(res.data)
      setComment(res.comment)

      const date = new Date(res.data.boardTime);
      const articleTime = `${date.getFullYear()}년${(date.getMonth() + 1)}월${date.getDate()}일 ${date.getHours()}시${date.getMinutes()}분`;
      setTime(articleTime)
    })
  }, [])

  function createComment(e){
    e.preventDefault();
    const params = {idx : articleId}
    const body = {content : myComment}
    getCreateComment(params,body)
  }
  return (
    <div className="container flex">
      {data ? <div className="commudetail">
        <div className="commudetail_title notoBold fs-36">자랑게시판</div>
        <div className="divide" />
        <div className="commudetail_all">
          {/* 프로필 */}
          <div className="commudetail_all_profile flex">
            <div className="commudetail_all_profile_img">
              <img src={profiledummy} alt="프로필이미지" />
            </div>
            <div className="commudetail_all_profile_extra flex">
              <p className="commudetail_all_profile_extra_name notoMid fs-26">
                {data.nickname}
              </p>
              <p className="commudetail_all_profile_extra_time notoMid fs-16">
                {time}
              </p>
            </div>
          </div>
          {/* 내용 */}
          <div className="commudetail_all_content">
            <div className="commudetail_all_content_photo">
              <img src={picdummy} alt="이미지" />
            </div>
            <div className="commudetail_all_content_title notoMid fs-32">
              {data.title}
            </div>
            <div className="divide" />
            <div className="commudetail_all_content_txt notoReg fs-24">
              {data.content}
            </div>
          </div>
          {/* 댓글입력 */}
          <div className="commudetail_all_comment flex">
            <div className="commudetail_all_comment_sub notoBold fs-24 flex align-center">
              댓글
            </div>
            <textarea type="textarea" onChange={e=>setMyComment(e.target.value)} className="commudetail_all_comment_input_txt notoReg fs-16" />
            <div className="commudetail_all_comment_enter flex align-center">
              <button type="button" onClick={e=>createComment(e)} className="commudetail_all_comment_enter_btn">
                등록
              </button>
            </div>
          </div>
          <div className="commudetail_all_colist">
            <CommunityComment comment={comment} />
          </div>

        </div>
      </div>
        : null}
    </div>
  );
}

export default CommunityRegist;
