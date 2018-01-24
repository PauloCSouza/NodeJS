var mysql = require('mysql');

var conMySQL = function() {
	return mysql.createConnection({
		host : 'localhost',
		user : 'teste',
		password : 'teste',
		database : 'test'
	});	
}

module.exports = function () {

	return conMySQL;

}