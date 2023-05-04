var isValid = function (s) {
    let pArray = [];

    for (let character of s) {
        if (character === '(' || character === '{' || character === '[') {
            pArray.push(character);
        } else if (character === ')' && pArray.pop() !== '(') {
            return false;
        } else if (character === '}' && pArray.pop() !== '{') {
            return false;
        } else if (character === ']' && pArray.pop() !== '[') {
            return false;
        }
    }

    return pArray.length === 0;
};
