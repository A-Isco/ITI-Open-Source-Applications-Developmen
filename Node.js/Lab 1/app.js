const { addNumbers, subNumbers, multiplyNumbers } = require("./calculate");
const { calculateAge } = require("./age");

let sum = addNumbers(1, 2);
let age = calculateAge("Luca", 1990);

console.log(age);
