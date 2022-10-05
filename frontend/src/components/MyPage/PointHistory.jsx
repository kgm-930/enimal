import React, { useEffect, useState } from "react";
import './PointHistory.scss'

import { getMyPointHistory } from "@apis/mypage";

function PointHistory() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getMyPointHistory().then(res => {
      console.log(res)
      setData(res.data)
    })
  }, [])


  console.log(data)



  return (
    <div className="PointHistory">
      <div className="flex justify-space-between">
        <h1 className="fs-28 notoBold">번호</h1>
        <h1 className="fs-28 notoBold">환전 금액</h1>
        <h1 className="fs-28 notoBold">환전 시간</h1>
      </div>
      <ul className="my-5">
        {data.map((list) => {
          const date = new Date(list.createDate);
          const changeTime = `${date.getFullYear()}년${(date.getMonth() + 1)}월${date.getDate()}일 ${date.getHours()}시${date.getMinutes()}분`;

          const coin = parseInt(list.useCredit, 10);
          const SAVE = coin.toLocaleString('ko-KR');

          return (
            <>
              <li key={data.indexOf(list)} className="flex justify-space-between">
                <h1 className="fs-20 notoMid number">{data.indexOf(list)}</h1>
                <div className="flex justify-space-between Change">
                  <h1 className="fs-20 notoMid"> {SAVE} SAVE</h1>
                </div>
                <h1 className="fs-20 notoMid">{changeTime}</h1>
              </li>
              <hr />
            </>
          )
        })}
      </ul>
    </div>
  )
}
export default PointHistory;