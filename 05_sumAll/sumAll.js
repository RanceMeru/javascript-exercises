const sumAll = function(num1, num2) {
    

if(num1 <=0 ||um2 <=0){
    return "Both numbers must be positive";
}

//make sure we know which is bigger and smaller

const start = Math.min(num1, num2);
const end = Math.max(num1, num2);

let finalSum = 0;
for(let i = start; i <= end; i++){
    sum+=i;

}

//make sure that the numbers are positive and not odd
return finalSum();

};

// Do not edit below this line
module.exports = sumAll;
