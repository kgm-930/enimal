const { axios } = require('axios')
const api = require('./api')
const ABI = require('./ABI')
const Web3 = require('web3')

const web3 = new Web3(new Web3.providers.HttpProvider('http://20.196.209.2:8545/'))
// const enimalContract = new web3.eth.Contract(ABI.ABI.CONTRACT_ABI.ENIMAL_ABI, '0xDc2935c9dbbECCFdDAfe54098DeA09d2f92bc48A')

const Contract = require('web3-eth-contract')
Contract.setProvider('ws://20.196.209.2:6174')

const enimalContract = new Contract(ABI.ABI.CONTRACT_ABI.ENIMAL_ABI, '0xDc2935c9dbbECCFdDAfe54098DeA09d2f92bc48A')


// 로그인 되었다고 가정 (이미 userAddress 존재)
let userAddress = '0x7edc38F3511F13100AdcC4c16Ba14eC475C00776'

// 트랜잭션 해시 - etherscan에서 확인 가능한지 모르겠음
let transactionHash

/*
Returned error: The method eth_sendTransaction is not supported.
Use eth_sendRawTransaction to send a signed transaction to Besu.
*/




// 민팅
// function mint(tokenURI) {
//   // console.log(tokenURI)
//   const privateKey = '0x600378817757c4d816e1a04cbade8973b9b239e03757b72f227fda07804bd001'
//   let rawTransaction
//   let tokenId
//   web3.eth.accounts.signTransaction({
//     gas: 2000000,
//     to: userAddress,
//   }, privateKey)
//     .then(res => {
//       rawTransaction = res.rawTransaction
//       tokenId = enimalContract.methods.create(userAddress, tokenURI).sendTransaction({from : userAddress, data: rawTransaction})
//         .on('transactionHash', (hash) => {
//           console.log('hash :', hash)
//           transactionHash = hash
//         }).on('error', (error, receipt) => {
//           console.log(error)
//           console.log(receipt)
//         })
//     })
//     return tokenId
//   }


// 규민님 방법


function mint(tokenURI) {
  // console.log(tokenURI)
  // const privateKey = '0x600378817757c4d816e1a04cbade8973b9b239e03757b72f227fda07804bd001'
  let convertedURI = `ipfs://${tokenURI}` 
  let tokenId = enimalContract.methods.create(userAddress, convertedURI).send({from : userAddress})
    .on('transactionHash', (hash) => {
      console.log('hash :', hash)
      transactionHash = hash
    }).on('error', (error, receipt) => {
      console.log(error)
      console.log(receipt)
    })
    return tokenId
  }



// contract("NftCreator", (accounts) => {

// const user = "0x6EcEdE1866CBA0aecFaE9ac37839a40E444a4Da3";

// it("Create Enimal NFT", async () => {
//     const NFT = await enimalContract.deployed();
//     console.log("Contract deployed to:", NFT.address);
//     let id = await NFT.create(user, "ipfs://QmSZCPYweTzeGGBzZNAnppT7DKfxgtunFErSVhoJ33sWyk");
//    // console.log(id.log);
//   });
// });

mint('QmYTSMMcFCzesFSk9sK7oL2v9WvjLc75Fp6CbvSDsQ1PnD')


async function saveInfo(metaData) {
  // 아직 구현이 덜 됨
  // axios({
  //   url: '아직 모름',
  //   data: {...metaData, tokenId, transactionHash,},
  //   method: 'post',
  //   headers: '아직 모름'
  // })
  //   .then((response) => {
  //     // 잘 전달되었는지 확인
  //   })
  
  // 테스트용
  console.log(metaData)
}


async function makeNft(type, prompt, name) {
  // 이미지 생성 후 업로드
  api.imgUpload(type, prompt)
    .then((imgCid) => {
      // 메타데이터 생성 후 업로드
      api.metaUpload(imgCid, name, userAddress, type)
        .then((metaData) => {
          // 민팅 (스마트 컨트랙트와 상호작용)
          mint(metaData.metaCid)
            .then((tokenId) => {
              // 백에 메타데이터와 tokenId, transactionHash 전달
              saveInfo({...metaData, tokenId, transactionHash})
            })
            .catch((err) => {
              console.log(err)
              console.log('민팅 관련 오류')
            })
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

exports.makeNft = makeNft