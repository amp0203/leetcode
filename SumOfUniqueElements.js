var sumOfUnique = function (nums) {
    let appearances = {};
    let sumUnique = 0;
    // let uniqueNumber = [];
    for (let i = 0; i < nums.length; i++) {
        if (appearances[nums[i]] === undefined) {
            appearances[nums[i]] = 1;
        } else {
            appearances[nums[i]] += 1;
        }
    }
    for (let key of Object.keys(appearances)) {
        // debugger;
        if (appearances[key] == 1) {
            sumUnique += Number(key);
        }
    }
    return sumUnique;
};

sumOfUnique([1, 2, 3, 4, 5]);
sumOfUnique([1, 2, 2, 5, 5, 4]);
