//Subtract the Product and Sum of Digits of an Integer

var subtractProductAndSum = function (n) {
    let productDigits = 1;
    let sumDigits = 0;
    let digitArray = n.toString().split('').map(Number);
    for (let digit of digitArray) {
        productDigits *= digit;
        sumDigits += digit;
    }
    return productDigits - sumDigits;
};
