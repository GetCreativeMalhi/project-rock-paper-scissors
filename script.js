



// FUNCTION getComputerChoice
//     RETURN Math.random 
function getComputerChoice() {
    let num = Math.floor(Math.random() * 100);
    if (num <= 33) {
        // console.log(`Computer Choice: rock`);
        return "rock";
    } else if (num > 33 && num <= 66) {
        // console.log(`Computer Choice: paper`);
        return "paper";
    }else {
        // console.log(`Computer Choice: scissors`);
        return "scissors";
    }
}

// FUNCTION getHumanChoice
    // PROMPT user to enter choice
function getHumanChoice() {
    const choice = prompt("Make your choice: Rock, Paper, or Scissors").toLowerCase();
    // console.log(`Your Choice: ${choice}`);
    return choice;
}

// FUNCTION playGame function that calculates score for five games and declares winner
function playGame () {
    // store scores for human and computer
    let humanScore = 0;
    let computerScore = 0;
    let drawScore = 0;
    let humanSelection;
    let computerSelection;

    //  FUNCTION playRound here takes human and computer choices as arguments 
    function playRound(humanChoice, computerChoice) {
        console.log(`Your Chose: ${humanChoice}, Computer Chose: ${computerChoice}`)
        if (humanSelection === computerSelection){
            drawScore++;
            console.log("Thats Draw, Play again");
        }else if ((humanSelection === "rock" && computerSelection === "scissors") || 
                (humanSelection === "scissors" && computerSelection === "paper") ||
                (humanSelection === "paper" && computerSelection ==="rock")){
            humanScore++;
            console.log(`You win! ${humanSelection} beats ${computerChoice}`);
        } else {
            computerScore++;
            console.log(`You lose! ${computerSelection} beats ${humanSelection}`);
        }
    }
    // console.log(`Your Score: ${humanScore}, Computer Score: ${computerScore}, Draw Score ${drawScore}`)

    for (let i = 1; i <= 5; i++){
       // FUNCTIONs are invoked here and values are stored in the variables
       console.log(`********** Begin Round ${i} **********`); 
       humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();  
        playRound(humanSelection, computerSelection);
        console.log(`Your Score: ${humanScore}, Computer Score: ${computerScore}, Draw Score: ${drawScore}`)
    }
    if (humanScore > computerScore){
        console.log("You have won the game")
    }else {
        console.log("you lost the game")
    }
}



playGame();

