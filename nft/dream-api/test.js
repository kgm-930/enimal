const WomboDream = require('./dist/app');
const fs = require('fs')
// const axios = require('axios');
const https = require('https')

// 파일 다운로드
async function download(url, name) {
  // console.log(style, image.result)
  const imgName = `${name}.jpg`
  const file = fs.createWriteStream(imgName)
  // const request = 
  https.get(url, function(response) {
    response.pipe(file)
  })
  return imgName
  // http://daplus.net/javascript-node-js%EB%A1%9C-%ED%8C%8C%EC%9D%BC%EC%9D%84-%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95-%ED%83%80%EC%82%AC-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC/
}

// api에 요청해 사진 생성 -> url 받아오기
async function test() {
  // 오류가 가끔씩 나는 편 - 인자 조정 필요 & 오류 처리 필요
  // 프론트에 오류 처리 문의
  let style = 50;
  let prompt = 'tiger';
  let token = await WomboDream.signIn("ilwoldeveloper@gmail.com", "enimal*24");
  let image = await WomboDream.generateImage(style, prompt, token.idToken, null, null, null, null, null)
  let imgUrl = image.result.final
  console.log(image.result)
  if (imgUrl) {
    download(imgUrl, `${style}_${prompt}_default`)
  } else {
    console.log('error!')
    // test()
  }
}
test()

// async function makeImg(type, prompt) {
//   // 오류가 가끔씩 나는 편 - 인자 조정 필요
//   let idToken = findToken()
//   const style = typeToStyle[type];
//   let image = await WomboDream.generateImage(style, prompt, idToken, null, null, null, null, null)
//   return image.result.final
// }


/* 
{
  Paint: 50, HDR : 52, Polygon : 49, gouache : 48, Realistic : 32, Comic : 45, 'Line-Art' : 47,
  Malevolent : 40, Meme : 44, Throwback : 35, 'No Style' : 3, Ghibli : 22, Melancholic : 28,
  Provenance : 17, Arcane : 34, Radioactive : 27, Wuhtercuhler : 16, 'S.Dali' : 15,
  Etching : 14, Baroque : 13, Mystical : 11, 'Dark Fantasy' : 10, Psychic : 9, 'Rose Gold' : 18,
  Vibrant : 6, 'Fantasy Art' : 5, Steampunk : 4, HD : 7, Blacklight : 20, Psychedelic : 21, 
  Ukiyoe : 2, Synthwave : 1, 
}
*/


/*
  비추
  1 synthwave 쨍한 색감, 느낌만 있음
  3 No Style : 사진 느낌이 강하지만 왜곡됨(api로는 오류?), 5 Fantasy Art : 기괴한 느낌
  7-8 사진 느낌이고 프리미엄?, 9 Psychic 기괴한 느낌, 10 Dark Fantasy 느낌만 있음,
  11 Mystical 배경과 섞임, 13 Baroque 많이 왜곡됨, 17 Provenance 배경과 섞임
  21 Psychedelic 기괴한 느낌, 27 Radioactive 해괴한 느낌, 28 Melancholic ,34 Arcane
  44 Meme 사진 9장 보여주는 것 같아 보임 (인자 조정 필요)
  
  잘 모르겠음
  2 ukiyoe 일본풍이고 형체만 나옴 (인자 조정 필요), 4 Steampunk 배경과 섞임 (인자 조정 필요),
  6 Vibrant 색감이 쨍함, 형체 정도만 알아볼 수 있음
  14 Etching 배경과 섞임 (인자 조정 필요), 15 S.dali 배경과 섞임, 18 Rose Gold 형체만 나옴,
  16 Wuhtercuhler 배경과 섞임 (인자 조정 필요), 20 Blacklight 배경과 섞임 (인자 조정 필요)
  22 Ghibli 배경과 섞임, 50 Paint 이미지 질이 랜덤 (인자 조정 필요?)
  32 Realistic 몸통 부분만 나오는 것 같음, 사진 느낌이 강함 35 Throwback
  40 Malevolent 배경과 섞임 (인자 조정 필요)

  추천
  52 HDR 사진 느낌, 49 Polygon 도형으로 조각한 느낌? 메타마스크 느낌?
  48 Gouache 수채화 물감으로 그린 작품, 45 Comic 일러스트 느낌, 47 'Line-Art' 직선과 곡선으로 표현

*/