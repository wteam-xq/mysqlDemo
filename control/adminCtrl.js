var UserObj = require('../models/user_obj');
var adminCtrol = {
	userList: function(req, res){
		UserObj.getUserList(function(err, users){
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
		UserObj.createUser(userObj, function(err, user){
			if (err){
			  console.log('新增用户信息错误');
			}else{
			  res.redirect('/admin/');
			}
		});
	},
	updateUser: function(req, res){
		var id = req.query.id;
		UserObj.findUserById(id, function(err, user){
			var userObj = null;
			if (err){
			    console.log('根据Id查找用户信息，出错');
			}else{
				userObj = user[0];
			    res.render('admin/user_update', {
			      title: 'admin',
			      user: userObj
			    });
			}
		});
	},
	updateUserPost: function(req, res){
		var id = req.body.id;
		var user = {
			name: req.body.name,
			age: req.body.age,
			job: req.body.job,
			hobby: req.body.hobby
		};
		UserObj.updateUser(id, user, function(err, result){
			if (err){
			  console.log('更新用户信息，出错');
			} else {
			  res.redirect('/admin/');
			}
		});
	},
	deleteUser: function(req, res){
		var id = req.body.id;
		UserObj.deleteUser(id, function(err, result){
			if (err){
			  res.json({error:err});
			} else {
			  res.json({success: true});
			}
		});
	}
}

module.exports = adminCtrol;