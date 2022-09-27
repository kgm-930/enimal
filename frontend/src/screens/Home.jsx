// import React from 'react';
import React, { useState, useEffect } from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

import todayAnimall from "@assets/images/polarbear.jpg";
import { getTodayAnimal } from "@apis/home";

function Home() {
  const [todayAnimal, setTodayAnimal] = useState(null);

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

  useEffect(() => {
    
    getTodayAnimal().then(res => {
      console.log(res);
      setTodayAnimal(res.data);
    });
  }, []);

  console.log(todayAnimal);

  const test1 = [
    { rank: 1, nick: "haengsong", collection: 24, drawcnt: 4567 },
    { rank: 2, nick: "DongDong", collection: 23, drawcnt: 4833 },
    { rank: 3, nick: "brrrr", collection: 20, drawcnt: 4215 },
    { rank: 4, nick: "yuuuuj", collection: 19, drawcnt: 3812 },
    { rank: 5, nick: "SeulSeul", collection: 17, drawcnt: 3768 },
    { rank: 6, nick: "won", collection: 10, drawcnt: 2912 },
    { rank: 7, nick: "hyhy", collection: 6, drawcnt: 1601 },
    { rank: 8, nick: "hee", collection: 3, drawcnt: 1354 },
    { rank: 9, nick: "yong", collection: 1, drawcnt: 314 },
    { rank: 10, nick: "dooo", collection: 0, drawcnt: 4 }
  ];

  const test2 = [
    { rank: 1, nick: "haengsong", donation: 10000 },
    { rank: 2, nick: "DongDong", donation: 9000 },
    { rank: 3, nick: "brrrr", donation: 7777 },
    { rank: 4, nick: "yuuuuj", donation: 3333 },
    { rank: 5, nick: "SeulSeul", donation: 2600 },
    { rank: 6, nick: "won", donation: 700 },
    { rank: 7, nick: "hyhy", donation: 400 },
    { rank: 8, nick: "hee", donation: 300 },
    { rank: 9, nick: "yong", donation: 150 },
    { rank: 10, nick: "dooo", donation: 100 }
  ];

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
              <div className="animal_pic">
                <img src={todayAnimall} alt="오늘의 동물" />
              </div>
              <div className="animal_explain">
                <div className="animal_explain_title notoBold fs-40 flex justify-center">
                  오늘의 동물
                </div>
                <div className="animal_explain_name flex justify-center notoBold fs-32">
                  {/* {todayAnimal.animal} */} 왜 안되는거야
                </div>
                <div className="animal_explain_content notoMid fs-28">
                  백곰이라고도 한다. 암컷은 수컷보다 몸이 작다. 다른 곰보다
                  머리가 작고 목이 길며 귀는 작고 둥글다. 발바닥에는 털이 있으며
                  척구(蹠球)는 작아서 얼음 위를 걸어 다니기에 알맞다. 몸빛은
                  털갈이 직후에는 흰색이나 차츰 황백색으로 변한다.
                </div>
                <div className="animal_explain_btn flex justify-center">
                  <button
                    type="button"
                    className="animal_explain_noti notoBold fs-32 flex justify-center align-center"
                  >
                    영상 시청하기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>

      <hr className="Line" />
      <div className="MainPage3">
        <div className="container">
          <h1 className="fs-32 notoBold text-center my-3 page2FontColor">
            멸종위기를 지켜준 사람들
          </h1>
          <div className="d-flex grid">
            <div className="col-6">
              <h1 className="fs-28 notoBold text-center my-5 page2FontColor">
                컬렉션 순위
              </h1>
              <li className="RankList grid">
                <span className="col-2 text-center notoBold">순위</span>
                <span className="col-4 notoBold">닉네임</span>
                <span className="col-3 textEnd notoBold">수집된 NFT</span>
                <span className="col-2 textEnd notoBold">뽑은 횟수</span>
              </li>
              <hr className="Line2" />
              <div className="collectionRank">
                {test1.map(user => {
                  const cnt = user.drawcnt.toLocaleString("ko-KR");
                  return (
                    <li key={user.rank} className="RankList grid">
                      <span className="col-2 text-center notoMid">
                        {user.rank}
                      </span>
                      <span className="col-4 notoMid">{user.nick}</span>
                      <span className="col-2 textEnd notoMid">
                        {user.collection}장
                      </span>
                      <span className="col-3 textEnd notoMid">{cnt}회</span>
                    </li>
                  );
                })}
              </div>
            </div>
            <div className="col-6">
              <h1 className="fs-28 notoBold text-center my-5 page2FontColor">
                기부금 순위
              </h1>
              <li className="RankList grid">
                <span className="col-3 text-center notoBold">순위</span>
                <span className="col-5 notoBold">닉네임</span>
                <span className="col-4 textEnd notoBold">기부금</span>
              </li>
              <hr className="Line2" />
              <div className="donationRank">
                {test2.map(user => {
                  const dona = user.donation.toLocaleString("ko-KR");
                  return (
                    <li key={user.rank} className="RankList grid">
                      <span className="col-3 text-center notoMid">
                        {user.rank}
                      </span>
                      <span className="col-5 notoMid">{user.nick}</span>
                      <span className="col-4 textEnd notoMid">{dona} SSF</span>
                    </li>
                  );
                })}
              </div>
            </div>
          </div>
          <Link to="/rank" className="Button2 fs-16 notoMid">
            랭킹 더보기
          </Link>
        </div>
      </div>
    </>
  );
}
export default Home;
