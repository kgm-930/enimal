import axios from 'axios'
import { NFTStorage } from 'nft.storage'

// const API_URL = "http://j7c106.p.ssafy.io:9000/create"
const API_URL = "http://j7c106.p.ssafy.io:9000"
// const API_URL = process.env.REACT_APP_API_URL
// const API_KEY = process.env.REACT_APP_NFT_STORAGE_KEY
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDk3MGFENGFGNDliYzA3ODg5NEM5NzM3QzBDRWVENkUxODJCOEFhMDIiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2NDI4NTE2NzM1MSwibmFtZSI6ImVuaW1hbCJ9.pa-Qnsx2llaA4DKjlHG9R6aaLoSm29FIsDfS_LqLoe8"
const client = new NFTStorage({token: API_KEY})


// 이미지 데이터를 ipfs에 업로드
export async function uploadData(type, prompt, name, owner) {
	// let metadata
	const config = {
	method: "POST",
	url: API_URL.concat('/create'),
	// responseType: "blob",
	data: {type, prompt},
	};
	// const response = await axios(config);
const url = await axios(config)
			// .then(async (res) => {
			//     await axios.get(API_URL.concat('/image'), {params: {url:res.data, type, prompt, name, owner}})
			//         .then(async response => {
			//             console.log(response)
			//         })


					// const img = fetch(res)
					// console.log(img)

							// .then(response => {
							//     image = response.data.blob()
							// })
					//     .then(blob => {
					//         console.log(blob)
					//     })
					// console.log(res.data)
					// console.log(res.data.FileReader())
					// image = res.data
							// image = await response.blob()
					// console.log(res.data.substr(24))
					// console.log(url.data)
					const img = await fetch(url.data)
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
			const metadata = await client.store(json)
	// })
return metadata
}

export default uploadData;