//Event handlers for the 3 buttons
const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');

rockBtn.addEventListener('click', () => {
    playRound('rock');
});
paperBtn.addEventListener('click', () => {
    playRound('paper');
});
scissorsBtn.addEventListener('click', () => {
    playRound('scissors');
});

function playRound(userSelection) {
    let user = userSelection;
    let computer = computerPlay();
    const showSelectionP = document.getElementById('showSelection');

    showSelectionP.innerText = "Computer chooses " + computer + ". User chooses " + user + ".";
    console.log("Computer chooses " + computer + ". User chooses " + user + ".");
    determineWinner(computer, user);
}

function computerPlay() {
    const computerSelectionArr = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * 3);
    let computerSelection = computerSelectionArr[index];
    return computerSelection;
}

function determineWinner(computer, user) {
    const showWinnerH1 = document.getElementById('showWinner');
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

    //show who won the match in the console and html

    if (tie) {
        console.log("It was a tie");
        showWinnerH1.innerText = 'It was a tie!';
    }

    if (computerWins) {
        console.log("The computer won!");
        showWinnerH1.innerText = 'The computer won!';
    }

    if (userWins) {
        console.log("You won!");
        showWinnerH1.innerText = 'You won!!';
    }
}