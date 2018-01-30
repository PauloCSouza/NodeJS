module.exports = function(app){

	app.get('/formulario_inclusao_noticia', function(req, res){
		res.render('admin/form_add_noticia');
	});

	app.post('/noticias/salvar', function(req, res){
		
		var noticia = req.body;

		req.assert('destitulo','Título é obrigatório').notEmpty();
		req.assert('desresumo','Resumo é obrigatório').notEmpty();
		req.assert('desresumo','Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
		req.assert('autor','Autor é obrigatório').notEmpty();
		req.assert('desnoticia','Noticia é obrigatório').notEmpty();

		var errors = req.validationErrors();
		if (errors) { res.render('admin/form_add_noticia'); return; }

		var connection = app.config.dbConnection();
		var noticiasModel = new app.app.models.Noticias(connection);

		noticiasModel.setNoticia(noticia, function(error, result){
			res.redirect('/noticias');
		});

	});

}