const express = require('express'),
	api = express.Router();

api.get('/', function (req, res, next) {
	res.render('index');
});

api.get('/login', function (req, res, next) {
	res.render('login', { flash: req.flash() } );
});

module.exports = api;