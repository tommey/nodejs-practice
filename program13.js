var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
	var urlParts = url.parse(req.url, true);
	var response = {};
	var isoDate = new Date(urlParts.query.iso);

	res.writeHead(200, { 'Content-Type': 'application/json' });

	if (urlParts.pathname == '/api/parsetime') {
		response = {
			"hour": isoDate.getHours(),
			"minute": isoDate.getMinutes(),
			"second": isoDate.getSeconds()
		};
	}
	else if (urlParts.pathname == '/api/unixtime') {
		response = { "unixtime": isoDate.getTime() };
	}

	res.end(JSON.stringify(response));
});
server.listen(Number(process.argv[2]));

