function* idGen() {
	var index = 0;
	while (index < 2) {
		yield index++; 
	}
	yield index++;
	yield index++;
}

var id = idGen();

var id1 = id.next();

console.log(id1);
console.log(id.next());
console.log(id.next());
console.log(id.next());
console.log(id.next());

