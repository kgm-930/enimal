import React, { useState } from "react";
import "@components/common/Modal.scss";
import "./ChangeMoney.scss";

import { faDownLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ChangeMoney(props) {
  const { open, close } = props;
  const [donaPer, setDonaPer] = useState(10);
  const [cash, setCash] = useState(100);
  console.log(donaPer);
  const SAVE = (cash * (100 - donaPer)) / 100; // 여기에 전환비율 곱하기
  const donateCash = (cash * donaPer)/100; // 기부금 표시해주는 게 좋을 것 같아서


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
            기부 비율 조정
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
            <div>
              <h3 className="fs-15 notoBold">충전 주의사항</h3>
              <ul>
                <li className="fs-12">
                  기본적으로 SSF의 10%가 멸종 위기 동물 지원 단체에 기부되고 기부 비율 조정 시 추가로 SSF가 기부됩니다
                </li>
                <li className="fs-12">
                  충전 시 환불되지 않습니다
                </li>
                <li className="fs-12">
                  추가 기부는 충전 시에만 가능합니다
                </li>

              </ul>
            </div>
          </main>
          <footer>
            <button
              type="button"
              className="changeButton fs-24 notoBold"
              onClick={close}
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
