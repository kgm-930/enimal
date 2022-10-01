import { NFTStorage } from 'nft.storage'
import axios from 'axios'
import WomboDream from './dream-api/dist/app'
// const WomboDream = require('dream-api')
// const NFTStorage = require('nft.storage')
// import mime from 'mime'
// import fs from 'fs'
// import path from 'path'
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
export async function getBlob(type, prompt) {
	console.log(type, prompt)
	// const url = await makeImg(type, prompt)
	const url="https://images.wombo.art/generated/e73fab84-d9b6-429d-bfac-a29229bb527b/final.jpg?Expires=1670928846&Signature=MDcy9NJbVgW~WIr0uL8jqTRDVayLiGbAKiftS1Q1CoUe19IaEYabvd2QIOgFbHwSQ8eqsEyc4wHcZV~-q8LdY6nPXBFi2mEL557j6fKOtmD8fIhOLC30dxsWJXzvnnM3LyigrXbGela1RdOixkrSnm1s5OURGyQTOo72k22UN9H0jxiGgFL0EVVHpomXP~kHxNHuP~4gCVy2uu~enkEGdbJVPy~0YKQBK-LEqq8ct3pq7eLU9bRd3s6QYNDwtxQHtDVbezr6FzbC~Q7fKuto~hsFt9FzMFqlGbZ-Gsh4CvOIJFcHziuYSi-2i4vaGoHBkdBbrKZiHzKq13YSlYKtWw__&Key-Pair-Id=K1ZXCNMC55M2IL"
	axios.get(url)
		.then(console.log)
	// axios({
	// 	url,
	// 	method: "get",
	// 	headers: {
	// 		"Origin": "https://images.wombo.art/",
	// 		"Access-Control-Request-Method": "GET",
	// 		"Access-Control-Request-Headers": "*",
	// 		"Access-Control-Allow-Origin": "*",
	// 	}
	// 	})
	// 	.then((res) => {
	// 		console.log(res)
	// 		console.log(res)
	// 		// resolve(res.blob())
	// 	})
	// return new Promise((resolve) => {
	// 	makeImg(type, prompt)
	// 		.then((url) => {
	// 			axios.get(url)
	// 			.then((res) => {
	// 				console.log(res)
	// 				resolve(res.blob())
	// 			})
	// 	})
	// })
}

// ipfs에 메타데이터 업로드
export async function upload(image, name, owner, type) {
	const newImg = image.blob()
	const json = {
		name,
		description: "",
		owner,
		image: newImg,
		date: Date.now(),
		type,
	}
	const metadata = await client.store(json)
	console.log(metadata)
	return metadata
}