const { axios } = require('axios')
const api = require('../api')

async function makeNft (type, prompt, name) {
  // 계정
  let owner
  // 이미지 생성 후 업로드
  api.imgUpload(type, prompt)
    .then((imgCid) => {
      // 메타데이터 생성 후 업로드
      api.metaUpload(imgCid, name, owner, type)
      // 백에 메타데이터 cid 전달 & string data 전달? 인수로 모두 전달?
        .then((metaData) => {
          axios({
            url: '아직 모름',
            data: metaData,
            method: 'post',
            headers: '아직 모름'
          }).then((response) => {
            // 잘 전달되었는지 확인
          })
        })
    })
  }