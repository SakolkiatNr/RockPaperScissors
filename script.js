// Function that return the computer choice
// randomly return 0-2 as a "rock", "paper" or "scissors"
// 0 = rock, 1 = paper, 2 = scissors
function getComputerChoice() {
    // Get a random number from 0 1 2 
    return Math.floor(Math.random() * 3);
}
// console.log(getComputerChoice());

// Function that take user input and turn into number
function getHumanChoice() {
    // Prompt user's choice
    let choice = prompt('rock, paper, or scissors?').toLowerCase();
    // turn text into a value
    switch (choice) {
        case 'rock' :
            return 0;
        case 'paper' :
            return 1;
        case 'scissors' :
            return 2;
        default:
            console.log('Invalid choice. Please enter rock, paper, or scissors')
            return getHumanChoice();
            
    }
}
// console.log(getHumanChoice());



// Function to play the entire game
function playGame() {
    // Track player score 
    let humanScore = 0;
    let computerScore = 0;

    // takes the human and computer player choices as argument
    // play a single round
    // increments the round winner's score
    // log winner announcement
    function playRound(humanChoice, computerChoice) {
        //  compare choice
        // 0 = rock, 1 = paper, 2 = scissors
        if (humanChoice == 0) {
            switch (computerChoice) {
                case 0:
                    console.log("It's a tie!");
                    break;
                case 1:
                    console.log("You lose! Paper beats Rock");
                    computerScore ++;
                    break;
                case 2:
                    console.log("You win! Rock beats Scissors");
                    humanScore++;
                    break;
            }
        }
        else if (humanChoice == 1) {
            switch (computerChoice) {
                case 0:
                    console.log("You win! Paper beats Rock");
                    humanScore++;
                    break;
                case 1:
                    console.log("It's a tie!");
                    break;
                case 2:
                    console.log("You lose! Scissors beats Paper");
                    computerScore++;
                    break;
            }
        }
        else {
            switch (computerChoice) {
                case 0:
                    console.log('You lose! Rock beats Scissors');
                    computerScore++;
                    break;
                case 1:
                    console.log('You Win! Scissors beats Paper');
                    humanScore++;
                    break;
                case 2:
                    console.log("It's a tie!");
                    break;
            }
        }
    }

    // // Play 5 rounds
    // for (let i = 0; i < 5; i++) {
    //     // Get player's choice
    //     const humanSelection = getHumanChoice();
    //     const computerSelection = getComputerChoice();
        
    //     console.log('Round ' + ( i+1 ));
    //     playRound(humanSelection, computerSelection);
    //     console.log('Player score: ' + humanScore + '  |  Computer score: ' + computerScore);
    //     console.log('');
    // }
    
    // if (humanScore > computerScore) {
    //     console.log('Congratulations! You Win.');
    // } else if (humanScore == computerScore) {
    //     console.log("It's a draw!");
    // } else {
    //     console.log('You lose!');
    // }
}

playGame();