var fs = require('fs');

var async = require('async');
var superagent = require('superagent');

var host = process.argv[2];
var port = Number(process.argv[3]);

function createUser(n, next) {
	superagent
		.post(host + ':' + port + '/users/create')
		.send({"user_id": n + 1})
		.end(next);	
}

async.times(5, createUser, function(err, users) {
	superagent.get(host + ':' + port + '/users').end(function (err, data) {
                if (err) return console.log(err);

                console.log(data.text);
        });	
});
