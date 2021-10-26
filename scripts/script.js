//computerPlay selects a random number and converts it to 'rock', 'paper', or 'scissors'
function computerPlay() {
   let randomNumber = Math.random()
   if (randomNumber < .34) {
       return 'rock';
   }    else if (randomNumber < .67) {
       return 'paper';
   }    else {
       return 'scissors';
   }
}

//playRound determines if the playerSelection or computerSelection wins. 
function playRound(playerSelection, computerSelection) {
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

//game takes inputs from the player, increments score and declares a winner after 5 rounds.
function game() {
    let playerScore = 0;
    let computerScore = 0;
    
    let playerInput = prompt('Enter rock, paper, or scissors.');
    let playerSelection = playerInput;
    let computerSelection = computerPlay();

    let gameResult1 = playRound(playerSelection, computerSelection);
    if (gameResult1 === 'You win!') {
        playerScore = playerScore + 1;
        alert('You win!')
    }   else if (gameResult1 === 'You lose!') {
        computerScore = computerScore + 1;
        alert('You lose!')
    }   else {
        alert('Tie!')
}
        console.log('Round 1 Score')
        console.log(computerScore);
        console.log(playerScore);

    playerInput = prompt('Enter rock, paper, or scissors.');
    playerSelection = playerInput;
    computerSelection = computerPlay();

    let gameResult2 = playRound(playerSelection, computerSelection);
    if (gameResult2 === 'You win!') {
        playerScore = playerScore + 1;
        alert('You win!')
    }   else if (gameResult1 === 'You lose!') {
        computerScore = computerScore + 1;
        alert('You lose!')
    }   else {
        alert('Tie!')
    }

        console.log('Round 2 Score')
        console.log(computerScore);
        console.log(playerScore);

    playerInput = prompt('Enter rock, paper, or scissors.');
    playerSelection = playerInput;
    computerSelection = computerPlay();

    let gameResult3 = playRound(playerSelection, computerSelection);
    if (gameResult3 === 'You win!') {
        playerScore = playerScore + 1;
        alert('You win!')
    }   else if (gameResult1 === 'You lose!') {
        computerScore = computerScore + 1;
        alert('You lose!')
    }   else {
        alert('Tie!')
    }

        console.log('Round 3 Score')
        console.log(computerScore);
        console.log(playerScore);

    playerInput = prompt('Enter rock, paper, or scissors.');
    playerSelection = playerInput;
    computerSelection = computerPlay();
        
    let gameResult4 = playRound(playerSelection, computerSelection);
    if (gameResult4 === 'You win!') {
        playerScore = playerScore + 1;
        alert('You win!')
    }   else if (gameResult1 === 'You lose!') {
        computerScore = computerScore + 1;
        alert('You lose!')
    }   else {
        alert('Tie!')
    }

        console.log('Round 4 Score')
        console.log(computerScore);
        console.log(playerScore);

    playerInput = prompt('Enter rock, paper, or scissors.');
    playerSelection = playerInput;
    computerSelection = computerPlay();

    let gameResult5 = playRound(playerSelection, computerSelection);
    if (gameResult5 === 'You win!') {
        playerScore = playerScore + 1;
        alert('You win!')
    }   else if (gameResult1 === 'You lose!') {
        computerScore = computerScore + 1;
        alert('You lose!')
    }   else {
        alert('Tie!')
    }

        console.log('Round 5 Score')
        console.log(computerScore);
        console.log(playerScore);

    if (+playerScore > +computerScore) {
         alert('Victory!')
    }   else if (+computerScore > +playerScore) {
        alert('Defeat!')
     }   else if (+computerScore === +playerScore) 
        alert('Tie game!')
}

const playerInput = '';
const playerSelection = playerInput.toLowerCase();
const computerSelection = computerPlay();

game();