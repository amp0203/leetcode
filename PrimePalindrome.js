var primePalindrome = function (n) {
    while (true && n <= 9999900) {
        console.log('n: ', n);
        if (isPrime(n) && isPalindrome(n)) {
            return n;
        }
        n++;
    }
};
const isPrimeCache = {};
const isPalindromeCache = {};

function isPrime(num) {
    if (num <= 1) {
        return false;
    }

    if (num in isPrimeCache) {
        return isPrimeCache[num];
    }

    for (let i = 2; i < num / 2 + 1; i++) {
        if (num % i === 0) {
            isPrimeCache[num] = false;
            return false;
        }
    }

    isPrimeCache[num] = true;
    return true;
}

function isPalindrome(num) {
    if (num in isPalindromeCache) {
        return isPalindromeCache[num];
    }
    let isPalin = num == num.toString().split('').reverse().join('');
    isPalindromeCache[num] = isPalin;
    return isPalin;
}

primePalindrome(9989900);

function isPrime2(num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i < num / 2 + 1; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

function isPalindrome2(num) {
    return num == num.toString().split('').reverse().join('');
}

const n = 3768674;
let start = performance.now();
isPrime2(n);
console.log('isPrime2: ', performance.now() - start);
start = performance.now();
isPalindrome2(n);
console.log('isPalindrome2: ', performance.now() - start);
