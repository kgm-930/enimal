const Authentication = require('./auth');
const Dream = require('./dream')

exports.signUp = Authentication.signUp;
exports.signIn = Authentication.signIn;
exports.refresh = Authentication.refreshToken;
exports.generateImage = Dream.generateImage;
exports.getTaskID = Dream.getTaskID;
exports.createTask = Dream.createTask;
exports.checkStatus = Dream.checkStatus;