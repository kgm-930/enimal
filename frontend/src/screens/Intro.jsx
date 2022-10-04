import React from "react";
import "./intro.scss"

import walletPic from "@assets/images/wallet.png"
import right from "@assets/icons/south_east_black_24dp.svg"

function Intro() {
  return (
    <>
      <div className="intropg1">
        <div className="container">
          <div className="intropg1_title notoBold fs-60">
            Enimal
          </div>
          <div className="intropg1_con1 notoBold fs-28">
            사라지고 있는 동물을 도와주세요!
          </div>
          <div className="intropg1_con2 notoBold fs-28">
            SSF를 충전해서 Save로 환전한 뒤 멸종동물 NFT 카드를 수집 해 보세요.
          </div>
          <div className="intropg1_con3 notoBold fs-28">
            뽑기를 통해 멸종 동물 조각을 모두 모으면 NFT 기반의 멸종동물 이미지 카드를 드립니다!
          </div>
          <div className="intropg1_con4 notoBold fs-28">
            SSF를 충전해서 기부를 할 수도 있어요!
          </div>
          <div className="intropg1_con5 notoBold fs-28">
            모인 SSF코인은 멸종 동물 관련 단체에 기부됩니다.
          </div>
          <div className="intropg1_btn flex">
            <button type="button" className="intropg1_btn_1 notoBold fs-24 flex justify-center align-center">지갑 연결</button>
            <button type="button" className="intropg1_btn_2 notoBold fs-24 flex justify-center align-center">뽑기</button>
          </div>
        </div>
      </div>
      <div className="intropg2">
        <div className="container">
          <div className="intropg2_name notoBold fs-48">
            HOW TO
          </div>
          <div className="intropg2_step1 flex">
            <div className="intropg2_step1_text1">
              <div className="intropg2_step1_text1_txt1 notoBold fs-36">
                1. 지갑을 개설해주세요
              </div>
              <div className="intropg2_step1_text1_txt2 notoReg fs-28">
                저희 서비스를 이용하기 위해서 지갑을 연동하고 닉네임을 설정 해주셔야 합니다!
              </div>
            </div>
            <div className="intropg2_step1_img">
              <img src={walletPic} alt="지갑연결" />
            </div>
          </div>
          <img src={right} alt="오른화살표" className="right" />
          <div className="intropg2_step1 flex">
            <div className="intropg2_step1_img">
              <img src={walletPic} alt="지갑연결" />
            </div>
            <div className="intropg2_step1_text3">
              <div className="intropg2_step1_text1_txt1 notoBold fs-36">
                2. SSF코인을 Save로 환전해주세요!
              </div>
              <div className="intropg2_step1_text1_txt2 notoReg fs-28">
                조각 뽑기를 위해 SSF코인을 Save재화로 환전 해주세요! 환전 과정에서 일정 금액의 SSF코인을 기부할 수 있습니다. 모인 기부금은 멸종동물보호단체에 기부됩니다. <br /><br />이외에도 출석체크, 오늘의 동물 영상 시청, 게시판 게시글 작성의 방법으로 Save를 획득할 수 있습니다. 
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Intro;
