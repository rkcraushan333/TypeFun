// for onloading javascript
window.onload = start;

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
    const s = show();
    console.log("MY string is " + s);
    seconds.innerHTML = currentLevel;
    // matching the word input
    wordInput.addEventListener('input', startMatch);
    setInterval(timer, 1000);
    setInterval(showStatus, 50);
}

function startMatch() {
    if (currentMatch()) {
        isPlaying = true;
        time = currentLevel + 1;
        show();
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

function show() {
    const url = 'https://random-words-api.vercel.app/word';
    const xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);
    // var curr_string;
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            const response = JSON.parse(xhr.responseText);
            console.log('Random word:', response.at(0).word);
            currentWord.innerHTML = response.at(0).word;
            return response.at(0).word;
            // curr_string.concat(response.at(0).word);
            // console.log("Inside "+curr_string);
        } else {
            console.error('Request failed with status:', xhr.status);
        }
    };

    xhr.onerror = function () {
        console.error('Request failed');
    };

    xhr.send();
    // console.log("Return "+curr_string);
    return "";
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


