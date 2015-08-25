var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, callback) {
	fs.readdir(dir, function(err, list) {
		if (err) return callback(err);
		
		ext = '.' + ext;
		
		callback(null, list.filter(function(item) {
			return path.extname(item) == ext;
		}));
	});
}
