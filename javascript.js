// --- 1. SELECT DOM ELEMENTS ---
const div = document.querySelector('#button');
const result = document.querySelector('#result');
const score = document.querySelector('#score');
const announce = document.querySelector('#announce');

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
    
// --- 4. ADD EVENT LISTENERS ---
div.addEventListener('click', (e) => {
    let target = e.target;
    const roundWinner = playRound(target.id, getComputerChoice());
    if (roundWinner === 'human') {
        humanScore++ ;
    } else if (roundWinner === 'computer') {
        computerScore++ ;
    }
    score.textContent = `YOU ${humanScore} : ${computerScore} COMPUTER`;
    if (humanScore === 5) {
        announce.textContent = 'CONGRATULATIONS! YOU WON THE GAME!' ;
    } else if (computerScore === 5) {
        announce.textContent = 'Better luck next time!' ;
    }
});