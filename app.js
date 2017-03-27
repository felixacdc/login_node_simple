const express = require('express'),
	port = 8999,
	app = express(),
	bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'jade');
app.set('view options', { layout: false });

app.listen(port);
console.log('Node listening on port %s', port);
