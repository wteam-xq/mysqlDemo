var mysql = require('mysql');

var TEST_DATABASE = 'mysql_demo',
	TEST_TABLE = 'user';
var client = null;

var MysqlObj = {
	init: function(){
		//创建连接  
		client = mysql.createConnection({  
		  user: 'root',  
		  password: '',  
		});  

		client.connect();
		client.query("use " + TEST_DATABASE);
	}, 
	getConnection: function(){
		var result = null;
		if (client) {
			result = client;
		}
		return result;
	},
	// 获取用户列表
	getUserList: function(){
		if (!client) {
			return true;
		}
		client.query(  
		  'SELECT * FROM ' + TEST_TABLE,  
		  function selectCb(err, results, fields) {  
		    if (err) {  
		      throw err;  
		    }  
		    if(results){
	          for(var i = 0; i < results.length; i++){
	            console.log("%d\t%s\t%s", results[i].id, results[i].name, results[i].age);
	          }
		    }    
		    client.end();  
		  }  
		); 
	}
}

module.exports = MysqlObj;
