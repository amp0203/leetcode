//Count the Number of Consistent Strings
var countConsistentStrings = function (allowed, words) {
    return words.filter((word) =>
        word.split('').every((word) => allowed.split('').includes(word))
    ).length;
};

countConsistentStrings('ab', ['ad', 'bd', 'aaab', 'baa', 'badab']);
