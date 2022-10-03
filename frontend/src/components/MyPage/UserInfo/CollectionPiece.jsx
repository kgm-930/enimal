import React from "react";
import "./CollectionPiece.scss";


import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import https from 'https'
// import {charge} from '@apis/sendTx'
// import {create} from '@apis/sendTx'


import piece1 from "@images/PieceImg/test/1.png";
import piece2 from "@images/PieceImg/test/2.png";
import piece3 from "@images/PieceImg/test/3.png";
import piece4 from "@images/PieceImg/test/4.png";
import piece5 from "@images/PieceImg/test/5.png";
import piece6 from "@images/PieceImg/test/6.png";
import piece7 from "@images/PieceImg/test/7.png";
import piece8 from "@images/PieceImg/test/8.png";
import piece9 from "@images/PieceImg/test/9.png";
import { useState } from "react";

// import {uploadData} from "@apis/treatImg"
import {makeImg} from "@apis/treatImg"
// import { test } from "../../../apis/treatImg";
// import { test } from "@apis/wombo-api";

// import { NFTStorage } from 'nft.storage'
// import WomboDream from '@apis/dream-api/dist/app'

// const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDk3MGFENGFGNDliYzA3ODg5NEM5NzM3QzBDRWVENkUxODJCOEFhMDIiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2NDI4NTE2NzM1MSwibmFtZSI6ImVuaW1hbCJ9.pa-Qnsx2llaA4DKjlHG9R6aaLoSm29FIsDfS_LqLoe8"
// const client = new NFTStorage({token: API_KEY})


// const test = require("@apis/wombo-api")

// import {uploadData} from "@apis/treatImg"
// import { create } from "@apis/sendTx";
// import { ownerOf } from "@apis/sendTx";


// NFT 생성 버튼 누르면 동작
async function makeNFT() {
  

  //* nft.store이용
  /*
  ipnft: "bafyreihltkzhux4qonq324oexcuh2o6ntozgvwjdguiiyyjspke6bnqzlm"
  url: "ipfs://bafyreihltkzhux4qonq324oexcuh2o6ntozgvwjdguiiyyjspke6bnqzlm/metadata.json"
  data: 
    description: "거북이"
    image: URL {origin: 'null', protocol: 'ipfs:', username: '', password: '', host: '', …}
    name: "뭘까"
    properties: {owner: 'userAddress', date: 1664717577782, type: 'Comic'}
  */


  // const url="https://images.wombo.art/generated/e73fab84-d9b6-429d-bfac-a29229bb527b/final.jpg?Expires=1670928846&Signature=MDcy9NJbVgW~WIr0uL8jqTRDVayLiGbAKiftS1Q1CoUe19IaEYabvd2QIOgFbHwSQ8eqsEyc4wHcZV~-q8LdY6nPXBFi2mEL557j6fKOtmD8fIhOLC30dxsWJXzvnnM3LyigrXbGela1RdOixkrSnm1s5OURGyQTOo72k22UN9H0jxiGgFL0EVVHpomXP~kHxNHuP~4gCVy2uu~enkEGdbJVPy~0YKQBK-LEqq8ct3pq7eLU9bRd3s6QYNDwtxQHtDVbezr6FzbC~Q7fKuto~hsFt9FzMFqlGbZ-Gsh4CvOIJFcHziuYSi-2i4vaGoHBkdBbrKZiHzKq13YSlYKtWw__&Key-Pair-Id=K1ZXCNMC55M2IL"
  // uploadData("type", "prompt")
  // upload(url, "name", "owner", "type")
  // makeImg("type", "prompt")
  // WomboDream.signIn("ilwoldeveloper@gmail.com", "enimal*24")
  // test()
  // sendTx()
  // charge("0x7edc38F3511F13100AdcC4c16Ba14eC475C00776", 10, "0x600378817757c4d816e1a04cbade8973b9b239e03757b72f227fda07804bd001")
  // create("0x7edc38F3511F13100AdcC4c16Ba14eC475C00776","ipfs://QmYjPMTiQFWCUq3vgFsZXjaRMrgoCbfewcC8ZYnkvT9vXH")
  // console.log('final', test)

  //* 이미지 생성
  makeImg('Paint', '저어새')

}

function CollectionPiece() {
  // const [imgUrl, setImgUrl] = useState('')
  return (
    <div className="CollectionPiece">
      <h1 className="MyCollection notoBold fs-40">수집중인 컬렉션</h1>
      <div className="flex justify-center">
        <div className="puzzle grid">
          <img className="col-4 PieceImg" src={piece1} alt="#" />
          <img className="col-4 PieceImg" src={piece2} alt="#" />
          <img className="col-4 PieceImg" src={piece3} alt="#" />
          <img className="col-4 PieceImg" src={piece4} alt="#" />
          <img className="col-4 PieceImg" src={piece5} alt="#" />
          <img className="col-4 PieceImg" src={piece6} alt="#" />
          <img className="col-4 PieceImg" src={piece7} alt="#" />
          <img className="col-4 PieceImg" src={piece8} alt="#" />
          <img className="col-4 PieceImg" src={piece9} alt="#" />
        </div>
      </div>
      <div className="flex justify-center">
        <FontAwesomeIcon className="Angle" icon={faAngleLeft} />
        <div className="collectionName fs-32 notoBold">대왕 판다</div>
        <FontAwesomeIcon className="Angle" icon={faAngleRight} />
        <button type="button" onClick={makeNFT}>NFT 생성</button>
        {/* <img src="https://ipfs.io/ipfs/bafybeigkj7ac2zi2y33sdzgoumtew6ercvmc4gc5pguojomgonsl7or7li/blob" alt="ai" /> */}
        {/* <img src="ipfs://bafybeigkj7ac2zi2y33sdzgoumtew6ercvmc4gc5pguojomgonsl7or7li/blob" alt="ai" /> */}
        {/* <img src="https://images.wombo.art/generated/ba65f5ea-5800-473f-bd42-180b3045d1a5/final.jpg?Expires=1671823592&Signature=KBfh4myH4Tv05RdTS4D-jZqbJ3e9BDuaXfJW0G0sZQL-ikZXYYW8uyq57u02vn~JA2wgLNpcMKDVXVpjyqGZqdP4Wz8Ix4D9x1PpihAOxJsN7Ktf7Bkgv7wQsYyX0YYPE94ej2JRi6OVitKV~Ilwopl2k3nvYXeKJGRB4OJZiuOAh0gnIMkbySd6vzOeaMMh59u~HGi213SnmcdErMW8IbjINtLzQnmXawQS~KvQ-uacE44kCUhP3~yXqQaJH-6RjJJCXIW4S3vyY5Bc4cZ4pdZuLBrOsCweUXKNJOu44KzNqBgTu3x30RhrvGC-YTpdZ5buUmODlQjWqR8tZ1G~wQ__&Key-Pair-Id=K1ZXCNMC55M2IL" alt="ai" /> */}
      </div>
    </div>
  );
}
export default CollectionPiece;
