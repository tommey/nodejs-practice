var koa = require('koa');
var session = require('koa-session');

var app = koa();
app.keys = ['secret', 'keys'];

app.use(session(app));

app.use(function* (next){
	var views = this.session.views || 1;
	this.body = views + ' views';
	this.session.views = views + 1;
});

app.listen(process.argv[2]);

