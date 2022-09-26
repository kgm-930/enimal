import React,{ useState } from "react";
import './AllDraw.scss'


import { enimalList } from "@apis/treatImg";
import TEST from '@images/test.png'
import DrawModal from "./DrawModal";

function AllDraw() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  function drawButton(e){
    e.preventDefault();
    openModal()
  }

  return (
    <div className="AllDraw">
      <div className="CardList flex raw">
        {enimalList.map((enimal, index) => (
          <div className="drawCard col-2" key={enimal}>
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">{enimal}</h1>
          </div>
        ))}
      </div>
      <button className="drawButton fs-28 notoBold" onClick={e=>drawButton(e)} id="collection" type="button">전체 뽑기 (가격)</button>
      <div>
        <h1 className="fs-24 notoBold drawNotice">뽑기를 통해 컬렉션을 수집해보세요.</h1>
        <h1 className="fs-24 notoBold drawNotice">전체 뽑기는 216종류의 조각이 중 하나의 조각이 일정 확률로 등장합니다.</h1>
        <h3 className="fs-18 notoMid drawNotice drawNotice2">보유중인 업적에 따라 미보유중인 조각이 등장할 확률이 상승합니다.</h3>
      </div>
      <DrawModal open={modalOpen} close={closeModal} />
    </div>
  )
}
export default AllDraw;
