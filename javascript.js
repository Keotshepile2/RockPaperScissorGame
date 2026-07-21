let win = 0;
   let lose = 0;
   let tie = 0;
 function playerpick(playermove){

   
   const rand  = Math.floor(Math.random() * 3) +1;
   let compmove = '';
   if(rand === 1)
      compmove = 'rock';
   else if(rand === 2)
       compmove = 'paper';
    else if(rand === 3)
        compmove = 'scissor';
   
  if(playermove === 'rock'){
       
       if(compmove === 'rock')
       {
         tie++;
         document.querySelector('.result2').innerHTML = 'Tie';
         document.querySelector('.tie').innerHTML = `Ties : ${tie}`;
         document.querySelector('.result1').innerHTML = `player ✊️ | ✊️ computer`;
         
       }
       else if(compmove === 'paper')
       {
         lose++;
         document.querySelector('.result2').innerHTML = 'You lose!';
         document.querySelector('.lose').innerHTML = `Loses : ${lose}`;
         document.querySelector('.result1').innerHTML = `player ✊️ | 🖐 computer`;
       }
      else  if(compmove === 'scissor')
       {
         win++;
         document.querySelector('.result2').innerHTML = 'You Win';
         document.querySelector('.win').innerHTML = `Wins : ${win}`;
         document.querySelector('.result1').innerHTML = `player ✊️ | ✌️ computer`;
       }
 }
     
 else if(playermove === 'paper'){
       
       if(compmove === 'rock')
       {
          win++;
         document.querySelector('.result2').innerHTML = 'You Win';
         document.querySelector('.win').innerHTML = `Wins : ${win}`;
         document.querySelector('.result1').innerHTML = `player 🖐 | ✊️ computer`;
       }
       else if(compmove === 'paper')
       {
         tie++;
         document.querySelector('.result2').innerHTML = 'Tie';
         document.querySelector('.tie').innerHTML = `Ties : ${tie}`;
         document.querySelector('.result1').innerHTML = `player 🖐 | 🖐 computer`;
       }
      else  if(compmove === 'scissor')
       {
         lose++;
         document.querySelector('.result2').innerHTML = 'You lose!';
         document.querySelector('.lose').innerHTML = `Loses : ${lose}`;
         document.querySelector('.result1').innerHTML = `player 🖐 | ✌️ computer`;
       }
 }
else if(playermove === 'scissor'){
       
       if(compmove === 'rock')
       {
         lose++;
         document.querySelector('.result2').innerHTML = 'You lose!';
         document.querySelector('.lose').innerHTML = `Loses : ${lose}`;
         document.querySelector('.result1').innerHTML = `player ✌️ | ✊️ computer`;
       }
       else if(compmove === 'paper')
       {
         win++;
         document.querySelector('.result2').innerHTML = 'You Win';
         document.querySelector('.win').innerHTML = `Wins : ${win}`;
         document.querySelector('.result1').innerHTML = `player ✌️ | 🖐 computer`;
       }
      else if(compmove === 'scissor')
       {
         tie++;
         document.querySelector('.result2').innerHTML = 'Tie';
         document.querySelector('.tie').innerHTML = `Ties : ${tie}`;
         document.querySelector('.result1').innerHTML = `player ✌️ | ✌️ computer`;
       }
}
   const res = document.querySelector('.result2');
   if(res.innerHTML === 'You Win')
         res.style.color ="green";
   else if(res.innerHTML === 'You lose!')
         res.style.color ="red";
   else if(res.innerHTML === 'Tie')
         res.style.color ="blue";
   
        
   
 }
  function reset(){
    win = 0;
    lose = 0;
    tie = 0;
    document.querySelector('.win').innerHTML = `Wins : 0`;
    document.querySelector('.lose').innerHTML = `Loses : 0`;
    document.querySelector('.tie').innerHTML = `Ties : 0`;
    document.querySelector('.result1').innerHTML = '';
    document.querySelector('.result2').innerHTML = '';
    
  }
