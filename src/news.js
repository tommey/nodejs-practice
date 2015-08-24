var async = require('async');
var superagent = require('superagent');

async.parallel(
    {
        bbc: function(done) {
            superagent.get('http://bbc.co.uk').end(done);
            //done(new Error('bbc failed'), 'bbc');
        },
        cnn: function(done) {
            superagent.get('http://cnn.com').end(done);
            //done(null, 'cnn');
        }
    },
    function (err, result) {
        if (err) {
            return console.log('err', err);
        }

        console.log(result);
    }
);