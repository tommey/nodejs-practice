var p = new Promise(function(resolve, reject){
    resolve('resolved!');
});

p.then(function(data) {
    console.log(data);
}).catch(function(err){
    console.log(err);
});
