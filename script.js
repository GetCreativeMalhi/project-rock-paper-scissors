function getComputerChoice() {
    let num = Math.floor(Math.random() * 100);
    if (num <= 33) {
        return "rock";
    } else if (num > 33 && num <= 66) {
        return "paper";
    }else {
        return "scissors";
    }
}

// FUNCTION getHumanChoice
// PROMPT user to enter choice
function getHumanChoice(e) {
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
}

// FUNCTION playGame function that calculates score for five games and declares winner
const buttons = document.querySelectorAll('button');
            let drawTotal = 0;
            let humanTotal = 0;
            let computerTotal = 0;
    buttons.forEach(button =>{
        button.addEventListener('click', (e) => {
            const winnerPara = document.querySelector('.winnerPara');
            winnerPara.textContent = "⚔️ Game On: Let’s Play!"
            const [draw, human, computer] = playRound(getComputerChoice(), getHumanChoice(e));
            const result = document.querySelector('.resultPara');
            result.textContent = `Round → Draw: ${draw}  •  You: ${human}  •  Computer: ${computer}`;
            drawTotal += draw;
            humanTotal += human;
            computerTotal += computer;
            const total = document.querySelector('.totalPara');
            total.textContent = `Total Score → You: ${humanTotal}  •  Computer: ${computerTotal}  `;
            
            if (humanTotal >= 5){
                winnerPara.textContent = "🎉 Congratulations, You have won!"
                total.textContent = `Total Score → You: ${humanTotal}  •  Computer: ${computerTotal}  `;
                humanTotal = 0;
                computerTotal = 0;
                drawTotal = 0;
                
            } else if (computerTotal >= 5){
                winnerPara.textContent = "💻 Game Over: Computer wins! 😭"
                total.textContent = `Total Score → You: ${humanTotal}  •  Computer: ${computerTotal}  `;
                humanTotal = 0;
                computerTotal = 0;
                drawTotal = 0;
            }
        });
                
            
    });