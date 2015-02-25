var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/get-data', function(req, res, next) {
    var from = req.query.from;
    var to = req.query.to;

    if(from.match(/[0-9]{4}-[0-9]{2}-[0-9]{2}/) && to.match(/[0-9]{4}-[0-9]{2}-[0-9]{2}/)) {
        var chartData = [];

        if(from == to) { // give an hourly report
            var inside = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
            var outside = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
            for(var key in DB) {
                if(DB[key].date == from) {
                    if(DB[key].is_inside == '1')
                        inside[ DB[key].hour ]++;
                    else
                        outside[ DB[key].hour ]++;
                }
            }

            for(var i=0; i<24; i++) {
                chartData.push({
                    hour: i,
                    inside: inside[i],
                    outside: outside[i]
                });
            }
            res.send(JSON.stringify(chartData));
        }
        else { // give a daily report
            //
        }
    }
    else {
        res.status(400).send('please choose valid dates');
    }
});

module.exports = router;
