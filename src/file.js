var fs = require('fs');

//var content = fs.readFileSync('../package.json', 'utf-8');

function fileHandler(err, data) {
    if (err) {
        return console.error(err);
    }

    console.log(data);
}

fs.readFile('../package.json', 'utf-8', fileHandler);

//console.log(content);