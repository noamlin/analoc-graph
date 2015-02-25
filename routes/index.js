var express = require('express');
var router = express.Router();

var fs = require('fs');
var path = require('path');
var viewsDir = path.normalize( path.join(__dirname, '..', 'views/') );

/* GET home page. */
router.get('/', function(req, res, next) {
    fs.readFile(viewsDir+'index.html', 'utf8', function(err, fileContents) {
        if(err) {
            console.log(err);
        }
        else {
            res.send(fileContents);
        }
    });
});

module.exports = router;
