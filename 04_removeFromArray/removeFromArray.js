const removeFromArray = function(myArray,...args) {
    
    const newArray = [];

    myArray.forEach((number) => {

        //will be using a for loop to avoid errors occuring in the code
        if(!args.includes(number)) {
        newArray.push(number);
        }     
    });

    return newArray;


    
};
// Do not edit below this line
module.exports = removeFromArray;
