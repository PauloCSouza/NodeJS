module.exports.formulario_inclusao_noticia = function(application, req, res) {

	res.render('admin/form_add_noticia', {validacao : {}, noticia : {}});

}

module.exports.noticias_salvar = function(application, req, res) {

	var noticia = req.body;

	console.log(noticia);
	
	req.assert('destitulo','Título é obrigatório').notEmpty();
	req.assert('desresumo','Resumo é obrigatório').notEmpty();
	req.assert('desresumo','Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
	req.assert('autor','Autor é obrigatório').notEmpty();
	req.assert('desnoticia','Noticia é obrigatório').notEmpty();

	var errors = req.validationErrors();

	if (errors) {
		res.render("admin/form_add_noticia", {validacao : errors, noticia : noticia});
		return;
	}

	var connection = application.config.dbConnection();
	var noticiasModel = new application.app.models.Noticias(connection);

	noticiasModel.setNoticia(noticia, function(error, result){
		res.redirect('/noticias');
	});
	
}