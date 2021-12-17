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

function enter(numChildren, numAdults) {

    if (numChildren > numAdults) {
        return false

    }

    children = numChildren + children
    adults = numAdults + adults
    return true
}

function leave(numChildren, numAdults) {

    adults = numAdults - adults
    children = numChildren - children

    if (numChildren < numAdults || numAdults < numChildren) {
        return false
    }

    if (numAdults > adults || numChildren > children) {
        return false
    }

    adults = numAdults - adults
    children = numChildren - children
    return true
}

function occupancy(numChildren, numAdults) {
    let count = {
        'adults': adults,
        'children': children
    }
    numChildren = count.children
    numAdults = count.adults
    return count

}





// TODO: Change the undefined values below to the name of your functions
module.exports = {
    enter: enter,
    leave: leave,
    occupancy: occupancy,
    reset: reset
}