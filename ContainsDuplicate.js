var containsDuplicate = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                return true;
            }
        }
    }

    return false;
};

var containsDuplicate_2 = function (nums) {
    let set = new Set(nums);

    return set.size !== nums.length;
};

// var containsDuplicate_3 = function (nums) {
//     let map = {};

//     for (let i = 0; i < nums.length; i++) {
//         if (map[nums[i]]) {
//             return true;
//         }
//         map[nums[i]] = true;
//     }

//     return false;
// };
