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
            let drawTotal = 0;
            let humanTotal = 0;
            let computerTotal = 0;
    buttons.forEach(button =>{
        button.addEventListener('click', (e) => {
            // const selection = document.querySelector('.selection');
            // selection.remove();
            // const score = document.querySelector('.score');
            // score.remove();
            const winnerPara = document.querySelector('.winnerPara');
            winnerPara.textContent = "⚔️ Game On: Let’s Play!"
            const [draw, human, computer] = playRound(getComputerChoice(), getHumanChoice(e));
            const result = document.querySelector('.resultPara');
            result.textContent = `Round → Draw: ${draw}  •  You: ${human}  •  Computer: ${computer}`;
            drawTotal += draw;
            humanTotal += human;
            computerTotal += computer;
            const total = document.querySelector('.totalPara');
            total.textContent = `Total → Draw:${drawTotal} You:${humanTotal} Computer:${computerTotal}  `;
            
            if (humanTotal >= 5){
                winnerPara.textContent = "🎉 Congratulations, You have won!"
                total.textContent = `Total → Draw:${drawTotal} You:${humanTotal} Computer:${computerTotal}  `;
                humanTotal = 0;
                computerTotal = 0;
                drawTotal = 0;
                
            } else if (computerTotal >= 5){
                winnerPara.textContent = "💻 Game Over: Computer wins! 😭"
                total.textContent = `Total → Draw:${drawTotal} You:${humanTotal} Computer:${computerTotal}  `;
                humanTotal = 0;
                computerTotal = 0;
                drawTotal = 0;
            }
        });
                
            
    });