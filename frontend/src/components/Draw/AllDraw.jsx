import React, { useState } from "react";
import './AllDraw.scss'


// import TEST from '@images/test.png'
import egg1 from '@images/eggs/egg1.png'
import egg2 from '@images/eggs/egg2.png'
import egg3 from '@images/eggs/egg3.png'
import egg4 from '@images/eggs/egg4.png'
import egg5 from '@images/eggs/egg5.png'
import egg6 from '@images/eggs/egg6.png'
import egg7 from '@images/eggs/egg7.png'
import egg8 from '@images/eggs/egg8.png'
import egg9 from '@images/eggs/egg9.png'
import egg10 from '@images/eggs/egg10.png'
import egg11 from '@images/eggs/egg11.png'
import egg12 from '@images/eggs/egg12.png'
import egg13 from '@images/eggs/egg13.png'
import egg14 from '@images/eggs/egg14.png'
import egg15 from '@images/eggs/egg15.png'
import egg16 from '@images/eggs/egg16.png'
import egg17 from '@images/eggs/egg17.png'
import egg18 from '@images/eggs/egg18.png'
import egg19 from '@images/eggs/egg19.png'
import egg20 from '@images/eggs/egg20.png'
import egg21 from '@images/eggs/egg21.png'
import egg22 from '@images/eggs/egg22.png'
import egg23 from '@images/eggs/egg23.png'
import egg24 from '@images/eggs/egg24.png'

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
      <div className="CardList flex raw">
        <div className="drawCard">
          <img className="drawImg" src={egg1} alt="#" />
          <h1 className="fs-14 notoBold drawTitle">북극곰</h1>
        </div>
        <div className="drawCard">
          <img className="drawImg" src={egg2} alt="#" />
          <h1 className="fs-14 notoBold drawTitle">안데스산 고양이</h1>
        </div>
        <div className="drawCard">
          <img className="drawImg" src={egg3} alt="#" />
          <h1 className="fs-14 notoBold drawTitle">검은 코뿔소</h1>
        </div>
        <div className="drawCard">
          <img className="drawImg" src={egg4} alt="#" />
          <h1 className="fs-14 notoBold drawTitle">산양</h1>
        </div>
        <div className="drawCard">
          <img className="drawImg" src={egg5} alt="#" />
          <h1 className="fs-14 notoBold drawTitle">두루미</h1>
        </div>
        <div className="drawCard">
          <img className="drawImg" src={egg6} alt="#" />
          <h1 className="fs-14 notoBold drawTitle">자이언트 판다</h1>
        </div>
        <div className="drawCard">
          <img className="drawImg" src={egg7} alt="#" />
          <h1 className="fs-14 notoBold drawTitle">강토끼</h1>
        </div>
        <div className="drawCard">
          <img className="drawImg" src={egg8} alt="#" />
          <h1 className="fs-14 notoBold drawTitle">수달</h1>
        </div>
        <div className="drawCard">
          <img className="drawImg" src={egg9} alt="#" />
          <h1 className="fs-14 notoBold drawTitle">우파루파</h1>
        </div>
        <div className="drawCard">
          <img className="drawImg" src={egg10} alt="#" />
          <h1 className="fs-14 notoBold drawTitle">매</h1>
        </div>
        <div className="drawCard">
          <img className="drawImg" src={egg11} alt="#" />
          <h1 className="fs-14 notoBold drawTitle">고라니</h1>
        </div>
        <div className="drawCard">
          <img className="drawImg" src={egg12} alt="#" />
          <h1 className="fs-14 notoBold drawTitle">듀공</h1>
        </div>
        <div className="drawCard">
          <img className="drawImg" src={egg13} alt="#" />
          <h1 className="fs-14 notoBold drawTitle">오랑우탄</h1>
        </div>
        <div className="drawCard">
          <img className="drawImg" src={egg14} alt="#" />
          <h1 className="fs-14 notoBold drawTitle">아시아 코끼리</h1>
        </div>
        <div className="drawCard">
          <img className="drawImg" src={egg15} alt="#" />
          <h1 className="fs-14 notoBold drawTitle">상괭이</h1>
        </div>
        <div className="drawCard">
          <img className="drawImg" src={egg16} alt="#" />
          <h1 className="fs-14 notoBold drawTitle">바다거북</h1>
        </div>
        <div className="drawCard">
          <img className="drawImg" src={egg17} alt="#" />
          <h1 className="fs-14 notoBold drawTitle">레서판다</h1>
        </div>
        <div className="drawCard">
          <img className="drawImg" src={egg18} alt="#" />
          <h1 className="fs-14 notoBold drawTitle">검은발족제비</h1>
        </div>
        <div className="drawCard">
          <img className="drawImg" src={egg19} alt="#" />
          <h1 className="fs-14 notoBold drawTitle">하마</h1>
        </div>
        <div className="drawCard">
          <img className="drawImg" src={egg20} alt="#" />
          <h1 className="fs-14 notoBold drawTitle">호랑이</h1>
        </div>
        <div className="drawCard">
          <img className="drawImg" src={egg21} alt="#" />
          <h1 className="fs-14 notoBold drawTitle">고래상어</h1>
        </div>
        <div className="drawCard">
          <img className="drawImg" src={egg22} alt="#" />
          <h1 className="fs-14 notoBold drawTitle">뱀장어</h1>
        </div>
        <div className="drawCard">
          <img className="drawImg" src={egg23} alt="#" />
          <h1 className="fs-14 notoBold drawTitle">양쯔강돌고래</h1>
        </div>
        <div className="drawCard">
          <img className="drawImg" src={egg24} alt="#" />
          <h1 className="fs-14 notoBold drawTitle">저어새</h1>
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
