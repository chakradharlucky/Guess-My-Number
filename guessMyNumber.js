'use strict'
let guessNumber = Math.trunc(Math.random()*20+1);
// document.querySelector('.number').textContent = guessNumber;
function displayMessage(msg) {
   document.querySelector(".message").textContent = msg ; 
}

let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener('click',function(){
   let guessedNumber = Number(document.querySelector('.guess').value);
   // document.querySelector('.number').textContent = guessNumber;
   // console.log(guessedNumer)
   if(!guessedNumber){
      displayMessage("⛔ No number!");
      return;
   }
  if(guessNumber===guessedNumber)
  {
   document.querySelector('.number').textContent = guessedNumber;
   displayMessage("🎉Correct number! Click Again! button to play again...... ");
   if(highscore<score)
   {
   highscore = score;
   document.querySelector('.highscore').textContent = highscore;
   }
   document.querySelector('body').style = "backGround: #60b347" ;

  }
  else{
   score--;
   if(score<0)
   {
      displayMessage("💥You lost the game!");
      return; 
   }
   else
   {   
   document.querySelector('.score').textContent = score;
   }   
   if(guessedNumber>guessNumber)
   {
   displayMessage("📈 Number is too high");
   }
   else{
   displayMessage("📉 Number is too low");
   }

}
})
document.querySelector(".again").addEventListener("click",function(){
   guessNumber = Math.trunc(Math.random()*20+1);
   document.querySelector('body').style = "backGround: #222" ;
   document.querySelector('.number').textContent ='?' ;
   score = 20;
   document.querySelector('.score').textContent = 20 ;
   displayMessage("Start guessing.....");
   document.querySelector('.guess').value = " ";

   

})
// let variable = document.querySelector(".number");
// console.log(variable.textContent); 
// variable.textContent=guessNubmer;
// console.log(variable.textContent); 
