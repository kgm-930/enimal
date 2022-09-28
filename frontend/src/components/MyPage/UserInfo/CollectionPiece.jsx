import React,{ useEffect} from "react";
import "./CollectionPiece.scss";

import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { getMyPiece } from "@apis/mypage";

import { panda1,panda2,panda3,panda4,panda5,panda6,panda7,panda8,panda9 } from "@images/animal";


function CollectionPiece() {

  useEffect(()=>{
    getMyPiece().then(res=>{
      console.log(res)
    })
  },[])


  return (
    <div className="CollectionPiece">
      <h1 className="MyCollection notoBold fs-40">수집중인 컬렉션</h1>
      <div className="flex justify-center">
        <div className="puzzle grid">
          <img className="col-4 PieceImg" src={panda1} alt="#" />
          <img className="col-4 PieceImg" src={panda2} alt="#" />
          <img className="col-4 PieceImg" src={panda3} alt="#" />
          <img className="col-4 PieceImg" src={panda4} alt="#" />
          <img className="col-4 PieceImg" src={panda5} alt="#" />
          <img className="col-4 PieceImg" src={panda6} alt="#" />
          <img className="col-4 PieceImg" src={panda7} alt="#" />
          <img className="col-4 PieceImg" src={panda8} alt="#" />
          <img className="col-4 PieceImg" src={panda9} alt="#" />
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
