var http = require('http');

var string = '';

http.get(process.argv[2], function(response) {
	response.setEncoding('utf8');
	response.on("data", function (data) { string += data; });
	response.on("end", function() {
		console.log(string.length);
		console.log(string);
	});
});
