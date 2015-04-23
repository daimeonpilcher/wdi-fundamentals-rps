////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay(); 
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove === computerMove) {
        winner = 'tie'
    }
    if ((playerMove === 'rock') && (computerMove === 'scissors')) {
        winner = 'player';
    }
    if ((playerMove === 'rock') && (computerMove === 'paper')) {
        winner = 'computer';
    }
    if ((playerMove === 'paper') && (computerMove === 'scissors')) {
        winner = 'computer';
    }
    if ((playerMove === 'paper') && (computerMove === 'rock')) {
        winner = 'player';
    }
    if ((playerMove === 'scissors') && (computerMove === 'rock')) {
        winner = 'computer';
    }
    if ((playerMove === 'scissors') && (computerMove === 'paper')) {
        winner = 'player';
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    while ((playerWins <= 4) && (computerWins <= 4)){
    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
    var winner = getWinner(playerMove, computerMove);
    console.log ('Player plays '+playerMove);
    console.log ('Computer plays '+computerMove);
    if (winner === 'player') {
            playerWins += 1;
        }
    if (winner === 'computer') {
            computerWins += 1;
        }
    if (playerWins === 5) {
        console.log("player");
    }
    if (computerWins === 5) {
        console.log("computer");
    }
    console.log( [playerWins, computerWins]);
}}

function playTo(x) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    while ((playerWins <= x - 1) && (computerWins <= x - 1)){
    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
    var winner = getWinner(playerMove, computerMove);
    console.log ('Player plays '+playerMove);
    console.log ('Computer plays '+computerMove);
    if (winner === 'player') {
            playerWins += 1;
        }
    if (winner === 'computer') {
            computerWins += 1;
        }
    if (playerWins === x) {
        console.log("player");
    }
    if (computerWins === x) {
        console.log("computer");
    }
    console.log( [playerWins, computerWins]);
}}

