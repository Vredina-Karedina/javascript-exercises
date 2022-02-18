const removeFromArray = function() {
    arr = Array.from(arguments[0]);
    num = Array.from(arguments);
    console.log(num);

//    let i = 1;
//    while (i<num.length) {
//        let j = 0
//        while (j<arr.length) {
//            if (arr[j] === num[i]) {
//                let item = arr[j];
//                arr = arr.filter(item => item !== num[i]);
//            }
//            j++;                   
//        }
//        i++;
//    }
//    return arr;
    return arr.filter(item => !num.includes(item));            
}
// Do not edit below this line
module.exports = removeFromArray;