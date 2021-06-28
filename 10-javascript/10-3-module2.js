// import add, { print as printMessage } from './10-3-module.js';
// console.log(add(1, 2));
// printMessage();

import * as cal from './10-3-module.js';
console.log(cal.default(1, 2));
cal.print();