const WomboDream = require('./dist/app');
const ipfsAPI = require('ipfs-api');
const ipfs = ipfsAPI('/ip4/127.0.0.1/tcp/5001')

const typeToStyle = {
    Paint: 50, HDR : 52, Polygon : 49, gouache : 48, Comic : 45, 'Line-Art' : 47
}

// ai 이미지 생성
async function makeImg(type, prompt) {
  // 오류가 가끔씩 나는 편 - 인자 조정 필요
    const style = typeToStyle[type]
    let image = await WomboDream.generateImage(style, prompt, null, null, null, null, null, null)
    return image.result.final
}

// ipfs에 이미지 업로드
async function imgUpload(type, prompt) {
    const url = await makeImg(type, prompt)
    let cid;
    ipfs.util.addFromURL(url, (err, result) => {
        if (err) {
        throw err
        }
        console.log(result)
        cid = result[0]?.hash
        return cid
        // console.log({url:`https://ipfs.io/ipfs/${cid}`})
    })
}

// cid로 이미지 정보 조회
async function getImgInfo(cid) {
    let result = await ipfs.get(`ipfs/${cid}`)
    console.log(result)
}

// ipfs에 메타데이터 업로드
async function metaUpload(cid, name, owner, type) {
    const json = {
        fileName: `${cid}.json`,
        name,
        owner,
        image : `https://ipfs.io/ipfs/${cid}`,
        date: Date.now(),
        type,
    }
    const data = {
        path: 'meta.json',
        content : JSON.stringify(json)
    }
    ipfs.add(data, (err, result) => {
        if (err) {
        throw err
        }
        console.log(result)
        cid = result[0]?.hash
        return cid
    })
}

exports.makeImg = makeImg
exports.imgUpload = imgUpload
exports.getImgInfo = getImgInfo
exports.metaUpload = metaUpload
