const palindromes = function (string) {

    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz123456789';

    const simplifiedString = string
    .toLowerCase()
    .split('')
    .filter((character) => alphanumerical.includes(character))
    .join('');
//need to make it where even with numbers in the string it can be a plaindrome
const reverseNewString = simplifiedString.split('').reverse().join('');

return simplifiedString === reverseNewString;
};
// Do not edit below this line
module.exports = palindromes;
