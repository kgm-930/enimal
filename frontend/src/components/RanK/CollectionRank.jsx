import React from "react";
import "./CollectionRank.scss";

function CollectionRank() {
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

  return (
    <div className="CollectionRank">
      <h1 className="fs-32 notoBold title">컬렉션 랭킹</h1>
      <div>
        <li className="RankList grid">
          <span className="col-2 fs-24 text-center notoBold">순위</span>
          <span className="col-4 fs-24 notoBold">닉네임</span>
          <span className="col-3 fs-24 textEnd notoBold">수집된 NFT</span>
          <span className="col-3 fs-24 textEnd notoBold">뽑은 횟수</span>
        </li>
        <hr className="Line2" />
        <div className="cRank">
          {test1.map(user => {
            const cnt = user.drawcnt.toLocaleString("ko-KR");
            return (
              <li key={user.rank} className="RankList grid">
                <span className="col-2 fs-20 text-center notoMid">{user.rank}</span>
                <span className="col-4 fs-20 notoMid">{user.nick}</span>
                <span className="col-3 fs-20 textEnd notoMid">
                  {user.collection}장
                </span>
                <span className="col-3 fs-20 textEnd notoMid">{cnt}회</span>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default CollectionRank;
