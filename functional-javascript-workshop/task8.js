function duckCount() {
	if (!arguments.length) return 0;
	var args = Array.prototype.slice.call(arguments);
	console.log(args);
	var head = args.pop();
	console.log(head);
	var count = Object.prototype.hasOwnProperty.call(head, 'quack') ? 1 : 0;
	return count + duckCount.apply(null, args); 	
}

module.exports = duckCount;
