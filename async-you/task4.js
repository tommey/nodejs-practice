var fs = require('fs');

var async = require('async');
var superagent = require('superagent');

function getContents(url, done) {
	superagent.get(url).end(function (err, data) {
		if (err) return done(err);
		
		done(null, data.text);
	});
}

async.map(
	[process.argv[2], process.argv[3]], 
	getContents, 
	function(err, results) {
		if(err) {
			return console.log(err);
		}
		
		console.log(results);
	}
);
