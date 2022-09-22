const axios = require('axios').default;
const Authentication = require('./auth');

const API_URL = "https://paint.api.wombo.ai/api/tasks/"

function defineHeaders(token, type = "text/plain;charset=UTF-8") {
    return {
        'Origin': 'https://app.wombo.art',
        'Referer': 'https://app.wombo.art/',
        'Authorization': 'bearer ' + token,
        'Content-Type': type,
        'service': 'Dream'
    };
}
const getTaskID = (token) => {
    return new Promise(function(resolve, reject) {
        axios.post(API_URL, '{ "premium": false }', {
                headers: defineHeaders(token)
            })
            .then(function(response) {
                resolve(response.data.id);
            })
            .catch(function(error) {
                resolve(error);
            });
    });
}

// Using the new task ID, supply a prompt and start the image generation process.
const createTask = (token, taskID, prompt, style, imageId = null, weight = "MEDIUM", freq = 10) => {
    if (weight != "LOW" && weight != "MEDIUM" && weight != "HIGH") {
        weight = "MEDIUM";
    }
    var jsonData = {
        "input_spec": {
            "prompt": prompt,
            "style": style,
            "display_freq": freq
        }
    };
    if (imageId != null) {
        jsonData.input_spec.input_image = {
            "mediastore_id": imageId,
            "weight": weight
        }
    }

    return new Promise(function(resolve, reject) {
        axios.put(API_URL + taskID, jsonData, {
                headers: defineHeaders(token)
            })
            .then(function(response) {
                resolve(response.data);
            })
            .catch(function(error) {
                resolve(error.response.data);
            });
    });
}

// Check the status of the task. This function returns all data including progress photos and result.
const checkStatus = async(token, taskID, interval = null, callback = null) => {
    return new Promise(async function(resolve, reject) {
        if (interval == null) {
            axios.get(API_URL + taskID, {
                    headers: defineHeaders(token)
                })
                .then(function(response) {
                    if (callback && typeof callback === 'function') {
                        callback(response.data);
                    }
                    console.log(response.data)
                    resolve(response.data);
                })
                .catch(function(error) {
                    resolve(error);
                });
        } else {
            if (typeof interval !== 'number') {
                interval = 1000;
            }
            axios.get(API_URL + taskID, {
                    headers: defineHeaders(token)
                })
                .then(async function(response) {
                    var result = response.data;
                    if (callback && typeof callback === 'function') {
                        callback(result);
                    }
                    while (result.state != "completed" && result.state != "failed") { // While the task is still generating
                        try {
                            result = (await axios.get(API_URL + taskID, { headers: defineHeaders(token) })).data;
                        } catch (error) {
                            resolve(error);
                        }
                        if (result.state != "completed" && result.state != "failed") {
                            if (callback && typeof callback === 'function') {
                                callback(result);
                            }
                        }
                        await new Promise(resolve => setTimeout(resolve, interval));
                    }
                    resolve(result);
                })
                .catch(function(error) {
                    resolve(error);
                });
        }
    });
}

const generateImage = async(style, promptValue, token = null, image = null, weight = "MEDIUM", save = false, saveSettings = { "name": "", "public": false, "visible": true }, callback = null, interval = 1000, freq = 10) => {
    if (token == null) {
        token = await Authentication.signUp();
        token = token.idToken;
        save = false;
    }
    let taskID = await getTaskID(token); // Get the task ID
    if (weight != "LOW" && weight != "MEDIUM" && weight != "HIGH") {
        weight = "MEDIUM";
    }
    if (image != null) {
        let imageId = await uploadPhoto(image, token);
        var result = await createTask(token, taskID, promptValue, style, imageId, weight, freq); // Create the task
    } else {
        var result = await createTask(token, taskID, promptValue, style, image, weight, freq); // Create the task
    }
    if (callback && typeof callback === 'function') {
        callback(result);
    } else {
        console.log("creating task...");
    }
    result = await checkStatus(token, taskID, interval, (result) => {
        if (callback && typeof callback === 'function') {
            callback(result);
        } else {
            console.log("generating...");
        }
    });
    if (save) {
        await saveToGallery(token, taskID, saveSettings); // Save the task to the gallery
    }
    return result
}

exports.getTaskID = getTaskID;
exports.createTask = createTask;
exports.checkStatus = checkStatus;
exports.generateImage = generateImage;
