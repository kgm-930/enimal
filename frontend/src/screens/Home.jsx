// import React from 'react';
import React, { useState, useEffect } from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

import todayAnimall from "@assets/images/polarbear.jpg";
import { getTodayAnimal, getRankc, getRankd } from "@apis/home";

function Home() {


  // useEffect(() => {
  //   async function getAndSetTodayAnimal() {
  //     const res = await getTodayAnimal();
  //     setTodayAnimal(res.data);
  //   }
  //   getAndSetTodayAnimal();
  // }, []);

  // const name = todayAnimal.animal
  // console.log(todayAnimal)
  // // console.log(todayAnimal.animal)

  const [todayAnimal, setTodayAnimal] = useState(null);

  const [rankC, setRankC] = useState([]);
  const [rankD, setRankD] = useState([]);

  useEffect(() => {
    getTodayAnimal().then(res => {
      console.log(res);
      setTodayAnimal(res.data);
    });
    const PARAMS = { pageSize: 10, lastIdx: 0 }
    getRankd(PARAMS).then(res2 => {
      console.log(res2)
      setRankD(res2.data)
    });
    getRankc(PARAMS).then(res2 => {
      console.log(res2)
      setRankC(res2.data)
    });

  }, []);

  console.log(todayAnimal);

  const Route = {
    "검은코뿔소": "/notice/animal/1",
    "양쯔강돌고래": "/notice/animal/2",
    "저어새": "/notice/animal/3",
    "고라니": "/notice/animal/4",
    "하마": "/notice/animal/5",
    "뱀장어": "/notice/animal/6",
    "렛서판다": "/notice/animal/7",
    "우파루파": "/notice/animal/8",
    "자이언트판다": "/notice/animal/9",
    "북극곰": "/notice/animal/10",
    "수달": "/notice/animal/11",
    "바다거북": "/notice/animal/12",
    "안데스산고양이": "/notice/animal/13",
    "아시아코끼리": "/notice/animal/14",
    "강토끼": "/notice/animal/15",
    "고래상어": "/notice/animal/16",
    "오랑우탄": "/notice/animal/17",
    "상괭이": "/notice/animal/18",
    "검은발족제비": "/notice/animal/19",
    "듀공": "/notice/animal/20",
    "매": "/notice/animal/21",
    "두루미": "/notice/animal/22",
    "산양": "/notice/animal/23",
    "호랑이": "/notice/animal/24",
  }

  return (
    <>
      <div className="MainPage1 Page1">
        <div className="Page1Content">
          <h1 className="fs-32 notoBold my-3 page1FontColor">Enimal</h1>
          <h3 className="fs-24 notoMid my-3 page1FontColor">
            멸종위기동물 NFT카드를 수집하면서
          </h3>
          <h3 className="fs-24 notoMid my-3 page1FontColor">
            우리와 함께 멸종위기 생물을 지켜주세요.
          </h3>
          <h3 className="fs-24 notoMid my-3 page1FontColor">
            사용된 SSF코인은 동물보호단체에 기부하는데 사용이 됩니다.
          </h3>
          <Link to="/intro" className="Button3 fs-16 notoBold">
            자세한 설명 보기
          </Link>
        </div>
      </div>

      <Fade bottom>
        <div className="MainPage2">
          {/* <div className="container d-flex flex-column justify-content-center align-items-center Page2Height">
            <h1 className="fs-60 notoBold text-center my-3 page2FontColor">오늘의 동물</h1>
            <div className="AnimalCard">
              <img className="TodayAnimalImg" src={todayAnimal} alt="#" />
              <div className="AnimalDescription">
                <h3 className="fs-40 notoBold text-center my-3 page2FontColor">북극곰</h3>
                <article className="fs-32 notoReg AnialContent page2FontColor"> 백곰이라고도 한다.   암컷은 수컷보다 몸이 작다. 다른 곰보다 머리가 작고 목이 길며 귀는 작고 둥글다. 발바닥에는 털이 있으며 척구(蹠球)는 작아서 얼음 위를 걸어 다니기에 알맞다. 몸빛은 털갈이 직후에는 흰색이나 차츰 황백색으로 변한다.
                </article>
                <button className="Button fs-15 notoMid" type="button">영상 시청하고 포인트 받기</button>
              </div>
            </div>
          </div> */}
          <div className="container flex">
            <div className="animal flex">
              {todayAnimal ? (
                <>
                  <div className="animal_pic">
                    <img className="todayImg" src={todayAnimall} alt="오늘의 동물" />
                  </div>
                  <div className="animal_explain">
                    <div className="animal_explain_title notoBold fs-40 flex justify-center">
                      오늘의 동물
                    </div>
                    <div className="animal_explain_name flex justify-center notoBold fs-32">
                      {todayAnimal.animal}
                    </div>
                    <div className="animal_explain_content notoMid fs-28">
                      {todayAnimal.content}
                    </div>
                    <Link to={Route[todayAnimal.animal]}
                      type="button"
                      className="animal_explain_noti notoBold fs-24 flex justify-center align-center"
                    >
                      영상 시청하기
                    </Link>
                  </div>
                </>
              ) : 1}
            </div>
          </div>
        </div>
      </Fade>

      <div className="MainPage3">
        <div className="container">
          <h1 className="fs-32 notoBold text-center my-5 page2FontColor">
            멸종위기를 지켜준 사람들
          </h1>
          <div className="flex justify-center grid">
            <div className="col-5 rankingBox">
              <h1 className="fs-28 notoBold text-center my-4 page2FontColor">
                컬렉션 순위
              </h1>
              <li className="RankList grid">
                <span className="col-4 text-center notoBold">순위</span>
                <span className="col-4 notoBold">닉네임</span>
                <span className="col-4 textEnd notoBold">수집된 NFT</span>
              </li>
              <hr className="Line2" />
              <div className="collectionRank">
                {rankC.map(user => {
                  console.log(user)
                  return (
                    <li key={rankC.indexOf(user)} className="RankList grid">
                      <span className="col-2 text-center notoMid">
                        {rankC.indexOf(user)+1}
                      </span>
                      <span className="col-4 notoMid">{user.nickname}</span>
                      <span className="col-2 textEnd notoMid">
                        {user.collectionCount}개
                      </span>
                    </li>
                  );
                })}
              </div>
            </div>
            <div className="col-5 rankingBox">
              <h1 className="fs-28 notoBold text-center my-4 page2FontColor">
                기부금 순위
              </h1>
              <li className="RankList grid">
                <span className="col-3 text-center notoBold">순위</span>
                <span className="col-5 notoBold">닉네임</span>
                <span className="col-4 textEnd notoBold">기부금</span>
              </li>
              <hr className="Line2" />
              <div className="donationRank">
                {rankD.map(user => {
                  console.log(user)
                  const dona = user.doantion.toLocaleString("ko-KR");
                  return (
                    <li key={user.rank} className="RankList grid">
                      <span className="col-3 text-center notoMid">
                        {rankD.indexOf(user) + 1}
                      </span>
                      <span className="col-5 notoMid">{user.nickname}</span>
                      <span className="col-4 textEnd notoMid">{dona} SSF</span>
                    </li>
                  );
                })}
              </div>
            </div>
          </div>
          <Link to="/rank" className="Button2 fs-24 notoMid">
            랭킹 더보기
          </Link>
        </div>
      </div>
    </>
  );
}
export default Home;
