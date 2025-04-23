function playGame() {
    function getComputerChoice() {
        let choice = Math.floor(Math.random() * 3);
        switch (choice) {
            case 0:
                return "rock";
                break;
            case 1:
                return "scissors";
                break;
            case 2:
                return "paper";
                break;
        }
    }

    function getHumanChoice() {
        return prompt("Choose rock, paper, or scissors").toLowerCase();
    }

    let humanScore = 0;
    let computerScore = 0;
    
    function playRound() {
        const h = getHumanChoice();
        const c = getComputerChoice();
        if ((h === 'rock' && c === 'scissors') ||
            (h === 'scissors' && c === 'paper') ||
            (h === 'paper' && c === 'rock')) {
            humanScore++;
            console.log(`You Win! ${h} beats ${c}`);
        } else {
            computerScore++;
            console.log(`You Lose! ${c} beats ${h}`);
        }
        console.log(`current score is human ${humanScore} and computer ${computerScore}`);
    }


    for (let i = 0; i < 5; i++) {
        playRound();
    }
}

playGame();