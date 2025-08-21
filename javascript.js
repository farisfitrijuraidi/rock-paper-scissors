function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"]
    const number = Math.floor(Math.random()*choices.length) ;
    return choices[number] ;
}

function getHumanChoice() {
    let userInput = prompt("Rock? Paper? Scissors? :", "") ;
    return userInput.toLowerCase() ;
}

function playRound(humanChoice,computerChoice) {
    if (humanChoice === 'rock' && computerChoice === 'paper' || humanChoice === 'paper' && computerChoice === 'scissors' || humanChoice === 'scissors' && computerChoice === 'rock') {
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}!`) ;
        return 'computer' ;
    } else if (humanChoice === computerChoice) {
        console.log('DRAW!') ;
        return 'DRAW' ;
    } else {
        console.log(`You Win! ${humanChoice} beats ${computerChoice}`) ;
        return 'human' ;
    }
}
    
function playGame() {
    let humanScore = 0 ;
    let computerScore = 0 ;

    for(let i = 0; i < 5; i++) {
        console.log(`Round ${i+1}`);
        const humanChoice = getHumanChoice() ;
        console.log(`You chose: ${humanChoice}`);
        const computerChoice = getComputerChoice() ;
        console.log(`Computer chose: ${computerChoice}`) ;

        const roundWinner = playRound(humanChoice,computerChoice) ;
        if (roundWinner === 'human') {
            humanScore++ ;
        } else if (roundWinner === 'computer') {
            computerScore++ ;
        }
        console.log(humanScore,computerScore);
    }
    console.log('--FINAL SCORE--');
    console.log(`You ${humanScore} : ${computerScore} Computer`);
    if (humanScore > computerScore) {
        console.log('CONGRATULATIONS! YOU WON THE GAME!')
    } else if (computerScore > humanScore) {
        console.log('Better luck next time!')
    } else {
        console.log("It's a Tie!")
    }
    
}

playGame() ;