function getComputerChoice() {
    let choice;
    let random = Math.random();
    if (random < 1/3) {
        choice = "rock";
    } else if (random >= 1/3 && random < 2/3) {
        choice = "paper";
    } else {
        choice = "scissors";
    }
    return choice;
}

function playround(playerSelection, computerChoice) {

    if (playerSelection === computerChoice) {
        return `This is a tie! You both chose ${playerSelection}`;
    }
    
    switch (playerSelection) {
        case "rock":
            if (computerChoice === "paper") {
                return "You lose! Paper beats Rock";
                
            } else {
                return "You win! Rock beats Scissors";   
            }

        case "paper":
            if (computerChoice === "scissors") {
                return "You lose! Scissors beats Paper";
                
            } else {
                return "You win! Paper beats Rock";
            }

        case "scissors":
            if (computerChoice === "paper") {
                return "You win! Scissors beats Paper";
                
            } else {
                return "You lose! Rock beats Scissors";
            }
    }
}

const buttons = document.querySelectorAll('button');
const div = document.querySelector('div');

let playerPoints = 0;
let computerPoints = 0;

buttons.forEach((button) => button.addEventListener('click', playRoundOnClick));

//  Since this function is going to be passed to the addEventListener, the argument for it is the event object.
function playRoundOnClick(e) {
    
        let result = playround(e.target.id, getComputerChoice());
    
        
        if (result.includes('win')) {
            playerPoints++;
            div.innerHTML = result + '<br>' + 'Player: ' + playerPoints + ', ' + 'Computer: ' + computerPoints;
        } else if (result.includes('lose')) {
            computerPoints++;
            div.innerHTML = result + '<br>' + 'Player: ' + playerPoints + ', ' + 'Computer: ' + computerPoints;
        } else {
            div.innerHTML = result + '<br>' + 'Player: ' + playerPoints + ', ' + 'Computer: ' + computerPoints;
        }

        // Announce winner on first player that reaches 5 points. No more points should be summed, so buttons stop listening for clicks (we could've disabled the buttons as well)
        if (playerPoints === 5 || computerPoints === 5) {
            buttons.forEach((button) => button.removeEventListener('click', playRoundOnClick))
            if (playerPoints === 5) {
                div.innerHTML = '5 points reached! You win!';
            } else {
                div.innerHTML = '5 points reached! The Computer wins';
            }
            // Add a reset button after final click i.e. game has finished
            const resetButton = document.createElement('button');
            resetButton.textContent = 'Reset Game';
            div.appendChild(resetButton);
            resetButton.addEventListener('click', resetGame)
        }
}

function resetGame() {
    buttons.forEach((button) => button.addEventListener('click', playRoundOnClick));
    div.innerHTML = '';
    playerPoints = 0;
    computerPoints = 0;
}





