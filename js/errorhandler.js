let errors = [];
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
    
const errorOutput = document.getElementById('error-words');
let incorrectAudio = document.getElementById('incorrect-sound');




const logError = (e) => {
    let test = Array.from(output.children).find(item => {
        if( item.firstChild.nextSibling.innerHTML === e.code.slice(3).toLowerCase() ) {
            return item;
        }
    });//Block codes and metakeys
    if ( typeof test === 'undefined') {
        if ( output.children.length === 0 || invalidKeys.includes(e.code)) {
            console.log('empty');
        } else {
            const errorObject = `<p>${e.code.slice(3).toLowerCase()}</p>`;
            errorOutput.innerHTML += errorObject;
            hangman();
            incorrectAudio.play();
            score -= 10;
            document.getElementById('score').innerHTML = score;
        }
    };
};