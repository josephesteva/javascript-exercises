const palindromes = function (string) {
    let stringToReverse = string.replace(/[^\w\s\']|_/g, "").replace(/ /g, '').toLowerCase();
    const reverseStringArray = [];
    for (i=0; i < stringToReverse.length; i++) {
        reverseStringArray.unshift(stringToReverse[i])
    }
    const reverseString = reverseStringArray.join('');
    return stringToReverse === reverseString
};

// Do not edit below this line
module.exports = palindromes;
