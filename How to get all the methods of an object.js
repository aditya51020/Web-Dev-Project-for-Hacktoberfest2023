function Obj() {
	this.m1 = function M1() {
		return "From M1";
	}
	this.m2 = function M2() {
		return "From M2";
	}
}

function getAllMethods(obj = this) {
	return Object.keys(obj)
		.filter((key) => typeof obj[key] === 'function')
		.map((key) => obj[key]);
}

function gfg_Run() {
console.log(getAllMethods(new Obj()));
}
gfg_Run();
