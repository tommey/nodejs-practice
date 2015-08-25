var koa = require('koa');

var port = Number(process.argv[2]);

var app = koa();

app.use(function* () {
	if (this.request.is('application/json')) {
		this.body = {message: 'hi!'};
	}
	else { 
		this.body = 'ok';
	}
});

app.listen(port);

