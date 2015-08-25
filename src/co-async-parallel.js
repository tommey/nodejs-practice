var co = require('co');

function promiseFactory(value) {
	return new Promise(function(resolve, reject){
		console.log('start', value);
		setTimeout(function(){
			console.log('resolve', value);
			resolve(value);
		}, Math.floor(Math.random()*100));
	});
}

co(function*() {
	return yield {
		a: promiseFactory('apple'), 
		b: promiseFactory('banana'), 
		c: promiseFactory('circle')
	};
}).then(function(data){
	console.log(data); 
}).catch(function(err){
	console.log(err);
});

