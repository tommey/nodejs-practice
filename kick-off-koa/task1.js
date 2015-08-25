var koa = require('koa');

var port = Number(process.argv[2]);

var app = koa();

app.use(function* () {
	this.body = 'hello koa';
});

app.listen(port);

