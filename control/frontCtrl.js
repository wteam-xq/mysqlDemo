var MysqlObj = require('../models/mysql_obj');
var webCtrol = {
}

webCtrol.index = function(req, res){
	// 读取数据库
	MysqlObj.getUserList(function(err, results){
		var userList = [];
		if(!err && results){
          userList = results;
	    } 
    	res.render('index', { 
			title: 'mysqlDemo 首页' ,
			users: userList
		});
	});
}

module.exports = webCtrol