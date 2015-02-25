var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/public', express.static(path.join(__dirname, 'public')));

var api = require('./routes/api');
app.use('/api', api);
var routes = require('./routes/index');
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    var html = '<html><body>' +
                '<h2>'+err.message+'</h2>' +
                '<h2>'+err.status+'</h2>' +
                '<h3>'+err.stack+'</h3>' +
                '</body></html>';
    res.send(html);
});


module.exports = app;
