import React from "react";
import './AllDraw.scss'

import TEST from '@images/test.png'

function AllDraw() {

  return (
    <div className="AllDraw">
      <div className="CardList flex raw">
        <div className="drawCard col-2">
          <img className="drawImg" src={TEST} alt="#" />
          <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
        </div>
        <div className="drawCard col-2">
          <img className="drawImg" src={TEST} alt="#" />
          <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
        </div>
        <div className="drawCard col-2">
          <img className="drawImg" src={TEST} alt="#" />
          <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
        </div>
        <div className="drawCard col-2">
          <img className="drawImg" src={TEST} alt="#" />
          <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
        </div>
        <div className="drawCard col-2">
          <img className="drawImg" src={TEST} alt="#" />
          <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
        </div>
        <div className="drawCard col-2">
          <img className="drawImg" src={TEST} alt="#" />
          <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
        </div>
        <div className="drawCard">
          <img className="drawImg" src={TEST} alt="#" />
          <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
        </div>
        <div className="drawCard">
          <img className="drawImg" src={TEST} alt="#" />
          <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
        </div>
        <div className="drawCard">
          <img className="drawImg" src={TEST} alt="#" />
          <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
        </div>
        <div className="drawCard">
          <img className="drawImg" src={TEST} alt="#" />
          <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
        </div>
        <div className="drawCard">
          <img className="drawImg" src={TEST} alt="#" />
          <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
        </div>
        <div className="drawCard">
          <img className="drawImg" src={TEST} alt="#" />
          <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
        </div>
        <div className="drawCard">
          <img className="drawImg" src={TEST} alt="#" />
          <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
        </div>
        <div className="drawCard">
          <img className="drawImg" src={TEST} alt="#" />
          <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
        </div>
        <div className="drawCard">
          <img className="drawImg" src={TEST} alt="#" />
          <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
        </div>
        <div className="drawCard">
          <img className="drawImg" src={TEST} alt="#" />
          <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
        </div>
        <div className="drawCard">
          <img className="drawImg" src={TEST} alt="#" />
          <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
        </div>
        <div className="drawCard">
          <img className="drawImg" src={TEST} alt="#" />
          <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
        </div>
        <div className="drawCard">
          <img className="drawImg" src={TEST} alt="#" />
          <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
        </div>
        <div className="drawCard">
          <img className="drawImg" src={TEST} alt="#" />
          <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
        </div>
        <div className="drawCard">
          <img className="drawImg" src={TEST} alt="#" />
          <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
        </div>
        <div className="drawCard">
          <img className="drawImg" src={TEST} alt="#" />
          <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
        </div>
        <div className="drawCard">
          <img className="drawImg" src={TEST} alt="#" />
          <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
        </div>
        <div className="drawCard">
          <img className="drawImg" src={TEST} alt="#" />
          <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
        </div>
      </div>
      <button className="drawButton fs-28 notoBold" id="collection" type="button">전체 뽑기 (가격)</button>
      <div>
        <h1 className="fs-24 notoBold drawNotice">뽑기를 통해 컬렉션을 수집해보세요.</h1>
        <h1 className="fs-24 notoBold drawNotice">전체 뽑기는 216종류의 조각이 중 하나의 조각이 일정 확률로 등장합니다.</h1>
        <h3 className="fs-18 notoMid drawNotice drawNotice2">보유중인 업적에 따라 미보유중인 조각이 등장할 확률이 상승합니다.</h3>
      </div>
    </div>
  )
}
export default AllDraw;
