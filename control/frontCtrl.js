var UserObj = require('../models/user_obj');

var webCtrol = {
	index: function(req, res){
		// 读取数据库
		UserObj.getUserList(function(err, results){
			var userList = [];
			if(!err && results){
	          userList = results;
		    } 
	    	res.render('index', { 
				title: 'mysqlDemo 首页' ,
				users: userList
			});
		});
	},
	error: function(req, res){

	}
}

module.exports = webCtrol;