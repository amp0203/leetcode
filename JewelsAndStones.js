//Jewels and Stones
var numJewelsInStones = function (jewels, stones) {
    let count = 0;
    let jewelsArray = jewels.split('');
    let stonesArray = stones.split('');
    for (let i = 0; i < jewelsArray.length; i++) {
        let jewel = jewelsArray[i];
        for (let j = 0; j < stonesArray.length; j++) {
            if (jewel === stonesArray[j]) {
                count++;
            }
        }
    }
    return count;
};

numJewelsInStones('aA', 'aAAbbbb');

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
