let gameDisplay = document.querySelector("p#gameDisplay");
gameDisplay.innerHTML = "Lets play rock paper scissors!";
let scores = [0,0]; // 0 - player, 1 - computer

function selectionMade() {
    let selection = this.id;

    let mapping = ["rock", "paper", "scissors"];
    let computerSelection = mapping[Math.floor(Math.random() * 3)];

    let winner = playRound(selection, computerSelection);

    if(winner == "player")
        scores[0]++;
    
    if(winner == "computer")
        scores[1]++;

    gameState(winner);
}

const controls = document.querySelectorAll("div.control");
console.log(controls);
controls.forEach(div => div.addEventListener('click', selectionMade, {
    capture: false,
    once: false
}));


function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "neither";
    }
    if (playerSelection == "rock" && computerSelection == "scissors") {
        return "player";
    }

    if (playerSelection == "paper" && computerSelection == "rock") {
        return "player";
    }
    if (playerSelection == "scissors" && computerSelection == "paper") {
        return "player";
    }

    return "computer";
}

function gameState(winner) {

    gameDisplay.innerHTML = "The winner of this round was: " + winner;

    if(scores[0] == 5) {
        scores = [0,0];
        gameDisplay.innerHTML = "Player wins! Scores reset.";
    }

    if(scores[1] == 5) {
        scores = [0,0];
        gameDisplay.innerHTML = "Computer wins! Scores reset.";
    }
}
