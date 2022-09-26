import React,{ useState } from "react";
import './MyPage.scss'
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



import UserInfo from "@components/MyPage/UserInfo";
import Check from "@components/MyPage/Check";
import PointHistory from "@components/MyPage/PointHistory";
import MyArticle from "@components/MyPage/MyArticle";

import BaseImg from '../assets/images/base.png'

function MyPage() {
  const [Tab,setTab] = useState('info')
  const tabList = ['info','check','point','article']

  let MyPageTab = null
  if (Tab === 'info') {
    MyPageTab = <UserInfo /> 
  } else if(Tab === 'check') {
    MyPageTab = <Check />
  } else if(Tab === 'point') {
    MyPageTab = <PointHistory />
  } else {
    MyPageTab = <MyArticle />
  }

  function TabChange(e){
    setTab(e.target.id)
    for (let i=0; i<4; i+=1) {
      if (e.target.id === tabList[i]){
        document.getElementById(tabList[i]).className = 'mypageTabA'
      }
      else {
        document.getElementById(tabList[i]).className = 'mypageTabB'
      }
    }
  }

  return (
    <div className="MyPage">
      <div className="flex">
        <img className="profileImg" src={BaseImg} alt="#" />
        <h1 className="fs-40 roBold userNick">HaengSong</h1>
        <FontAwesomeIcon className="Gear" icon={faGear} />
        <button className="deleteButton fs-15 notoReg" type="button">회원 탈퇴</button>
      </div>
      <hr />

      <div className="flex">
        <button className="mypageTabA" onClick={e=> TabChange(e)} id="info" type="button">기본정보</button>
        <button className="mypageTabB" onClick={e=> TabChange(e)} id="check" type="button">출석현황</button>
        <button className="mypageTabB" onClick={e=> TabChange(e)} id="point" type="button">환전내역</button>
        <button className="mypageTabB" onClick={e=> TabChange(e)} id="article" type="button">내가 작성한 글</button>
      </div>

      {MyPageTab}
    </div>
  )
}
export default MyPage;
