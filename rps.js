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

function game() {
    console.log("Lets play rock paper scissors!");
    var rounds = 5;

    const valid = ["rock", "paper", "scissors", '0', '1', '2'];

    for(let round = 0; round < rounds; round++) {

        var playerSelection = "";

        while(!valid.includes(playerSelection)) {

            var promptText = "Please enter a valid selection:\n(0) rock\n(1) paper\n(2) scissors";
            playerSelection = prompt(promptText, "Number or word here");
        }

        var computerSelection = Math.floor(Math.random() * 3);

        // Format player selection
        playerSelection = valid[valid.indexOf(playerSelection) % 3];

        // Format computer selection
        computerSelection = valid[computerSelection];

        var winner = playRound(playerSelection, computerSelection);

        console.log("Player picked " + playerSelection + " and computer picked " + computerSelection + ". The winner was " + winner + ".");
    }
}

game();