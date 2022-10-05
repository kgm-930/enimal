import React, { useState } from "react";
import "@components/common/Modal.scss";
import "./ChangeMoney.scss";

import { faDownLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import { charge, revertCharge } from "@apis/sendTx"
import { chargeSave } from "@apis/draw"

function ChangeMoney(props) {
  const { open, close } = props;
  const [donaPer, setDonaPer] = useState(10);
  const [cash, setCash] = useState(0);
  const SAVE = (cash * (100 - donaPer)) * 10;

  const userAddress = localStorage.getItem('myAddress')
  const privateKey = '0x600378817757c4d816e1a04cbade8973b9b239e03757b72f227fda07804bd001'
  async function ssfToSave(e) {
    e.preventDefault();
    if (Number(cash) <= Number(localStorage.ssf)) {
      await charge(userAddress, cash, privateKey)
        .then(async () => {
          // 백에 데이터 보냄
          const PARAMS = {
            percent: donaPer,
            firstCredit: cash * 1000,
          }
          await chargeSave(PARAMS).then(async () => {
            await alert('충전되었습니다')
            setCash(100)
            close()
          }).catch(() => {
            revertCharge(userAddress, cash)
            alert('충전에 실패했습니다')
          })
        })
    }
    else {
      alert("SSF 코인이 부족합니다!")
    }
  }



  return (
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section className="cashModal">
          <header>
            <h1 className="titleText fs-28">재화 전환</h1>
          </header>

          <main className="cashMain">
            <div className="flex align-center cashInputSet">
              <input
                className="cashInput fs-32 notoBold"
                onChange={e => setCash(e.target.value)}
                type="text"
              />
              <h1 className="fs-32 roBold mx-3">SSF</h1>
            </div>
            <input
              type="range"
              id="inputSlider"
              className="donaRange"
              onChange={e => setDonaPer(e.target.value)}
              min="0"
              max="100"
              defaultValue="10"
              step="5"
            />
            <h1 className="fs-20 notoBold">
              전환 금액의 {donaPer}%는 동물 보호 단체에 기부하겠습니다.
            </h1>
            <FontAwesomeIcon className="arrowDown" icon={faDownLong} />
            <div className="flex align-center cashInputSet">
              <div className="fs-32 notoBold saveBox">{SAVE}</div>
              <h1 className="fs-32 roBold mx-3">SAVE</h1>
            </div>
          </main>
          <footer>
            <button
              type="button"
              className="changeButton fs-24 notoBold"
              onClick={e=>ssfToSave(e)}
            >
              충전하기
            </button>
            <button
              type="button"
              className="closeButton fs-24 notoBold"
              onClick={close}
            >
              취소하기
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
}

export default ChangeMoney;
