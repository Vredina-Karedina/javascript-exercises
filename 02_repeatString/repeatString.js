const repeatString = function (string, num) {
    let received = '';
    if (num > 0) {
        for (let i=1; i<=num; i++) {
            received = received.concat('', string);
        }
        return received;
    } else if (num === null || num === 0 || num === '') {
        return '';
    } else {
        return 'ERROR';
    }
}

// Do not edit below this line
module.exports = repeatString;
