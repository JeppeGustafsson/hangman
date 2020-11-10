//Keys that wont register
let invalidKeys = [
    'Digit1',
    'Digit2',
    'Digit3',
    'Digit4',
    'Digit5',
    'Digit6',
    'Digit7',
    'Digit8',
    'Digit9',
    'Digit0',
    'Minus',
    'Enter',
    'Backslash',
    'Quote',
    'BracketLeft',
    'Semicolon',
    'Slash',
    'Period'
];

// Elements
const errorOutput = document.getElementById('error-words');
let incorrectAudio = document.getElementById('incorrect-sound');

//Runs error handling, first testing if it can find a letter that matches a keypress, if undefined it will run next function
const logError = (e) => {
    let test = Array.from(output.children).find(item => {
        if( item.firstChild.nextSibling.innerHTML === e.code.slice(3).toLowerCase() ) {
            return item;
        }
    });//If undefined it will check if there is an output or invalid keypress and then run the function that renders wrong inputs
    if ( typeof test === 'undefined') {
        if ( output.children.length === 0 || invalidKeys.includes(e.code)) {
            console.errors('empty');
        } else {
            const errorObject = `<p>${e.code.slice(3).toLowerCase()}</p>`;
            errorOutput.innerHTML += errorObject;
            hangman(); //Runs function that hang the man
            incorrectAudio.play();
            score -= 10;
            document.getElementById('score').innerHTML = score;
        }
    };
};