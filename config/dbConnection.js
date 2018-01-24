var mysql = require('mysql');

var conMySQL = function() {
	return mysql.createConnection({
		host : 'localhost',
		user : 'test',
		password : 'test',
		database : 'test'
	});	
}

module.exports = function () {

	return conMySQL;

}