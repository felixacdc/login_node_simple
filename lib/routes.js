const express = require('express'),
	api = express.Router();

api.get('/', function (req, res, next) {
	console.log('hola')
	res.render('index');
});

module.exports = api;