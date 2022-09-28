import React from "react";
import "./CollectionPiece.scss";


import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import https from 'https'

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

async function makeNFT() {
  // const url="https://images.wombo.art/generated/e73fab84-d9b6-429d-bfac-a29229bb527b/final.jpg?Expires=1670928846&Signature=MDcy9NJbVgW~WIr0uL8jqTRDVayLiGbAKiftS1Q1CoUe19IaEYabvd2QIOgFbHwSQ8eqsEyc4wHcZV~-q8LdY6nPXBFi2mEL557j6fKOtmD8fIhOLC30dxsWJXzvnnM3LyigrXbGela1RdOixkrSnm1s5OURGyQTOo72k22UN9H0jxiGgFL0EVVHpomXP~kHxNHuP~4gCVy2uu~enkEGdbJVPy~0YKQBK-LEqq8ct3pq7eLU9bRd3s6QYNDwtxQHtDVbezr6FzbC~Q7fKuto~hsFt9FzMFqlGbZ-Gsh4CvOIJFcHziuYSi-2i4vaGoHBkdBbrKZiHzKq13YSlYKtWw__&Key-Pair-Id=K1ZXCNMC55M2IL"
  // getMetaInfo('QmWFsM7gBWxBsn8WYH4q7ngYgQqqEJ425BCeC8GzoBTpDz')
  // getBlob("type", "prompt")
  // upload(url, "name", "owner", "type")
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
        {/* <img src="https://images.wombo.art/generated/e73fab84-d9b6-429d-bfac-a29229bb527b/final.jpg?Expires=1670928846&Signature=MDcy9NJbVgW~WIr0uL8jqTRDVayLiGbAKiftS1Q1CoUe19IaEYabvd2QIOgFbHwSQ8eqsEyc4wHcZV~-q8LdY6nPXBFi2mEL557j6fKOtmD8fIhOLC30dxsWJXzvnnM3LyigrXbGela1RdOixkrSnm1s5OURGyQTOo72k22UN9H0jxiGgFL0EVVHpomXP~kHxNHuP~4gCVy2uu~enkEGdbJVPy~0YKQBK-LEqq8ct3pq7eLU9bRd3s6QYNDwtxQHtDVbezr6FzbC~Q7fKuto~hsFt9FzMFqlGbZ-Gsh4CvOIJFcHziuYSi-2i4vaGoHBkdBbrKZiHzKq13YSlYKtWw__&Key-Pair-Id=K1ZXCNMC55M2IL" alt="ai" /> */}
      </div>
    </div>
  );
}
export default CollectionPiece;
