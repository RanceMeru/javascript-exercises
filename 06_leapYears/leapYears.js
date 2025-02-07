const leapYears = function(givenYear) {
    //created  new variables that represent our conditions
    const divideByFour = givenYear % 4 ===0;
    const divideByHundred = givenYear % 100 === 0;
    const divideByFourhundred = givenYear % 400 === 0;
    //returns true if integer is divisible by 4 or 400
if(divideByFour &&(!divideByHundred || divideByFourhundred)){
    return true;

}
else{
    return false
}
};

// Do not edit below this line
module.exports = leapYears;
