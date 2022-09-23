// web3, axios, ipfs-api 패키지 설치 필요
const mint = require('./mint')
const login = require('./login')
const api = require('./api')
// const Web3 = require('web3')
// const ABI = require('./ABI')

// 모든 테스트에서 사용
let userAddress
const type = 'Comic'
const prompt = '수달'
const name = 'test용 이름'

// 1. privateKey가 userAddress로 잘 변환되는지 확인
const privateKey = '0x600378817757c4d816e1a04cbade8973b9b239e03757b72f227fda07804bd001'
// userAddress = login.getAddress(privateKey)
// console.log(userAddress)


//-----------------------------------------------------------
// 2 - 4 단계별 테스트이므로 순서대로 주석 처리 풀어서 진행해야 함 (정상적으로 작동하는 것 확인)
// -> 5 : 2-4가 순서대로 동작하도록 함 (현재 mint 함수에서 오류)


// 2. image 생성 후 ipfs에 업로드가 잘 되는지 확인
userAddress = '0x7edc38F3511F13100AdcC4c16Ba14eC475C00776'
// let cid

// api.imgUpload(type, prompt)
//   .then((imgCid) => {
//     cid = imgCid
//     console.log(imgCid)
//   })
//   .catch((err) => {
//     console.log(err)
//   })

// 3. 메타데이터 생성 후 ipfs에 업로드가 잘 되는지 확인
// cid = 'Qmc93XFRHht2JKdL1RjWAAbUiMzP8x78viHsoQQ7yWV83t'

// let metaData
// api.metaUpload(cid, name, userAddress, type)
//   .then((data) => {
//     metaData = data
//   })
//   .catch((err) => {
//     console.log(err)
//   })

// 4. cid로 메타 데이터 정보 조회
// metaData = {
//   fileName: 'Qmc93XFRHht2JKdL1RjWAAbUiMzP8x78viHsoQQ7yWV83t.json',
  // name: 'test용 이름',
//   owner: '0x7edc38F3511F13100AdcC4c16Ba14eC475C00776',
//   image: 'https://ipfs.io/ipfs/Qmc93XFRHht2JKdL1RjWAAbUiMzP8x78viHsoQQ7yWV83t',
//   date: 1663899263079,
//   type: 'Comic',
//   metaCid: 'QmPGLBxprkxNQFqdqisMDxvTGrpwpiHUfXXxrpEDgK7SZT'
// }

// promise 객체 반환
// console.log(api.getMetaInfo(metaData.metaCid))

// strResult 값 반환
// api.getMetaInfo(metaData.metaCid)
//   .then((res) => {
//     console.log(res)
//   })



// 5. 위에서 구한 userAddress 값을 이용해 nft 생성 (최종)
let transactionHash
// const web3 = new Web3(new Web3.providers.HttpProvider('http://20.196.209.2:8545/'))
// const enimalContract = new web3.eth.Contract(ABI.ABI.CONTRACT_ABI.ENIMAL_ABI, '0xDc2935c9dbbECCFdDAfe54098DeA09d2f92bc48A')


// const ABI = require('./ABI')
// const Web3 = require('web3')
// const web3 = new Web3(new Web3.providers.HttpProvider('http://20.196.209.2:8545/'))
// const enimalContract = new web3.eth.Contract(ABI.ABI.CONTRACT_ABI.ENIMAL_ABI, '0xDc2935c9dbbECCFdDAfe54098DeA09d2f92bc48A')

mint.makeNft(type, prompt, name)



// enimalContract.methods.balanceOf(userAddress).call({from : userAddress})
//   .then(console.log)
// let rawTransaction
// web3.eth.accounts.signTransaction({
//   gas: 2000000
// }, privateKey)
//   .then(res => {
//     rawTransaction = res.rawTransaction
//     // web3.eth.sendSignedTransaction(rawTransaction)
//     //   .on('receipt', console.log)
//   })

// web3.eth.sign('안녕안녕', userAddress).then(console.log)
