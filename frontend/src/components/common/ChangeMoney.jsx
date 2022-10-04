import React, { useState } from "react";
import "@components/common/Modal.scss";
import "./ChangeMoney.scss";

import { faDownLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {charge} from "@apis/sendTx"
import {chargeSave} from "@apis/draw"

function ChangeMoney(props) {
  const { open, close } = props;
  const [donaPer, setDonaPer] = useState(10);
  const [cash, setCash] = useState(100);
  // console.log(donaPer);
  const SAVE = (cash * (100 - donaPer)) * 10;
  const donateCash = (cash * donaPer) / 100;
  const userAddress = localStorage.getItem('myAddress')
  const privateKey = '0x600378817757c4d816e1a04cbade8973b9b239e03757b72f227fda07804bd001'
  async function ssfToSave() {
    //* 사용자가 충전 버튼 누르면(onClick) -> 스마트 컨트랙트 호출(charge) -> 성공 시 충전
    // 스마트 컨트랙트 호출 -> 성공 여부 필요할까?
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
          alert('충전에 실패했습니다')
        })
      })
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
                value={cash}
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
              min="10"
              max="100"
              defaultValue="10"
              step="5"
            />
            <h1 className="fs-20 notoBold">
              전환 금액의 {donaPer}%인 {donateCash} SSF를 동물 보호 단체에 기부하겠습니다.
            </h1>
            <FontAwesomeIcon className="arrowDown" icon={faDownLong} />
            <div className="flex align-center cashInputSet">
              <div className="fs-32 notoBold saveBox">{SAVE}</div>
              <h1 className="fs-32 roBold mx-3">SAVE</h1>
            </div>
            <h3 className="fs-12 notoBold">
              기본 기부 비율은 10%로, 모인 기부금은 동물 후원 단체에 기부됩니다
            </h3>
            <h3 className="fs-12 notoBold">
              전환된 SAVE는 SSF로 다시 전환할 수 없습니다
            </h3>
            <h3 className="fs-12 notoBold">
              기부 비율에 따라 전환되는 SAVE의 양이 달라집니다
            </h3>
            <h3 className="fs-12 notoBold">
              기부 비율 조정은 스크롤바를 이용해 할 수 있습니다
            </h3>
          </main>
          <footer>
            <button
              type="button"
              className="changeButton fs-24 notoBold"
              onClick={ssfToSave}
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
