const buttons = document.querySelectorAll("button");
const results = document.getElementById("results");

let options = ["rock", "paper", "scissors"];

buttons.forEach((button) => {
    button.addEventListener('click', function () {
        const playerChoicePrint = document.createElement('p');
        playerChoicePrint.textContent = "You chose " + button.id + ".";
        results.appendChild(playerChoicePrint);
        printResult(playRound(button.id, computerPlay()));
    });
});

function computerPlay () {
    let computerChoice = options[Math.floor(Math.random() * 3)];
    const computerChoicePrint = document.createElement('p');
    computerChoicePrint.textContent = "The computer chose " + computerChoice + ".";
    results.appendChild(computerChoicePrint);
    return computerChoice;
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection == computerSelection) return "It's a tie.";
    else {
        switch (playerSelection) {
            case "rock":
                if (computerSelection == "paper") return "You lose! Paper beats rock.";
                else return "You win! Rock beats scissors.";
                break;
            case "paper":
                if (computerSelection == "scissors") return "You lose! Scissors beats paper.";
                else return "You win! Paper beats rock.";
                break;
            case "scissors":
                if (computerSelection == "rock") return "You lose! Rock beats scissors.";
                else return "You win! Scissors beats paper.";
        }
    }
}

function printResult (text) {
    const result = document.createElement('p');
    result.textContent = text;
    results.appendChild(result);
}
