function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    let randomNum = Math.floor(Math.random() * 3);
    return choice[randomNum];
}

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
        const winText = `You ${result}! ${humanChoice} beats ${computerChoice}`
        const lostText = `You ${result}! ${computerChoice} beats ${humanChoice}`

        if (result === 'win') {
            humanScore++;
            displayResult(winText);
        } else if (result == 'lose') {
            computerScore++;
            displayResult(lostText);
        } else {
            displayResult("It's a tie!");
        }

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
        button.addEventListener('click', () => {
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