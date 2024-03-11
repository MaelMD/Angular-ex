"use strict";
function concatenateStrings(...strings) {
    return strings.reduce((accumulator, current) => accumulator + " " + current);
}
function maxNumber(...nums) {
    return Math.max(...nums);
}
