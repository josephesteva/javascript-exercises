const reverseString = function(string) {
    const reverseArray = []
    for (i=0; i < string.length; i++) {
        reverseArray.unshift(string[i])
    }
    return reverseArray.join('')
};

// Do not edit below this line
module.exports = reverseString;
