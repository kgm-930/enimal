import React from "react";
import './DonationRank.scss'

function DonationRank() {

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
    <div className="DonationRank">
      <h1  className="fs-32 notoBold title">기부금 랭킹</h1>
      <div>
        <li className="RankList grid">
          <span className="col-3 fs-24 text-center notoBold">순위</span>
          <span className="col-5 fs-24 notoBold">닉네임</span>
          <span className="col-4 fs-24 textEnd notoBold">기부금</span>
        </li>
        <hr className="Line2" />
        <div className="dRank">
          {test2.map(user => {
            const dona = user.donation.toLocaleString("ko-KR");
            return (
              <li key={user.rank} className="RankList grid">
                <span className="col-3 fs-20 text-center notoMid">{user.rank}</span>
                <span className="col-5 fs-20 notoMid">{user.nick}</span>
                <span className="col-4 fs-20 textEnd notoMid">{dona} SSF</span>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default DonationRank;
