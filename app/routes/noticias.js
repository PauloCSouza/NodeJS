var dbConnection = require('../../config/dbConnection');

module.exports = function(app){

	var connection = dbConnection();

	app.get('/noticias', function(req, res){

		connection.query('SELECT * FROM tb_noticias', function(error, result){
			// Vai enviar um JSON para a view Noticias
			res.render("noticias/noticias", {noticias : result});
		});
	});

}