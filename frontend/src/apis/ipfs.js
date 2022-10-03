import { NFTStorage } from 'nft.storage'
// const API_KEY = process.env.REACT_APP_NFT_STORAGE_KEY
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDk3MGFENGFGNDliYzA3ODg5NEM5NzM3QzBDRWVENkUxODJCOEFhMDIiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2NDI4NTE2NzM1MSwibmFtZSI6ImVuaW1hbCJ9.pa-Qnsx2llaA4DKjlHG9R6aaLoSm29FIsDfS_LqLoe8"
const client = new NFTStorage({token: API_KEY})

// 이미지 데이터를 ipfs에 업로드
export async function uploadData(type, prompt, name, owner, url) {
	//* 필요한 인자 :  url, name, owner(userAddress), type
  //* makeImg 함수를 여기서 호출할 거라면 인자로 url 받지 않아도 됨
	// makeImg(type, prompt)
	// 	.then(async (url) => {
			const img = await fetch(url)
			if (!img.ok) {
				console.log(img.ok)
			}
			const image = await img.blob()
			const json = {
				name,
				description: prompt,
				image,
				properties: {
					owner,
					date: Date.now(),
					type,
				}
			}
			const metadata = await client.store(json)
			return metadata
	// })
}


const [name, setName] = useState('enimal') // NFT 생성 모달에서 이름 입력 받음 (기본값 필요)
const owner = localStorage.getItem('myAddress') // 현재 사용자 계정
const [type, setType] = useState('') // NFT 생성 모달에서 선택지를 줌
const [prompt, setPrompt] = useState() // 현재 동물

import {makeImg, saveMetadata} from '@apis/account'
import {create} from '@apis/sendTx'
import {uploadData} from "@apis/treatImg"

// 최종 적용 함수
function final() {
  //* type, prompt, name, owner 필요
  
  // 1. axios로 back에서 dream-api 결과물 url 받아옴
  makeImg({type, prompt})
    .then(async (url) => {
      // 2. url 받아온 후, type, prompt, name, owner, url 전달 (ipfs로 업로드)
      await uploadData(type, prompt, name, owner, url)
      .then(async (metadata) => {
        const tokenURI = await metadata.url
          // 3. 스마트 컨트랙트에 민팅 요청
          await create(owner, tokenURI)
            .then(async (res) => {
              if (res) {
                // 4. 백에 메타데이터 전송 (데이터 적절한지 물어보기)
                const {data} = metadata
                const modifiedData = {
                  name: data.name,
                  owner: data.properties.owner,
                  date: data.properties.date,
                  type: data.properties.type,
                  image: `https://ipfs.io/ipfs/${data.image.pathname.replace('/', '')}`
                }
                saveMetadata(modifiedData)
                  .then((response) => {
                    // 프론트에서 어떤 정보 필요할지 물어보기
                    console.log(response)
                    // NFT 생성됐음을 사용자에게 알림
                  })
              }
            })
        })
    })
}