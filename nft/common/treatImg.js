const WomboDream = require('./dream-api/dist/app')
const ipfsAPI = require('ipfs-api')
// 배포 시 이 부분 수정 필요
const ipfs = ipfsAPI('/ip4/127.0.0.1/tcp/5001')

const typeToStyle = {
    Paint: 50, HDR : 52, Polygon : 49, Gouache : 48, Comic : 45, 'Line-Art' : 47
}

const convert = {
	'저어새':'spoonbill',	'우파루파':'아홀로틀', '강토끼':'부시맨토끼',
	'상괭이':'finless porpoise', '듀공':'dugong', '매':'hawk'
}

// ai 이미지 생성
async function makeImg(type, prompt) {
	if (prompt in convert) {
		prompt = convert[prompt]
	}
	const style = typeToStyle[type]
	let image = await WomboDream.generateImage(style, prompt, null, null, null, null, null, null, 1000, 30)
    console.log(image)
	return image.result.final
}
makeImg("Paint", '북극곰')

// ipfs에 이미지 업로드
async function imgUpload(type, prompt) {
    // const url = await makeImg(type, prompt)
    return new Promise((resolve, reject) => {
        makeImg(type, prompt)
            .then((url) => {
                ipfs.util.addFromURL(url)
                .then((result) => {
                    resolve(result[0]?.hash)
            })
        })
    })
}

// cid로 메타데이터 정보 조회
async function getMetaInfo(cid) {
    let result = await ipfs.cat(cid)
    const strResult = result.toString('utf-8')
    // console.log(strResult)
    return strResult
}

// ipfs에 메타데이터 업로드
async function metaUpload(cid, name, owner, type) {
    let json = {
        fileName: `${cid}.json`,
        name,
        owner,
        image : `https://ipfs.io/ipfs/${cid}`,
        date: Date.now(),
        type,
    }

    let metaCid
    await ipfs.add(Buffer.from(JSON.stringify(json)))
        .then((res)=> {
            metaCid = res[0]?.hash
        })
    return {...json, metaCid}
}

exports.makeImg = makeImg
exports.imgUpload = imgUpload
exports.getMetaInfo = getMetaInfo
exports.metaUpload = metaUpload