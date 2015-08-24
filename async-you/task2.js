var fs = require('fs');

var async = require('async');
var superagent = require('superagent');

function getContents(url, done) {
	superagent.get(url).end(function (err, data) {
		if (err) return done(err);
		done(null, data.text);
	});
}

async.series(
    {
        requestOne: function (done) { getContents(process.argv[2], done); },
        requestTwo: function (done) { getContents(process.argv[3], done); }
    },
    function (err, results) {
        if (err)
	{
            return console.log(err);
        }
        console.log(results);
    }
);
