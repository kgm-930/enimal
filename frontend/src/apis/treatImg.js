import { NFTStorage } from 'nft.storage'
// import axios from 'axios'
import WomboDream from './dream-api/dist/app'

// const API_KEY = process.env.REACT_APP_NFT_STORAGE_KEY
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDk3MGFENGFGNDliYzA3ODg5NEM5NzM3QzBDRWVENkUxODJCOEFhMDIiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2NDI4NTE2NzM1MSwibmFtZSI6ImVuaW1hbCJ9.pa-Qnsx2llaA4DKjlHG9R6aaLoSm29FIsDfS_LqLoe8"


const typeToStyle = {
  Paint: 50, HDR : 52, Polygon : 49, Gouache : 48, Comic : 45, 'Line-Art' : 47
}

const convert = {
	'저어새':'spoonbill',	'우파루파':'아홀로틀', '강토끼':'부시맨토끼',
	'상괭이':'finless porpoise', '듀공':'dugong', '매':'hawk'
}

const client = new NFTStorage({token: API_KEY})

// ai 이미지 생성
export async function makeImg(type, enimal) {
	let prompt
	if (enimal in convert) {
		prompt = convert[enimal]
	} else {
		prompt = enimal
	}
	const style = typeToStyle[type]
	const image = await WomboDream.generateImage(style, prompt, null, null, null, 1000, 30)
	console.log(image)
	return image.result.final
}

// 이미지 데이터를 Blob화
export async function uploadData(type, prompt, name, owner, url) {
	//* 필요한 인자 :  url, name, owner(userAddress), type
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

// ipfs에 메타데이터 업로드
// export async function upload(image, name, owner, type) {
// 	const newImg = image.blob()
// 	const json = {
// 		name,
// 		description: "",
// 		owner,
// 		image: newImg,
// 		date: Date.now(),
// 		type,
// 	}
// 	const metadata = await client.store(json)
// 	console.log(metadata)
// 	return metadata
// }