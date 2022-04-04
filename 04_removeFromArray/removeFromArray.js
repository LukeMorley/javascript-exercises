const removeFromArray = function() {
    arr1 = arguments[0];
    for(let i = 1; i<arguments.length;i++){
        const index = arr1.indexOf(arguments[i]);
        if(index > -1){
            arr1.splice(index,1);
        }else{
        }
    }
    return arr1;
};

// Do not edit below this line
module.exports = removeFromArray;
