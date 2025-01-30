const removeFromArray = function(myArray,...args) {
    
    const newArray = [];

    myArray.forEach(number => {

        //will be using a for loop to avoid errors occuring in the code
    for(!args.includes(number)) {

        newArray.push(number);
    }
        
    });


    
}
// Do not edit below this line
module.exports = removeFromArray;
