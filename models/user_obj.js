var MysqlObj = require('./mysql_obj');
var TEST_TABLE = 'users';
var client = null;

var userObj = {
	init: function(){
		client = MysqlObj.getConnection();
	},
	// 新建用户信息
	createUser: function(userObj, cb){
		if (!client) {
			return true;
		}
		client.query('insert into users (name, age, job, hobby) values(?, ?, ?, ?)', 
			[userObj.name, userObj.age, userObj.job, userObj.hobby], 
			function(err, user) {
		  		if (err) {
		  			cb(err, null);
		  		} else {
		  			cb(null, user);
		  		}
			}
		);
	},
	// 查询用户信息
	findUserById: function(id, cb){
		var _id = id?id:1;
		var queryStr = 'SELECT * FROM ' + TEST_TABLE + ' where id = ' + _id;
		if (!client) {
			return true;
		}
		client.query(queryStr,  
			function(err, results) {
				if (err) {
				  throw err;
				}
				if (cb) {
					cb(err, results);
				}
			}  
		); 
	},
	// 获取用户列表
	getUserList: function(cb){
		if (!client) {
			return true;
		}
		client.query(
		  'SELECT * FROM ' + TEST_TABLE,  
		  function(err, results) {  
		    if (err) {  
		      throw err;  
		    }  
		    if (cb) {
		    	cb(err, results);
		    }  
		  }  
		); 
	},
	// 更新用户信息
	updateUser: function(id, userObj, cb){
		var updateStr = '';
		if (!client) {
			return true;
		}
		updateStr = 'update ' + TEST_TABLE + ' set name=?, age=?, job=?, hobby=? where id=?';
		client.query(updateStr, 
			[userObj.name, userObj.age, userObj.job, userObj.hobby, id], 
			function(err, user) {
		  		if (err) {
		  			cb(err, null);
		  		} else {
		  			cb(null, user);
		  		}
			}
		);
	},
	// 删除用户
	deleteUser: function(id, cb){
		var deleteStr = '';
		if (!client) {
			return true;
		}
		deleteStr = 'delete from ' + TEST_TABLE + ' where id=?';
		client.query(deleteStr, 
			[id], 
			function(err, result) {
		  		if (err) {
		  			cb(err, null);
		  		} else {
		  			cb(null, result);
		  		}
			}
		);
	}
};

module.exports = userObj;