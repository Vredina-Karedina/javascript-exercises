const removeFromArray = function(arr, num) {
    arr = Array.from(arguments[0]);
    num = Array.from(arguments);

    let i = 1;
    while (i<num.length) {
        let j = 0
        while (j<arr.length) {
            if (arr[j] === num[i]) {
                let item = arr[j];
                arr = arr.filter(item => item !== num[i]);
            }
            j++;                   
        }
        i++;
    }
    return arr;             
}
// Do not edit below this line
module.exports = removeFromArray;