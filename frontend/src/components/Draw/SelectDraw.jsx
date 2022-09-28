import React,{ useState } from "react";
import "./SelectDraw.scss";



import egg1 from '@images/eggs/egg1.png'
import egg2 from '@images/eggs/egg2.png'
import egg3 from '@images/eggs/egg3.png'
import egg4 from '@images/eggs/egg4.png'
import egg5 from '@images/eggs/egg5.png'
import egg6 from '@images/eggs/egg6.png'
import egg7 from '@images/eggs/egg7.png'
import egg8 from '@images/eggs/egg8.png'
import egg9 from '@images/eggs/egg9.png'
import egg10 from '@images/eggs/egg10.png'
import egg11 from '@images/eggs/egg11.png'
import egg12 from '@images/eggs/egg12.png'
import egg13 from '@images/eggs/egg13.png'
import egg14 from '@images/eggs/egg14.png'
import egg15 from '@images/eggs/egg15.png'
import egg16 from '@images/eggs/egg16.png'
import egg17 from '@images/eggs/egg17.png'
import egg18 from '@images/eggs/egg18.png'
import egg19 from '@images/eggs/egg19.png'
import egg20 from '@images/eggs/egg20.png'
import egg21 from '@images/eggs/egg21.png'
import egg22 from '@images/eggs/egg22.png'
import egg23 from '@images/eggs/egg23.png'
import egg24 from '@images/eggs/egg24.png'

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
            <img className="drawImg" src={egg1} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">북극곰</h1>
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
            <img className="drawImg" src={egg2} alt="#" />
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
            <img className="drawImg" src={egg3} alt="#" />
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
            <img className="drawImg" src={egg4} alt="#" />
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
            <img className="drawImg" src={egg5} alt="#" />
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
            <img className="drawImg" src={egg6} alt="#" />
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
            <img className="drawImg" src={egg7} alt="#" />
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
            <img className="drawImg" src={egg8} alt="#" />
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
            <img className="drawImg" src={egg9} alt="#" />
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
            <img className="drawImg" src={egg10} alt="#" />
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
            <img className="drawImg" src={egg11} alt="#" />
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
            <img className="drawImg" src={egg12} alt="#" />
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
            <img className="drawImg" src={egg13} alt="#" />
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
            <img className="drawImg" src={egg14} alt="#" />
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
            <img className="drawImg" src={egg15} alt="#" />
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
            <img className="drawImg" src={egg16} alt="#" />
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
            <img className="drawImg" src={egg17} alt="#" />
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
            <img className="drawImg" src={egg18} alt="#" />
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
            <img className="drawImg" src={egg19} alt="#" />
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
            <img className="drawImg" src={egg20} alt="#" />
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
            <img className="drawImg" src={egg21} alt="#" />
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
            <img className="drawImg" src={egg22} alt="#" />
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
            <img className="drawImg" src={egg23} alt="#" />
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
            <img className="drawImg" src={egg24} alt="#" />
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
