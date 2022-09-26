const WomboDream = require('./dream-api/dist/app')

// 오류 -> ipfs 구동이 되지 않아 그런 것으로 추정
// const ipfsAPI = require('ipfs-api')

// 배포 시 이 부분 수정 필요
// 터미널 창 - ipfs config Addresses.API
// const ipfs = ipfsAPI('/ip4/127.0.0.1/tcp/5001')
// const ipfs = ipfsAPI(`${process.env.REACT_APP_IPFS_IP}/tcp/${process.env.REACT_APP_IPFS_PORT}`)

const typeToStyle = {
  Paint: 50, HDR : 52, Polygon : 49, Gouache : 48, Comic : 45, 'Line-Art' : 47
}

const enimalList = [
  '검은코뿔소', '양쯔강돌고래', '저어새', '고라니', '하마', '뱀장어', '레서판다', '우파루파',
  '자이언트판다', '수달', '바다거북', '안데스산고양이', '아시아코끼리', '강토끼', '고래상어',
  '오랑우탄', '상괭이', '검은발족제비', '듀공', '매', '두루미', '산양', '호랑이'
]

// const type = ["Paint", "HDR", "Polygon", "gouache", "Comic", "Line-Art"]
const typeList = ["Gouache", "Line-Art", "Paint", "Polygon", "Comic", "HDR"]
const typeDetail = {
	Paint: "",
	HDR : "실제 사진과 비슷하게 표현된 그림이에요",
	Polygon : "도형을 이어붙여 만든 느낌이 드는 그림이에요",
	gouache : "수채화 물감으로 그린 그림이에요",
	Comic : "",
	"Line-Art" : "선만으로 표현된 그림이에요"
}

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
async function makeImg(type, enimal) {
	let prompt
	if (enimal in convert) {
		prompt = convert[enimal]
	} else {
		prompt = enimal
	}
	const style = typeToStyle[type]
	const image = await WomboDream.generateImage(style, prompt, null, null, null, null, null, null, 1000, 30)
	return image.result.final
}

// // ipfs에 이미지 업로드
// async function imgUpload(type, prompt) {
// 	// const url = await makeImg(type, prompt)
// 	return new Promise((resolve, reject) => {
// 		makeImg(type, prompt)
// 			.then((url) => {
// 				ipfs.util.addFromURL(url)
// 				.then((result) => {
// 					resolve(result[0]?.hash)
// 			})
// 		})
// 	})
// }

// // cid로 메타데이터 정보 조회
// async function getMetaInfo(cid) {
// 	let result = await ipfs.cat(cid)
// 	const strResult = result.toString('utf-8')
// 	// console.log(strResult)
// 	return strResult
// }

// // ipfs에 메타데이터 업로드
// async function metaUpload(cid, name, owner, type) {
// 	let json = {
// 		fileName: `${cid}.json`,
// 		name,
// 		owner,
// 		image : `https://ipfs.io/ipfs/${cid}`,
// 		date: Date.now(),
// 		type,
// 	}

// 	// 백에 전달할 객체 반환
// 	let metaCid
// 	await ipfs.add(Buffer.from(JSON.stringify(json)))
// 		.then((res)=> {
// 				metaCid = res[0]?.hash
// 		})
// 	return {...json, metaCid}
// }


// exports.imgUpload = imgUpload
// exports.getMetaInfo = getMetaInfo
// exports.metaUpload = metaUpload
exports.enimalList = enimalList
