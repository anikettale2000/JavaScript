let randomNumber = parseInt(Math.random() * 100 + 1);
// console.log(randomNumber);

const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const submit = document.querySelector('#subt');
const loworHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let PrevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid Number')
    }
    else if (guess < 1) {
        alert('PLease enter a number more than 1 is too low')
    }
    else if (guess > 100) {
        alert('PLease enter a  number less than 100')
    }
    else {
        PrevGuess.push(guess);
        if (numGuess === 10) {
            displayGuess(guess);
            displayMessage(`Game over. Random number is ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            cheakGuess(guess);
        }
    }

}

function cheakGuess(guess) {
    if (guess === randomNumber) {
        displayMessage('You Guessed it right');
        endGame();
    } else if (guess < randomNumber) {
        displayMessage('Number is too Low');
    } else if (guess > randomNumber) {
        displayMessage('Number is too high');
    }
}
// guessFeild 
function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess} `;
    numGuess++;
    remaining.innerHTML = `${10 - numGuess}`;

}

function displayMessage(message) {
    loworHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled' , '');// we have to use deasable with key value pair
    p.classList.add('button'); // In JavaScript, the classList property is used to manipulate the classes of an HTML element. It is typically used with the HTMLElement interface, and it provides methods to add, remove, toggle, and check for the existence of classes on the element.
    p.innerHTML = `<h2 id="newGame"> start New Game </h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        PrevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild();
        playGame = true;
    })
}