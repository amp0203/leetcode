var addDigits = function (num) {
    let output = num.toString();
    while (output.length > 1) {
        output = output
            .split('')
            .map(Number)
            .reduce((a, b) => a + b)
            .toString();
    }
    return output;
};

addDigits(38);
