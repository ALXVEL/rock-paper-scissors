function getComputerChoice (){
    let choice = [ 'rock' , 'paper' , 'scissors'];
    // random number [0,2)
    let randomInt = Math.floor(Math.random() * 3);
    return choice[randomInt];
}

const message = document.querySelector('.message');

function playGame (playerSelection, computerSelection){
    let playerChoice = playerSelection.toLowerCase();

    if ((playerChoice === 'rock' && computerSelection === 'scissors')
     || (playerChoice === 'scissors' && computerSelection === 'paper')
     || (playerChoice === 'paper' && computerSelection === 'rock')){
        message.textContent = 'Player wins!' + ' Player: ' + playerChoice + ' Computer: ' + computerSelection;
        //console.log('Player wins!' + ' Player: ' + playerChoice + ' Computer: ' + computerSelection);
        return 'player';
    }else if(playerChoice === computerSelection){
        message.textContent = "It's a tie!" + ' Player: ' + playerChoice + ' Computer: ' + computerSelection;
        //console.log("It's a tie!" + ' Player: ' + playerChoice + ' Computer: ' + computerSelection);
        return 'tie';
    }else{
        message.textContent = 'Computer won!' + ' Player: ' + playerChoice + ' Computer: ' + computerSelection;
        //console.log('Computer won!' + ' Player: ' + playerChoice + ' Computer: ' + computerSelection);
        return 'computer';
    }
}
let nGame = 0;
let userInput = null;
let winner = null;
let pScore = 0;
let cScore = 0;

const btnList = document.querySelectorAll('button');
const div = document.querySelector('div');
const finish = document.querySelector('.finish');

btnList.forEach( (button) => {
    button.addEventListener('click', () => {
        if (nGame < 5){
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
            div.textContent = "Player Score: " + pScore + " Computer Score: " + cScore;
            nGame += 1;
        }else{
            finish.textContent = "Game finished! " + "Player Score: " + pScore + " Computer Score: " + cScore;
        }
    });
    console.log("Added listen to - " + button);
});


// let userInput = null;
// let winner = null;
// let pScore = 0;
// let cScore = 0;

// for (let i = 0; i < 5; i++){
    
//     userInput = prompt('Rock, Paper, or Scissors?');
//     winner = playGame(userInput, getComputerChoice());
    
//     if (winner === 'computer'){
//         cScore += 1;
//     }else if (winner === 'player'){
//         pScore += 1;
//     }else{
//         cScore += 1;
//         pScore += 1;
//     }

//     console.log('------GAME ' + i+1 + ' RESULTS------------');
//     console.log('Player Score: ' + pScore);
//     console.log('Computer Score: ' + cScore);
// }


