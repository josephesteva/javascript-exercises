const getTheTitles = function(array) {
    return array.map(book => book.title)

    // ALTERNATE method using loop
    // const titleArray =[];
    // for (i=0; i< array.length; i++) {
    //     titleArray.push(array[i].title)
    // }
    // return titleArray
};

// Do not edit below this line
module.exports = getTheTitles;
