var mathFloat = require('./index');

console.log('mathFloat.add(0.1, 0.2) = ' + mathFloat.add(0.1, 0.2));
console.log('0.1 + 0.2 = ' + (0.1 + 0.2) + '\n');

console.log('mathFloat.sub(0.3, 0.1, 0.2) = ' + mathFloat.sub(0.3, 0.1, 0.2));
console.log('0.3 - 0.1 - 0.2 = ' + (0.3 - 0.1 - 0.2) + '\n');

console.log('mathFloat.multi(0.1, 0.2) = ' + mathFloat.multi(0.1, 0.2));
console.log('0.1 * 0.2 = ' + (0.1 * 0.2) + '\n');

var arr = [0.1, 0.2, 0.3, 0.4, 0.5];
console.log(mathFloat.add.apply(null, arr) + '\n');

var arr_1 = [1, 0.1, 0.2, 0.3, 0.4, 0.5];
console.log(mathFloat.sub.apply(null, arr_1));
