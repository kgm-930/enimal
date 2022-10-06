import React, { useState } from "react";
import '@components/common/Modal.scss'
import './MakeNFTModal.scss'

import { uploadData } from "@apis/ipfs"
import { create } from "@apis/sendTx"

import { getSaveMyNFT } from "@apis/mypage";
import Loading from "../../common/Loading";

function MakeNFTModal(props) {
  const { open, close, animal, index } = props;
  const [Type, setType] = useState("Gouache");
  const [Name, setName] = useState(null);
  const [loading, setLoading] = useState(false);
  const [Complete, setComplete] = useState(false);
  const [CompleteImg, setCompleteImg] = useState(null);

  const typeList = ["Gouache", "Line-Art", "Paint", "Polygon", "Comic", "HDR"]
  const typeDetail = {
    Paint: "물감으로 그린 느낌이에요",
    HDR: "실제 사진과 비슷하게 표현된 그림이에요",
    Polygon: "도형을 이어붙여 만든 느낌이 드는 그림이에요",
    Gouache: "수채화 물감으로 그린 그림이에요",
    Comic: "입체감 있는 일러스트 느낌이에요",
    "Line-Art": "선만으로 표현된 그림이에요"
  }

  async function makeNFT() {
    if (Name) {
      console.log(Name)
      const type = Type
      const prompt = animal
      const name = Name
      const owner = localStorage.myAddress
      setLoading(true)
      uploadData(type, prompt, name, owner)
        .then(async metadata => {
          const tokenURI = await metadata?.url
          await create(owner, tokenURI)
            .then(async (res) => {
              if (res) {
                // 4. 백에 메타데이터 전송 (데이터 적절한지 물어보기)
                const { data } = metadata
                const Data = {
                  name: data.name,
                  type: data.properties.type,
                  image: `https://ipfs.io/ipfs${data.image.pathname.replace('/', '')}`,
                  tokenId: res,
                }

                getSaveMyNFT(index, Data).then(ress => {
                  console.log(ress)
                  setLoading(false)
                  setComplete(true)
                  setCompleteImg(Data)
                })
                // saveMetadata(modifiedData)
                //   .then((response) => {
                //     // 프론트에서 어떤 정보 필요할지 물어보기
                //     console.log(response)
                //     // NFT 생성됐음을 사용자에게 알림
                //   })
              }
            })
        })
    }
    else {
      alert("이름을 입력해주세요!")
    }

  }



  return (
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section className="makeNFT">
          <header>
            <h1 className='titleText fs-24 notoBold'>{animal} NFT 발행하기</h1>
          </header>
          <main className="flex column align-center NFTModalMain">
            {Complete ?
              <li className="NFTcard">
                <img className="NFTImg" src={CompleteImg.image} alt="#" />
                <h1 className="fs-28 notoBold my-3">{CompleteImg.name}</h1>
                <div className="flex justify-center">
                  <h1 className="fs-18 roThin">Made by</h1>
                  <h1 className="fs-18 mx-2 roMid">{localStorage.MyNick}</h1>
                </div>
              </li>
              :

              <div className="flex column align-center my-5">
                <input type="text" className="nameInput fs-25 notoBold my-3" onChange={e => setName(e.target.value)} maxLength="8" placeholder="NFT에 이름을 지어주세요" />
                {loading ? <Loading /> : null}
                <div className="TypeBox">
                  <input
                    className="my-3 Typeinput"
                    type="range"
                    onChange={e => setType(typeList[e.target.value])}
                    min="0"
                    max="5"
                    defaultValue="0"
                    step="1"
                  />
                  <h2 className="fs-28 notoBold my-3">{Type}</h2>
                  <h2>{typeDetail[Type]}</h2>
                </div>
              </div>}

          </main>
          <footer>
            {Complete ?
              <button type="button" className="changeButton fs-22 notoBold" onClick={close}>
                확인
              </button>
              :
              <>
                <button type="button" className="changeButton fs-22 notoBold" onClick={makeNFT}>
                  만들기
                </button>
                <button type="button" className="closeButton fs-22 notoBold" onClick={close}>
                  취소
                </button>
              </>
            }
          </footer>
        </section>
      ) : null}
    </div>
  )
}

export default MakeNFTModal;