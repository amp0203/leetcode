var addDigits = function (num) {
    let sum = 0;
    let digits = num.toString().split('');
    for (let i = 0; i < digits.length; i++) {
        sum += +digits[i];
    }
    return sum;
};
