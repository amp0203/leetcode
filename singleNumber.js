function singleNumber(nums) {
    debugger;
    nums.sort(function (a, b) {
        return b - a;
    });
    var lastNum = nums[nums.length - 1];
    for (let i = 0; i < nums.length - 2; i += 2) {
        if (nums[i] !== nums[i + 1]) {
            return nums[i];
        }
    }
    return lastNum;
}

singleNumber([
    -336, 513, -560, -481, -174, 101, -997, 40, -527, -784, -283, -336, 513,
    -560, -481, -174, 101, -997, 40, -527, -784, -283, 354,
]);

singleNumber([4, 1, 2, 1, 2]);
singleNumber([2, 2, 1]);

var singleNumber = function (nums) {
    let appearances = {};
    for (let i = 0; i < nums.length; i++) {
        if (appearances[nums[i]] === undefined) {
            appearances[nums[i]] = 1;
        } else {
            appearances[nums[i]] += 1;
        }
    }
    // console.log('test', appearances);
    for (let key of Object.keys(appearances)) {
        if (appearances[key] == 1) {
            return key;
        }
    }
};
singleNumber([
    -336, 513, -560, -481, -174, 101, -997, 40, -527, -784, -283, -336, 513,
    -560, -481, -174, 101, -997, 40, -527, -784, -283, 354,
]);
