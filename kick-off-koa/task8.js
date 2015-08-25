var koa = require('koa');

var port = Number(process.argv[2]);

var app = koa();
app.keys = ['secret', 'keys'];

app.use(function* () {
	var views = this.cookies.get('view', {signed:true}) || 1;
	this.body = views + ' views';
	this.cookies.set('view', views + 1, {signed:true});
});

app.listen(port);

