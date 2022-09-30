import React, { useState, useEffect } from "react";
import './Charge.scss'
import { chargeSave } from '@apis/account'
import {charge} from '@apis/sendTx'

const Web3 = require("web3");
const {ABI} = require('@apis/ABI')

function Charge(props) {
  // 충전 모달
  const { open, close } = props;
  
  // 공통
  // 충전할 SSF
  const [amount, setAmount] = useState(null);
  // 충전되는 save
  const [save, setSave] = useState(null);
  // 기부되는 SSF
  const [donateAmount, setDonate] = useState(null);
  // 충전되는 SSF (충전할 양 = 기부 SSF + 충전 SSF)
  const [chargedSSF, setSSF] = useState(null);
  
  
  // 기부 비율
  const [donateRatio, setRatio] = useState(0.1);
  // 기부 save (기부 save + 충전 save = 전체 save)
  // const [donateSave, setDonateSave] = useState(0.1);
  

  // 현재 사용자 계좌
  const userAddress = localStorage.getItem('myAddress')
  // 관리자 계좌
  const adminAddress = ''


  const web3 = new Web3(new Web3.providers.HttpProvider('http://20.196.209.2:8545/'))
  // const web3 = new Web3(new Web3.providers.HttpProvider(process.env.REACT_APP_ETHEREUM_RPC_URL))
  const abi = ABI.CONTRACT_ABI.SSAFY_TOKEN_ABI
  // 임시로 하드코딩
  const CA = '0xb09d0879D6F9f48FFb09a4B0001c351dF6e1f2Ca'
  const ssafyTokenContract = new web3.eth.Contract(abi, CA)
  
  // SSF 전환금액 입력 시
  function inputAmount(e) {
    console.log(e.target.value)
    setAmount(e.target.value)
  }

  // 기부 SAVE 또는 기부 비율
  function inputDonate(e) {
    console.log(e.target.value)
    // 기부 비율
    setRatio(e.target.value)

    // 기부 save
    // setDonateSave(e.target.value)
  }

  // 수정 필요!!
  //* 100 SSF => 1000 SAVE (10% 기부) / 90 SSF => 1000 SAVE
  function changeValue() {
    //* 1. 기부금을 SSF의 % 단위로 받을 때 (20%, 30%)
    setDonate(amount * donateRatio)
    const profit = amount - donateAmount
    //* 전환된 재화 - 소수점 올림? 내림? 반올림? (80 SSF => 1000 * 80 / 90 => 888.88... SAVE)
    setSave(Math.round(profit * 100 / 9))

    //* 2. 기부금을 SAVE 단위로 받을 때
    //* 전환된 save - 소수점 올림? 내림? 반올림? (100 SAVE => 100 * 90 / 1000 => 9 SSF)
    setSave(save - donateAmount)
    setSSF(Math.round(save * 9/100))
    setDonate(amount - chargedSSF)
  }
  // 1. 기부 비율 변화 시 -> save, 기부되는 SSF 변경
  // 기부금 변화 시 -> save, 기부되는 SSF 변경
  useEffect(changeValue, [amount, donateRatio])

  // 2. 추가 기부 save 변화 시 -> save, 기부되는 SSF 변경
  // 기부금 변화 시 -> save, 기부되는 SSF 변경
  useEffect(changeValue, [amount, donateAmount])
  
  function ssfToSave() {
    //* 사용자가 충전 버튼 누르면(onClick) -> 스마트 컨트랙트 호출 -> 성공 시 충전
    ssafyTokenContract.methods.forceToTransfer(userAddress, adminAddress, amount).send({from:userAddress})
      .on(() => {
        // 스마트 컨트랙트 호출 함수
        let privateKey
        charge(userAddress, amount, privateKey)
        const DATA = {
          donateAmount,
          save
        }
        chargeSave(DATA).then(() => {
          alert('충전되었습니다')
          // 충전 금액도 알려주는 게 좋을까
        // Navbar 충전 금액 변경
        }).catch(() => {
          alert('충전에 실패했습니다')
        })
      })
  }

  return (
    <div className={open? 'openModal modal' : 'modal' }>
      {open? (
        <section className="loginModal">
          <header>
            <h1 className='titleText fs-24 notoBold'>충전 하기</h1>
          </header>
          <main>
            <div>
              <h1 className="fs-20 roBold">충전 금액</h1>
              <input type="text" className="textInput" onChange={e => inputAmount(e)} /> SSF
              화살표
              <input type="text" value={save} /> SAVE
            </div>
            <div>
              <h1 className="fs-20 roBold">기부 비율/ 추가 기부 SAVE</h1>
              <input type="text" className="textInput" onChange={e => inputDonate(e)}/> SAVE / %
            </div>
            <h1 className="fs-20 roBold">기부되는 SSF</h1>
            <input value={donateAmount} /> SSF
          </main>
          <footer>
            <button type="button" className="submitButton fs-18 notoMid" onClick={ssfToSave}>충전</button>
            <button type="button" className="cancleButton fs-18 notoMid" onClick={close}>
            취소</button>
            <p>
              <h3>충전 주의사항</h3>
              <ul>
                <li>
                  추가 기부(기부 비율 조정)를 하지 않을 시에는 SSF의 10%가 기부됩니다
                </li>
                <li>
                  추가 기부를 할 시에는 사용자가 설정한 비율에 해당하는 SSF(사용자가 기부한 SAVE * 비율 SSF)가 기부됩니다
                </li>
                <li>
                  충전 시 환불되지 않습니다
                </li>
                <li>
                  기부금은 멸종 위기 동물 지원 단체에 기부합니다
                </li>
                <li>
                  SAVE 기부는 충전 시에만 가능합니다 (추후 기부 불가)
                </li>

              </ul>
            </p>
          </footer>
        </section>
    ) : null}
    </div>
  )
}

export default Charge;

