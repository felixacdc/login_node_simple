const express = require('express'),
	port = 8999,
	app = express(),
	bodyParser = require('body-parser'),
	expressSession = require('express-session'),
	cookieParser = require('cookie-parser');

function checkAuth (req, res, next) {
	console.log('checkAuth ' + req.url);
	if (req.url === '/secure' && (!req.session || !req.session.authenticated)) {
		res.render('unauthorised', { status: 403 });
		return;
	}

	next();
}

app.use(cookieParser());
app.use(expressSession({secret:'example'}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(checkAuth);

app.set('view engine', 'jade');
app.set('view options', { layout: false });


app.listen(port);
console.log('Node listening on port %s', port);
