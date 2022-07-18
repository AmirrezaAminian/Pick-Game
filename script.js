'use strict' ; 

// Selecting elements 
const score0El = document.querySelector('#score--0') ;
const score1El = document.getElementById('score--1') ;
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice') ;
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


// Add background to active player 
const player0El = document.querySelector('.player--0') ;
const player1El = document.querySelector('.player--1') ;


// Starting conditions
score0El.textContent = 0 ;
score1El.textContent = 0 ;
diceEl.classList.add('hidden') ;

const scores = [0,0] ;
let currentScore = 0 ;
let activeplayer = 0 ;


// Rolling dice functionality 

btnRoll.addEventListener('click' , function(){
    // 1. Generating a random dice roll
     const dice  = Math.trunc(Math.random() * 6) + 1 ;

    // 2. Display dice
    diceEl.classList.remove('hidden') ;
    diceEl.src = `dice-${dice}.png`

    // 3. Check for rolled 1 : if true , switch to next player
    if(dice !== 1){
        // Add dice to the current score

        // currentscore += dice ;
        currentScore = currentScore + dice ;
        document.getElementById(`current--${activeplayer}`).textContent  = currentScore ;

        // current0El.textContent = currentScore ; // change 

    }else{
        // Switch to the next player 
         document.getElementById(`current--${activeplayer}`).textContent = 0;
        activeplayer = activeplayer === 0 ? 1 : 0 ;
        currentScore = 0
        
        // toggle : aghe ke classi ke to parantez midim behesho dashte bashe hazf mishe , aghe nadashte bashe ezafe mishe 

        // ma aghe nagah koni dar vaghe class player active  hamoon backgroundas ke to avali be sorat otomat hastesh 
        player0El.classList.toggle('player--active') ;
        player1El.classList.toggle('player--active') ;

    }
})
