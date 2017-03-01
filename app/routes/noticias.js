module.exports = function(app){

	app.get('/noticias', function(req, res){

		var mysql = require('mysql');

		var connection = mysql.createConnection({
			host : 'localhost',
			user : 'root',
			password : '',
			datebase : 'noticias'
		});

		connection.query('SELECT * FROM tb_noticias', function(error, result){
			res.send(result);
		});

		//res.render('noticias/noticias');

	});

}