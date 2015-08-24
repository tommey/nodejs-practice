var http = require('http');

var done = 0;
var contents = [];

for (var i = 2; i < 5; i++) {
	(function(url, contentIndex){
		contents[contentIndex] = '';
	
		http.get(url, function(response) {
			response.setEncoding('utf8');
			response.on("data", function (data) { 
				contents[contentIndex] += data;
			});
			response.on("end", function() {
				done++;
				if (done == 3) {
					for (var j = 0; j < 3; j++) {
						console.log(contents[j]);
					}
				}
			});
		});
	})(process.argv[i], i-2);
}

