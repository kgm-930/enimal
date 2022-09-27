import React from "react";
import './UserInfo.scss'

import InfoTable from "./UserInfo/InfoTable";
import Achievements from "./UserInfo/Achievements";
import CollectionPiece from "./UserInfo/CollectionPiece";
import MyNFT from "./UserInfo/MyNFT";



function UserInfo(props) {
  const { userId } = props;

  return (
    <>
      <div className="userInfo flex">
        <InfoTable userId={userId} />
        <Achievements userId={userId} />
      </div>
      {userId === localStorage.MyNick ?
        <>
          <hr />
          <CollectionPiece userId={userId} />
        </>
        : null}

      <hr />
      <MyNFT userId={userId} />


    </>

  )
}
export default UserInfo;
