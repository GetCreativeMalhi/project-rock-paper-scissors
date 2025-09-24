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
function getHumanChoice(e) {
    // const choice = prompt("Make your choice: Rock, Paper, or Scissors").toLowerCase();
    // console.log(`Your Choice: ${choice}`);
    return e.target.textContent.toLowerCase();
    
}

function playRound(humanChoice, computerChoice) {
    let drawScore = 0;
    let humanScore = 0;
    let computerScore = 0;
    console.log(`Your Chose: ${humanChoice}, Computer Chose: ${computerChoice}`)
    if (humanChoice === computerChoice){
        drawScore++;
        return [drawScore, humanScore, computerScore];
    }else if ((humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice ==="rock")){
        humanScore++;
        return [drawScore, humanScore, computerScore];
    } else {
        computerScore++;
       return [drawScore, humanScore, computerScore];
    }
    // if (drawScore != 5 || humanScore != 5 || computerScore != 5){
    //     const div = document.querySelector('result');
    //     div.textContent = "🎮 Game is on... make your move!"
    // }else if(drawScore === 5 || humanScore === 5 || computerScore === 5){
    //     div.textContent = "Game Over"
    // }
    // const result = document.querySelector('.resultPara');
    // result.textContent = `Round complete: Draw Score: ${drawScore} Human Score: ${humanScore} Computer Score: ${computerScore}`;
            
}

// FUNCTION playGame function that calculates score for five games and declares winner

const buttons = document.querySelectorAll('button');
    buttons.forEach(button =>{
        button.addEventListener('click', (e) => {
        const [draw, human, computer] = playRound(getComputerChoice(), getHumanChoice(e));
        
        const result = document.querySelector('.resultPara');
        result.textContent = `Round complete: Draw Score: ${draw} Human Score: ${human} Computer Score: ${computer}`;
        });
    });