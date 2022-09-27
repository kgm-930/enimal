const api = require('./treatImg')
// const ABI = require('./ABI')
// 로그인 되었다고 가정 (이미 userAddress 존재)
// 임시로 하드코딩
const userAddress = '0x7edc38F3511F13100AdcC4c16Ba14eC475C00776'


// 민팅 전까지
async function beforeMint(type, prompt, name) {
  // 이미지 생성 후 업로드
  api.imgUpload(type, prompt)
    .then((imgCid) => {
      // 메타데이터 생성 후 업로드
      api.metaUpload(imgCid, name, userAddress, type)
        .then((metaData) => {
          // 민팅 (스마트 컨트랙트와 상호작용)
          console.log('민팅 전까지 완료')
          console.log(metaData)
        })
        .catch((err) => {
          console.log(err)
          console.log('메타데이터 관련 오류')
        })
    })
    .catch((err) => {
      console.log(err)
      console.log('이미지 생성 관련 오류')
    })
  }

exports.beforeMint = beforeMint