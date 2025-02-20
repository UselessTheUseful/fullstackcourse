console.log("Hello, Node.js!");

const math = require('./math');
const stringUtils = require('./stringUtils');
const dateUtils = require('./dateUtils');

console.log(math.add(5, 6, 7));
console.log(stringUtils.reverseString("reversed"));
console.log(dateUtils.currentDate());
