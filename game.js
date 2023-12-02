function getComputerChoice() {
    let choice;
    let random = Math.random();
    if (random < 1/3) {
        choice = "rock";
    } else if (random >= 1/3 && random < 2/3) {
        choice = "paper";
    } else {
        choice = "scissor";
    }
    return choice;
}

function playround(playerSelection, computerChoice = getComputerChoice()) {
    let result;

    if (playerSelection === computerChoice) {
        result = `This is a tie! You both chose ${playerSelection}`;
        console.log(result);
        return result;
    }
    
    switch (playerSelection) {
        case "rock":
            if (computerChoice === "paper") {
                result = "You lose! Paper beats Rock";
                break;
            } else {
                result = "You win! Rock beats Scissor";
                break;
            }

        case "paper":
            if (computerChoice === "scissor") {
                result = "You lose! Scissor beats Paper";
                break;
            } else {
                result = "You win! Paper beats Rock";
                break;
            }

        case "scissor":
            if (computerChoice === "paper") {
                result = "You win!  Scissor beats Paper";
                break;
            } else {
                result = "You lose! Rock beats Scissor";
                break;
            }
    }
    console.log(result);
    return result;
    
    
}

function game() {
    let rounds = 0;

    while (rounds < 5) {
        let playerSelection = prompt("Choose your weapon: rock, paper or scissor?");
        // play a round
        playround(playerSelection, computerChoice = getComputerChoice());
        // reset the computerChoice value
        
        rounds++;
    }

}

game();