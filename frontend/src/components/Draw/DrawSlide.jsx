import React, { useState, useEffect } from "react";
import './DrawSlide.scss'

import { getAllDraw } from "@apis/draw";

import {
  panda,asianele,cat,crane,dolphin,dugong,eel,elk,finless,goat,hawk,hippo,orangutan,otter,polarbear,rabbit,redpanda,rhinoceros,shark,spoonbill,tiger,turtle,upalupa,weasel,
  panda1, panda2, panda3, panda4, panda5, panda6, panda7, panda8, panda9,
  asianele1, asianele2, asianele3, asianele4, asianele5, asianele6, asianele7, asianele8, asianele9,
  cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8, cat9,
  crane1, crane2, crane3, crane4, crane5, crane6, crane7, crane8, crane9,
  dolphin1, dolphin2, dolphin3, dolphin4, dolphin5, dolphin6, dolphin7, dolphin8, dolphin9,
  dugong1, dugong2, dugong3, dugong4, dugong5, dugong6, dugong7, dugong8, dugong9,
  eel1, eel2, eel3, eel4, eel5, eel6, eel7, eel8, eel9,
  elk1, elk2, elk3, elk4, elk5, elk6, elk7, elk8, elk9,
  finless1, finless2, finless3, finless4, finless5, finless6, finless7, finless8, finless9,
  goat1, goat2, goat3, goat4, goat5, goat6, goat7, goat8, goat9,
  hawk1, hawk2, hawk3, hawk4, hawk5, hawk6, hawk7, hawk8, hawk9,
  hippo1, hippo2, hippo3, hippo4, hippo5, hippo6, hippo7, hippo8, hippo9,
  orangutan1, orangutan2, orangutan3, orangutan4, orangutan5, orangutan6, orangutan7, orangutan8, orangutan9,
  otter1, otter2, otter3, otter4, otter5, otter6, otter7, otter8, otter9,
  polarbear1, polarbear2, polarbear3, polarbear4, polarbear5, polarbear6, polarbear7, polarbear8, polarbear9,
  rabbit1, rabbit2, rabbit3, rabbit4, rabbit5, rabbit6, rabbit7, rabbit8, rabbit9,
  redpanda1, redpanda2, redpanda3, redpanda4, redpanda5, redpanda6, redpanda7, redpanda8, redpanda9,
  rhinoceros1, rhinoceros2, rhinoceros3, rhinoceros4, rhinoceros5, rhinoceros6, rhinoceros7, rhinoceros8, rhinoceros9,
  shark1, shark2, shark3, shark4, shark5, shark6, shark7, shark8, shark9,
  spoonbill1, spoonbill2, spoonbill3, spoonbill4, spoonbill5, spoonbill6, spoonbill7, spoonbill8, spoonbill9,
  tiger1, tiger2, tiger3, tiger4, tiger5, tiger6, tiger7, tiger8, tiger9,
  turtle1, turtle2, turtle3, turtle4, turtle5, turtle6, turtle7, turtle8, turtle9,
  upalupa1, upalupa2, upalupa3, upalupa4, upalupa5, upalupa6, upalupa7, upalupa8, upalupa9,
  weasel1, weasel2, weasel3, weasel4, weasel5, weasel6, weasel7, weasel8, weasel9
} from "../../assets/images/animal";


