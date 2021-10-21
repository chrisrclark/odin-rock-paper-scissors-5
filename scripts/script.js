//Generate 1, 2 or 3 randomly.
function computerPlay(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//To feed computerPlay result to convertToRps
let randomNumber = computerPlay(1,3)

//Return rock, paper or scissors depending on result of computerPlay
function convertToRps() {
    if (randomNumber === 1) {
        return 'rock';
    } else if (randomNumber === 2) {
        return 'paper';
    } else if (randomNumber === 3) {
        return 'scissors';
    }
}

//To feed convertToRps result to rpsRound
let computerSelection = convertToRps();

//Compares computerSelection to playerSelection to create result for round of rps
function rpsRound(computerSelection, playerSelection) {
    if (computerSelection === 'rock' && playerSelection === 'rock') {
            return 'Tie! Play again.';
    }   else if (computerSelection === 'rock' && playerSelection === 'paper') {
            return 'Paper beats rock. You win!'
    }   else if (computerSelection === 'rock' && playerSelection === 'scissors')
    return 'Rock beats scissors. You lose!'
        else if (computerSelection === 'paper' && playerSelection === 'paper') {
            return 'Tie! Play again.';
    }   else if (computerSelection === 'paper' && playerSelection === 'scissors') {
        return 'Scissors beat paper. You win!'
    }   else if (computerSelection === 'paper' && playerSelection === 'rock') {
        return 'Paper beats rock. You lose!'
    }   else if (computerSelection === 'scissors' && playerSelection === 'scissors') {
        return 'Tie! Play again.'
    }   else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        return 'Scissors beat paper. You lose!'
    }   else if (computerSelection === 'scissors' && playerSelection === 'rock') {
        return 'Rock beats paper. You win!'
    }
    }

//This is where the player makes their selection
let playerInput = 'rock';

let playerSelection = playerInput.toLowerCase();

console.log(computerPlay(1, 3));

console.log(convertToRps(computerPlay));

console.log(computerSelection);

console.log(playerSelection);

console.log(rpsRound(computerSelection, playerSelection))