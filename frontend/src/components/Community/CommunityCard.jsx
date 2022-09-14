import React from "react";
import "./CommunityCard.scss";

import prodummy from "@assets/images/person.png";
import picdummy from "@assets/images/coco.jpeg";

function CommunityCard() {
  return (
    <div className="card">
      <div className="card_profile flex">
        <div className="card_profile_img">
          <img src={prodummy} alt="프로필이미지" />
        </div>
        <div className="card_profile_name notoMid fs-20 flex align-center">
          dongdong
        </div>
      </div>
      <div className="card_pic">
        <img src={picdummy} alt="게시글이미지" />
      </div>
      <div className="card_txt notoMid fs-16">
        내가 모은 첫번째 컬렉션!!
      </div>
    </div>
  );
}

export default CommunityCard;
