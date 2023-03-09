var sumFrom1ToN = function (n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
};

var similarPairs = function (words) {
    // let sameWord = new Set();
    let appearances = {};
    for (let i = 0; i < words.length; i++) {
        let letterArray = [];
        let wordArray = words[i].split('');
        // console.log(wordArray);
        let sameWord = new Set(wordArray);
        // console.log(sameWord);
        for (let letter of sameWord) {
            // debugger;
            letterArray.push(letter);
        }
        letterArray.sort();
        // debugger;
        let sanitizedWord = letterArray.join('');
        // console.log(sanitizedWord);
        if (!appearances[sanitizedWord]) {
            appearances[sanitizedWord] = 1;
        } else {
            appearances[sanitizedWord] += 1;
        }
    }
    let sum1 = 0;
    for (let key of Object.keys(appearances)) {
        sum1 += sumFrom1ToN(appearances[key] - 1);
    }
    return sum1;
};

similarPairs(['aba', 'aabb', 'abcd', 'bac', 'aabc']);

var sumFrom1ToN = function (n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
};
var similarPairs = function (words) {
    let appearances = {};
    words.forEach((word) => {
        let sanitizedWord = Array.from(new Set(word.split('')))
            .sort()
            .join('');
        appearances[sanitizedWord] = appearances[sanitizedWord]
            ? appearances[sanitizedWord] + 1
            : 1;
    });
    return Object.keys(appearances).reduce((total, key) => {
        return (
            total +
            new Array(appearances[key] - 1)
                .fill(0)
                .map((x, i) => i)
                .reduce((prev, current) => prev + current + 1, 0)
        );
    }, 0);
};
