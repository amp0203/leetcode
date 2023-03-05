var sumOddLengthSubarrays = function (arr) {
    let sumTotal = 0;
    // let oddArray = [];
    for (let n = 1; n <= arr.length; n = n + 2) {
        for (let i = 0; i + n <= arr.length; i++) {
            for (let s = i; s < i + n; s++) {
                sumTotal += arr[s];
            }
        }
    }
    return sumTotal;
};

sumOddLengthSubarrays([1, 4, 2, 5, 3]);

var sumOddLengthSubarrays = function (arr) {
    let sumTotal = 0;
    for (let n = 1; n <= arr.length; n = n + 2) {
        for (let i = 0; i + n <= arr.length; i++) {
            for (let s = i; s < i + n; s++) {
                sumTotal += arr[s];
            }
        }
    }
    return sumTotal;
};
