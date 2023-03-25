var plusOne = function (digits) {
    return (+digits.join('') + 1).toString().split('').map(Number);
};
plusOne([4, 5, 6]);
