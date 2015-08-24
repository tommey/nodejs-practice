var fs = require('fs');

var async = require('async');
var superagent = require('superagent');

var url = process.argv[2];

var go = true;
var count = 0;

async.whilst(
	function() { return go; },
	function(callback) {
		count++;
		superagent.get(url).end(function (err, data) {
                	if (err) return callback(err);
			else if (data.text.trim() == 'meerkat') {
				go = false;
			}
			callback();
	        });
	},
	function (err) {
		if (err) return console.log(err);
		console.log(count);
	}
);
