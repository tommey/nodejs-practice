module.exports = function(words) {
	return words.reduce(function(memo, item){
		if (memo[item]) memo[item]++;
		else memo[item] = 1;	
		return memo;
	}, {});
}
