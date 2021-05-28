// --------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------
const { config } = require('process');
const config2 = require('./config2');
const config3 = require('./config3');
const f = require('./fun');
const f2 = require('./f2');

console.log('   node ------------------ ok');
console.log(config2);
console.log(config3);
console.log(f(2, 3));
console.log(config2.f(2, 3));
console.log(f2(2));
