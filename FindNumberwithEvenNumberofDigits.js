//Find Numbers with Even Number of Digits
var findNumbers = function (nums) {
    let counter = 0;
    for (let i = 0; i < nums.length; i++) {
        let numToArray = Array.from(String(nums[i]), Number);
        if (numToArray.length % 2 === 0) {
            counter++;
        }
    }
    return counter;
};
