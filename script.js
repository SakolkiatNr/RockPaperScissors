// Function that return the computer choice
// randomly return 0-2 as a "rock", "paper" or "scissors"
function getComputerChoice() {
    // Get a random number from 0 1 2 
    return Math.floor(Math.random() * 3);
}

console.log(getComputerChoice());

// Function that take user input and turn into number
function getHumanChoice() {
    // Prompt user's choice
    let choice = prompt('rock, paper, or scissors?').toLowerCase();
    // turn text into a value
    switch (choice) {
        case 'rock' :
            return 0;
            break;
        case 'paper' :
            return 1;
            break;
        case 'scissors' :
            return 2;
            break;
    }
}

console.log(getHumanChoice());