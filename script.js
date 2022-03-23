'use strict';

let num = Math.trunc(Math.random()*20)+1;
let score = 20;
let highScore = 0;
const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    num = Math.trunc(Math.random()*20)+1;
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
});

document.querySelector('.check').addEventListener('click', function(){
   const guess = Number(document.querySelector('.guess').value);

   if (!guess){

       displayMessage('No Number!😒'); 

     }else if(guess === num){
         displayMessage('Correct Number!🥳')
         document.querySelector('.number').textContent = num;
         document.querySelector('body').style.backgroundColor = '#60b347';
         document.querySelector('.number').style.width = '30rem';
         if(score > highScore){
             highScore = score;
             document.querySelector('.highscore').textContent = highScore;
         }
     }else if (guess !== num){
        if(score > 1){
            displayMessage(guess > num?'Too High!🤦‍♂️' : 'Too Low!🤦‍♂️');
            score--;
            document.querySelector('.score').textContent = score;
         }else{
             displayMessage('you lost the game!');
             document.querySelector('.score').textContent = 0;
         }

        }
});




