function getComputerChoice (){
    let choice = [ 'rock' , 'paper' , 'scissors'];
    // random number [0,2)
    let randomInt = Math.floor(Math.random() * 3);
    return choice[randomInt];
}

console.log(getComputerChoice());

