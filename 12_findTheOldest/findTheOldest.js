const findTheOldest = function(persons) {
    // Gives each person a day of death before sorting, don't like because the people aren't actually dead, but doesn't mutate persons
    const defaultDeathPersons = persons.map(person => {
        const personCopy = {...person}
        if (!personCopy.yearOfDeath) {
            personCopy.yearOfDeath = new Date().getFullYear()
        }
        return personCopy
    })
    
    // original implementation of function, updated persons in real time during sorting but mutated objects so do not like
    // const ageSortedPersons = persons.sort((first, second) => {
        // gives each person day of death just inside of sorting algorithm, mutates persons so do not like
        // if (!first.yearOfDeath) {
        //     first.yearOfDeath = new Date().getFullYear()
        // }
        // if (!second.yearOfDeath) {
        //     second.yearOfDeath = new Date().getFullYear()
        // }
        // another method to give person day of death in sorting algorithm, mutates persons so do not like
        // !first.yearOfDeath && (first.yearOfDeath = new Date().getFullYear())
        // !second.yearOfDeath && (second.yearOfDeath = new Date().getFullYear())
        // return (first.yearOfDeath - first.yearOfBirth) - 
        // (second.yearOfDeath -second.yearOfBirth)
    //     return (first.yearOfDeath - first.yearOfBirth) - 
    //     (second.yearOfDeath -second.yearOfBirth)
    // })
    
    // updated sorting function which uses ternary to substitute date if date does not exist on object without mutating
    const ageSortedPersons = persons.sort((first, second) => {
        return ((first.yearOfDeath ? first.yearOfDeath : new Date().getFullYear()) - first.yearOfBirth) - 
        ((second.yearOfDeath ? second.yearOfDeath : new Date().getFullYear()) -second.yearOfBirth)
    })    

    return ageSortedPersons[persons.length-1]
    // long hand way of sorting, does not account for people without death dates
    // const ageSortedPersons = persons.sort((first, second) => {
    //     if (first.yearOfDeath-first.yearOfBirth > second.yearOfDeath - second.yearOfBirth) {
    //         return -1;
    //     } else {
    //         return 1
    //     }
    // })
};

// Do not edit below this line
module.exports = findTheOldest;
