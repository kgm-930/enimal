const ipfsAPI = require('ipfs-api')
const ipfs = ipfsAPI('/ip4/127.0.0.1/tcp/5001')
const makeImg = require('makeImg')
const test = makeImg.test

async function test2() {
  const url = await test()
  let cid;
  ipfs.util.addFromURL(url, (err, result) => {
    if (err) {
      throw err
    }
    console.log(result)
    cid = result[0]?.hash
  })
  // cid = 'QmVV2AnMxeXDKt15mpLen9sEH9zk9NbXj5n1cDmpbN1uaS'
  // let result = await ipfs.get(`/ipfs/${cid}`)
  // console.log(result)
  console.log({url:`https://ipfs.io/ipfs/${cid}`})
}
test2()

/*
https://images.wombo.art/generated/e73fab84-d9b6-429d-bfac-a29229bb527b/final.jpg?Expires=1670928846&Signature=MDcy9NJbVgW~WIr0uL8jqTRDVayLiGbAKiftS1Q1CoUe19IaEYabvd2QIOgFbHwSQ8eqsEyc4wHcZV~-q8LdY6nPXBFi2mEL557j6fKOtmD8fIhOLC30dxsWJXzvnnM3LyigrXbGela1RdOixkrSnm1s5OURGyQTOo72k22UN9H0jxiGgFL0EVVHpomXP~kHxNHuP~4gCVy2uu~enkEGdbJVPy~0YKQBK-LEqq8ct3pq7eLU9bRd3s6QYNDwtxQHtDVbezr6FzbC~Q7fKuto~hsFt9FzMFqlGbZ-Gsh4CvOIJFcHziuYSi-2i4vaGoHBkdBbrKZiHzKq13YSlYKtWw__&Key-Pair-Id=K1ZXCNMC55M2IL

*/

/* metadata - json 형식
{
  fileName: {CID}.json
  name : NFT 이름,
  owner :  소유자 이름? 지갑 주소?,
  description : NFT 소개? 사이트 홍보?
  image : ipfs url
  kind : 동물 종
  type : ai 생성 시 사용한 스타일
  date: 생성 일자,
  attributes: [

  ] - ?
}
*/


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



// ipfs.add(data)