var express   = require('express');
var router    = express.Router();
var taskAPI   = require('../task');

router.get('/', function(req, res) {
  res.render('index', { title:'nt66' })
});

router.post('/', function(req, res) {
  var content = req.body.issue.body || '';
  taskAPI.create(content,function(err,ret) {
    console.log(ret || err);
    res.send()
  });
});

module.exports = router;