var koa = require('koa');

if (process.argv.length != 3) {
	throw new Error('Port is required as the first argument!');
}

var port = Number(process.argv[2]);

var app = koa();

app.use(function* () {
	this.body = 'hello koa';
});

app.listen(port, function(err){
	if (err) throw err;

	console.log('koa is running on ' + port);
});

