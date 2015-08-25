var fs = require('fs');
var path = require('path');
var ext = '.' + process.argv[3];

fs.readdir(process.argv[2], function(err, list) {
	if (err) return console.error(err);
	for (var i in list) {
		if (path.extname(list[i]) == ext)
			console.log(list[i]);
	}
});
