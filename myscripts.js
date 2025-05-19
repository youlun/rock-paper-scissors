
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

let humanScore = 0;
let computerScore = 0;

const btnRock = document.querySelector("#Rock");
const btnPaper = document.querySelector("#Paper");
const btnScissors = document.querySelector("#Scissors");

btnRock.addEventListener("click", () => {
    playRound("rock");
});
btnPaper.addEventListener("click", () => {
    playRound("paper");
});
btnScissors.addEventListener("click", () => {
    playRound("scissors");
});

const scoreBoard = document.querySelector("#scoreBoard");
const scoreNow = document.querySelector("#scoreNow");


function playRound(selection) {
    const h = selection;
    const c = getComputerChoice();
    if ((h === 'rock' && c === 'scissors') ||
        (h === 'scissors' && c === 'paper') ||
        (h === 'paper' && c === 'rock')) {
        humanScore++;
        scoreBoard.textContent = `You Win! ${h} beats ${c}`;
    } else {
        computerScore++;
        scoreBoard.textContent = `You Lose! ${c} beats ${h}`;
    }
    scoreNow.textContent = `current score is human ${humanScore} and computer ${computerScore}`;
}