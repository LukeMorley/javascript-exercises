const ftoc = function(input) {
    let outPut = (input-32)*(5/9);
    outPut = Math.round(outPut*10)/10;
    return outPut;
};

const ctof = function(input) {
    let outPut = input * (9/5) +32;
    outPut = Math.round(outPut*10)/10;
    return outPut;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
