"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
// Generic - the difference here is that it logs the type that was passed
function identityThree(val) {
    return val;
}
// the same:
function identityFour(val) {
    return val;
}
identityFour({});
