// Function that return the computer choice
// randomly return 0-2 as a "rock", "paper" or "scissors"
// 0 = rock, 1 = paper, 2 = scissors

// Get a random number from 0 1 2 
function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    let randomNum = Math.floor(Math.random() * 3);
    return choice[randomNum];
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
    let isGameOver = false;
    let round = 0;

    function playRound(humanChoice, computerChoice) {
        const compareChoice = {
            rock:      {rock: 'tie' , paper: 'lose', scissors: 'win'},
            paper:     {rock: 'win' , paper: 'tie',  scissors: 'lose'},
            scissors:  {rock: 'lose', paper: 'win',  scissors: 'tie'}
        }

        const result = compareChoice[humanChoice][computerChoice];

        if (result === 'win') {
            humanScore++;
        } else if (result == 'lose') {
            computerScore++;
        }
        
        //  compare choice
        // 0 = rock, 1 = paper, 2 = scissors
        // if (humanChoice == computerChoice){
        //     console.log("It's a tie!");
        //     displayResult("It's a tie!");
        //     return;
        // }

        // if (humanChoice == 0) {
        //     switch (computerChoice) {
        //         case 1:
        //             console.log("You lose! Paper beats Rock");
        //             displayResult("You lose! Paper beats Rock")
        //             computerScore++;
        //             break;
        //         case 2:
        //             console.log("You win! Rock beats Scissors");
        //             displayResult("You win! Rock beats Scissors");
        //             humanScore++;
        //             break;
        //     }
        // }
        // else if (humanChoice == 1) {
        //     switch (computerChoice) {
        //         case 0:
        //             console.log("You win! Paper beats Rock");
        //             displayResult("You win! Paper beats Rock")
        //             humanScore++;
        //             break;
        //         case 2:
        //             console.log("You lose! Scissors beats Paper");
        //             displayResult("You lose! Scissors beats Paper");
        //             computerScore++;
        //             break;
        //     }
        // } else {
        //     switch (computerChoice) {
        //         case 0:
        //             console.log('You lose! Rock beats Scissors');
        //             displayResult('You lose! Rock beats Scissors');
        //             computerScore++;
        //             break;
        //         case 1:
        //             console.log('You Win! Scissors beats Paper');
        //             displayResult('You Win! Scissors beats Paper');
        //             humanScore++;
        //             break;
        //     }
        
    }
    
    function displayResult(text) {
        const result = document.querySelector('.result');
        result.textContent = text;
    }

    function displayScore() {
        const humanScoreDisplay = document.querySelector('#player');
        const computerScoreDisplay = document.querySelector('#computer');
        humanScoreDisplay.textContent = humanScore;
        computerScoreDisplay.textContent = computerScore;
    }

    function checkWinner() {
        if (humanScore == 5 || computerScore == 5) {
            const winner = document.querySelector('#winner');
            winner.textContent = humanScore > computerScore ? 'YOU WIN!' : 'YOU LOSE!';
            return true;
        }
        return false;
    }

    function reset() {
        humanScore = 0;
        computerScore = 0;
        isGameOver = false;

        // clear screen
        displayScore();

        document.querySelector('.result').textContent = "";
        document.querySelector('#winner').textContent = "";
    }

    function createResetButton() {
        if (document.querySelector('.reset-button')) return;

        const target = document.querySelector('.reset');
        const resetButton = document.createElement('button');
        resetButton.setAttribute('class', 'reset-button');
        resetButton.textContent = 'Play again';
        target.appendChild(resetButton);

        resetButton.addEventListener('click', () => {
            reset();
            resetButton.remove();
        })
    }

    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            if (isGameOver) {
                return;
            }

            const playerSelection = button.id;
            const computerSelection = getComputerChoice();
            playRound(playerSelection, computerSelection);
            displayScore();
            
            if (checkWinner()) {
                isGameOver = true;
                createResetButton();
            }
        });
    });
}

playGame();