import React, { useState, useEffect, useRef } from "react";
import './DonationRank.scss'

import { getRankd } from "../../apis/home";

function DonationRank() {
  let IDX = 0
  const [ranker, setRanker] = useState([]);
  const [bottom, setBottom] = useState(null);
  const bottomObserver = useRef(null);

  async function getList() {
    const params = { pageSize: 10, lastIdx: IDX }
    await getRankd(params).then(res => {
      const DATA = res.data;
      if (DATA.length > 0) {
        setRanker(pre => [...pre, ...DATA])
        IDX = DATA.slice(-1)[0].idx
      }

    })
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          getList()
        }
      }
    );
    bottomObserver.current = observer;

  }, [])


  useEffect(() => {
    const observer = bottomObserver.current;
    if (bottom && ranker.length % 9 === 0) {
      observer.observe(bottom);
    }
    return () => {
      if (bottom) {
        observer.unobserve(bottom);
      }
    };
  }, [bottom]);







  console.log(ranker)

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
          {ranker.map(user => {
            console.log(ranker.indexOf(user)+1)
            const dona = user.doantion.toLocaleString("ko-KR");
            return (
              <li key={ranker.indexOf(user)} className="RankList grid">
                <span className="col-3 fs-20 text-center notoMid">{ranker.indexOf(user)+1}</span>
                <span className="col-5 fs-20 notoMid">{user.nickname}</span>
                <span className="col-4 fs-20 textEnd notoMid">{dona} SSF</span>
              </li>
            );
          })}
          <div ref={setBottom} />
        </div>
      </div>
    </div>
  );
}
export default DonationRank;
