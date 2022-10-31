// import functions and grab DOM elements
const shedButton = document.getElementById('shed-button');
const treeButton = document.getElementById('tree-button');
const boulderButton = document.getElementById('boulder-button');
const resetButton = document.getElementById('reset-button');
const tryAgainButton = document.getElementById('try-again-button');

const shedContainer = document.getElementById('shed-container');
const treeContainer = document.getElementById('tree-container');
const boulderContainer = document.getElementById('boulder-container');

const totalEl = document.getElementById('total');
const lossesEl = document.getElementById('losses');
const winsEl = document.getElementById('wins');

// initialize state
const hidingPlaces = ['tree', 'shed', 'boulder'];

let correctGuesses = 0;
let totalGuesses = 0;

shedButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'shed');
});

treeButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'tree');
});

boulderButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'boulder');
});

resetButton.addEventListener('click', () => {
    correctGuesses = 0;
    totalGuesses = 0;
    totalEl.textContent = 0;
    winsEl.textContent = 0;
    lossesEl.textContent = 0;
    resetFaceClass();
});

tryAgainButton.addEventListener('click', () => {
    // reset the styles
    resetFaceClass();
});

function resetFaceClass() {
    shedContainer.classList.remove('face');
    treeContainer.classList.remove('face');
    boulderContainer.classList.remove('face');
    shedButton.classList.remove('hidden');
    treeButton.classList.remove('hidden');
    boulderButton.classList.remove('hidden');
    tryAgainButton.classList.add('hidden');
}

function handleGuess(correctSpot, userGuess) {
    // then increment the guesses
    totalGuesses++;

    // then grab the appropriate container element for the correct guess from the DOM
    const correctHidingPlace = document.getElementById(`${correctSpot}-container`);

    // then add the face class to that element so that the face shows up
    correctHidingPlace.classList.add('face');

    // then if the user guess is correct, increment the correct guesses
    if (userGuess === correctSpot) {
        correctGuesses++;
    }

    // update the DOM to show this change to the user (including the losses, not tracked directly in state)
    totalEl.textContent = totalGuesses;
    winsEl.textContent = correctGuesses;
    lossesEl.textContent = totalGuesses - correctGuesses;

    // and show the try again button/hide the others

    // just uncommenting these lets more than one be right lol so that's a stretch goal
    // shedButton.classList.add('hidden');
    // treeButton.classList.add('hidden');
    // boulderButton.classList.add('hidden');
    tryAgainButton.classList.remove('hidden');
}
