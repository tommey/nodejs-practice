var superagent = require('superagent');

var co = require('co');

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

co(function* () {
	var url = yield fp.readFile('../url.txt');
	var content = yield getUrl(url);

	return content.text;
})
.then(console.log)
.catch(console.error);

