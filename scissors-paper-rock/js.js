function computerPlay(){
    let a = Math.floor(Math.random() * 3);
    if (a === 0){
        a = "Rock";
        }
    else if (a === 1){
        a = "Paper";
    }
    else {
        a = "Scissors";
    }
return a;
}

let playerwin = 0, computerwin = 0;
const startxx = document.querySelector('#START');


function round(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay();

    if (playerSelection === "rock"){
        startxx.setAttribute('style', 'display: none');
        resultx.textContent = 'You Chose Rock';
        cret.textContent = '';

        if (computerSelection === "Paper"){
            disply.textContent = `You Lose! Computer chose ${computerSelection}`
            computerwin++;
            computersc.textContent = computerwin;
            
        }
        else if (computerSelection === "Scissors"){
            disply.textContent = `You Win! Computer chose ${computerSelection}`;
            playerwin++;
            playersc.textContent = playerwin;
        }
        else if (computerSelection === "Rock"){

            disply.textContent = `It's a draw! Both chose ${computerSelection}`;
        }

    }

    else if (playerSelection === "paper"){
        startxx.setAttribute('style', 'display: none');
        resultx.textContent = 'You Chose Paper';
        cret.textContent = '';

        if (computerSelection === "Rock"){
            disply.textContent = `You Win! Computer chose ${computerSelection}`;
            playerwin++;
            playersc.textContent = playerwin;
        }
        else if (computerSelection === "Scissors"){
            disply.textContent = `You Lose! Computer chose ${computerSelection}`;
            computerwin++;
            computersc.textContent = computerwin;
            if (computerwin === 5){
                console.log('you win!');
            }

        }
        else if (computerSelection === "Paper"){
            disply.textContent = `It's a draw! Both chose ${computerSelection}`;
        }
        
    }

    else if (playerSelection === "scissors"){
        startxx.setAttribute('style', 'display: none');
        resultx.textContent = 'You Chose Scissors';
        cret.textContent = '';

        if (computerSelection === "Rock"){
            disply.textContent = `You Lose! Computer chose ${computerSelection}`;
            computerwin++;
            computersc.textContent = computerwin;

        }
        else if (computerSelection === "Paper"){
            disply.textContent = `You Win! Computer chose ${computerSelection}`;
            playerwin++;
            playersc.textContent = playerwin;
        }
        else if (computerSelection === "Scissors"){
            disply.textContent = `It's a draw! Both chose ${computerSelection}`;
        }
    }

        if (computerwin === 5){
            cret.textContent = `Machines always win, with ${computerwin}`;
            winner.appendChild(cret);
            computerwin = 0;
            playerwin = 0;
            playersc.textContent = 0;
            computersc.textContent = 0;

        
        }
        
        else if (playerwin === 5){
            cret.textContent = `You win! with ${playerwin} vs the stupid machines ${computerwin}`;
            winner.appendChild(cret);
            computerwin = 0;
            playerwin = 0;
            playersc.textContent = 0;
            computersc.textContent = 0;
        }
    }


    


/*
function game() {
    for (i = 0; i < 5; i++){                                        //iterates through 5 rounds
        console.log(round(prompt("Choose scissors paper or rock bruv"), computerPlay));
    }
    if (computerwin > playerwin){
        console.log(`comp wins :( with ${computerwin} vs your ${playerwin}`);
    }
    else if (playerwin > computerwin){
        console.log(`player wins :) with ${playerwin} vs computer ${computerwin}`);
    }
    else {
        console.log(`both tie with ${computerwin} and ${playerwin}`);
    }

}
*/


//nodelist



const resultx = document.querySelector('.resultsx');


const resultsjs = document.querySelector('#results');
const disply = document.createElement('p');
resultsjs.appendChild(disply);





document.getElementById('scissors').addEventListener('click', () => {
    console.log(round(document.getElementById('scissors').id, computerPlay));
})

document.getElementById('paper').addEventListener('click', () => {
    console.log(round(document.getElementById('paper').id, computerPlay));
})

document.getElementById('rock').addEventListener('click', () => {
    console.log(round(document.getElementById('rock').id, computerPlay));
})

//player score
const scorejs = document.querySelector('.player-score');
const playersc = document.createElement('p');
scorejs.appendChild(playersc);

//computer score

const compscorejs = document.querySelector('.computer-score');
const computersc = document.createElement('p');
compscorejs.appendChild(computersc);

const winner = document.getElementById('winner');
const cret = document.createElement('p');

computersc.textContent = 0;
playersc.textContent = 0;
