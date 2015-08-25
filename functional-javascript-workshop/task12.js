module.exports = function (target, method) {
	var originalFunction = target[method];

	var result = {
        	count: 0
	};

      	target[method] = function() {
        	result.count++;
        	return originalFunction.apply(this, arguments);
      	}

      	return result;
}

