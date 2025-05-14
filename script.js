// Write the logic to return the computer choice
// randomly return "rock", "paper" or "scissors"
function getComputerChoice() {
    // Get a random number from 0 1 2 
    return Math.floor(Math.random() * 3);
}

console.log(getComputerChoice());