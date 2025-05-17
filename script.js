// Function that return the computer choice
// randomly return 0-2 as a "rock", "paper" or "scissors"
// 0 = rock, 1 = paper, 2 = scissors

// Get a random number from 0 1 2 
function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

// Function that take user input and turn into number
function getHumanChoice(choice) {
    switch (choice) {
        case 'rock' :
            return 0;
        case 'paper' :
            return 1;
        case 'scissors' :
            return 2;
    }
}

// Function to play the entire game
function playGame() {
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
                    displayResult("It's a tie!")
                    break;
                case 1:
                    console.log("You lose! Paper beats Rock");
                    displayResult("You lose! Paper beats Rock")
                    computerScore++;
                    break;
                case 2:
                    console.log("You win! Rock beats Scissors");
                    displayResult("You win! Rock beats Scissors");
                    humanScore++;
                    break;
            }
        }
        else if (humanChoice == 1) {
            switch (computerChoice) {
                case 0:
                    console.log("You win! Paper beats Rock");
                    displayResult("You win! Paper beats Rock")
                    humanScore++;
                    break;
                case 1:
                    console.log("It's a tie!");
                    displayResult("It's a tie!");
                    break;
                case 2:
                    console.log("You lose! Scissors beats Paper");
                    displayResult("You lose! Scissors beats Paper");
                    computerScore++;
                    break;
            }
        }
        else {
            switch (computerChoice) {
                case 0:
                    console.log('You lose! Rock beats Scissors');
                    displayResult('You lose! Rock beats Scissors');
                    computerScore++;
                    break;
                case 1:
                    console.log('You Win! Scissors beats Paper');
                    displayResult('You Win! Scissors beats Paper');
                    humanScore++;
                    break;
                case 2:
                    console.log("It's a tie!");
                    displayResult("It's a tie!");
                    break;
            }
        }
    }
    
    function displayResult(text) {
        const result = document.querySelector('.result');
        const content = document.createElement("p");
        content.classList.add('result');
        content.textContent = text;
        result.appendChild(content);
    }

    function displayHumanScore() {
        const scoreDisplay = document.querySelector('#player');
        scoreDisplay.textContent = humanScore;
    }

    function displayComputerScore() {
        const scoreDisplay = document.querySelector('#computer');
        scoreDisplay.textContent = computerScore;
    }

    function checkWinner() {
        if (humanScore == 5 || computerScore == 5) {
            const winner = document.querySelector('#winner');
            if (humanScore > computerScore) {
                winner.textContent = 'YOU WIN!';
            } else {
                winner.textContent = 'YOU LOSE!';
            }
            return true;
        } else {
            return false;
        }
    }
    
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            if (checkWinner()) {
                e.stopImmediatePropagation();
                return;
            }
            const playerSelection = getHumanChoice(button.id);
            const computerSelection = getComputerChoice();

            playRound(playerSelection, computerSelection);
            displayHumanScore();
            displayComputerScore();
            
        });
    });
}

playGame();