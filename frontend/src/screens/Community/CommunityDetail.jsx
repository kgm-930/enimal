import React, { useEffect,useState } from "react";
import "./CommunityDetail.scss";

import profiledummy from "@assets/images/person.png";
import picdummy from "@assets/images/coco.jpeg";
import axios from "axios";
import CommunityComment from "@components/Community/CommunityComment"
import { useParams } from "react-router-dom";

import { getArticleDetail } from "@apis/community"

function CommunityRegist() {
  const articleId = useParams().index;
  const [data,setData] = useState(null);

  useEffect(()=>{
    getArticleDetail(articleId).then(res=>{
      console.log(res)
      setData(res)
    })
    axios({
      url:`/board/${articleId}` ,
      method: 'get',
      headers: { Authorization:localStorage.token}
    })
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  },[])
  console.log(data)
  return (
    <div className="container flex">
      <div className="commudetail">
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
                dongdong
              </p>
              <p className="commudetail_all_profile_extra_time notoMid fs-16">
                2022.09.07
              </p>
            </div>
            <div className="commudetail_all_profile_btn flex">
              <button type="button" className="commudetail_all_profile_btn_modi notoBold">수정하기</button>
              <button type="button" className="commudetail_all_profile_btn_del notoBold">삭제하기</button>
            </div>
          </div>
          {/* 내용 */}
          <div className="commudetail_all_content">
            <div className="commudetail_all_content_photo">
              <img src={picdummy} alt="이미지" />
            </div>
            <div className="commudetail_all_content_title notoMid fs-32">
              내가 모은 첫번째 컬렉션!!
            </div>
            <div className="divide" />
            <div className="commudetail_all_content_txt notoReg fs-24">
              북극곰 기념품입니다.
            </div>
          </div>
          {/* 댓글입력 */}
          <div className="commudetail_all_comment flex">
            <div className="commudetail_all_comment_sub notoBold fs-24 flex align-center">
              댓글
            </div>
            <textarea type="textarea" className="commudetail_all_comment_input_txt notoReg fs-16" />
            <div className="commudetail_all_comment_enter flex align-center">
              <button type="button" className="commudetail_all_comment_enter_btn notoBold">
                등록
              </button>
            </div>
          </div>
          <div className="commudetail_all_colist">
            <CommunityComment />
          </div>

        </div>
      </div>
    </div>
  );
}

export default CommunityRegist;
