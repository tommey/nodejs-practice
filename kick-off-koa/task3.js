var koa = require('koa');
var parse = require('co-body');

var port = Number(process.argv[2]);

var app = koa();

app.use(function* () {
	var request = yield parse(this);

	this.body = request.name.toUpperCase();
});

app.listen(port);

