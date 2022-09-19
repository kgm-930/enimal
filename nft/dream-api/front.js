const WomboDream = require('./dist/app');
const fs = require('fs');
const axios = require('axios');

// style과 prompt -> 완성된 사진 url 반환
async function completedImage(style, prompt) {
  let image = await WomboDream.generateImage(style, prompt)
  return image.result.final
}


// Wrapper so we can use async/await
async function makeNft(prompt, style) {

    ////////////////////////////////
    //////// AUTHENTICATION ////////
    ////////////////////////////////

    // Existing User Account Token
    let token = await WomboDream.signIn("test@test.com", "test");
    ////////////////////////////////
    /////// IMAGE UPLOADING ////////
    ////////////////////////////////

    // Create image buffer
    let buffer = fs.readFileSync('./test.jpg');

    // Get upload URL and PUT manually
    let upload1 = await WomboDream.getUploadURL();
    axios.put(upload1.media_url, buffer, {
        headers: {
            'Content-Type': 'image/jpeg',
            'Content-Length': buffer.length,
        },
    });

    /// Upload an image automatically
    let upload2 = await WomboDream.uploadPhoto(buffer);

    ////////////////////////////////
    /////// IMAGE GENERATION ///////
    ////////////////////////////////

    const idToken = token.idToken;
    let taskID = await WomboDream.getTaskID(idToken);
    let weight = null
    // generateImage(style, prompt [, token] [, imageBuffer [, weight]] [, save [, saveSettings]] [, callback] [, interval], [, frequency])
    // image 받을 건지, 이미지 해상도()
    WomboDream.generateImage(style, prompt, idToken, buffer ,weight, )

    // Generate image from prompt only
    let image = await WomboDream.generateImage(style, prompt, idToken);

    // Generate image manually from prompt and input image
    let result = await WomboDream.createTask(token.idToken, idToken, "dog", 1, upload2);
    result = await WomboDream.checkStatus(token.idToken, idToken, 1000);

    ////////////////////////////////
    /////// OTHER FUNCTIONS ////////
    ////////////////////////////////

    // Get purchase URL from auto-generated image
    let purchaseURL1 = await WomboDream.getTaskShopURL(idToken, image.id);

    // Get purchase URL from manually generated image
    let purchaseURL2 = await WomboDream.getTaskShopURL(idToken, taskID);

}

makeNft()