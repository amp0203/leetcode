//Separate the Digits in an Array

var separateDigits = function (nums) {
    let arr = [];

    for (let i = 0; i < nums.length; i++) {
        let ans = nums[i];
        let digits = ans.toString().split('').map(Number);
        // console.log('so:', digits);
        arr = arr.concat(digits);
    }
    return arr;
};

console.log('digitNumber1:', separateDigits([13, 25, 83, 77]));
console.log('digitNumber2:', separateDigits([7, 1, 3, 9]));

//Maximum Number of Words Found in Sentences

var mostWordsFound = function (sentences) {
    let mostCount = 0;
    for (let i = 0; i < sentences.length; i++) {
        let words = sentences[i];
        let array = words.split(' ');
        // console.log(array);
        if (array.length > mostCount) {
            mostCount = array.length;
        }
    }
    return mostCount;
};

console.log(
    'dem so:',
    mostWordsFound([
        'alice and bob love leetcode',
        'i think so too',
        'this is great thanks very much',
    ])
);

//find max number
let arr = [1, 2, 5, 7, 8, 0];
function findMaxNumber(array) {
    let maxNumber = 0;
    for (let number of array) {
        if (number > maxNumber) {
            maxNumber = number;
        }
    }
    return maxNumber;
}

console.log('max1:', findMaxNumber(arr));
console.log('max2:', findMaxNumber([20, 78, 89]));
console.log('max3:', findMaxNumber([23, 888, 5, 7, 2, 0, 7]));

// sum all elements in an array
function sumArray(array) {
    let sum = 0;
    for (let number of array) {
        sum += number;
    }
    return sum;
}

//How Many Numbers Are Smaller Than the Current Number
let case1 = [8, 1, 2, 2, 3];
var smallerNumbersThanCurrent = function (nums) {
    const sorted = [...nums].sort((a, b) => a - b);
    console.log(sorted);
    return nums.map((num) => sorted.indexOf(num));
};
smallerNumbersThanCurrent(case1);

var smallerNumbersThanCurrent2 = function (nums) {
    let finalArray = [];
    let counter = 0;
    for (let number of nums) {
        debugger;
        for (let element of nums) {
            if (number > element) {
                counter++;
            }
        }
        finalArray.push(counter);
        counter = 0;
    }
    return finalArray;
};
smallerNumbersThanCurrent2([8, 1, 2, 2, 3]);
//Difference Between Element Sum and Digit Sum of an Array
nums = [1, 15, 6, 3];
var differenceOfSum = function (nums) {
    let arr = [];
    let elementSum = 0;
    let digitSum = 0;
    for (let number of nums) {
        elementSum += number;
        // console.log(elementSum);
        let digits = number.toString().split('').map(Number);
        arr = arr.concat(digits);
        // console.log('so:', digits);
        // console.log(arr);
    }
    for (let digit of arr) {
        digitSum += digit;
        // console.log(digitSum);
    }
    return Math.abs(elementSum - digitSum);
};

var differenceOfSum2 = function (nums) {
    let elementSum = 0;
    let digitSum = 0;
    for (let number of nums) {
        elementSum += number;
        // console.log(elementSum);
        let digits = number.toString().split('').map(Number); // number = 15, digits = [1, 5]
        for (let digit of digits) {
            digitSum += digit;
        }
    }
    return Math.abs(elementSum - digitSum);
};
differenceOfSum2(nums);
// console.log('ket qua 1:', differenceOfSum(nums));
// console.log('ket qua 2:', differenceOfSum([1, 2, 3, 4]));

//Maximum subarray
var maxSubArray = (nums) => {
    let maxSum = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < nums.length; i++) {
        let currentSum = 0;

        for (let j = i; j < nums.length; j++) {
            currentSum += nums[j];
            maxSum = Math.max(maxSum, currentSum);
        }
    }

    return maxSum;
};
maxSubArray([-1]);
maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

//Find First Palindromic String in the Array

var firstPalindrome = function (words) {
    for (let i = 0; i < words.length; i++) {
        let palindrome = words[i];
        palindrome = words[i].split('').reverse().join('');
        if (palindrome == words[i]) {
            return palindrome;
        }
    }
    return '';
};
console.log('palindromeArray:', firstPalindrome(['dad', 'mom', 'abc']));

