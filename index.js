global.DB = "";

var expressApp = require('./app.js');

require('./controllers/load_data.js'); // loads the data from an external api to a global variable called DB

process.env.NODE_ENV = 'development';

var server = expressApp.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Analoc Graph app listening at http://%s:%s', host, port);
});