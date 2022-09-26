import React from "react";
import './UserInfo.scss'

import InfoTable from "./UserInfo/InfoTable";
import Achievements from "./UserInfo/Achievements";
import CollectionPiece from "./UserInfo/CollectionPiece";
import MyNFT from "./UserInfo/MyNFT";

function UserInfo() {


  return (
    <>
      <div className="userInfo flex">
        <InfoTable />
        <Achievements />
      </div>

      <hr />
      <CollectionPiece />
      <hr />
      <MyNFT />


    </>

  )
}
export default UserInfo;
