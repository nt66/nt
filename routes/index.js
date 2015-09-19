var express = require('express');
var router = express.Router();
var taskAPI = require('../models/task');

/* GET home page. */
router.get('/',function  (req,res) {
	res.render('index',{title:'nt66'})
})

router.post('/', function(req, res) {
	//get issue from github
	//var title = req.body.issue.title ||'';
	var content = req.body.issue.body ||'';
	// var data = {
	// 	_tasklistId:'',
	// 	content:''
	// }
	taskAPI.create(content,function(err,ret) {
		if(err)
			console.log(err);
		else
			console.log(ret);
	});
});

module.exports = router;
