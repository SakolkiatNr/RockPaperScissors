// Function that return the computer choice
// randomly return 0-2 as a "rock", "paper" or "scissors"
function getComputerChoice() {
    // Get a random number from 0 1 2 
    return Math.floor(Math.random() * 3);
}

console.log(getComputerChoice());

// Function that take user input and turn into number
function getHumanChoice() {
    let choice = prompt('rock, paper, or scissors?')
}

getHumanChoice();