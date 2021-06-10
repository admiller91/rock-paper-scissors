function welcome() {
    console.log("Welcome");
}


//Step 2
//Select what computer will play - rock, paper, or scissors
    //create array with the values
    //pick a random number from 0-2
    //set computer selection to arr[x]
    
function computerPlay() {
    const computerSelectionArr = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * 3);
    let computerSelection = computerSelectionArr[index];
    //console.log(computerSelection);
    return computerSelection;
}

//Get user input for their selection
function userPlay() {
    //ask for selection
    //put in all lowercase
    //if it doesnt equal rock paper or scissors
        //ask for another selection
        //else set userselection variable
}


//Step 4
//Play a round of RPS
function playRound() {

}