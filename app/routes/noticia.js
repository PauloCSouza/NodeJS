module.exports = function(app){

	app.get('/noticia', function(req, res){

		var connection = app.config.dbConnection();
		var noticiasModel = new app.app.models.Noticias(connection);

		noticiasModel.getNoticia(function(error, result){
			// Vai enviar um JSON para a view Noticias
			res.render("noticias/noticia", {noticia : result});
		});

	});

}