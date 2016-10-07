var MysqlObj = require('../models/mysql_obj');
var adminCtrol = {
	userList: function(req, res){
		MysqlObj.getUserList(function(err, users){
			if (err){
				// 上线后将用forever输出日志
		    	console.log('查询用户列表异常');
		    }else{
		      res.render('admin/user_list', { 
		        title: 'admin',
		        users: users
		      });
		    }
		});
	},
	addUser: function(req, res){
		res.render('admin/user_add', { title: 'admin' });
	},
	addUserPost: function(req, res){
		var userObj = {};
		userObj = {
			name: req.body.name,
			age: req.body.age,
			job: req.body.job,
			hobby: req.body.hobby
		};
		MysqlObj.createUser(userObj, function(err, user){
			if (err){
			  console.log('新增用户信息错误');
			}else{
			  res.redirect('/admin/');
			}
		});
	},
	updateUser: function(req, res){

	},
	updateUserPost: function(req, res){

	},
	deleteUser: function(req, res){

	}
}


module.exports = adminCtrol