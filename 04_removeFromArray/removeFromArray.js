const removeFromArray = function(array) {
    let returnArray = [...array]
    for (i=1; i < arguments.length; i++) {
        const filteredArray = returnArray.filter((item) => item !== arguments[i])
        returnArray = filteredArray
    }
    return returnArray
};

// Do not edit below this line
module.exports = removeFromArray;
