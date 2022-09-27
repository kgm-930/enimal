// const ipfsAPI = require('ipfs-api')
// import ipfsAPI from 'ipfs-api'
// const Buffer = require('buffer')
const WomboDream = require('./dream-api/dist/app')
// const WomboDream = require('dream-api')
const NFTStorage = require('nft.storage')
// import mime from 'mime'
// import fs from 'fs'
// import path from 'path'
const axios = require('axios')
// const API_KEY = process.env.REACT_APP_NFT_STORAGE_KEY
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDk3MGFENGFGNDliYzA3ODg5NEM5NzM3QzBDRWVENkUxODJCOEFhMDIiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2NDI4NTE2NzM1MSwibmFtZSI6ImVuaW1hbCJ9.pa-Qnsx2llaA4DKjlHG9R6aaLoSm29FIsDfS_LqLoe8"

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

const client = new NFTStorage({token: API_KEY})

// ai 이미지 생성
async function makeImg(type, enimal) {
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
async function getBlob(type, prompt) {
	// const url = await makeImg(type, prompt)
	return new Promise((resolve) => {
		makeImg(type, prompt)
			.then((url) => {
				axios.get(url)
				.then((res) => {
					console.log(res)
					resolve(res.blob())
				})
		})
	})
}

// cid로 메타데이터 정보 조회
// async function getMetaInfo(cid) {
// 	const result = await ipfs.cat(cid)
// 	const strResult = result.toString('utf-8')
// 	// console.log(strResult)
// 	return strResult
// }

// ipfs에 메타데이터 업로드
async function upload(image, name, owner, type) {
	const json = {
		name,
		owner,
		image,
		date: Date.now(),
		type,
	}
	const metadata = await client.store(json)
	console.log(metadata)
	return metadata
}

exports.makeImg = makeImg
exports.resultImg = resultImg
// exports.imgUpload = imgUpload
// exports.getMetaInfo = getMetaInfo
// exports.metaUpload = metaUpload

