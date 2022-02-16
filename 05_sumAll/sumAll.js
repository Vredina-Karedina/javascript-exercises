const sumAll = function(first, last) {    
    let result = 0;
    
    if (first < 0 || last < 0) {
        result = 'ERROR';
    } else if (typeof first === 'NaN' || typeof last === 'NaN'|| typeof first !== 'number' || typeof last !== 'number') {
        result = 'ERROR';
    } else if (first < last) { 
        for (let i=arguments[0]; i<=arguments[1]; i++) {
            result = result + i;
        }
    } else if (first > last) {
        for (let i=arguments[1]; i<=arguments[0]; i++) {
            result = result + i;
        }
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
