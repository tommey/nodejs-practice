var fs = require('fs');

function readFile(path) {
    return new Promise(function (resolve, reject) {
        fs.readFile(path, 'utf-8', function (err, data) {
            if (err) {
                return reject(err);
            }

            resolve(data);
        });
    });
}

module.exports.readFile = readFile;

function runTest() {
	readFile('../package.json')
    		.then(console.log)
    		.catch(console.error);

	Promise.all([
    		readFile('../apple'),
    		readFile('../banana'),
    		readFile('../peach')
	])
    		.then(console.log)
    		.catch(console.error);
}

