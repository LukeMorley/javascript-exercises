const sumAll = function(one,two) {

    if(typeof one != "number" || typeof two != "number"){
        return 'ERROR'
    }

    if(one<0||two<0){
        return 'ERROR'
    }

    let sum = 0;
    if(one>two){
        for(let i = two; i<one; i++){
            sum += i;
        }
        sum+=one;
    }else{
        for(let i = one; i<two; i++){
            sum += i;
        }
        sum+=two;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
