// do not change these lines

function reset() {
    adults = 0
    children = 0
}

let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
let counter = 0

function entry(numChildren, numAdults) {
    adults = numAdults + adults
    children = numChildren + children
    if (children > adults) {
        return false
    } else {
        return true
    }


}




// TODO: Change the undefined values below to the name of your functions
module.exports = {
    enter: entry,
    leave: undefined,
    occupancy: undefined,
    reset: reset
}