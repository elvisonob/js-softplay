// do not change these lines

function reset() {
    adults = 0
    children = 0
}

let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.


function occupancy() {
    return {

        adults: adults,
        children: children
    }

}

function enter(numAdults, numChildren) {

    if (numAdults < numChildren) {
        return false
    }


    adults = adults + numAdults
    children = children + numChildren
    return true

}

function leave(numAdults, numChildren) {

    const adultsLeft = adults - numAdults
    const childrenLeft = children - numChildren


    if (adultsLeft === 0 && childrenLeft > 0) {
        return false
    }

    if (numChildren > 0 && numAdults === 0) {
        return false
    }

    if (numChildren > children) {
        return false
    }


    adults = adults - numAdults
    children = children - numChildren
    return true

}



// TODO: Change the undefined values below to the name of your functions
module.exports = {
    enter: enter,
    leave: leave,
    occupancy: occupancy,
    reset: reset
}