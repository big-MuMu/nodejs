console.log('start lib');
const lib = require('./lib');
console.log('end lib', lib); // lib 文件如果没有任何 exports,则 lib 变量为 {},否则导出的是对象

// lib.minus = function (a, b) {
//     return a - b;
// }
// console.log(lib.mutiply())