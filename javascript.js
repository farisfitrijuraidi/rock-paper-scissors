// --- 1. SELECT DOM ELEMENTS ---
const div = document.querySelector('#button');
const result = document.querySelector('#result');
const score = document.querySelector('#score');
const announce = document.querySelector('#announce');
const choiceButtons = document.querySelectorAll('#button button');
const display = document.querySelector('#display');

const playAgain = document.createElement('button');
playAgain.textContent = 'Play Again?';
playAgain.addEventListener('click', resetGame);

// --- 2. DEFINE VARIABLES ---
let humanScore = 0 ;
let computerScore = 0 ;
score.textContent = `YOU ${humanScore} : ${computerScore} COMPUTER`;

// --- 3. DEFINE FUNCTIONS ---
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"]
    const number = Math.floor(Math.random()*choices.length) ;
    return choices[number] ;
}

function playRound(humanChoice,computerChoice) {
    if (humanChoice === 'rock' && computerChoice === 'paper' || humanChoice === 'paper' && computerChoice === 'scissors' || humanChoice === 'scissors' && computerChoice === 'rock') {
        result.textContent = `You Lose! ${computerChoice} beats ${humanChoice}!` ;
        return 'computer' ;
    } else if (humanChoice === computerChoice) {
        result.textContent = 'DRAW!' ;
        return 'DRAW' ;
    } else {
        result.textContent = `You Win! ${humanChoice} beats ${computerChoice}` ;
        return 'human' ;
    }
}

function resetGame() {
    humanScore = 0 ;
    computerScore = 0 ;
    score.textContent = `YOU ${humanScore} : ${computerScore} COMPUTER`;
    result.textContent = '';
    announce.textContent = '';
    choiceButtons.forEach(button => button.disabled = false);
    playAgain.remove();
}

function handleGame(e) {
    let target = e.target;
    const roundWinner = playRound(target.id, getComputerChoice());
    if (roundWinner === 'human') {
        humanScore++ ;
    } else if (roundWinner === 'computer') {
        computerScore++ ;
    }
    score.textContent = `YOU ${humanScore} : ${computerScore} COMPUTER`;
    if (humanScore === 5 || computerScore === 5) {
        if (humanScore === 5) {
            announce.textContent = 'CONGRATULATIONS! YOU WON THE GAME!' ;
        } else if (computerScore === 5) {
            announce.textContent = 'Better luck next time!' ;
        }
        choiceButtons.forEach(button => button.disabled = true);
        display.appendChild(playAgain);
        
    } 
}
    
// --- 4. ADD EVENT LISTENERS ---
div.addEventListener('click', handleGame);