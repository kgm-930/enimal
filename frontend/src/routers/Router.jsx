import React from "react";
import { Route, Routes } from "react-router-dom";

// screens

// main
import Home from "@screens/Home";

// mypage
import MyPage from "@screens/MyPage";

// draw
import Draw from "@screens/Draw";

// notice
import Notice from "@screens/Notice";

// community
import Community from "@screens/Community";

// not found
import NotFound from "@screens/NotFound";


function Router() {
  return (
    <>
      <div>상단바</div>
      <Routes>
        {/* main */}
        <Route path="/" element={<Home />} />

        {/* mypage */}
        <Route path="/mypage" element={<MyPage />} />

        {/* draw */}
        <Route path="/draw" element={<Draw />} />

        {/* notice */}
        <Route path="/notice" element={<Notice />} />

        {/* community */}
        <Route path="/community" element={<Community />} />

        {/* NotFound */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default Router;
