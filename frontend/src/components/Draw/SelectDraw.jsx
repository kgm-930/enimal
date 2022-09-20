import React from "react";
import "./SelectDraw.scss";

import TEST from "@images/test.png";

function SelectDraw() {
  function select(e) {
    document.getElementById(e.currentTarget.id).parentElement.className="selectedCard";
  }
  function unSelect(e){
    document.getElementById(e.currentTarget.id).parentElement.className="drawCard2";
  }
  return (
    <div className="SelectDraw">
      <div className="CardList flex raw">
        <div className="drawCard2">
          <button
            className="selectbutton"
            type="button"
            id="1"
            onFocus={() => 1}
            onMouseOver={e => select(e)}
            onBlur={()=>1}
            onMouseLeave={e =>unSelect(e)}
          >
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </button>
        </div>
        <div className="drawCard2">
          <button
            className="selectbutton"
            type="button"
            id="2"
            onFocus={() => 1}
            onMouseOver={e => select(e)}
            onBlur={()=>1}
            onMouseLeave={e =>unSelect(e)}
          >
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </button>
        </div>
        <div className="drawCard2">
          <button
            className="selectbutton"
            type="button"
            id="3"
            onFocus={() => 1}
            onMouseOver={e => select(e)}
            onBlur={()=>1}
            onMouseLeave={e =>unSelect(e)}
          >
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </button>
        </div>
        <div className="drawCard2">
          <button
            className="selectbutton"
            type="button"
            onClick={e => {
              select(e);
            }}
          >
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </button>
        </div>
        <div className="drawCard2">
          <button
            className="selectbutton"
            type="button"
            onClick={e => {
              select(e);
            }}
          >
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </button>
        </div>
        <div className="drawCard2">
          <button
            className="selectbutton"
            type="button"
            onClick={e => {
              select(e);
            }}
          >
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </button>
        </div>
        <div className="drawCard2">
          <button
            className="selectbutton"
            type="button"
            onClick={e => {
              select(e);
            }}
          >
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </button>
        </div>
        <div className="drawCard2">
          <button
            className="selectbutton"
            type="button"
            onClick={e => {
              select(e);
            }}
          >
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </button>
        </div>
        <div className="drawCard2">
          <button
            className="selectbutton"
            type="button"
            onClick={e => {
              select(e);
            }}
          >
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </button>
        </div>
        <div className="drawCard2">
          <button
            className="selectbutton"
            type="button"
            onClick={e => {
              select(e);
            }}
          >
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </button>
        </div>
        <div className="drawCard2">
          <button
            className="selectbutton"
            type="button"
            onClick={e => {
              select(e);
            }}
          >
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </button>
        </div>
        <div className="drawCard2">
          <button
            className="selectbutton"
            type="button"
            onClick={e => {
              select(e);
            }}
          >
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </button>
        </div>
        <div className="drawCard2">
          <button
            className="selectbutton"
            type="button"
            onClick={e => {
              select(e);
            }}
          >
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </button>
        </div>
        <div className="drawCard2">
          <button
            className="selectbutton"
            type="button"
            onClick={e => {
              select(e);
            }}
          >
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </button>
        </div>
        <div className="drawCard2">
          <button
            className="selectbutton"
            type="button"
            onClick={e => {
              select(e);
            }}
          >
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </button>
        </div>
        <div className="drawCard2">
          <button
            className="selectbutton"
            type="button"
            onClick={e => {
              select(e);
            }}
          >
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </button>
        </div>
        <div className="drawCard2">
          <button
            className="selectbutton"
            type="button"
            onClick={e => {
              select(e);
            }}
          >
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </button>
        </div>
        <div className="drawCard2">
          <button
            className="selectbutton"
            type="button"
            onClick={e => {
              select(e);
            }}
          >
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </button>
        </div>
        <div className="drawCard2">
          <button
            className="selectbutton"
            type="button"
            onClick={e => {
              select(e);
            }}
          >
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </button>
        </div>
        <div className="drawCard2">
          <button
            className="selectbutton"
            type="button"
            onClick={e => {
              select(e);
            }}
          >
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </button>
        </div>
        <div className="drawCard2">
          <button
            className="selectbutton"
            type="button"
            onClick={e => {
              select(e);
            }}
          >
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </button>
        </div>
        <div className="drawCard2">
          <button
            className="selectbutton"
            type="button"
            onClick={e => {
              select(e);
            }}
          >
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </button>
        </div>
        <div className="drawCard2">
          <button
            className="selectbutton"
            type="button"
            onClick={e => {
              select(e);
            }}
          >
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </button>
        </div>
        <div className="drawCard2">
          <button
            className="selectbutton"
            type="button"
            onClick={e => {
              select(e);
            }}
          >
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </button>
        </div>
      </div>
      <button
        className="drawButton fs-28 notoBold"
        id="collection"
        type="button"
      >
        선택 뽑기 (가격)
      </button>
      <div>
        <h1 className="fs-24 notoBold drawNotice">
          뽑기를 통해 컬렉션을 수집해보세요.
        </h1>
        <h1 className="fs-24 notoBold drawNotice">
          선택 뽑기는 선택된 동물 9조각중 하나의 조각이 일정 확률로 등장합니다.
        </h1>
        <h3 className="fs-18 notoMid drawNotice drawNotice2">
          보유중인 업적에 따라 미보유중인 조각이 등장할 확률이 상승합니다.
        </h3>
      </div>
    </div>
  );
}
export default SelectDraw;
