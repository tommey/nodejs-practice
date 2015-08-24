var fs = require('fs');

var async = require('async');
var superagent = require('superagent');

var url = process.argv[2];

async.reduce(['one', 'two', 'three'], 0, function(memo, item, callback) {
	superagent.get(url + '?number=' + item).end(function (err, data) {
                if (err) return callback(err);

                callback(null, memo + Number(data.text));
        });	
}, function(err, result) {
	if (err) return console.log(err);

	console.log(result);
});
