module.exports = function(playerAction) {
    const random = Math.random() * 3;

    let computerAction = '';
    if (random < 1) {
        computerAction = 'rock';
    } else if (random > 2) {
        computerAction = 'scissors';
    } else {
        computerAction = 'paper';
    }

    if (playerAction === computerAction) {
        console.log('平局');
        return 0;
    } else if (
        (playerAction === 'rock' && computerAction === 'paper') ||
        (playerAction === 'paper' && computerAction === 'scissors') ||
        (playerAction === 'scissors' && computerAction === 'rock')
    ) {
        console.log('你输了')
        return 1;
    } else {
        console.log('你赢了')
        return -1;
    }
}