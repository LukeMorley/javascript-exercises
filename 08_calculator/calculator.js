const add = function(a,b) {
  return a+b;
};

const subtract = function(a,b) {
  return a-b;
};

const sum = function(arr) {
	let val = 0;
  arr.forEach(element => {
    val+=element;
  });
  return val;
};

const multiply = function(arr) {
  let val = 1;
  let size = arr.length;
  if(size==2){
    return arr[0]*arr[1]
  }else{
    for(i=0;i<arr.length;i++){
        let temp = arr[i]*val;
        val = temp;
    }
  }
  return val;
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(a) {
	if(a==1||a==0){return 1};
  let val = a;
  for(i=a-1;i>0;i--){
      temp = val*i;
      val = temp;
  }
  return val;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
