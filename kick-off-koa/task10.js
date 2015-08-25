var koa = require('koa');
var views = require('co-views');

var render = views(__dirname + '/views', {
  ext: 'ejs'
});

var user = {
  name: {
    first: 'Tobi',
    last: 'Holowaychuk'
  },
  species: 'ferret',
  age: 3
};

var port = Number(process.argv[2]);

var app = koa();

app.use(function* () {
	this.body = yield render('user', {user: user});
});

app.listen(port);

