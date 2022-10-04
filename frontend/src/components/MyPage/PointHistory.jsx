import React,{ useEffect,useState } from "react";
import './PointHistory.scss'

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { getMyPointHistory } from "@apis/mypage";

function PointHistory() {
  const [data,setData] = useState([]);

  useEffect(()=>{
    getMyPointHistory().then(res=>{
      console.log(res)
      setData(res.data)
    })
  },[])

  const Test = [
    {id:1, SSF:100, donation:10, date:'2022.09.18 10:30'},
    {id:2, SSF:300, donation:30, date:'2022.09.17 10:30'},
    {id:3, SSF:200, donation:20, date:'2022.08.23 10:30'},
    {id:4, SSF:100, donation:10, date:'2022.08.12 10:30'},
    {id:5, SSF:100, donation:10, date:'2022.08.12 10:30'},
    {id:6, SSF:500, donation:100, date:'2022.08.01 10:30'},
  ]

  console.log(data)



  return (
    <div className="PointHistory">
      <div className="flex justify-space-between">
        <h1 className="fs-28 notoBold">번호</h1>
        <h1 className="fs-28 notoBold">환전 금액</h1>
        <h1 className="fs-28 notoBold">환전 시간</h1>
      </div>
      <ul className="my-5">
        {Test.map((list) => {
          const save = list.SSF - list.donation
          return (
            <>
            <li key={list.id} className="flex justify-space-between">
              <h1 className="fs-20 notoMid number">{list.id}</h1>
              <div className="flex justify-space-between Change">
                <h1 className="fs-20 notoMid">{list.SSF} SSF</h1>
                <FontAwesomeIcon className="mx-3" icon={faArrowRight} />
                <h1 className="fs-20 notoMid"> {save} SAVE</h1>
                <h1 className="fs-14 notoMid mx-3 dona">({list.donation} SSF 기부)</h1>

              </div>
              <h1  className="fs-20 notoMid">{list.date}</h1>
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