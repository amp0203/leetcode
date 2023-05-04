var isPalindrome = function (s) {
    s = s.replace(/[^a-zA-Z0-9 ]/g, '').replace(/\s+/g, '');
    function checkifPalindrome(s) {
        return s == s.split('').reverse().join('');
    }
    return checkifPalindrome(s.toLowerCase());
};
