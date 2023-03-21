//Truncate Sentence
var truncateSentence = function (s, k) {
    return s.split(' ').slice(0, k).join('');
};

truncateSentence('What is the solution to this problem', 4);
//truncated
