const leapYears = function(year) {

//    if (year < 0 || typeof year === 'NaN' || typeof year !== 'number') {
//        return 'ERROR';
//    } else if (year % 100 !== 0 && year % 4 === 0) {
//        return true;
//    } else if (year % 100 === 0 && year % 400 === 0) {
//        return true;
//    } else if (year % 100 === 0 && year % 400 !== 0) {
//        return false;
//    } else {
///        return false;
//    }
    return year % 4 === 0 && ( year % 100 !== 0 || year % 400 === 0);
}

// Do not edit below this line
module.exports = leapYears;
