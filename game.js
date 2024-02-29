function getComputerChoice (){
    let choice = [ 'rock' , 'paper' , 'scissors'];
    // random number [0,2)
    let randomInt = Math.floor(Math.random() * 3);
    return choice[randomInt];
}

function playGame (playerSelection, computerSelection){
    let playerChoice = playerSelection.toLowerCase();

    if ((playerChoice === 'rock' && computerSelection === 'scissors') || (playerChoice === 'scissors' && computerSelection === 'paper') || (playerChoice === 'paper' && computerSelection === 'rock')){
        console.log('Player wins!' + ' Player: ' + playerChoice + ' Computer: ' + computerSelection);
        return 'player';
    }else if(playerChoice === computerSelection){
        console.log("It's a tie!" + ' Player: ' + playerChoice + ' Computer: ' + computerSelection);
        return 'tie';
    }else{
        console.log('Computer won!' + ' Player: ' + playerChoice + ' Computer: ' + computerSelection);
        return 'computer';
    }
}

let userInput = null;
let winner = null;
let pScore = 0;
let cScore = 0;

for (let i = 0; i < 5; i++){
    
    userInput = prompt('Rock, Paper, or Scissors?');
    winner = playGame(userInput, getComputerChoice());
    
    if (winner === 'computer'){
        cScore += 1;
    }else if (winner === 'player'){
        pScore += 1;
    }else{
        cScore += 1;
        pScore += 1;
    }

    console.log('------GAME ' + i+1 + ' RESULTS------------');
    console.log('Player Score: ' + pScore);
    console.log('Computer Score: ' + cScore);
}


