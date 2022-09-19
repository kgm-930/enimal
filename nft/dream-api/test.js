const WomboDream = require('./dist/app');
const fs = require('fs');
const axios = require('axios');

async function test() {
  // style 3 불가
  let style = 13;
  let prompt = '호랑이';
  let token = await WomboDream.signIn("test@test.com", "test");
  let image = await WomboDream.generateImage(style, prompt, token.idToken, null, null, null, null, null, 60000, 100)
  console.log(image.result)
}
test()