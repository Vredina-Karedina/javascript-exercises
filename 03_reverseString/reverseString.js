const reverseString = function(string) {
//    const splitedString = Array.from(string);
//    let reversed = '';
//    let i = string.length - 1;
//    while (i>=0) {
//        reversed = reversed + splitedString[i];
//        i--;
//    }
//    return reversed;

    return string.split('').reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;
