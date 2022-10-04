// 검은코뿔소
import React from "react";
import "./Animal.scss";
import { useNavigate } from "react-router-dom";

import YouTube from "react-youtube";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Animal1() {
  const navigate = useNavigate();

  function back(e) {
    e.preventDefault();
    navigate("/notice");
  }

  return (
    <div className="container flex">
      <div className="notiRegi">
        <div className="notiRegi_pgtitle notoBold fs-36 text-center flex justify-space-between">
          <FontAwesomeIcon
            className=""
            onClick={e => back(e)}
            icon={faArrowLeft}
          />
          <div className="NoticeText">공지사항</div>
          <div className="emptyBox" />
        </div>

        <div className="notiRegi_text">
          <div type="text" className="notiRegi_text_title notoMid fs-24">
            검은 코뿔소
          </div>
          <div className="divide_2" />
          <YouTube
            videoId="HuReYBQJkPg"
            opts={{
              width: "900",
              height: "450",
              playerVars: {
                autoplay: 1, 
                rel: 0,
                modestbranding: 1 
              }
            }}
          />
          <div className="notiRegi_txt notoReg fs-28">
            검은 코뿔소
          </div>
          <div className="notiRegi_tex notoReg fs-18">
            검은 코뿔소
          </div>
        </div>
      </div>
    </div>
  );
}

export default Animal1;
