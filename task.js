var config        = require('config');
var Teambition    = require('teambition');
var tokenService  = new Teambition();

var TaskAPI = function () {}

TaskAPI.prototype.teambition = new Teambition();
TaskAPI.prototype.getToken = function(code,callback) {
  var params = {
    client_id: config.client_id,
    client_secret: config.client_secret,
    code: code
  }
  tokenService.post('/oauth2/access_token', params, callback);
}

TaskAPI.prototype.create = function(content,callback) {
  var data = {
    _tasklistId : config._tasklistId,
    content:content
  }
  TaskAPI.prototype.teambition.post('/tasks', data, callback);
}

module.exports = new TaskAPI();