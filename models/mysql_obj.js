var mysql = require('mysql');

var TEST_DATABASE = 'mysql_demo',
	TEST_TABLE = 'users';
var client = null;

var MysqlObj = {
	init: function(){
		//创建连接  
		client = mysql.createConnection({
			hosts: 'localhost',
		  	user: 'root',  
		  	password: '',
		  	database: TEST_DATABASE
		});  
		client.connect();
	}, 
	getConnection: function(){
		var result = null;
		if (client) {
			result = client;
		}
		return result;
	},
	// 获取用户列表
	getUserList: function(cb){
		if (!client) {
			return true;
		}
		client.query(
		  'SELECT * FROM ' + TEST_TABLE,  
		  function selectCb(err, results, fields) {  
		    if (err) {  
		      throw err;  
		    }  
		    if (cb) {
		    	cb(err, results);
		    }  
		  }  
		); 
	},
	// 关闭数据库连接池
	closeClient: function(){
		client.end();
	},
	createUser: function(userObj, cb){
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
	}
}

module.exports = MysqlObj;
