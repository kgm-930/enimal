import React from "react";
import './MyArticles.scss'

import CommunityCard from "../../Community/CommunityCard";

function MyComment() {
  return (
    <div className="MyArticlesBox">
      <h1 className="fs-40 notoBold">내 댓글</h1>
      <hr />
      <div className="MyArticles flex">
        <CommunityCard />
        <CommunityCard />
        <CommunityCard />
        <CommunityCard />
      </div>

    </div>
  );
}

export default MyComment;