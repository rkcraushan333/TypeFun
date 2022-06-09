// for onloading javascript
window.onload = start;
const words = [
    'hello',
    'welcome',
    'cocktail',
    'developer',
    'investigate',
    'javascript',
    'siblings',
    'hormones',
    'master',
    'codeforces',
    'codechef',
    'leetcode',
    'umbrella',
    'papaya',
    'kiwi',
    'laughter',
    'echo',
    'space',
    'hero',
    'lucky',
    'gravity',
    'revolver',
    'bullet',
    'message',
    'instagram',
    'school',
    'college',
    'pigeon',
    'sympotms',
    'establishment',
    'nesting',
    'starfish',
    'joke',
    'stand',
    'magic',
    'hurricane',
    'instagram',
];

const levels = {
    easy: 5,
    medium: 3,
    hard: 2
}
const currentLevel = levels.easy;
// Globals
let time = currentLevel;
let score = 0;
let isPlaying;

// DOM ELements
const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");

// Intialize game 
function start() {
    seconds.innerHTML = currentLevel;
    show(words);
    // matching the word input
    wordInput.addEventListener('input', startMatch);
    setInterval(timer, 1000);
    setInterval(showStatus, 50);
}
function startMatch() {
    if (currentMatch()) {
        isPlaying = true;
        time = currentLevel + 1;
        show(words);
        wordInput.value = '';
        score++;
    }
    if (score < -1) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }
}
function currentMatch() {
    if (wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'Correct!!!';
        return true;
    }
    else {
        message.innerHTML = '';
        return false;
    }
}

function show(words) {
    const randIndex = Math.floor(Math.random() * words.length);
    currentWord.innerHTML = words[randIndex];
}
function timer() {
    if (time > 0)
        time--;
    else if (time == 0)
        isPlaying = false;
    timeDisplay.innerHTML = time;
}
function showStatus() {
    if (time == 0 && !isPlaying) {
        message.innerHTML = "Game Over!!!";
        score = -1;
    }
}
