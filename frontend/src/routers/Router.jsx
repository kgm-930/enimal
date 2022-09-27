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
import NoticeDetail from "@screens/Notice/NoticeDetail";
import NoticeEdit from "@screens/Notice/NoticeEdit";

// community
import Community from "@screens/Community/CommunityMain";
import CommunityRegist from "@screens/Community/CommunityRegist";
import CommunityDetail from "@screens/Community/CommunityDetail";
import CommunitiEdit from "@screens/Community/CommunityEdit";

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
        <Route path="/mypage/:userid" element={<MyPage />} />

        {/* draw */}
        <Route path="/draw" element={<Draw />} />

        {/* notice */}
        <Route path="/notice" element={<Notice />} />
        <Route path="/notice/regist" element={<NoticeRegist />} />
        <Route path="/notice/:index" element={<NoticeDetail />} />
        <Route path="/notice/edit/:index" element={<NoticeEdit />} />

        {/* community */}
        <Route path="/community" element={<Community />} />
        <Route path="/community/regist" element={<CommunityRegist />} />
        <Route path="/community/detail/:index" element={<CommunityDetail />} />
        <Route path="/community/edit/:index" element={<CommunitiEdit />} />

        {/* NotFound */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default Router;
