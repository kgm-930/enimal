import React, { useState } from "react";
import './AllDraw.scss'


import TEST from '@images/test.png'
import DrawModal from "./DrawModal";

import { 
  panda1,panda2,panda3,panda4,panda5,panda6,panda7,panda8,panda9,
  // asianele1,asianele2,asianele3,asianele4,asianele5,asianele6,asianele7,asianele8,asianele9,
  // cat1,cat2,cat3,cat4,cat5,cat6,cat7,cat8,cat9,
  // crane1,crane2,crane3,crane4,crane5,crane6,crane7,crane8,crane9,
  // dolphin1,dolphin2,dolphin3,dolphin4,dolphin5,dolphin6,dolphin7,dolphin8,dolphin9,
  // dugong1,dugong2,dugong3,dugong4,dugong5,dugong6,dugong7,dugong8,dugong9,
  // eel1,eel2,eel3,eel4,eel5,eel6,eel7,eel8,eel9,
  // elk1,elk2,elk3,elk4,elk5,elk6,elk7,elk8,elk9,
  // finless1,finless2,finless3,finless4,finless5,finless6,finless7,finless8,finless9,
  // goat1,goat2,goat3,goat4,goat5,goat6,goat7,goat8,goat9,
  // hawk1,hawk2,hawk3,hawk4,hawk5,hawk6,hawk7,hawk8,hawk9,
  // hippo1,hippo2,hippo3,hippo4,hippo5,hippo6,hippo7,hippo8,hippo9,
  // orangutan1,orangutan2,orangutan3,orangutan4,orangutan5,orangutan6,orangutan7,orangutan8,orangutan9,
  // otter1,otter2,otter3,otter4,otter5,otter6,otter7,otter8,otter9,
  // polarbear1,polarbear2,polarbear3,polarbear4,polarbear5,polarbear6,polarbear7,polarbear8,polarbear9,
  // rabbit1,rabbit2,rabbit3,rabbit4,rabbit5,rabbit6,rabbit7,rabbit8,rabbit9,
  // redpanda1,redpanda2,redpanda3,redpanda4,redpanda5,redpanda6,redpanda7,redpanda8,redpanda9,
  // rhinoceros1,rhinoceros2,rhinoceros3,rhinoceros4,rhinoceros5,rhinoceros6,rhinoceros7,rhinoceros8,rhinoceros9,
  // shark1,shark2,shark3,shark4,shark5,shark6,shark7,shark8,shark9,
  // spoonbill1,spoonbill2,spoonbill3,spoonbill4,spoonbill5,spoonbill6,spoonbill7,spoonbill8,spoonbill9,
  // tiger1,tiger2,tiger3,tiger4,tiger5,tiger6,tiger7,tiger8,tiger9,
  // turtle1,turtle2,turtle3,turtle4,turtle5,turtle6,turtle7,turtle8,turtle9,
  // upalupa1,upalupa2,upalupa3,upalupa4,upalupa5,upalupa6,upalupa7,upalupa8,upalupa9,
  // weasel1,weasel2,weasel3,weasel4,weasel5,weasel6,weasel7,weasel8,weasel9
} from "../../assets/images/animal";


