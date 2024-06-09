const fibonacci = function(number) {
    let total = 1;
    let olderPrior = 0 
    let mostRecent = 1;
    for (i = 1; i < +number; i++) {
        total = mostRecent + olderPrior
        console.log(total);
        olderPrior = mostRecent
        mostRecent = total
    }
    if (number == 0) return 0;
    if (number < 0) {
        return "OOPS"
    }
    return total
};

// Do not edit below this line
module.exports = fibonacci;
