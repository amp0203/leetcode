//Count the Number of Consistent Strings
var countConsistentStrings = function (allowed, words) {
    let consistent = words.filter((word) => word.split(''));
    let consistentLength = consistent.every();
    // console.log('consistent', consistent);
};

countConsistentStrings('ab', ['ad', 'bd', 'aaab', 'baa', 'badab']);
