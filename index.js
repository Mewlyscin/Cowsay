const information = require('./information.js');
const userInfo = require('./information.js');

let cowsay = require("cowsay");

console.log(cowsay.say({
    text: `${information.userName}, ${information.campus}`,
    e:"oO",
    T: "U",
}));