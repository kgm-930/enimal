import React from "react";
import "./CollectionPiece.scss";


import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
import {getBlob} from "@apis/treatImg"
// import {makeImg} from "@apis/treatImg"
// import { test } from "../../../apis/treatImg";


// const ipfsAPI = require("ipfs-api")
// const ipfs = ipfsAPI('/ip4/127.0.0.1/tcp/5001')
// import {resultImg} from './treatImg'
// import axios from "axios";

// const client = create(new URL('/ip4/127.0.0.1/tcp/5001/http'))


// const typeDetail = {
// 	Paint: "",
// 	HDR : "실제 사진과 비슷하게 표현된 그림이에요",
// 	Polygon : "도형을 이어붙여 만든 느낌이 드는 그림이에요",
// 	gouache : "수채화 물감으로 그린 그림이에요",
// 	Comic : "",
// 	"Line-Art" : "선만으로 표현된 그림이에요"
// }

/*
그림(2D) < --------- > 사진(3D)
Gouache	Line-Art Paint	Poligon	Comic	HDR
수채화 선 물감	?	도형 물감 3D
*/

async function makeNFT() {
  // getMetaInfo('QmWFsM7gBWxBsn8WYH4q7ngYgQqqEJ425BCeC8GzoBTpDz')
  getBlob("type", "prompt")
  // makeImg("type", "prompt")
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
      </div>
    </div>
  );
}
export default CollectionPiece;
