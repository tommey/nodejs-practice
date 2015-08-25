module.exports = function (arr, fn) {
	return arr.reduce(function(memo, item) {memo.push(fn(item)); return memo;}, []);
}
