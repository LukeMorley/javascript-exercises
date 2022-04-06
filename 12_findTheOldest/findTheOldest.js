const findTheOldest = function(arr) {
    let year = new Date().getFullYear();
    console.log(year);
    let currentMax = 0;
    let currentName = '';
    arr.forEach(element => {
        if(!element.hasOwnProperty('yearOfDeath')){
            element.age = (year-element.yearOfBirth);
            if(element.age>currentMax){
                    currentMax = element.age;
                    currentName = element.name;
            }
        }else{
            element.age = (element.yearOfDeath-element.yearOfBirth);
            if(element.age>currentMax){
                currentMax = element.age;
                currentName = element.name;
            }
        }
    });
    const person = arr.find(x => x.name == currentName);
    return person;
};

// Do not edit below this line
module.exports = findTheOldest;
