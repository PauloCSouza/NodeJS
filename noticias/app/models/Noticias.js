function Noticias(connection) {

	this._connection = connection;

}

Noticias.prototype.getNoticias = function(callback) {

	this._connection.query('SELECT * FROM tb_noticias ORDER BY dtcadastro DESC', callback);

}

Noticias.prototype.getNoticia = function(idnoticia, callback) {

	this._connection.query('SELECT * FROM tb_noticias WHERE idnoticia = ' + idnoticia.idnoticia, callback);

}

Noticias.prototype.setNoticia = this.setNoticia = function(noticia, callback) {

	this._connection.query('INSERT INTO tb_noticias set ? ', noticia, callback);
	
}

Noticias.prototype.getUltimasNoticias = function(callback) {
	this._connection.query('SELECT * FROM tb_noticias ORDER BY dtcadastro DESC limit 5', callback);
}

module.exports = function() {
	return Noticias;
}