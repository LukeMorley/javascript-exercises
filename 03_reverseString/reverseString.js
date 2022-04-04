const reverseString = function(string) {
    let arr = string.split("");
    let len = string.length;
    let nArr = [];
    for(let i = 0; i<len; i++){
        nArr[len-i] = arr[i]
    }
    let outPut = nArr.join('');
    return outPut;
};

// Do not edit below this line
module.exports = reverseString;
