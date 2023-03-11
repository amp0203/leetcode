//Number of Steps to Reduce a Number to Zero
var numberOfSteps = function (num) {
    let count = 0;
    for (; num; count++)
        if (num % 2) {
            num = num - 1;
        } else {
            num = num / 2;
        }
    return count;
};
