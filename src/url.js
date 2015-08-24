var fs = require('fs');

var async = require('async');
var superagent = require('superagent');

async.waterfall(
    [
        function (callback) {
            fs.readFile('../url.txt', 'utf-8', callback);
        },
        function (url, callback) {
            superagent.get(url).end(callback);
        }
    ],
    function (err, result) {
        if (err)
        {
            return console.log(err);
        }
        console.log(result);
    }
);