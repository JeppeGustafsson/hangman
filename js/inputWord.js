const output = document.getElementById('word-wrapper');

const addWord = () => {
    let inputValue = document.getElementById('game-word').value.toLowerCase();
    const splitValue = inputValue.split("");
    splitValue.map(letter => {
        const content = `<div class="letter">
                            <p>${letter}</p>
                        </div>`;
        output.innerHTML += content;
    })
}

const scrollDown = () => {
    window.scrollTo(0,document.body.scrollHeight)
}

const startGame = () => {
    addWord();
    setTimeout(() => {
        scrollDown();
    }, 500);
    setTimeout(() => {
        document.querySelector('.start').style.display = "none";
    }, 1000);
}


document.getElementById('start-button').addEventListener('click', startGame);

