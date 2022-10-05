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

// animal notice
import Animal1 from "@screens/Notice/Animal/Animal1";
import Animal2 from "@screens/Notice/Animal/Animal2";
import Animal3 from "@screens/Notice/Animal/Animal3";
import Animal4 from "@screens/Notice/Animal/Animal4";
import Animal5 from "@screens/Notice/Animal/Animal5";
import Animal6 from "@screens/Notice/Animal/Animal6";
import Animal7 from "@screens/Notice/Animal/Animal7";
import Animal8 from "@screens/Notice/Animal/Animal8";
import Animal9 from "@screens/Notice/Animal/Animal9";
import Animal10 from "@screens/Notice/Animal/Animal10";
import Animal11 from "@screens/Notice/Animal/Animal11";
import Animal12 from "@screens/Notice/Animal/Animal12";
import Animal13 from "@screens/Notice/Animal/Animal13";
import Animal14 from "@screens/Notice/Animal/Animal14";
import Animal15 from "@screens/Notice/Animal/Animal15";
import Animal16 from "@screens/Notice/Animal/Animal16";
import Animal17 from "@screens/Notice/Animal/Animal17";
import Animal18 from "@screens/Notice/Animal/Animal18";
import Animal19 from "@screens/Notice/Animal/Animal19";
import Animal20 from "@screens/Notice/Animal/Animal20";
import Animal21 from "@screens/Notice/Animal/Animal21";
import Animal22 from "@screens/Notice/Animal/Animal22";
import Animal23 from "@screens/Notice/Animal/Animal23";
import Animal24 from "@screens/Notice/Animal/Animal24";


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

        {/* animal notice */}
        <Route path="/notice/animal/1" element={<Animal1 />} />
        <Route path="/notice/animal/2" element={<Animal2 />} />
        <Route path="/notice/animal/3" element={<Animal3 />} />
        <Route path="/notice/animal/4" element={<Animal4 />} />
        <Route path="/notice/animal/5" element={<Animal5 />} />
        <Route path="/notice/animal/6" element={<Animal6 />} />
        <Route path="/notice/animal/7" element={<Animal7 />} />
        <Route path="/notice/animal/8" element={<Animal8 />} />
        <Route path="/notice/animal/9" element={<Animal9 />} />
        <Route path="/notice/animal/10" element={<Animal10 />} />
        <Route path="/notice/animal/11" element={<Animal11 />} />
        <Route path="/notice/animal/12" element={<Animal12 />} />
        <Route path="/notice/animal/13" element={<Animal13 />} />
        <Route path="/notice/animal/14" element={<Animal14 />} />
        <Route path="/notice/animal/15" element={<Animal15 />} />
        <Route path="/notice/animal/16" element={<Animal16 />} />
        <Route path="/notice/animal/17" element={<Animal17 />} />
        <Route path="/notice/animal/18" element={<Animal18 />} />
        <Route path="/notice/animal/19" element={<Animal19 />} />
        <Route path="/notice/animal/20" element={<Animal20 />} />
        <Route path="/notice/animal/21" element={<Animal21 />} />
        <Route path="/notice/animal/22" element={<Animal22 />} />
        <Route path="/notice/animal/23" element={<Animal23 />} />
        <Route path="/notice/animal/24" element={<Animal24 />} />


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
