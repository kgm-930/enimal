const ipfsAPI = require('ipfs-api')
const ipfs = ipfsAPI('/ip4/127.0.0.1/tcp/5001')

// ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin "[\"http://example.com\"]"
// Blob, file Object로 넘겨주는 게 나을까
// const files = [{
//   path: 'test.txt',
//   content: 'test'
// }]


// async function test() {
//   const file = {path:'/test.txt', content:'test'}
//   let result = await ipfs.add(file)
//   console.log(result)
// }
// test()

// console.log(ipfsAPI)
// const { globSource } = IPFS
async function test() {
  
//   const ipfs = await IPFS.create()
  
  for await (const file of ipfs.add(urlSource('https://ipfs.io/images/ipfs-logo.svg'))) {
    console.log(file)
  }
}

test()




// ipfs.add(data)