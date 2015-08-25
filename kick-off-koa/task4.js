var koa = require('koa');
var fs = require('fs');

var port = Number(process.argv[2]);

var app = koa();

app.use(function* (next) {
	if (this.path == '/stream') {
		this.body = fs.createReadStream(process.argv[3]);
	}
	else if (this.path == '/json') {
		this.body = { foo: 'bar' };
	}
	else {
		return yield next;
	}
});

app.listen(port);

