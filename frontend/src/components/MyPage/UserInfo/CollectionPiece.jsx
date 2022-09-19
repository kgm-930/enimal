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

function CollectionPiece() {
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
      </div>
    </div>
  );
}
export default CollectionPiece;
