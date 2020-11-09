let correctAudio = document.getElementById('correct-sound');
let score = 0;

const logKey = (e) => {
    Array.from(output.children).forEach(item => {
        if (item.firstChild.nextSibling.innerHTML === e.code.slice(3).toLowerCase()) {
                item.classList.add('active');
                correctAudio.play();
                score =+ 10;
                document.getElementById('score').innerHTML = score;
        }
    });
    logError(e);

    if ( output.children.length === 0 ) {
        console.log('is empty bruh');
    } else {
        if (document.querySelectorAll('.active').length === output.children.length) {
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