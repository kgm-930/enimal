import React, { useState } from "react";
import './Login.scss'
import { SsfToSave } from '@apis/account'
import axios from 'axios'

const Web3 = require("web3");
const {ABI} = require('./ABI')

function Charge(props) {
  // const { open, close } = props;
  const [amount, setAmount] = useState(null);
  const [donateRatio, setRatio] = useState(0.1);
  const [save, setSave] = useState(null);
  const [donateAmount, setDonate] = useState(null);
  const [chargedSSF, setSSF] = useState(null);
  const myKey = localStorage.getItem('myAddress')





  const web3 = new Web3(new Web3.providers.HttpProvider('http://20.196.209.2:8545/'))
  // const web3 = new Web3(new Web3.providers.HttpProvider(process.env.REACT_APP_ETHEREUM_RPC_URL))
  const abi = ABI.CONTRACT_ABI.SSAFY_TOKEN_ABI
  // 임시로 하드코딩
  const CA = '0xb09d0879D6F9f48FFb09a4B0001c351dF6e1f2Ca'
  const ssafyTokenContract = new web3.eth.Contract(abi, CA)
  
  const adminAddress = localStorage.token
  
  //* 기부금을 % 단위로 받을 때 (20%, 30%)
  function calculator(amount, donateRatio=0.1) {
    //* 20% 기부 비율 & amount 100 SSF (100 SSF -> 10 SSF 기부/ 90 SSF-> 1000 SAVE, 기본 기부 비율 10%라 가정)
    const donateAmount = amount * donateRatio
    const profit = amount - donateAmount
    //* 전환된 재화 - 소수점 올림? 내림? 반올림? (80 SSF => 1000 * 80 / 90 => 888.88... SAVE)
    const save = Math.round(profit * 100 / 9)
    
    //* 사용자가 충전 버튼 누르면(onClick) -> 스마트 컨트랙트 호출 -> 성공 시 충전
    ssafyTokenContract.methods.forceToTransfer(userAddress, adminAddress, amount).send({from:userAddress})
      .on(() => {
        charge(donateAmount, save)
      })
  
  
  //* 기부금을 SAVE 단위로 받을 때
  function calculator(amount, save) {
    //* 100 SAVE 기부금 & amount 100 SSF (100 SSF -> 1000 SAVE, 기본 기부 비율 10%라 가정)
    //* 전환된 save - 소수점 올림? 내림? 반올림? (80 SSF => 1000 * 80 / 90 => 888.88... SAVE)
    const chargedSSF = Math.round(save * 9/100)
    const donateAmount = amount - chargedSSF
    
    //* 사용자가 충전 버튼 누르면 -> 스마트 컨트랙트 호출 -> 성공 시 충전
    ssafyTokenContract.methods.forceToTransfer(userAddress, adminAddress, amount).send({from:userAddress})
      .on(() => {
        charge(donateAmount, save)
      })
  }
  
  
  function charge(donateAmount, save) {
      axios({
        url: '/credit',
        method: 'post',
        data: {donateAmount, save},
        headers: {
          
        }
      })
        .then((res) => {
          alert('충전되었습니다')
          // Navbar충전 금액 변경
        })
        .catch((err) => {
          alert('충전에 실패했습니다')
        })
      
    }
  }
  return (
    <div>

    </div>
  )
}

    

