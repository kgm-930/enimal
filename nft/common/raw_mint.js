// const { axios } = require('axios')
// const api = require('./api')
const ABI = require('./ABI')
const Web3 = require('web3')
const Tx = require('ethereumjs-tx').Transaction;

const web3 = new Web3(new Web3.providers.HttpProvider('http://20.41.85.203:8545'))
const CA = '0xDc2935c9dbbECCFdDAfe54098DeA09d2f92bc48A'
const {ENIMAL_ABI} = ABI.ABI.CONTRACT_ABI
const enimalContract = new web3.eth.Contract(ENIMAL_ABI, CA)


const TOKEN_CA = '0xb09d0879D6F9f48FFb09a4B0001c351dF6e1f2Ca'
const {SSAFY_TOKEN_ABI} = ABI.ABI.CONTRACT_ABI
const ssafyToken = new web3.eth.Contract(SSAFY_TOKEN_ABI, TOKEN_CA)

const ERC20_CA = '0x0c54E456CE9E4501D2c43C38796ce3F06846C966'
const {ERC20_ABI} = ABI.ABI.CONTRACT_ABI
const ERC20_TOKEN = new web3.eth.Contract(ERC20_ABI, ERC20_CA)



// console.log(enimalContract)

// enimalContract.setProvider('ws://20.196.209.2:6174')
// console.log(enimalContract)

// const enimalContract = new Contract(ABI.ABI.CONTRACT_ABI.ENIMAL_ABI, '0xDc2935c9dbbECCFdDAfe54098DeA09d2f92bc48A')


// 로그인 되었다고 가정 (이미 userAddress 존재)
// let userAddress = '0x01E04dfC7240B86D115Ed2C232953B0E71333290'
let userAddress = '0x7edc38F3511F13100AdcC4c16Ba14eC475C00776'

// 트랜잭션 해시 - etherscan에서 확인 가능한지 모르겠음
let transactionHash

/*
Returned error: The method eth_sendTransaction is not supported.
Use eth_sendRawTransaction to send a signed transaction to Besu.
*/
function test() {
  // const val
  const privateKey = '600378817757c4d816e1a04cbade8973b9b239e03757b72f227fda07804bd001'
  let data = enimalContract.methods.create(userAddress, 'ipfs://QmYTSMMcFCzesFSk9sK7oL2v9WvjLc75Fp6CbvSDsQ1PnD').encodeABI()
  const nonce = web3.eth.getTransactionCount(userAddress, 'pending')
  const tx = {
    to: CA,
    from: userAddress,
    data,
    gas: web3.utils.toHex(100000),
    nonce: web3.utils.toHex(nonce),
    value: web3.utils.toHex(0),
    // chainId: web3.eth.getChainId()
    // common: {
    //   customChain: {
    //     name: 'SSAFY',
    //     chainId: 31221,
    //     networkId: 202112031219
    //   }
    // }
  }
  const newTx = new Tx(tx)
  const privKey = Buffer.from(privateKey, 'hex')
  newTx.sign(privKey)
  const serializedTx = newTx.serialize();
  const raw = '0x' + serializedTx.toString('hex');
  
  web3.eth.sendSignedTransaction(raw)
    .once('transactionHash', (hash) => {
      console.info('transactionHash', hash);
    })
    .once('receipt', (receipt) => {
      console.info('receipt', receipt);
  }).on('error', console.error);
}
// test()

// enimalContract.methods.owner().call()
//   .then(console.log)
// ssafyToken.methods.owner().call()
//   .then(console.log)

// enimalContract.methods.ownerOf("ipfs://QmQ9WiLHHoYRXFM7gbwpp6JgnT8PV3m1EJfKFSQjVMr57F").call()
//   .then(console.log)


// enimalContract.methods.create(userAddress, "ipfs://QmQ9WiLHHoYRXFM7gbwpp6JgnT8PV3m1EJfKFSQjVMr57F").call({
//   from: '0x6EcEdE1866CBA0aecFaE9ac37839a40E444a4Da3'
// })
//   .then(console.log)

// ssafyToken.methods.balanceOf(userAddress).call()
//   .then(console.log)
// ERC20_TOKEN.methods.balanceOf(userAddress).call()
//   .then(console.log)

