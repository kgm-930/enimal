import React from "react";
import "./CommunityComment.scss";

import profiledummy from '@assets/images/person.png'

function CommunityComment() {
  return (
    <div className="comment flex align-center">
      <img src={profiledummy} alt="프로필이미지" />
      <div className="comment_nick notoMid fs-20">
        dongdong
      </div>
      <div className="comment_content notoReg fs-16">
        와 멋져요!! 저도 뽑기 열심히 해서 북극곰 모아보겠습니다!!
      </div>
    </div>
  );
}

export default CommunityComment;
