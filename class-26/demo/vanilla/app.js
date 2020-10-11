// button clicker add event listener on click

// State is an object
// in memory object to hold some variables and data for my app
let state = {};
// words

let button = document.getElementById("clicker");
button.addEventListener('click', handleClick);

let input = document.getElementById('words-input');
input.addEventListener('input', handleWords );


function handleClick() {
    // reverse words 
    state.words = state.words.split('').reverse().join('');
    render();
}

function handleWords(e) {
    state.words = e.target.value;
    console.log("__UPDATED STATE __ : ", state.words);
}

function init() {
    state.words = 'Initial State';
    render();
}

function render() {
    // update the text content
    document.getElementById("output").textContent = state.words;
}

init();
