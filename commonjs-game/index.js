const game = require('./lib');
// var playerAction = process.argv[process.argv.length - 1];
// game(playerAction)

let count = 0;
process.stdin.on('data', e => {
    console.log(e.toString().trim());
    const playerAction = e.toString().trim();

    const result = game(playerAction);

    if (result === -1) {
        count++;
    }

    if (count > 3) {
        console.log('不玩了');
        process.exit(); // 杀掉进程
    }
})