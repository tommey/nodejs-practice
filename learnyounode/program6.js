var p6 = require('./program6-module');

p6(process.argv[2], process.argv[3], function(err, data) {
	if (err) return console.log('Listing failed!');

	console.log(data.join("\n"));
});
