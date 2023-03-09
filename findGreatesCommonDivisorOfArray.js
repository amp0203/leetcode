var findGCD = function (nums) {
    let arr = [];
    let maxDiv = 0;

    let minNumber = Math.min(...nums);
    let maxNumber = Math.max(...nums);
    for (let i = 1; i <= minNumber; i++) {
        if (minNumber % i === 0 && maxNumber % i === 0) {
            arr.push(i);
        }
    }
    for (let j = 0; j < arr.length; j++) {
        maxDiv = Math.max(maxDiv, arr[j]);
    }
    return maxDiv;
    // return Math.max(...arr);
};

var findGCD = function (nums) {
    // let maxDiv = 0;

    let minNumber = Math.min(...nums);
    let maxNumber = Math.max(...nums);
    for (let i = minNumber; i >= 1; i--) {
        if (minNumber % i === 0 && maxNumber % i === 0) {
            return i;
        }
    }
    // for (let j = 0; j < arr.length; j++) {
    //     maxDiv = Math.max(maxDiv, arr[j]);
    // }
    // return maxDiv;
    // return Math.max(...arr);
};
