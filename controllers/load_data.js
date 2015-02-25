var http = require('http');

var options = {
    hostname: 'files.analoc.com',
    path: '/test/sample_data.json'
};

var req = http.get(options, function(res) {
    var body = "";

    res.setEncoding('utf8');

    res.on('data', function (chunk) {
        body += chunk;
    });

    res.on('end', function() {
        try {
            DB = JSON.parse(body);
        }
        catch(e) {
            console.log(e);
        }
    });
});