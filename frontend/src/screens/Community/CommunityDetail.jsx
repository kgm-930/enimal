import React from "react";
import "./CommunityDetail.scss";

import profiledummy from "@assets/images/person.png";
import picdummy from "@assets/images/coco.jpeg";

function CommunityRegist() {
  return (
    <div className="container flex">
      <div className="commudetail">
        <div className="commudetail_title notoBold fs-36">자랑게시판</div>
        <div className="divide" />
        <div className="commudetail_all">
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
          </div>
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
        </div>
      </div>
    </div>
  );
}

export default CommunityRegist;
