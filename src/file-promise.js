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

readFile('../package.json')
    .then(console.log)
    .catch(console.log);

Promise.all([
    readFile('../apple'),
    readFile('../banana'),
    readFile('../peach')
])
    .then(console.log)
    .catch(console.error);