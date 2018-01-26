module.exports = function() {

	this.getNoticias = function(connection, callback) {
		connection.query('SELECT * FROM tb_noticias', callback);
	}

	this.getNoticia = function(connection, callback) {
		connection.query('SELECT * FROM tb_noticias WHERE idnoticia = 1', callback);
	}

	this.setNoticia = function(noticia, connection, callback) {
		connection.query('INSERT INTO tb_noticias set ? ', noticia, callback);
	}

	return this;
}