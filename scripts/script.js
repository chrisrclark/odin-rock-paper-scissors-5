//Generate 1, 2 or 3 randomly.
function computerPlay(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Return rock, paper or scissors depending on result of computerPlay
function convertToRPS() {
    if (computerPlay === 1) {
        return 'rock';
    } else if (computerPlay === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

console.log(computerPlay(1, 3));

console.log(convertToRPS);