function DrawSlide(props) {
  const { draw,length } = props; 

  /* eslint-disable no-unused-vars */
  const ALL = [panda,asianele,cat,crane,dolphin,dugong,eel,elk,finless,goat,hawk,hippo,orangutan,otter,polarbear,rabbit,redpanda,rhinoceros,shark,spoonbill,tiger,turtle,upalupa,weasel]
  const Panda = [panda1, panda2, panda3, panda4, panda5, panda6, panda7, panda8, panda9];
  const Asianele = [asianele1, asianele2, asianele3, asianele4, asianele5, asianele6, asianele7, asianele8, asianele9];
  const Cat = [cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8, cat9];
  const Crane = [crane1, crane2, crane3, crane4, crane5, crane6, crane7, crane8, crane9];
  const Dolphin = [dolphin1, dolphin2, dolphin3, dolphin4, dolphin5, dolphin6, dolphin7, dolphin8, dolphin9];
  const Dugong = [dugong1, dugong2, dugong3, dugong4, dugong5, dugong6, dugong7, dugong8, dugong9];
  const Eel = [eel1, eel2, eel3, eel4, eel5, eel6, eel7, eel8, eel9];
  const Elk = [elk1, elk2, elk3, elk4, elk5, elk6, elk7, elk8, elk9];
  const Finless = [finless1, finless2, finless3, finless4, finless5, finless6, finless7, finless8, finless9];
  const Goat = [goat1, goat2, goat3, goat4, goat5, goat6, goat7, goat8, goat9];
  const Hawk = [hawk1, hawk2, hawk3, hawk4, hawk5, hawk6, hawk7, hawk8, hawk9];
  const Hippo = [hippo1, hippo2, hippo3, hippo4, hippo5, hippo6, hippo7, hippo8, hippo9];
  const Orangutan = [orangutan1, orangutan2, orangutan3, orangutan4, orangutan5, orangutan6, orangutan7, orangutan8, orangutan9];
  const Otter = [otter1, otter2, otter3, otter4, otter5, otter6, otter7, otter8, otter9];
  const Polarbear = [polarbear1, polarbear2, polarbear3, polarbear4, polarbear5, polarbear6, polarbear7, polarbear8, polarbear9];
  const Rabbit = [rabbit1, rabbit2, rabbit3, rabbit4, rabbit5, rabbit6, rabbit7, rabbit8, rabbit9];
  const Redpanda = [redpanda1, redpanda2, redpanda3, redpanda4, redpanda5, redpanda6, redpanda7, redpanda8, redpanda9];
  const Rhinoceros = [rhinoceros1, rhinoceros2, rhinoceros3, rhinoceros4, rhinoceros5, rhinoceros6, rhinoceros7, rhinoceros8, rhinoceros9];
  const Shark = [shark1, shark2, shark3, shark4, shark5, shark6, shark7, shark8, shark9];
  const Spoonbill = [spoonbill1, spoonbill2, spoonbill3, spoonbill4, spoonbill5, spoonbill6, spoonbill7, spoonbill8, spoonbill9];
  const Tiger = [tiger1, tiger2, tiger3, tiger4, tiger5, tiger6, tiger7, tiger8, tiger9];
  const Turtle = [turtle1, turtle2, turtle3, turtle4, turtle5, turtle6, turtle7, turtle8, turtle9];
  const Upalupa = [upalupa1, upalupa2, upalupa3, upalupa4, upalupa5, upalupa6, upalupa7, upalupa8, upalupa9];
  const Weasel = [weasel1, weasel2, weasel3, weasel4, weasel5, weasel6, weasel7, weasel8, weasel9];

  const Animal = {
    '북극곰':Polarbear,'안데스산고양이':Cat,'검은코뿔소':Rhinoceros,'산양':Goat,'두루미':Crane,'자이언트판다':Panda,
    '강토끼':Rabbit, '수달':Otter, '우파루파':Upalupa, '매':Hawk,'고라니':Elk,'듀공':Dugong,
    '오랑우탄':Orangutan,'아시아코끼리':Asianele,'상괭이':Finless,'바다거북':Turtle,'레서판다':Redpanda,'검은발족제비':Weasel,
    '하마':Hippo,'호랑이':Tiger,'고래상어':Shark,'뱀장어':Eel,'양쯔강돌고래':Dolphin,'저어새':Spoonbill
  };
/* eslint-disable no-unused-vars */

  const [slidesItem, setSlidesItem] = useState(ALL);
  const [count, setCount] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [select, setSelect] = useState(1);
  const [move, setMove] = useState(true);
  const [ArrLength,setArrLength] = useState(length)
  const [drawType,setDrawType] = useState('select')
  const [drawPiece,setDrawPiece] = useState('select')

  useEffect(() => {
    console.log(draw)
    if (draw==='all') {
      setSlidesItem(ALL)
      setDrawType('all')
    }
    else if (draw==='1'){setSlidesItem(Polarbear)}
    else if (draw==='2'){setSlidesItem(Cat)}
    else if (draw==='3'){setSlidesItem(Rhinoceros)}
    else if (draw==='4'){setSlidesItem(Goat)}
    else if (draw==='5'){setSlidesItem(Crane)}
    else if (draw==='6'){setSlidesItem(Panda)}
    else if (draw==='7'){setSlidesItem(Rabbit)}
    else if (draw==='8'){setSlidesItem(Otter)}
    else if (draw==='9'){setSlidesItem(Upalupa)}
    else if (draw==='10'){setSlidesItem(Hawk)}
    else if (draw==='11'){setSlidesItem(Elk)}
    else if (draw==='12'){setSlidesItem(Dugong)}
    else if (draw==='13'){setSlidesItem(Orangutan)}
    else if (draw==='14'){setSlidesItem(Asianele)}
    else if (draw==='15'){setSlidesItem(Finless)}
    else if (draw==='16'){setSlidesItem(Turtle)}
    else if (draw==='17'){setSlidesItem(Redpanda)}
    else if (draw==='18'){setSlidesItem(Weasel)}
    else if (draw==='19'){setSlidesItem(Hippo)}
    else if (draw==='20'){setSlidesItem(Tiger)}
    else if (draw==='21'){setSlidesItem(Shark)}
    else if (draw==='22'){setSlidesItem(Eel)}
    else if (draw==='23'){setSlidesItem(Dolphin)}
    else if (draw==='24'){setSlidesItem(Spoonbill)}
  
  }, draw)

  function setSlides() {
    const side = 3;
    const addedFront = [];
    const addedLast = [];
    let index = 0;
    while (index < side) {
      addedLast.push(slidesItem[index % slidesItem.length])
      addedFront.unshift(slidesItem[slidesItem.length - 1 - index % slidesItem.length])
      index += 1;
    }
    return [...addedFront, ...slidesItem, ...addedLast];
  }
  useEffect(() => {
    if (speed === 5 && select === drawPiece+1) {
      setMove(false)
    }
  }, [speed, select])

  useEffect(() => {
    if (speed > 15) {
      setCount(0)
    }
    const timer = setInterval(() => {
      if (move) {
        setCount(prev => prev + 1);
      }
    }, 5);
    const timer2 = setInterval(() => {
      if (move) {
        setSelect(prev => prev + 1);
      }
    }, 1100 / speed);
    const timer3 = setInterval(() => {
      if (move) {
        setCount(0);
        setSelect(1)
      }
      if (speed >= 6) {
        setSpeed(prev => prev - 5)
      }
    }, ArrLength*1100 / speed);
    return () => {
      clearInterval(timer);
      clearInterval(timer2);
      clearInterval(timer3);
    };
  }, [speed, move]);

  function goDraw(e) {
    e.preventDefault();
    
    if (drawType === 'all') {
      getAllDraw().then(res=>{
        console.log(res)
        if (res.message === 'SUCCESS') {
          const drawed = res.data.animal
          console.log(drawed)
          if (drawed==='북극곰'){setSlidesItem(Polarbear)}
          else if (drawed==='안데스산고양이'){setSlidesItem(Cat)}
          else if (drawed==='검은코뿔소'){setSlidesItem(Rhinoceros)}
          else if (drawed==='산양'){setSlidesItem(Goat)}
          else if (drawed==='두루미'){setSlidesItem(Crane)}
          else if (drawed==='자이언트판다'){setSlidesItem(Panda)}
          else if (drawed==='강토끼'){setSlidesItem(Rabbit)}
          else if (drawed==='수달'){setSlidesItem(Otter)}
          else if (drawed==='우파루파'){setSlidesItem(Upalupa)}
          else if (drawed==='매'){setSlidesItem(Hawk)}
          else if (drawed==='고라니'){setSlidesItem(Elk)}
          else if (drawed==='듀공'){setSlidesItem(Dugong)}
          else if (drawed==='오랑우탄'){setSlidesItem(Orangutan)}
          else if (drawed==='아시아코끼리'){setSlidesItem(Asianele)}
          else if (drawed==='상괭이'){setSlidesItem(Finless)}
          else if (drawed==='바다거북'){setSlidesItem(Turtle)}
          else if (drawed==='렛서판다'){setSlidesItem(Redpanda)}
          else if (drawed==='검은발족제비'){setSlidesItem(Weasel)}
          else if (drawed==='하마'){setSlidesItem(Hippo)}
          else if (drawed==='호랑이'){setSlidesItem(Tiger)}
          else if (drawed==='고래상어'){setSlidesItem(Shark)}
          else if (drawed==='뱀장어'){setSlidesItem(Eel)}
          else if (drawed==='양쯔강돌고래'){setSlidesItem(Dolphin)}
          else if (drawed==='저어새'){setSlidesItem(Spoonbill)}

          setArrLength(9)
          setMove(true)
          setSpeed(20)
          setDrawPiece(res.data.piece)
        }
      })
    }
  }
  return (
    <div className="slider-area">
      <div className="slider">
        <div className="slider-list">
          <div className="slider-track">
            {
              setSlides().map((item) =>
                <div className="slider-item" >
                  <div id="drawitem" className="drawitem" style={{ transform: `translateX(-${count * speed}px)`, transition: `transform 0.00000001s ease-in` }}>
                    <img src={item} alt="#" className="pieceimg" />
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div >
      <button type="button" className="fs-18 notoBold goDraw" onClick={e => goDraw(e)}>
        뽑기 (가격)
      </button>
    </div >
  );
}
export default DrawSlide;