function test2() {
  // owner
  const owner = '0x6EcEdE1866CBA0aecFaE9ac37839a40E444a4Da3'
  // const privateKey = '0x5d45d001c03e63a1af780053a19de13630f4c960132f9d3952ceed2f95c7b2c6'
  
  const privateKey = '0x9633ab4de4f165c90a031af88a8d5608dcadd2ab99599834c94fab3d77db87cf'
  let nonce
  web3.eth.getTransactionCount(userAddress, 'pending')
    .then(res => {
      nonce = res
    })
  const adminAddress = "0x01E04dfC7240B86D115Ed2C232953B0E71333290"
  
  ERC20_TOKEN.methods.balanceOf(adminAddress).call()
  .then(console.log)

  ERC20_TOKEN.methods.balanceOf(owner).call()
  .then(console.log)
  // const privateKey = '0x600378817757c4d816e1a04cbade8973b9b239e03757b72f227fda07804bd001'
  // let data = enimalContract.methods.create(userAddress, "ipfs://QmQ9WiLHHoYRXFM7gbwpp6JgnT8PV3m1EJfKFSQjVMr57F").encodeABI()
  // let data = enimalContract.methods.balanceOf(userAddress).encodeABI()
  // let data = ssafyToken.methods.forceToTransfer(userAddress, adminAddress, 0).encodeABI()
  let data = ERC20_TOKEN.methods.transfer(userAddress, 10).encodeABI()

  // const tx = {
  //   gas: web3.utils.toHex(8000000),
  //   to: userAddress,
  //   nonce: web3.utils.toHex(nonce),
  //   value: web3.utils.toHex(0)
  // }
  
  const tx = {
    gas: web3.utils.toHex(80000),
    from: adminAddress,
    to: ERC20_CA,
    data,
    nonce: web3.utils.toHex(nonce),
  }
  // const tx = {
  //   gas: web3.utils.toHex(8000000),
  //   from: adminAddress,
  //   to: TOKEN_CA,
  //   data,
  //   nonce: web3.utils.toHex(nonce),
  //   value: web3.utils.toHex(0)
  // }

  // const tx = {
  //   to: CA,
  //   from: userAddress,
  //   data,
  //   nonce: web3.utils.toHex(nonce),
  //   gas: web3.utils.toHex(1e9),
  //   value: web3.utils.toHex(0),
  // }
  web3.eth.accounts.signTransaction(tx, privateKey)
  .then(res => {
    const raw = res.rawTransaction
    // console.log('res', raw)
    web3.eth.sendSignedTransaction(raw)
    .once('receipt', (receipt) => {
      console.info('receipt', receipt)
    })
    .once('transactionHash', (hash) => {
      console.info('transactionHash', hash);
    }).on('error', console.error)
    // .then(console.log)
  })
}
test2()
// web3.eth.getTransactionCount(userAddress, 'pending')
//   .then(res => {
//     console.log('pending', res)
//   })
// web3.eth.getTransactionCount(userAddress, 'earliest')
// .then(console.log)
// web3.eth.getTransactionCount(userAddress, 'latest')
// .then(res => {
//   console.log('latest', res)
// })

// function test3() {
//   let raw = '0xf90109827b7d808301adb094dc2935c9dbbeccfddafe54098dea09d2f92bc48a80b8a4a15ab08d0000000000000000000000007edc38f3511f13100adcc4c16ba14ec475c007760000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000003622697066733a2f2f516d535a4350597765547a654747427a5a4e416e70705437444b66786774756e4645725356686f4a33337357796b0000000000000000000082f40da0315b8dd1f40817e83b718165feea4ee971a6498f3566294dbf1018c091d5a90ca049bc5f1ed346650c713e5d676239a407090da19dbbf92684f5b425b5406176cc'
//   web3.eth.sendSignedTransaction(raw)
//     .once('receipt', (receipt) => {
//       console.info('receipt', receipt);
//     })
//     .once('transactionHash', (hash) => {
//       console.info('transactionHash', hash);
//     }).on('error', console.error);
// }
// test3()



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
    // const result = await enimalContract.methods.create(userAddress, 'ipfs://QmYTSMMcFCzesFSk9sK7oL2v9WvjLc75Fp6CbvSDsQ1PnD')
    // console.log(result)

    enimalContract.extend({
      methods: [{
        name: 'sendForBesu',
        call: 'eth_sendRawTransaction',
        params: 1,
      }]
    })
    console.log(enimalContract)
    // console.log(web3.extend.formatters)
    // console.log(web3.sendForBesu)
    // console.dir(enimalContract.methods.create(userAddress, 'ipfs://QmYTSMMcFCzesFSk9sK7oL2v9WvjLc75Fp6CbvSDsQ1PnD'))
    
  



    // enimalContract.extend({
    //   methods: [{
    //         name: 'sendForBesu',
    //         call: 'eth_sendRawTransaction',
    //         params: 1,
    //       }]

    // })
    // enimalContract.sendForBesu(userAddress)
    // .on('error', console.log)
    // .then(console.log)

    // console.log()
    // console.log(enimalContract.methods.create(userAddress, 'ipfs://QmYTSMMcFCzesFSk9sK7oL2v9WvjLc75Fp6CbvSDsQ1PnD'))

    // const result = enimalContract.methods.create(userAddress, 'ipfs://QmYTSMMcFCzesFSk9sK7oL2v9WvjLc75Fp6CbvSDsQ1PnD').sendorBesu(userAddress)
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
// sendTx(0, {to: userAddress, tokenURI : 'ipfs://QmYTSMMcFCzesFSk9sK7oL2v9WvjLc75Fp6CbvSDsQ1PnD'})
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


// async function makeNft(type, prompt, name) {
//   // 이미지 생성 후 업로드
//   api.imgUpload(type, prompt)
//     .then((imgCid) => {
//       // 메타데이터 생성 후 업로드
//       api.metaUpload(imgCid, name, userAddress, type)
//         .then((metaData) => {
//           // 민팅 (스마트 컨트랙트와 상호작용)
//           mint(metaData.metaCid)
//             .then((tokenId) => {
//               // 백에 메타데이터와 tokenId, transactionHash 전달
//               saveInfo({...metaData, tokenId, transactionHash})
//             })
//             .catch((err) => {
//               console.log(err)
//               console.log('민팅 관련 오류')
//             })
//         })
//         .catch((err) => {
//           console.log(err)
//           console.log('메타데이터 관련 오류')
//         })
//     })
//     .catch((err) => {
//       console.log(err)
//       console.log('이미지 생성 관련 오류')
//     })
//   }

// exports.makeNft = makeNft