import React, { useState, useEffect } from "react";
import './MyNFT.scss'

import { getMyNFT } from "@apis/mypage";

import NFTtest from '@images/NFTtest.jpg'

function MyNFT(props) {
  const { userId } = props;
  const [myNFT, setMyNFT] = useState([]);
  console.log(userId)

  useEffect(() => {
    getMyNFT(userId).then(res => {
      console.log(res)
      setMyNFT(res.data)
    })
  }, [])
  console.log(myNFT)
  return (
    <div>
      <h1 className="fs-40 notoBold myCollection">보유중인 컬렉션</h1>
      <ul className="NFTList">
        {myNFT.map(nft => {
          console.log(nft)
          return (
            <li className="NFTcard">
              <img className="NFTImg" src={NFTtest} alt="#" />
              <h1 className="fs-32 notoBold my-3">숲속의 사슴</h1>
              <div className="flex justify-center">
                <h1 className="fs-18 roThin">Made by</h1>
                <h1 className="fs-18 mx-2 roMid">{localStorage.MyNick}</h1>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default MyNFT;