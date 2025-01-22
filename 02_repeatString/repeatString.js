const repeatString = function(word,times) {
    if(times < 0){
        
        return "ERROR";
    }
    //creates an empty space in between the string outputs
    let string = "";
        
    for(let i=0; i< times; i++){
        //adds /concatenates the word to the string variable
        string += word;

        
    }
    return string;

};

// Do not edit below this line
module.exports = repeatString;
