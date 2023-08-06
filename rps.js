let gameDisplay = document.querySelector("p#gameDisplay");
gameDisplay.innerHTML = "Lets play rock paper scissors!";
let gameScore = document.querySelector("p#gameScore");
gameScore.innerHTML = "Score: 0 - 0";
let scores = [0, 0]; // 0 - player, 1 - computer

function computerAnimate(selection) {
    let rock = document.getElementById("compRock");
    rock.style.backgroundColor = "thistle";
    let paper = document.getElementById("compPaper");
    paper.style.backgroundColor = "thistle";
    let scissors = document.getElementById("compScissors");
    scissors.style.backgroundColor = "thistle";

    if (selection == "rock") {
        rock.classList.add("fadeAnimation");
        setTimeout(function(){rock.classList.remove("fadeAnimation");}, 4000);
    }
    if (selection == "paper") {
    paper.classList.add("fadeAnimation");
    setTimeout(function(){paper.classList.remove("fadeAnimation");}, 4000);
}
    if (selection == "scissors") {
        scissors.classList.add("fadeAnimation");
        setTimeout(function(){scissors.classList.remove("fadeAnimation");}, 4000);
    }
}

function selectionMade() {
    let selection = this.id;

    let mapping = ["rock", "paper", "scissors"];
    let computerSelection = mapping[Math.floor(Math.random() * 3)];
    computerAnimate(computerSelection);

    let winner = playRound(selection, computerSelection);
    if (winner == "player")
        scores[0]++;

    if (winner == "computer")
        scores[1]++;

    gameState(winner);
}

const controls = document.querySelectorAll(".controls > div.control");
console.log(controls);
controls.forEach(div => div.addEventListener('click', selectionMade, {
    capture: false,
    once: false
}));

document.getElementById("reset").onclick = () => {
    scores = [0, 0];
    gameScore.innerHTML = "Score: 0 - 0";
    gameDisplay.innerHTML = "Lets play rock paper scissors!";
    computerAnimate();
}

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
    gameScore.innerHTML = "Score: " + scores[0] + " - " + scores[1];

    if (scores[0] == 5) {
        scores = [0, 0];
        gameDisplay.innerHTML = "Player wins!";
    }

    if (scores[1] == 5) {
        scores = [0, 0];
        gameDisplay.innerHTML = "Computer wins!";
    }
}
