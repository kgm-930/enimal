import React from "react";
import './MyNFT.scss'

import NFTtest from '@images/NFTtest.jpg'
import Test from '@images/test.png'


function MyNFT() {
  return (
    <div>
      <h1 className="fs-40 notoBold myCollection">보유중인 컬렉션</h1>
      <ul className="NFTList">
        <li className="NFTcard">
          <img className="NFTImg" src={NFTtest} alt="#" />
          <h1 className="fs-32 notoBold my-3">숲속의 사슴</h1>
          <div className="Made flex justify-center">
            <h1 className="fs-18 roThin">Made by</h1>
            <h1 className="fs-18 mx-2 roMid">HaengSong</h1>
          </div>
        </li>
        <li className="NFTcard">
          <img className="NFTImg" src={Test} alt="#" />
          <h1 className="fs-32 notoBold my-3">???????</h1>
          <div className="Made flex justify-center">
            <h1 className="fs-18 roThin">Made by</h1>
            <h1 className="fs-18 mx-2 roMid">HaengSong</h1>
          </div>
        </li>
        <li className="NFTcard">
          <img className="NFTImg" src={Test} alt="#" />
          <h1 className="fs-32 notoBold my-3">???????</h1>
          <div className="Made flex justify-center">
            <h1 className="fs-18 roThin">Made by</h1>
            <h1 className="fs-18 mx-2 roMid">HaengSong</h1>
          </div>
        </li>

      </ul>
    </div>
  )
}
export default MyNFT;