function repeat(operation, num) {
  if (num <= 0) return
  setImmediate(function() {
	operation(); 
	repeat(operation, --num);
  });
}

module.exports = repeat

