var superagent = require('superagent');

var fp = require('./file-promise');

function getUrl(url) {
    return new Promise(function(resolve, reject) {
        superagent.get(url).end(function(err, data) {
            if (err)
            {
                return reject(err);
            }

            resolve(data);
        });
    });
}

fp.readFile('../url.txt')
    .then(getUrl)
    .then(console.log)
    .catch(console.error);
