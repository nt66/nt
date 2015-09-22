var config  = require('config');
var express = require('express');
var router  = express.Router();
var taskAPI = require('../task');

var query   = ["client_id=" + config.client_id,"redirect_uri=" + config.redirect_uri].join('&');

router.get('/login/callback', function(req, res, next){
  if(req.path == '/login/callback'){
    if (req.query.access_token){
      taskAPI.teambition.token = req.query.access_token
      res.redirect('/')
    }else if (req.query.code){
      taskAPI.getToken(req.query.code,function  (err,ret) {
        if(ret.access_token){
          taskAPI.teambition.token = ret.access_token;
          res.redirect('/');
        }else{
          res.json(ret)
        }
      });
    }
  }else if(!taskAPI.teambition.token){
    res.redirect('https://account.teambition.com/oauth2/authorize?' + query);
  }else{
    next();
  }
});

module.exports = router;