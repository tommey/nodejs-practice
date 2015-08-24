var net = require('net');

function zz(x) { return x < 10 ? '0' + x : x; }

var server = net.createServer(function (socket) {
	var date = new Date();
	var time = date.getFullYear() + '-' + zz(date.getMonth()+1) + '-' + zz(date.getDate()) + ' ' + zz(date.getHours()) + ':' + zz(date.getMinutes()) + "\n";
	socket.end(time);
});
server.listen(Number(process.argv[2]));

