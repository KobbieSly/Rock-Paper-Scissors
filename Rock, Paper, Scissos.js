function getUserChoice (userInput){
  userInput = userInput.toLowerCase();

  if(userInput == 'rock' || userInput == 'paper' || userInput == 'scissors' || userInput == 'bomb'  ){
    return userInput;
  } else console.log('Invalid user input!');

}

function getComputerChoice (){
  const computerChoice = Math.floor(Math.random() *3);

  return (computerChoice == 0 ?  'rock' : computerChoice == 1 ?  'paper' : computerChoice == 2 ?  'scissors' : 'computer choice error');
}

function determineWinner(userChoice , computerChoice ){
  if (userChoice == 'bomb') {return 'User wins';} 
  
  else{
if (computerChoice  == userChoice) return  'tie';

if(userChoice == 'rock'){
return computerChoice == 'paper'? 'Computer wins' : 'User wins';
}

if(userChoice == 'paper'){
return computerChoice == 'scissors'? 'Computer wins' : 'User wins';
}

if(userChoice == 'scissors'){
return  computerChoice == 'rock'? 'Computer wins' : 'User wins';
}
}

}

function playGame(){
  let computerChoice = getComputerChoice();
let userChoice =  getUserChoice('paper')
let winner = determineWinner(userChoice ,computerChoice) ;

console.log(`User choose ${userChoice} \nComputer choose ${computerChoice} \n${winner}`);
}

playGame();




