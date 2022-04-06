const fibonacci = function(input) {
    let a = 1;
    let b = 1;
    let c = 1;
    if(typeof(input)=='string'){
        input = parseInt(input);
    }
    if(input<1){
        return "OOPS";
    }
    if(input==1||input==2){
        return 1;
    }else{
        for(i=0;i<input-2;i++){
            a = b;
            b = c;
            c = a + b;
        }
    }
    return c;
};

// Do not edit below this line
module.exports = fibonacci;
