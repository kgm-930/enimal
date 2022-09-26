const { axios } = require('axios')
const api = require('./api')
const ABI = require('./ABI')
const Web3 = require('web3')

const web3 = new Web3(new Web3.providers.HttpProvider('http://20.196.209.2:8545/'))
const CA = '0xDc2935c9dbbECCFdDAfe54098DeA09d2f92bc48A'
const {ENIMAL_ABI} = ABI.ABI.CONTRACT_ABI
const enimalContract = new web3.eth.Contract(ENIMAL_ABI, CA)
// console.log(enimalContract)

// enimalContract.setProvider('ws://20.196.209.2:6174')
// console.log(enimalContract)

// const enimalContract = new Contract(ABI.ABI.CONTRACT_ABI.ENIMAL_ABI, '0xDc2935c9dbbECCFdDAfe54098DeA09d2f92bc48A')


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
  // let tokenId = enimalContract.deploy.create(userAddress, convertedURI).send({from : userAddress})
  //   .on('transactionHash', (hash) => {
  //     console.log('hash :', hash)
  //     transactionHash = hash
  //   }).on('error', (error, receipt) => {
  //     console.log(error)
  //     console.log(receipt)
  //   })
  //   return tokenId
  }


  // front
  async function sendTx(value, data){ 
    const privateKey = '0x600378817757c4d816e1a04cbade8973b9b239e03757b72f227fda07804bd001'
    // const result = await enimalContract.methods.create(userAddress, 'ipfs://QmYTSMMcFCzesFSk9sK7oL2v9WvjLc75Fp6CbvSDsQ1PnD')
    // console.log(result)

    // web3.extend({
    //   methods: [{
    //     name: 'sendForBesu',
    //     call: 'eth_sendRawTransaction',
    //     params: 1,
    //   }]
    // })
    // console.log(web3.extend.formatters)
    // console.log(web3.sendForBesu)
    // console.dir(enimalContract.methods.create(userAddress, 'ipfs://QmYTSMMcFCzesFSk9sK7oL2v9WvjLc75Fp6CbvSDsQ1PnD'))
    // enimalContract.extend.Method.extend({
    //   methods: [{
    //         name: 'sendForBesu',
    //         call: 'eth_sendRawTransaction',
    //         params: 1,
    //       }]
    // })
    console.log(enimalContract)

    // const result = enimalContract.methods.create(userAddress, 'ipfs://QmYTSMMcFCzesFSk9sK7oL2v9WvjLc75Fp6CbvSDsQ1PnD').sendForBesu(userAddress)
    // console.log(result)
    // console.log(web3.eth.Contract)
    // console.log(web3)

    // console.log(web3.eth.abi.decodeParameter('uint', result))
      // .then(console.log)
    // const adminKey = '0x5d45d001c03e63a1af780053a19de13630f4c960132f9d3952ceed2f95c7b2c6'
    // const adminAddress = web3.eth.accounts.privateKeyToAccount(adminKey).address
    // const tx = {
    //   to: CA,
    //   from: userAddress,
    //   value: web3.utils.toHex(value),
    //   data: web3.utils.toHex(data),
    //   // gasPrice: web3.utils.toHex(0),
    //   gas: web3.utils.toHex(22888),
    //   nonce: await web3.eth.getTransactionCount(userAddress, 'pending'),
    //   common: {
    //     customChain: {
    //       name: 'SSAFY',
    //       chainId: 31221,
    //       networkId: 202112031219
    //       // networkId: await web3.eth.net.getId()
    //     }
    //   }
    // }



    // const Tx = require('@ethereumjs/tx').Transaction
    // const rawTx = {
    //   to: CA,
    //   from: userAddress,
    //   value: web3.utils.toHex(value),
    //   data: web3.utils.toHex(data),
    //   // gasPrice: web3.utils.toHex(0),
    //   gas: web3.utils.toHex(22888),
    //   nonce: await web3.eth.getTransactionCount(userAddress, 'pending'),
    //   common: {
    //     customChain: {
    //       name: 'SSAFY',
    //       chainId: 31221,
    //       networkId: 202112031219
    //       // networkId: await web3.eth.net.getId()
    //     }
    //   }
    // }
    // const convertedKey = Buffer.from('600378817757c4d816e1a04cbade8973b9b239e03757b72f227fda07804bd001', 'hex')
    // const tx = new Tx(rawTx)
    // tx.sign(convertedKey)
    // const serializedTx = tx.serialize()
    
    // web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'))
    //   .on('receipt', console.log)


    // web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'))
    //   .then(console.log)
      // .on('receipt', console.log)
      // .on('error', console.log)
    
    // const result = await web3.eth.abi.encodeFunctionCall({
    //   type: 'function',
    //   name: 'create',
    //   inputs: [{
    //     type: 'address',
    //     name: 'to'
    //   }, {
    //     type: 'string',
    //     name: 'tokenURI'
    //   }]
    // }, [userAddress, 'ipfs://QmYTSMMcFCzesFSk9sK7oL2v9WvjLc75Fp6CbvSDsQ1PnD'])
    
    
    // const result = await web3.eth.abi.encodeFunctionSignature('create(address, string)')
    // const converted = web3.eth.abi.decodeParameter('Object', result)
    // console.log(converted)

    /*
    https://stackoverflow.com/questions/64619318/web3-error-transaction-has-been-reverted-by-the-evm
    Transaction has been reverted by the EVM:
{
  "blockHash": "0x90ed4674b2e4aaac44459587150e7bd5ae4f21e75c6b8b3f73eaf101a1f56b31",
  "blockNumber": 5149849,
  "contractAddress": null,
  "cumulativeGasUsed": 22888,
  "from": "0x7edc38f3511f13100adcc4c16ba14ec475c00776",
  "gasUsed": 22888,
  "effectiveGasPrice": 0,
  "logs": [],
  "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  "status": false,
  "to": "0xdc2935c9dbbeccfddafe54098dea09d2f92bc48a",
  "transactionHash": "0x97413cde5f536f088b66d67ee285e93ef260143278e8c6847c0306198d57833d",        
  "transactionIndex": 0

    */

    // web3.eth.accounts.signTransaction(tx, privateKey)
    //   .then(res => {
    //     web3.eth.sendSignedTransaction(res.rawTransaction)
    //       .on('transactionHash', console.log)
    //       // .on('error', console.log)
    //   })

    // web3.eth.sendSignedTransaction(signed.rawTransaction)
    // .on('transactionHash', (txHash) => res.json({txHash}))
    // .on('error', console.log)
  }
sendTx(0, {to: userAddress, tokenURI : 'ipfs://QmYTSMMcFCzesFSk9sK7oL2v9WvjLc75Fp6CbvSDsQ1PnD'})
// sendTx(0, {owner: userAddress})




// contract("NftCreator", (accounts) => {

// const user = "0x6EcEdE1866CBA0aecFaE9ac37839a40E444a4Da3";

// it("Create Enimal NFT", async () => {
//     const NFT = await enimalContract.deployed();
//     console.log("Contract deployed to:", NFT.address);
//     let id = await NFT.create(user, "ipfs://QmSZCPYweTzeGGBzZNAnppT7DKfxgtunFErSVhoJ33sWyk");
//    // console.log(id.log);
//   });
// });

// mint('QmYTSMMcFCzesFSk9sK7oL2v9WvjLc75Fp6CbvSDsQ1PnD')


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