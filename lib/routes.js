const express = require('express'),
	api = express.Router();

api.get('/', function (req, res, next) {
	res.render('index');
});

api.get('/secure', function (req, res, next) {
	res.render('secure');
});

api.get('/login', function (req, res, next) {
	res.render('login', { flash: req.flash() } );
});

api.post('/login', function (req, res, next) {

	if (req.body.username && req.body.username === 'user' && req.body.password && req.body.password === 'pass') {
		req.session.authenticated = true;
		res.redirect('/secure');
	} else {
		req.flash('error', 'Username and password are incorrect');
		res.redirect('/login');
	}

});

module.exports = api;