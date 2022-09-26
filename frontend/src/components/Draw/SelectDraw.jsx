import React,{ useState } from "react";
import "./SelectDraw.scss";

import { enimalList } from "@apis/treatImg";
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
        {enimalList.map((enimal, index) => (
          <div className="drawCard2" key={enimal}>
            <button
              className="selectbutton"
              type="button"
              id={index+1}
              onFocus={() => 1}
              onMouseOver={e => mouseover(e)}
              onBlur={()=>1}
              onMouseLeave={e =>unSelect(e)}
              onClick={e=>select(e)}
              >
              <img className="drawImg" src={TEST} alt="#" />
              <h2 className="fs-20 notoBold drawTitle">{enimal}</h2>
            </button>
          </div>
          ))}
        
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
