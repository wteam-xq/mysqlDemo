var mysql = require('mysql');

var TEST_DATABASE = 'mysql_demo';
var client = null;

var MysqlObj = {
	// 连接数据库
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
	// 获取数据库对象
	getConnection: function(){
		var result = null;
		if (client) {
			result = client;
		}
		return result;
	},
	// 关闭数据库连接池
	closeClient: function(){
		client.end();
	}
}

module.exports = MysqlObj;
