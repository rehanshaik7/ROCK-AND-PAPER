const computerChoiceDisplay =document.getElementById("comp-choice")
const userChoiceDisplay =document.getElementById("user-choice")
const resultDisplay =document.getElementById("result");

const possibleChoices=document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e)=>{
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML=userChoice;
    genearteComputerChoice();
    getResult();
}));

function genearteComputerChoice(){

  const randomNumber=Math.floor(Math.random()*3)+1

  if(randomNumber===1){
    computerChoice='rock'
  }
  if(randomNumber===2){
    computerChoice='paper'
  }
  if(randomNumber===3){
    computerChoice='scissor'
  }
computerChoiceDisplay.innerHTML=computerChoice;

}

function getResult(){

  if(computerChoice===userChoice){
    result='its a draw'
  }
  if(computerChoice==="rock"&&userChoice==="scissor"){
    result='you lose'
  }
  if(computerChoice==="rock"&&userChoice==="paper"){
    result='you win'
  }
  if(computerChoice==="paper"&&userChoice==="rock"){
    result='you lose'
  }
  if(computerChoice==="paper"&&userChoice==="scissor"){
    result='you win'
  }
  if(computerChoice==="scissor"&&userChoice==="paper"){
    result='you lose'
  }
  if(computerChoice==="scissor"&&userChoice==="rock"){
    result='you win'
  }

  resultDisplay.innerHTML=result
}
