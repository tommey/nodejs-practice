function getDependencies(tree) {
	function loop(branch, acc) {
		for (var item in branch) {
			var version = branch[item].version;
			var name = item + '@' + version;

			if (!acc.some(function(accName) {
				return accName == name;
			})) {
				acc.push(name);
			}
			if (branch[item].dependencies) {
        	                acc = loop(branch[item].dependencies, acc);
	                }
		}

		return acc;
	}

	return tree && tree.dependencies ? loop(tree.dependencies, []).sort() : [];
}

module.exports = getDependencies;
