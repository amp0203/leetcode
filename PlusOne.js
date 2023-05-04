var plusOne = function (digits) {
    return (BigInt(digits.join('')) + 1n).toString().split('').map(Number);
};
plusOne([4, 5, 6]);

var plusOne = function (digits) {
    const number = +digits.join('');
    const numOne = number + 1;
    const arr = Array.from(String(numOne));
    return arr;
};
