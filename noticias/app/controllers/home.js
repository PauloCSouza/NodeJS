module.exports.index = function(application, req, res) {

	var connection = application.config.dbConnection();
	var noticias = new application.app.models.Noticias(connection);

	noticias.getUltimasNoticias(function(error, result) {
		res.render('home/index', {noticias : result});
	});


}