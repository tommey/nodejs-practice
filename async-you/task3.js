var fs = require('fs');

var async = require('async');
var superagent = require('superagent');

function getContents(url, done) {
	superagent.get(url).end(function (err, data) {
		if (err) return done(err);
		
		done(null, data.text);
	});
}

async.each(
	[process.argv[2], process.argv[3]], 
	getContents, 
	function(err) {
		if(err) {
			// Little trick to make the test work with superagent too.
			delete err.response;
			return console.log(err);
		}
	}
);
