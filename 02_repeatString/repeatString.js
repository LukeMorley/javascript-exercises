const repeatString = function(string,number) {
	if(number<0){
		return 'ERROR'
	}
	let outPut ='';
	for(let i = 0; i < number; i++){
		outPut = outPut.concat(string);
	}
	return outPut;
};

// Do not edit below this line
module.exports = repeatString;
