function welcome() {
    console.log("Welcome");
}


//Step 2
//Select what computer will play - rock, paper, or scissors
function computerPlay() {
    const computerSelectionArr = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * 3);
    let computerSelection = computerSelectionArr[index];
    //console.log(computerSelection);
    return computerSelection;
}

//Get user input for their selection
function userPlay() {
    let userSelection = prompt("Rock, paper, or scissors?");
    userSelection = userSelection.toLowerCase();
    if (userSelection == "rock" || userSelection == "paper" || userSelection == "scissors") {
        return userSelection;
    } else {
        userPlay();
    }
}


//Step 4
//Play a round of RPS
function playRound() {
    let computer = computerPlay();
    let user = userPlay();
    console.log("Computer chooses " + computer + ". User chooses " + user + ".");
    determineWinner(computer, user);
}

function determineWinner(computer, user) {
    let computerWins = false;
    let userWins = false;
    let tie = false;

    if (computer == user) {
        tie = true;
    }

    //rock and paper
    if (computer == "rock" && user == "paper") {
        userWins = true;
    }

    if (computer == "paper" && user == "rock") {
        computerWins = true;
    }

    //scissors and paper
    if (computer == "scissors" && user == "paper") {
        computerWins = true;
    }

    if (computer == "paper" && user == "scissors") {
        userWins = true;
    }


    //rock and scissors
    if (computer == "scissors" && user == "rock") {
        userWins = true;
    }

    if (computer == "rock" && user == "scissors") {
        computerWins = true;
    }


    if (tie) {
        console.log("It was a tie");
    }

    if (computerWins) {
        console.log("The computer won!");
    }

    if (userWins) {
        console.log("You won!");
    }
}