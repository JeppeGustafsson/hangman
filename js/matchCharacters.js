let correctAudio = document.getElementById('correct-sound'); //Audio el for correct guess
let score = 0; //Initial value

//Function for character matching, it handles visibility for letters, 
//audio, score iteration + sets off error handler
const logKey = (e) => {
    Array.from(output.children).forEach(item => {
        if (item.firstChild.nextSibling.innerHTML === e.code.slice(3).toLowerCase()) { //Handles matching
                item.classList.add('active');
                correctAudio.play();
                score =+ 10;
                document.getElementById('score').innerHTML = score;
        }
    });
    logError(e);

    if ( output.children.length === 0 ) { //Checks output length, can only match if there is a word
        console.error('Cant match if output is empty'); 
    } else {
        if (document.querySelectorAll('.active').length === output.children.length) { //If all letters have the active class it will run and win game
            setTimeout (() => {
                document.getElementById('end-section').style.opacity = "0.8";
                document.getElementById('end-section').style.pointerEvents = "all";
            }, 500);
            document.getElementById('end-text').innerHTML = 'You win';
            document.getElementById('restart-btn').innerHTML = 'Play again';
        }
    }
}

document.addEventListener('keypress', logKey);