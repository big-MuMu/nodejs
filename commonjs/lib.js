console.log('libjs');

exports.hello = 'world';

exports.add = function (a, b) {
    return a + b;
}

// setTimeout(() => {
//     console.log(exports);
// }, 2000)
module.exports.x = {
    a: 1
}

var a = 2;
module.exports = function () {
    return a * 3
}

