var express = require('./ui/config/express');
var app = express();

var port = 9999;
app.listen(port);

console.log('Server running at port #: ', port);