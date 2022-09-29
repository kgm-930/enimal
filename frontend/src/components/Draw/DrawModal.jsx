import React from "react";
import { useNavigate } from "react-router-dom";

import '@components/common/Modal.scss'
import './DrawModal.scss'

import DrawSlide from "./DrawSlide";


function DrawModal(props){
  const { open, close,piece } = props;
  const navigate = useNavigate();

  function goMypage(){
    navigate(`/mypage/${localStorage.MyNick}`);
  }

  return (
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <header>
            <h1 className='fs-24 notoBold'>동물 조각 뽑기</h1>
          </header>

         
          <main>
            <div className="DrawBox">
              <DrawSlide piece={piece} />
            </div>
          </main>
          <footer>
            <button type="button" className="fs-18 notoBold drawModalButton" onClick={goMypage}>
              마이페이지로 이동
            </button>
            <button type="button" className="fs-18 notoBold drawModalButton2" onClick={close}>
              닫기
            </button>
          </footer>
        </section>
      ) : null}
      </div>
  )
}

export default DrawModal;