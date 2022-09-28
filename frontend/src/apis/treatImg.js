import {NFTStorage} from 'nft.storage'
// const ipfsAPI = require('ipfs-api')
// import ipfsAPI from 'ipfs-api'
// const Buffer = require('buffer')

// import fetchJsonp from 'fetch-jsonp'
import axios from 'axios'

const WomboDream = require('./dream-api/dist/app')
// const WomboDream = require('dream-api')
// import mime from 'mime'
// import fs from 'fs'
// import path from 'path'
// const API_KEY = process.env.REACT_APP_NFT_STORAGE_KEY
// const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDk3MGFENGFGNDliYzA3ODg5NEM5NzM3QzBDRWVENkUxODJCOEFhMDIiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2NDI4NTE2NzM1MSwibmFtZSI6ImVuaW1hbCJ9.pa-Qnsx2llaA4DKjlHG9R6aaLoSm29FIsDfS_LqLoe8"
// const client = new NFTStorage({
// 	token: API_KEY
// })



// 배포 시 이 부분 수정 필요
// 터미널 창 - ipfs config Addresses.API
// const ipfs = ipfsAPI('/ip4/127.0.0.1/tcp/5001')
// const ipfs = ipfsAPI(`${process.env.REACT_APP_IPFS_IP}/tcp/${process.env.REACT_APP_IPFS_PORT}`)

const typeToStyle = {
  Paint: 50, HDR : 52, Polygon : 49, Gouache : 48, Comic : 45, 'Line-Art' : 47
}

// const typeDetail = {
// 	Paint: "",
// 	HDR : "실제 사진과 비슷하게 표현된 그림이에요",
// 	Polygon : "도형을 이어붙여 만든 느낌이 드는 그림이에요",
// 	gouache : "수채화 물감으로 그린 그림이에요",
// 	Comic : "",
// 	"Line-Art" : "선만으로 표현된 그림이에요"
// }

/*
그림(2D) < --------- > 사진(3D)
Gouache	Line-Art Paint	Poligon	Comic	HDR
수채화 선 물감	?	도형 물감 3D
*/

// const convertedPrompt = {
// 	'검은코뿔소':'검은코뿔소', '양쯔강돌고래':'양쯔강돌고래', '저어새':'spoonbill',
// 	'고라니':'고라니', '하마':'하마', '뱀장어':'뱀장어', '레서판다':'레서판다',
// 	'우파루파':'아홀로틀', '자이언트판다':'자이언트판다', '북극곰':'북극곰',
// 	'수달':'수달', '바다거북':'바다거북', '안데스산고양이':'안데스산고양이',
// 	'아시아코끼리':'아시아코끼리', '강토끼':'부시맨토끼', '고래상어':'고래상어',
// 	'오랑우탄':'오랑우탄', '상괭이':'finless porpoise', '검은발족제비':'검은발족제비',
// 	'듀공':'dugong', '매':'hawk', '두루미':'두루미', '산양':'산양', '호랑이':'호랑이'
// }
const convert = {
	'저어새':'spoonbill',	'우파루파':'아홀로틀', '강토끼':'부시맨토끼',
	'상괭이':'finless porpoise', '듀공':'dugong', '매':'hawk'
}

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
//* cors error!!
export async function getBlob(type, prompt) {
	console.log(type, prompt)
	// const url = await makeImg(type, prompt)
	const url = "//images.wombo.art/generated/e73fab84-d9b6-429d-bfac-a29229bb527b/final.jpg?Expires=1670928846&Signature=MDcy9NJbVgW~WIr0uL8jqTRDVayLiGbAKiftS1Q1CoUe19IaEYabvd2QIOgFbHwSQ8eqsEyc4wHcZV~-q8LdY6nPXBFi2mEL557j6fKOtmD8fIhOLC30dxsWJXzvnnM3LyigrXbGela1RdOixkrSnm1s5OURGyQTOo72k22UN9H0jxiGgFL0EVVHpomXP~kHxNHuP~4gCVy2uu~enkEGdbJVPy~0YKQBK-LEqq8ct3pq7eLU9bRd3s6QYNDwtxQHtDVbezr6FzbC~Q7fKuto~hsFt9FzMFqlGbZ-Gsh4CvOIJFcHziuYSi-2i4vaGoHBkdBbrKZiHzKq13YSlYKtWw__&Key-Pair-Id=K1ZXCNMC55M2IL"
	axios({
		url,
		method: 'get',
		headers: {
			"Access-Control-Allow-Origin" : "*"
		}
	})
	
	// fetchJsonp(url)
	// 	.then((res) => {
	// 		console.log(res)
	// 		console.log(res.blob())
	// 	})
	// 	.catch((err) => {
	// 		console.log(err)
	// 	})

	// return new Promise(() => {
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

// cid로 메타데이터 정보 조회
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDk3MGFENGFGNDliYzA3ODg5NEM5NzM3QzBDRWVENkUxODJCOEFhMDIiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2NDI4NTE2NzM1MSwibmFtZSI6ImVuaW1hbCJ9.pa-Qnsx2llaA4DKjlHG9R6aaLoSm29FIsDfS_LqLoe8"
const client = new NFTStorage({
	token: API_KEY,
	// endpoint: 'https://ipfs.io/ipfs/'
})
export async function getMetaInfo(cid) {
	// cors 에러
	const result = await client.status(cid)
	console.log(result)
	return result
}

// ipfs에 메타데이터 업로드
export async function upload(image, name, owner, type) {
	const json = {
		name,
		owner,
		image,
		date: Date.now(),
		type,
	}
	// image: new File(['<DATA>'], 'pinpie.jpg', { type: 'image/jpg' }),
	const metadata = await client.store(json)
	console.log(metadata)
	return metadata
}

// For example's sake, we'll fetch an image from an HTTP URL.
// In most cases, you'll want to use files provided by a user instead.
export async function getExampleImage() {
  const imageOriginUrl = "https://user-images.githubusercontent.com/87873179/144324736-3f09a98e-f5aa-4199-a874-13583bf31951.jpg"
  const r = await fetch(imageOriginUrl)
  if (!r.ok) {
    throw new Error(`error fetching image: [${r.statusCode}]: ${r.status}`)
  }
  return r.blob()
}