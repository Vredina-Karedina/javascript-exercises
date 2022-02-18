const sumAll = function(first, last) {    
    let result = 0;
    
    if (first < 0 || last < 0) {
        return 'ERROR';
    } else if (!Number.isInteger(first) || !Number.isInteger(last)) {
        return 'ERROR';
    } else if (first < last) { 
        for (let i=arguments[0]; i<=arguments[1]; i++) {
            result += i;
        }
        return result;
    } else if (first > last) {
        for (let i=arguments[1]; i<=arguments[0]; i++) {
            result += i;
        }
        return result;
    }
};

// Do not edit below this line
module.exports = sumAll;
