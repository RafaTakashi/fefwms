var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

//configurando o banco
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/tg');

//criando variaveis das rotas
var index = require('./routes/index');
var login = require('./routes/login-route');
var company = require('./routes/company-route');
var pacient = require('./routes/pacient-route');
var ranking = require('./routes/ranking-route');

var app = express();

app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    headers: ['Content-Type', 'Authorization', 'token']
}));

// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//criando as rotas
app.use('/', index);
app.use('/login', login);
app.use('/company', company);
app.use('/pacient', pacient);
app.use('/ranking', ranking);

module.exports = app;