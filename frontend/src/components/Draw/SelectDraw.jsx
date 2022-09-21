import React,{ useState } from "react";
import "./SelectDraw.scss";


import TEST from "@images/test.png";
import DrawModal from "./DrawModal";

function SelectDraw() {
  const [selectImg,setSelectImg] = useState(null)

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  function drawButton(e){
    e.preventDefault();
    console.log(1234)
    openModal()
  }

  function select(e) {
    e.preventDefault();
    if (selectImg) {
      document.getElementById(selectImg).parentElement.className="drawCard2";
    }
    setSelectImg(e.currentTarget.id)

  }

  function mouseover(e) {
    document.getElementById(e.currentTarget.id).parentElement.className="selectedCard";
  }
  function unSelect(e){
    if (selectImg !== e.currentTarget.id){
      document.getElementById(e.currentTarget.id).parentElement.className="drawCard2";
    }
 
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
            onMouseOver={e => mouseover(e)}
            onBlur={()=>1}
            onMouseLeave={e =>unSelect(e)}
            onClick={e=>select(e)}
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
            onMouseOver={e => mouseover(e)}
            onBlur={()=>1}
            onMouseLeave={e =>unSelect(e)}
            onClick={e=>select(e)}
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
            onMouseOver={e => mouseover(e)}
            onBlur={()=>1}
            onMouseLeave={e =>unSelect(e)}
            onClick={e=>select(e)}
          >
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </button>
        </div>
        <div className="drawCard2">
          <button
            className="selectbutton"
            type="button"
            id="4"
            onFocus={() => 1}
            onMouseOver={e => mouseover(e)}
            onBlur={()=>1}
            onMouseLeave={e =>unSelect(e)}
            onClick={e=>select(e)}
          >
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </button>
        </div>
        <div className="drawCard2">
          <button
            className="selectbutton"
            type="button"
            id="5"
            onFocus={() => 1}
            onMouseOver={e => mouseover(e)}
            onBlur={()=>1}
            onMouseLeave={e =>unSelect(e)}
            onClick={e=>select(e)}
          >
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </button>
        </div>
        <div className="drawCard2">
          <button
            className="selectbutton"
            type="button"
            id="6"
            onFocus={() => 1}
            onMouseOver={e => mouseover(e)}
            onBlur={()=>1}
            onMouseLeave={e =>unSelect(e)}
            onClick={e=>select(e)}
          >
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </button>
        </div>
        <div className="drawCard2">
          <button
            className="selectbutton"
            type="button"
            id="7"
            onFocus={() => 1}
            onMouseOver={e => mouseover(e)}
            onBlur={()=>1}
            onMouseLeave={e =>unSelect(e)}
            onClick={e=>select(e)}
          >
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </button>
        </div>
        <div className="drawCard2">
          <button
            className="selectbutton"
            type="button"
            id="8"
            onFocus={() => 1}
            onMouseOver={e => mouseover(e)}
            onBlur={()=>1}
            onMouseLeave={e =>unSelect(e)}
            onClick={e=>select(e)}
          >
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </button>
        </div>
        <div className="drawCard2">
          <button
            className="selectbutton"
            type="button"
            id="9"
            onFocus={() => 1}
            onMouseOver={e => mouseover(e)}
            onBlur={()=>1}
            onMouseLeave={e =>unSelect(e)}
            onClick={e=>select(e)}
          >
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </button>
        </div>
        <div className="drawCard2">
          <button
            className="selectbutton"
            type="button"
            id="10"
            onFocus={() => 1}
            onMouseOver={e => mouseover(e)}
            onBlur={()=>1}
            onMouseLeave={e =>unSelect(e)}
            onClick={e=>select(e)}
          >
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </button>
        </div>
        <div className="drawCard2">
          <button
            className="selectbutton"
            type="button"
            id="11"
            onFocus={() => 1}
            onMouseOver={e => mouseover(e)}
            onBlur={()=>1}
            onMouseLeave={e =>unSelect(e)}
            onClick={e=>select(e)}
          >
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </button>
        </div>
        <div className="drawCard2">
          <button
            className="selectbutton"
            type="button"
            id="12"
            onFocus={() => 1}
            onMouseOver={e => mouseover(e)}
            onBlur={()=>1}
            onMouseLeave={e =>unSelect(e)}
            onClick={e=>select(e)}
          >
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </button>
        </div>
        <div className="drawCard2">
          <button
            className="selectbutton"
            type="button"
            id="13"
            onFocus={() => 1}
            onMouseOver={e => mouseover(e)}
            onBlur={()=>1}
            onMouseLeave={e =>unSelect(e)}
            onClick={e=>select(e)}
          >
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </button>
        </div>
        <div className="drawCard2">
          <button
            className="selectbutton"
            type="button"
            id="14"
            onFocus={() => 1}
            onMouseOver={e => mouseover(e)}
            onBlur={()=>1}
            onMouseLeave={e =>unSelect(e)}
            onClick={e=>select(e)}
          >
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </button>
        </div>
        <div className="drawCard2">
          <button
            className="selectbutton"
            type="button"
            id="15"
            onFocus={() => 1}
            onMouseOver={e => mouseover(e)}
            onBlur={()=>1}
            onMouseLeave={e =>unSelect(e)}
            onClick={e=>select(e)}
          >
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </button>
        </div>
        <div className="drawCard2">
          <button
            className="selectbutton"
            type="button"
            id="16"
            onFocus={() => 1}
            onMouseOver={e => mouseover(e)}
            onBlur={()=>1}
            onMouseLeave={e =>unSelect(e)}
            onClick={e=>select(e)}
          >
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </button>
        </div>
        <div className="drawCard2">
          <button
            className="selectbutton"
            type="button"
            id="17"
            onFocus={() => 1}
            onMouseOver={e => mouseover(e)}
            onBlur={()=>1}
            onMouseLeave={e =>unSelect(e)}
            onClick={e=>select(e)}
          >
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </button>
        </div>
        <div className="drawCard2">
          <button
            className="selectbutton"
            type="button"
            id="18"
            onFocus={() => 1}
            onMouseOver={e => mouseover(e)}
            onBlur={()=>1}
            onMouseLeave={e =>unSelect(e)}
            onClick={e=>select(e)}
          >
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </button>
        </div>
        <div className="drawCard2">
          <button
            className="selectbutton"
            type="button"
            id="19"
            onFocus={() => 1}
            onMouseOver={e => mouseover(e)}
            onBlur={()=>1}
            onMouseLeave={e =>unSelect(e)}
            onClick={e=>select(e)}
          >
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </button>
        </div>
        <div className="drawCard2">
          <button
            className="selectbutton"
            type="button"
            id="20"
            onFocus={() => 1}
            onMouseOver={e => mouseover(e)}
            onBlur={()=>1}
            onMouseLeave={e =>unSelect(e)}
            onClick={e=>select(e)}
          >
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </button>
        </div>
        <div className="drawCard2">
          <button
            className="selectbutton"
            type="button"
            id="21"
            onFocus={() => 1}
            onMouseOver={e => mouseover(e)}
            onBlur={()=>1}
            onMouseLeave={e =>unSelect(e)}
            onClick={e=>select(e)}
          >
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </button>
        </div>
        <div className="drawCard2">
          <button
            className="selectbutton"
            type="button"
            id="22"
            onFocus={() => 1}
            onMouseOver={e => mouseover(e)}
            onBlur={()=>1}
            onMouseLeave={e =>unSelect(e)}
            onClick={e=>select(e)}
          >
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </button>
        </div>
        <div className="drawCard2">
          <button
            className="selectbutton"
            type="button"
            id="23"
            onFocus={() => 1}
            onMouseOver={e => mouseover(e)}
            onBlur={()=>1}
            onMouseLeave={e =>unSelect(e)}
            onClick={e=>select(e)}
          >
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </button>
        </div>
        <div className="drawCard2">
          <button
            className="selectbutton"
            type="button"
            id="24"
            onFocus={() => 1}
            onMouseOver={e => mouseover(e)}
            onBlur={()=>1}
            onMouseLeave={e =>unSelect(e)}
            onClick={e=>select(e)}
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
        onClick={e=>drawButton(e)}
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
      <DrawModal open={modalOpen} close={closeModal} header={selectImg} />
    </div>
  );
}
export default SelectDraw;
