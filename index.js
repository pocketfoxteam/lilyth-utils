var fs = require('fs')
var path = require('path')

function utils(base){
	this.base = base;
}
utils.prototype.saveData = function(n,d){
	
	n = this.base+"/gendata/"+n;
	if(fs.existsSync(this.base+"/gendata/")){
		fs.writeFileSync(n, JSON.stringify(d), 'utf8');
	}else{
		fs.mkdirSync(this.base+"/gendata");
		fs.writeFile(n, JSON.stringify(d), 'utf8');
	}
}
utils.prototype.loadData = function(n){
	n = this.base+"/gendata/"+n;
	if(fs.existsSync(n)){
		return JSON.parse(fs.readFileSync(n,{encoding:'utf8'}));
	}else{
		return false;
	}
}
function spawner(w){
	return new utils(w);
}
module.exports = spawner;