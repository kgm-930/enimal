import React from "react";
import './Home.scss'

import todayAnimal from '../assets/images/todayAnimal.jpg'

function Home() {

  const test1 = [
    { rank: 1, nick: 'haengsong', collection: 24, drawcnt: 4567 },
    { rank: 2, nick: 'DongDong', collection: 23, drawcnt: 4833 },
    { rank: 3, nick: 'brrrr', collection: 20, drawcnt: 4215 },
    { rank: 4, nick: 'yuuuuj', collection: 19, drawcnt: 3812 },
    { rank: 5, nick: 'SeulSeul', collection: 17, drawcnt: 3768 },
    { rank: 6, nick: 'won', collection: 10, drawcnt: 2912 },
    { rank: 7, nick: 'hyhy', collection: 6, drawcnt: 1601 },
    { rank: 8, nick: 'hee', collection: 3, drawcnt: 1354 },
    { rank: 9, nick: 'yong', collection: 1, drawcnt: 314 },
    { rank: 10, nick: 'dooo', collection: 0, drawcnt: 4 }
  ]

  const test2 = [
    { rank: 1, nick: 'haengsong', donation: 10000 },
    { rank: 2, nick: 'DongDong', donation: 9000 },
    { rank: 3, nick: 'brrrr', donation: 7777 },
    { rank: 4, nick: 'yuuuuj', donation: 3333 },
    { rank: 5, nick: 'SeulSeul', donation: 2600 },
    { rank: 6, nick: 'won', donation: 700 },
    { rank: 7, nick: 'hyhy', donation: 400 },
    { rank: 8, nick: 'hee', donation: 300 },
    { rank: 9, nick: 'yong', donation: 150 },
    { rank: 10, nick: 'dooo', donation: 100 }
  ]

  return (
    <>
      <div className="MainPage1 Page1">
        <div className="Page1Content">
          <h1 className="fs-32 notoBold my-3 page1FontColor">타이틀?</h1>
          <h3 className="fs-24 notoMid my-3 page1FontColor">멸종위기동물 NFT카드를 수집하면서</h3>
          <h3 className="fs-24 notoMid my-3 page1FontColor">우리와 함께 멸종위기 생물을 지켜주세요.</h3>
          <h3 className="fs-24 notoMid my-3 page1FontColor">사용된 SSF코인은 동물보호단체에 기부하는데 사용이 됩니다?</h3>
          <button className="Button3 fs-16 notoBold" type="button">자세한 설명 보기</button>
        </div>
      </div>
      <div className="MainPage2">
        <div className="container d-flex flex-column justify-content-center align-items-center Page2Height">
          <h1 className="fs-32 notoBold text-center my-3 page2FontColor">오늘의 동물</h1>
          <img className="TodayAnimalImg my-4" src={todayAnimal} alt="#" />
          <div className="AnimalDescription">
            <h3 className="fs-20 notoBold text-center my-3 page2FontColor">북극곰</h3>
            <article className="fs-20 NotoSansRegular AnialContent page2FontColor">백곰이라고도 한다.   암컷은 수컷보다 몸이 작다. 다른 곰보다 머리가 작고 목이 길며 귀는 작고 둥글다. 발바닥에는 털이 있으며 척구(蹠球)는 작아서 얼음 위를 걸어 다니기에 알맞다. 몸빛은 털갈이 직후에는 흰색이나 차츰 황백색으로 변한다.
            </article>
            <button className="Button fs-15" type="button">영상 시청하고 포인트 받기</button>
          </div>

        </div>

      </div>

      <hr className="Line" />
      <div className="MainPage3">
        <div className="container">
          <h1 className="fs-32 notoBold text-center my-3 page2FontColor">멸종위기를 지켜준 사람들</h1>
          <div className="d-flex grid">
            <div className="col-6">
              <h1 className="fs-28 notoBold text-center my-5 page2FontColor">컬렉션 순위</h1>
              <li className="RankList grid">
                <span className="col-2 text-center">순위</span>
                <span className="col-4">닉네임</span>
                <span className="col-3 textEnd">수집된 NFT</span>
                <span className="col-2 textEnd">뽑은 횟수</span>
              </li>
              <hr className="Line2" />
              <div className="collectionRank">
                {test1.map((user) => {
                  const cnt = user.drawcnt.toLocaleString('ko-KR');
                  return (
                    <li key={user.rank} className="RankList grid">
                      <span className="col-2 text-center">{user.rank}</span>
                      <span className="col-4">{user.nick}</span>
                      <span className="col-2 textEnd">{user.collection}장</span>
                      <span className="col-3 textEnd">{cnt}회</span>
                    </li>
                  )
                })}


              </div>
            </div>
            <div className="col-6">
              <h1 className="fs-28 notoBold text-center my-5 page2FontColor">기부금 순위</h1>
              <li className="RankList grid">
                <span className="col-3 text-center">순위</span>
                <span className="col-5">닉네임</span>
                <span className="col-4 textEnd">기부금</span>
              </li>
              <hr className="Line2" />
              <div className="donationRank">
                {test2.map((user) => {
                  const dona = user.donation.toLocaleString('ko-KR');
                  return (
                    <li key={user.rank} className="RankList grid">
                      <span className="col-3 text-center">{user.rank}</span>
                      <span className="col-5">{user.nick}</span>
                      <span className="col-4 textEnd">{dona} SSF</span>
                    </li>
                  )
                })}
              </div>
            </div>
          </div>
          <button className="Button2 fs-15" type="button">랭킹 더보기</button>
        </div>
      </div>
    </>

  )
}
export default Home;
