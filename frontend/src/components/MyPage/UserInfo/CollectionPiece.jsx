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

// import ipfsAPI from "ipfs-api";
// import {getBlob} from "@apis/treatImg"
// import {makeImg} from "@apis/treatImg"
// import {upload} from "@apis/treatImg"
// import { test } from "../../../apis/treatImg";
// import { test } from "@apis/wombo-api";
// import axios from 'axios'

import { NFTStorage } from 'nft.storage'
import WomboDream from '@apis/dream-api/dist/app'

const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDk3MGFENGFGNDliYzA3ODg5NEM5NzM3QzBDRWVENkUxODJCOEFhMDIiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2NDI4NTE2NzM1MSwibmFtZSI6ImVuaW1hbCJ9.pa-Qnsx2llaA4DKjlHG9R6aaLoSm29FIsDfS_LqLoe8"
const client = new NFTStorage({token: API_KEY})


// const test = require("@apis/wombo-api")



const typeToStyle = {
  Paint: 50, HDR : 52, Polygon : 49, Gouache : 48, Comic : 45, 'Line-Art' : 47
}

const convert = {
	'저어새':'spoonbill',	'우파루파':'아홀로틀', '강토끼':'부시맨토끼',
	'상괭이':'finless porpoise', '듀공':'dugong', '매':'hawk'
}

// ai 이미지 생성
export async function makeImg(type, enimal) {
	let prompt
	if (enimal in convert) {
		prompt = convert[enimal]
	} else {
		prompt = enimal
	}
	const style = typeToStyle[type]
	const image = await WomboDream.generateImage(style, prompt, null, null, null, 1000, 30)
	console.log(image)
	return image.result.final
}


// async function uploadData(url, name, owner, type) {
//   //* 필요한 인자 :  url, name, owner(userAddress), type
//   const img = await fetch(url)
//   if (!img.ok) {
//     console.log(img.ok)
//   }
//   const image = await img.blob()
//   const json = {
//     name,
//     description: "",
//     properties: {
//       owner,
//       image,
//       date: Date.now(),
//       type,
//     }
//   }
//   const metadata = await client.store(json)
// 	console.log(metadata)
// }



async function makeNFT() {

  // const url="https://images.wombo.art/generated/e73fab84-d9b6-429d-bfac-a29229bb527b/final.jpg?Expires=1670928846&Signature=MDcy9NJbVgW~WIr0uL8jqTRDVayLiGbAKiftS1Q1CoUe19IaEYabvd2QIOgFbHwSQ8eqsEyc4wHcZV~-q8LdY6nPXBFi2mEL557j6fKOtmD8fIhOLC30dxsWJXzvnnM3LyigrXbGela1RdOixkrSnm1s5OURGyQTOo72k22UN9H0jxiGgFL0EVVHpomXP~kHxNHuP~4gCVy2uu~enkEGdbJVPy~0YKQBK-LEqq8ct3pq7eLU9bRd3s6QYNDwtxQHtDVbezr6FzbC~Q7fKuto~hsFt9FzMFqlGbZ-Gsh4CvOIJFcHziuYSi-2i4vaGoHBkdBbrKZiHzKq13YSlYKtWw__&Key-Pair-Id=K1ZXCNMC55M2IL"
  // getMetaInfo('QmWFsM7gBWxBsn8WYH4q7ngYgQqqEJ425BCeC8GzoBTpDz')
  // getBlob("type", "prompt")
  // upload(url, "name", "owner", "type")
  // makeImg("type", "prompt")
  // test()
  // sendTx()
  // charge("0x7edc38F3511F13100AdcC4c16Ba14eC475C00776", 10, "0x600378817757c4d816e1a04cbade8973b9b239e03757b72f227fda07804bd001")
  // create("0x7edc38F3511F13100AdcC4c16Ba14eC475C00776","ipfs://QmYjPMTiQFWCUq3vgFsZXjaRMrgoCbfewcC8ZYnkvT9vXH")
  // console.log('final', test)
  // makeImg('Paint', '저어새')
  const img = await fetch('https://images.wombo.art/generated/ba65f5ea-5800-473f-bd42-180b3045d1a5/final.jpg?Expires=1671823592&Signature=KBfh4myH4Tv05RdTS4D-jZqbJ3e9BDuaXfJW0G0sZQL-ikZXYYW8uyq57u02vn~JA2wgLNpcMKDVXVpjyqGZqdP4Wz8Ix4D9x1PpihAOxJsN7Ktf7Bkgv7wQsYyX0YYPE94ej2JRi6OVitKV~Ilwopl2k3nvYXeKJGRB4OJZiuOAh0gnIMkbySd6vzOeaMMh59u~HGi213SnmcdErMW8IbjINtLzQnmXawQS~KvQ-uacE44kCUhP3~yXqQaJH-6RjJJCXIW4S3vyY5Bc4cZ4pdZuLBrOsCweUXKNJOu44KzNqBgTu3x30RhrvGC-YTpdZ5buUmODlQjWqR8tZ1G~wQ__&Key-Pair-Id=K1ZXCNMC55M2IL')
  if (!img.ok) {
    console.log(img.ok)
  }
  const image = await img.blob()
  const json = {
    name: 'name',
    description: "",
    image,
    properties: {
      owner: "me",
      date: Date.now(),
      type: "type",
    }
  }
  const metadata = await client.store(json)
	console.log(metadata)
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
