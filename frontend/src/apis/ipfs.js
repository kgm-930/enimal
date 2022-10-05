import axios from 'axios'
import { NFTStorage } from 'nft.storage'

// const API_URL = "http://j7c106.p.ssafy.io:9000/create"
const API_URL = "http://j7c106.p.ssafy.io:9000/create"
// const API_URL = process.env.REACT_APP_API_URL
// const API_KEY = process.env.REACT_APP_NFT_STORAGE_KEY
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDk3MGFENGFGNDliYzA3ODg5NEM5NzM3QzBDRWVENkUxODJCOEFhMDIiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2NDI4NTE2NzM1MSwibmFtZSI6ImVuaW1hbCJ9.pa-Qnsx2llaA4DKjlHG9R6aaLoSm29FIsDfS_LqLoe8"
const client = new NFTStorage({token: API_KEY})


// 이미지 데이터를 ipfs에 업로드
export async function uploadData(type, prompt, name, owner) {
	let metadata
  const DATA = {type, prompt}
  await axios.post(API_URL, DATA)
		.then(async (res) => {
			console.log(res.data.substr(24))
			const img = await fetch(res.data.substr(24))
			if (!img.ok) {
				alert("실패했습니다")
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
		metadata = await client.store(json)
	})
  return metadata
}

export default uploadData;