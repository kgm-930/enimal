import React from "react";
import './CommunityMain.scss'

import CommunityList from "@components/Community/CommunityList";

function Community() {
  return (
    <div className="container flex">
      <div className="commu">
        <div className="commu_up flex">
          <div className="commu_up_name notoBold fs-36">
            자랑게시판
          </div>
          <div className="commu_up_btn flex justify-center align-center">
            <button type="button" className="notoBold fs-24">
              글쓰기
            </button>
          </div>
        </div>
        <div className="commu_down">
          <CommunityList />
        </div>
      </div>
    </div>
  )
}
export default Community;
