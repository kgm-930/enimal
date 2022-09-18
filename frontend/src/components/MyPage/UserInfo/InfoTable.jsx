import React from "react";
import './InfoTable.scss'

function infoTable() {

  const Test = {
    rank_c:1, rank_d:1, collection:24,drawcnt:4567,donation:10000
  }

  const dona = Test.donation.toLocaleString('ko-KR');
  const drawcnt = Test.drawcnt.toLocaleString('ko-KR');


  return (
    <div className="infoTable">
        <hr className="firstLine" />
        <div className="flex justify-space-between">
          <h1 className="fs-20 notoBold">컬렉션 순위</h1>
          <h2 className="fs-20 notoMid">{Test.rank_c} 위</h2>
        </div>
        <hr />
        <div className="flex justify-space-between">
          <h1 className="fs-20 notoBold">기부금 순위</h1>
          <h2 className="fs-20 notoMid">{Test.rank_d} 위</h2>
        </div>
        <hr />
        <div className="flex justify-space-between">
          <h1 className="fs-20 notoBold">완성된 컬렉션 수</h1>
          <h2 className="fs-20 notoMid">{Test.collection} 개</h2>
        </div>
        <hr />
        <div className="flex justify-space-between">
          <h1 className="fs-20 notoBold">뽑은 횟수</h1>
          <h2 className="fs-20 notoMid">{drawcnt} 번</h2>
        </div>
        <hr />
        <div className="flex justify-space-between">
          <h1 className="fs-20 notoBold">기부한 금액</h1>
          <h2 className="fs-20 notoMid">{dona} SSF</h2>
        </div>
        <hr />
      </div>
  )
}
export default infoTable;