// Import Config Server
var app = require('./config/server');

// Parametrizar porta de escuta
var server = app.listen(3000, function(){
	console.log('Server Online!!!');
});

var io = require('socket.io').listen(server);

app.set('io', io);

// Criar conexão Websocket
io.on('connection', function(socket){
	
	console.log('Usuário Conectou');

	socket.on('disconnect', function() {
		console.log('Usuário Desconectou');
	});

	socket.on('msgParaServidor', function(data) {
		
		// Dialogo
		socket.emit(
			'msgParaCliente',
			{apelido : data.apelido, mensagem : data.mensagem}
		);
		socket.broadcast.emit(
			'msgParaCliente',
			{apelido : data.apelido, mensagem : data.mensagem}
		);

		// Participantes
		if (parseInt(data.apelido_atualizado_nos_clientes) == 0) {
			socket.emit(
				'participantesParaCliente',
				{apelido : data.apelido}
			);
			socket.broadcast.emit(
				'participantesParaCliente',
				{apelido : data.apelido}
			);
		}

	});

});

/*
Instalação de Módulos:
npm install express -save
npm install ejs --save
npm install consign --save
npm install body-parser --save
npm install express-validator --save
npm install socket.io --save
*/