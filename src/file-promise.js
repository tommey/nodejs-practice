var fs = require('fs');

var p = new Promise(function(resolve, reject){
    fs.readFile('../package.json', 'utf-8', function(err, data){
        if (err) {
            return reject(err);
        }

        resolve(data);
    });
});

p.then(function(data) {
    console.log(data);
}).catch(function(err){
    console.log(err);
});
