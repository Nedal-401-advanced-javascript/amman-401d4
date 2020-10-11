let state = {};

let source = $('#stuff-template').html();
let template = Handlebars.compile(source);

// on click 
$('#clicker').on('click', handleClick);
$('#words-input').on('input', handleInput)

function handleClick() {
    state.words = state.words.split('').reverse().join('');
    render();
}

function handleInput(event) {
    state.words = $(this).val();
    console.log("__UPDATED STATE __: ", state.words);
}


function init() {
    state.words = 'Initial State';
    render();
}

function render() {
    // update the text content
    $('#stuff').html(template(state));
}

$(function() {
    init();
});



