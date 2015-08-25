var co = require('co');

function promiseFactory(value) {
	return new Promise(function(resolve, reject){
		setTimeout(function(){
			resolve(value);
		}, Math.floor(Math.random()*100));
	});
}

co(function*() {
	var a = yield promiseFactory('apple');
	var b = yield promiseFactory('banana');
	var c = yield promiseFactory('circle');

	console.log(a, b, c);

	return {a: a, b: b, c: c};
}).then(function(data){
	console.log(data); 
}).catch(function(err){
	console.log(err);
});

