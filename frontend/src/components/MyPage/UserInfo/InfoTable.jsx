import React,{ useEffect,useState } from "react";
import { getProfile } from "@apis/mypage";
import './InfoTable.scss'

function InfoTable(props) {
  const { userId } =props;
  const [data,setData] = useState(null);
  useEffect(()=>{
    getProfile(userId).then(res=>{
      console.log(res)
      setData(res.data)
    })
  }, [])

  console.log(data)


  return (
    <div className="infoTable">
      {data ?
      <div>
        <hr className="firstLine" />
        <div className="flex justify-space-between">
          <h1 className="fs-20 notoBold">컬렉션 순위</h1>
          <h2 className="fs-20 notoMid">{data.collectionRank} 위</h2>
        </div>
        <hr />
        <div className="flex justify-space-between">
          <h1 className="fs-20 notoBold">기부금 순위</h1>
          <h2 className="fs-20 notoMid">{data.donationRank} 위</h2>
        </div>
        <hr />
        <div className="flex justify-space-between">
          <h1 className="fs-20 notoBold">완성된 컬렉션 수</h1>
          <h2 className="fs-20 notoMid">{data.collectionCount} 개</h2>
        </div>
        <hr />
        <div className="flex justify-space-between">
          <h1 className="fs-20 notoBold">뽑은 횟수</h1>
          <h2 className="fs-20 notoMid">{data.usedCount} 번</h2>
        </div>
        <hr />
        <div className="flex justify-space-between">
          <h1 className="fs-20 notoBold">기부한 금액</h1>
          <h2 className="fs-20 notoMid">{data.usedCredit} SSF</h2>
        </div>
        <hr />
      </div>:null}

    </div>
  )
}
export default InfoTable;