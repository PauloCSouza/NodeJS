// Importar Módulos
var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

// Iniciar o objeto Express
var app = express();

// Setar Variáveis 'view engine' e 'views' do Express
app.set('view engine', 'ejs');
app.set('views', './app/views');

// Configurar Middleware express static
app.use(express.static('./app/public'));

// Configurar Middleware body parser
app.use(bodyParser.urlencoded({extended:true}));

// Configurar Middleware express validator
app.use(expressValidator());

// Efetua o AutoLoad das rotas, models, controllers para o objeto app
consign()
	.include('app/routes')
	.then('app/models')
	.then('app/controllers')
	.into(app);

// Exportar Objeto App
module.exports = app;