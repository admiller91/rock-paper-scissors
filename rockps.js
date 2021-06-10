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
}