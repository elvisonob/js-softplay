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
    adults = numAdults + adults
    children = numChildren + children
    if (children > adults) {
        return false
    } else {
        return true
    }


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

}

function occupancy(numChildren, numAdult) {
    let count = {
        'adults': 0,
        'children': 0
    }
    numChildren = count.children
    numAdult = count.adults
    return count

}





// TODO: Change the undefined values below to the name of your functions
module.exports = {
    enter: enter,
    leave: leave,
    occupancy: occupancy,
    reset: reset
}