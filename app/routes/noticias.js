module.exports = function(app){

	app.get('/noticias', function(req, res){

		var connection = app.config.dbConnection();
		var noticiasModel = new app.app.models.Noticias(connection);

		noticiasModel.getNoticias(function(error, result){
			// Vai enviar um JSON para a view Noticias
			res.render("noticias/noticias", {noticias : result});
		});

	});

}