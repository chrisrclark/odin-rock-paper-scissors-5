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
            return 'Tie!'; 
    }   else if (computerSelection === 'rock' && playerSelection === 'paper') {
            return 'You win!'
    }   else if (computerSelection === 'rock' && playerSelection === 'scissors')
    return 'You lose!'
        else if (computerSelection === 'paper' && playerSelection === 'paper') {
            return 'Tie!';
    }   else if (computerSelection === 'paper' && playerSelection === 'scissors') {
        return 'You win!'
    }   else if (computerSelection === 'paper' && playerSelection === 'rock') {
        return 'You lose!'
    }   else if (computerSelection === 'scissors' && playerSelection === 'scissors') {
        return 'Tie!'
    }   else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        return 'You lose!'
    }   else if (computerSelection === 'scissors' && playerSelection === 'rock') {
        return 'You win!'
    }
    }

//Increments score depending on result.
function game(resultForGame) {
    if (resultForGame === 'You win!') {
        return playerScore + 1;
    }   else if (resultForGame === 'You lose!') {
        return computerScore + 1;
   }
}

let playerScore = 0;

let computerScore = 0;

//This is where the player makes their selection

let playerInput = 'rock';

let playerSelection = playerInput.toLowerCase();

let resultForGame = rpsRound(computerSelection, playerSelection);

console.log(computerPlay(1, 3));

console.log(convertToRps(computerPlay));

console.log(computerSelection);

console.log(playerSelection);

console.log(rpsRound(computerSelection, playerSelection));

console.log(resultForGame);

console.log(game());