//Palindrome Number
var isPalindrome = function (x) {
    let y = x;
    let palinNumber = y.toString().split('').reverse().join('');
    // console.log(palinNumber);
    if (x == palinNumber) {
        return true;
    }
    return false;
};

console.log('ket qua 1', isPalindrome(121));
console.log('ket qua 2', isPalindrome(10));

//Palindrome Linked List
// var isPalindrome = function (head) {
//     let number =
//     let palinNum = number.toString().split('').reverse().join('');
//     // console.log(palinNum);
//     if (number == palinNum) {
//         return true;
//     }
//     return false;
// };
// console.log('ket qua 1', isPalindrome([1, 2, 2, 1]));
// console.log('ket qua 2', isPalindrome([1, 0]));

//Sort the People
var sortPeople = function (names, heights) {
    // const sortedHeights = [...heights].sort((a, b) => b - a);
    // // console.log('sortedHeights:', sortedHeights);
    // let sortedUsers = {};
    let n = names.length;
    let users = [];
    for (let i = 0; i < n; i++) {
        let user = {
            name: names[i],
            height: heights[i],
        };
        users.push(user);
    }
    users.sort((a, b) => b.height - a.height);
    // console.log(users);
    let sortedUsers = users.map((c, index) => {
        let user = users[index];
        if (c === user) {
            console.log(user);
            console.log('okkkk');
        }
        return c.name;
    });
    return sortedUsers;
    // console.log(sortedUsers);
};
sortPeople(['Mary', 'John', 'Emma'], [180, 165, 170]);

var sortPeople2 = function (names, heights) {
    let n = names.length;
    let users = names.map(function (name, index) {
        return { name: name, height: heights[index] };
    });

    console.log('users: ', users);
    users = users.sort((a, b) => b.height - a.height);
    // console.log(users);
    let sortedUsers = users.map((c) => c.name);
    return sortedUsers;
    // console.log(sortedUsers);
};
sortPeople2(['Mary', 'John', 'Emma'], [180, 165, 170]);

var sortPeople = function (names, heights) {
    return names
        .map((name, index) => {
            return {
                name: name,
                height: heights[index],
            };
        })
        .sort((a, b) => b.height - a.height)
        .map((u) => u.name);
};

var sortPeople3 = function (names, heights) {
    return names
        .map((name, index) => {
            return {
                name: name,
                height: heights[index],
            };
        })
        .sort((a, b) => b.height - a.height)
        .map((user) => {
            return `Name:${user.name},Height:${user.height}`;
        })
        .join(';');
};

console.log('user:', sortPeople3(['Mary', 'John', 'Emma'], [180, 165, 170]));

//Richest Customer Wealth
var maximumWealth = function (accounts) {
    let custumerWealth = -1;
    for (let i = 0; i < accounts.length; i++) {
        let wealthArray = accounts[i];
        let wealthSum = 0;
        for (let j = 0; j < wealthArray.length; j++) {
            wealthSum += wealthArray[j];
        }
        if (wealthSum > custumerWealth) {
            custumerWealth = wealthSum;
        }
    }
    return custumerWealth;
};
console.log(
    'ket qua:',
    maximumWealth([
        [1, 5],
        [7, 3],
        [3, 5],
    ])
);

var maximumWealth2 = function (accounts) {
    return accounts
        .map(
            (account) => account.reduce((total, current) => total + current),
            0
        )
        .reduce((prev, current) => {
            return current > prev ? current : prev;
        }, 0);
};

//Length of Last Word
var lengthOfLastWord = function (s) {
    s = s.trim().split(' ');
    return s[s.length - 1].length;
};

//Search Insert Position
var searchInsert = function (nums, target) {
    let i = 0;
    while (i < nums.length) {
        if (nums[i] >= target) {
            break;
        }
        i++;
    }
    return i;
};

var searchInsert = function (nums, target) {
    let pivot = Math.floor(nums.length / 2);
    if (nums[pivot] == target) {
        return nums[pivot];
    } else if (nums[pivot] < target) {
    }
};
