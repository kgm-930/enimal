import React, { useState } from "react";
import '@components/common/Modal.scss'
import './MakeNFTModal.scss'

import { uploadData } from "@apis/ipfs"
import { create } from "@apis/sendTx"

function MakeNFTModal(props) {
  const { open, close, animal } = props;
  const [Type, setType] = useState("Gouache");
  const [Name, setName] = useState(null);

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
    const type = Type
    const prompt = animal
    const name = Name
    const owner = localStorage.myAddress
    uploadData(type, prompt, name, owner)
      .then(async metadata => {
        const tokenURI = await metadata?.url
        await create(owner, tokenURI)
          .then(async (res) => {
            if (res) {
              // 4. 백에 메타데이터 전송 (데이터 적절한지 물어보기)
              const { data } = metadata
              const modifiedData = {
                name: data.name,
                owner: data.properties.owner,
                date: data.properties.date,
                type: data.properties.type,
                image: `https://ipfs.io/ipfs${data.image.pathname.replace('/', '')}`
              }
              console.log(modifiedData)
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







  return (
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section className="makeNFT">
          <header>
            <h1 className='titleText fs-24 notoBold'>{animal} NFT 발행하기</h1>
          </header>


          <main className="flex column align-center NFTModalMain">
            <div className="flex column align-center my-5">
              <input type="text" className="nameInput fs-25 notoBold my-3" onChange={e => setName(e.target.value)} placeholder="NFT에 이름을 지어주세요" />
              <input
                className="my-3 Typeinput"
                type="range"
                onChange={e => setType(typeList[e.target.value])}
                min="0"
                max="5"
                defaultValue="0"
                step="1" />
              <h2 className="fs-28 notoBold my-3">{Type}</h2>
              <h2>{typeDetail[Type]}</h2>
            </div>

          </main>
          <footer>
            <button type="button" className="changeButton fs-22 notoBold" onClick={makeNFT}>
              만들기
            </button>
            <button type="button" className="closeButton fs-22 notoBold" onClick={close}>
              취소
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  )
}

export default MakeNFTModal;