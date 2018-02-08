module.exports.noticias = function(application, req, res) {
		
	var connection = application.config.dbConnection();
	var noticiasModel = new application.app.models.Noticias(connection);

	noticiasModel.getNoticias(function(error, result){
		res.render("noticias/noticias", {noticias : result});
	});

}

module.exports.noticia = function(application, req, res) {

	var connection = application.config.dbConnection();
	var noticiasModel = new application.app.models.Noticias(connection);

	var idnoticia = req.query;

	noticiasModel.getNoticia(idnoticia, function(error, result){
		res.render("noticias/noticia", {noticia : result});
	});

}