function AllDraw() {
  const [modalOpen, setModalOpen] = useState(false);

  const allPiece = [panda1,panda2,panda3,panda4,panda5,panda6,panda7,panda8,panda9,
    // asianele1,asianele2,asianele3,asianele4,asianele5,asianele6,asianele7,asianele8,asianele9,
    // cat1,cat2,cat3,cat4,cat5,cat6,cat7,cat8,cat9,
    // crane1,crane2,crane3,crane4,crane5,crane6,crane7,crane8,crane9,
    // dolphin1,dolphin2,dolphin3,dolphin4,dolphin5,dolphin6,dolphin7,dolphin8,dolphin9,
    // dugong1,dugong2,dugong3,dugong4,dugong5,dugong6,dugong7,dugong8,dugong9,
    // eel1,eel2,eel3,eel4,eel5,eel6,eel7,eel8,eel9,
    // elk1,elk2,elk3,elk4,elk5,elk6,elk7,elk8,elk9,
    // finless1,finless2,finless3,finless4,finless5,finless6,finless7,finless8,finless9,
    // goat1,goat2,goat3,goat4,goat5,goat6,goat7,goat8,goat9,
    // hawk1,hawk2,hawk3,hawk4,hawk5,hawk6,hawk7,hawk8,hawk9,
    // hippo1,hippo2,hippo3,hippo4,hippo5,hippo6,hippo7,hippo8,hippo9,
    // orangutan1,orangutan2,orangutan3,orangutan4,orangutan5,orangutan6,orangutan7,orangutan8,orangutan9,
    // otter1,otter2,otter3,otter4,otter5,otter6,otter7,otter8,otter9,
    // polarbear1,polarbear2,polarbear3,polarbear4,polarbear5,polarbear6,polarbear7,polarbear8,polarbear9,
    // rabbit1,rabbit2,rabbit3,rabbit4,rabbit5,rabbit6,rabbit7,rabbit8,rabbit9,
    // redpanda1,redpanda2,redpanda3,redpanda4,redpanda5,redpanda6,redpanda7,redpanda8,redpanda9,
    // rhinoceros1,rhinoceros2,rhinoceros3,rhinoceros4,rhinoceros5,rhinoceros6,rhinoceros7,rhinoceros8,rhinoceros9,
    // shark1,shark2,shark3,shark4,shark5,shark6,shark7,shark8,shark9,
    // spoonbill1,spoonbill2,spoonbill3,spoonbill4,spoonbill5,spoonbill6,spoonbill7,spoonbill8,spoonbill9,
    // tiger1,tiger2,tiger3,tiger4,tiger5,tiger6,tiger7,tiger8,tiger9,
    // turtle1,turtle2,turtle3,turtle4,turtle5,turtle6,turtle7,turtle8,turtle9,
    // upalupa1,upalupa2,upalupa3,upalupa4,upalupa5,upalupa6,upalupa7,upalupa8,upalupa9,
    // weasel1,weasel2,weasel3,weasel4,weasel5,weasel6,weasel7,weasel8,weasel9
  ]
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  function drawButton(e) {
    e.preventDefault();
    openModal()
  }

  return (
    <div className="AllDraw">
      <div className="CardList flex justify-center">
        <div className="flex">
          <div className="drawCard">
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </div>
          <div className="drawCard">
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </div>
          <div className="drawCard">
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </div>
          <div className="drawCard">
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </div>
          <div className="drawCard ">
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </div>
          <div className="drawCard">
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </div>
        </div>
        <div className="flex">
          <div className="drawCard">
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </div>
          <div className="drawCard">
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </div>
          <div className="drawCard">
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </div>
          <div className="drawCard">
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </div>
          <div className="drawCard">
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </div>
          <div className="drawCard">
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </div>
        </div>

        <div className="flex">
          <div className="drawCard">
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </div>
          <div className="drawCard">
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </div>
          <div className="drawCard">
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </div>
          <div className="drawCard">
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </div>
          <div className="drawCard">
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </div>
          <div className="drawCard">
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </div>

        </div>

        <div className="flex">
          <div className="drawCard">
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </div>
          <div className="drawCard">
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </div>
          <div className="drawCard">
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </div>
          <div className="drawCard">
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </div>
          <div className="drawCard">
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </div>
          <div className="drawCard">
            <img className="drawImg" src={TEST} alt="#" />
            <h1 className="fs-20 notoBold drawTitle">동물 이름</h1>
          </div>

        </div>

      </div>
      <button className="drawButton fs-28 notoBold" onClick={e => drawButton(e)} id="collection" type="button">전체 뽑기 (가격)</button>
      <div>
        <h1 className="fs-24 notoBold drawNotice">뽑기를 통해 컬렉션을 수집해보세요.</h1>
        <h1 className="fs-24 notoBold drawNotice">전체 뽑기는 216종류의 조각이 중 하나의 조각이 일정 확률로 등장합니다.</h1>
        <h3 className="fs-18 notoMid drawNotice drawNotice2">보유중인 업적에 따라 미보유중인 조각이 등장할 확률이 상승합니다.</h3>
      </div>
      <DrawModal open={modalOpen} close={closeModal} piece={allPiece} />
    </div>
  )
}
export default AllDraw;
