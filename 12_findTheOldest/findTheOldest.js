const getAge = function (death, birth){

if(!death){
    death = newDate().getFullYear();

}
return death- birth;
}
const findTheOldest = function(people) {
//can check if someone has a death date or not with an if else statement or a shrotened shorthand version
//if they do not have a death date then compare who was born first which is less and then display it 2018<2022
//display the oldest persons name
//finding out which person/ property in the object is the oldest and display their name 
//acess an array 

return people.reduce(oldestPerson,currentPerson) => {
const oldestAge = getAge(Oldest.yearOfBirth, Oldest.yearOfDeath)
}
}

// Do not edit below this line
module.exports = findTheOldest;
