var express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    path = require('path');

module.exports = function() {
	var app = express();
	app.use(morgan('dev'));
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());
	app.set('views', __dirname + '/../server/views');
	app.set('view engine', 'ejs');
	require('../server/routes/server.routes')(app);
    app.use(express.static(path.resolve('./ui/public')));
	return app;
}
