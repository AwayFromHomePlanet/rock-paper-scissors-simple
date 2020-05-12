const buttons = document.querySelectorAll("button");
const results = document.getElementById("results");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");

const options = ["rock", "paper", "scissors"];

buttons.forEach((button) => {
    button.addEventListener('click', function () {
        let playerChoicePrint = "You chose " + button.id + ".";
        printLine(playerChoicePrint);
        printLine(playRound(button.id, computerPlay()));
    });
});

function computerPlay () {
    let computerChoice = options[Math.floor(Math.random() * 3)];
    let computerChoicePrint = "The computer chose " + computerChoice + ".";
    printLine(computerChoicePrint);
    return computerChoice;
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection == computerSelection) return "It's a tie.";
    else {
        switch (playerSelection) {
            case "rock":
                if (computerSelection == "paper") {
                    scorePoint(computerScore);
                    return "You lose! Paper beats rock.";
                }
                scorePoint(playerScore);
                return "You win! Rock beats scissors.";
            case "paper":
                if (computerSelection == "scissors") {
                    scorePoint(computerScore);
                    return "You lose! Scissors beats paper.";
                }
                scorePoint(playerScore);
                return "You win! Paper beats rock.";
            case "scissors":
                if (computerSelection == "rock") {
                    scorePoint(computerScore);
                    return "You lose! Rock beats scissors.";
                }
                scorePoint(playerScore);
                return "You win! Scissors beats paper.";
        }
    }
}

function printLine (text) {
    const line = document.createElement('p');
    line.textContent = text;
    results.appendChild(line);
}

function scorePoint (score) {
    let currentScore = +score.textContent;
    score.textContent = currentScore + 1;
}