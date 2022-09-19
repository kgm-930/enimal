import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "@components/common/NavBar";

// screens

// main
import Home from "@screens/Home";

// intro
import Intro from "@screens/Intro";

// rank
import Rank from "@screens/Rank";

// mypage
import MyPage from "@screens/MyPage";

// draw
import Draw from "@screens/Draw";

// notice
import Notice from "@screens/Notice/Notice";
import NoticeRegist from "@screens/Notice/NoticeRegist";

// community
import Community from "@screens/Community/CommunityMain";
import CommunityRegist from "@screens/Community/CommunityRegist";
import CommunityDetail from "@screens/Community/CommunityDetail";

// not found
import NotFound from "@screens/NotFound";


function Router() {
  return (
    <>
      <NavBar />
      <Routes>
        {/* main */}
        <Route path="/" element={<Home />} />

        {/* intro */}
        <Route path="/intro" element={<Intro />} />

        {/* rank */}
        <Route path="/rank" element={<Rank />} />

        {/* mypage */}
        <Route path="/mypage" element={<MyPage />} />

        {/* draw */}
        <Route path="/draw" element={<Draw />} />

        {/* notice */}
        <Route path="/notice" element={<Notice />} />
        <Route path="/notice/regist" element={<NoticeRegist />} />

        {/* community */}
        <Route path="/community" element={<Community />} />
        <Route path="/community/regist" element={<CommunityRegist />} />
        <Route path="/community/detail" element={<CommunityDetail />} />

        {/* NotFound */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default Router;
