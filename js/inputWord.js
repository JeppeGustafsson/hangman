//Elements
const output = document.getElementById('word-wrapper');
const startBtn = document.getElementById('start-button');
const input =  document.getElementById('game-word');
let delay = 2.2; //delay for first element to animate

//Function that handles inputvalue and render letter elements
const addWord = () => {
    document.getElementById('title').classList.add('animate__hinge');
    let inputValue = input.value.toLowerCase();
    const splitValue = inputValue.split("");
    splitValue.map(letter => {
        const content = `<div class="letter">
                            <p>${letter}</p>
                        </div>`;
        output.innerHTML += content;
    })
}

//Simple function for evaluating input length
const evaluateInput = () => {
    if (input.value.length < 2) {
        startBtn.classList.add('disabled');
    } else {
        startBtn.classList.remove('disabled');
    }
}
evaluateInput();

//Auto scroll function for easy navigation
const scrollDown = () => {
    window.scrollTo(0,document.body.scrollHeight)
}

//Runs multiple functions + starts animation on delay after scroll
const startGame = () => {
    document.getElementById('game-section').style.display = "flex";
    addWord();
    setTimeout(() => {
        scrollDown();
    }, 1500);
    setTimeout(() => {
        document.querySelector('.start').style.display = "none";
        output.style.opacity = 1;
        document.querySelectorAll('.letter').forEach(child => {
            child.style.animationDelay = `${delay}s`;
            delay += 0.1;
        });
    }, 2000);
}

startBtn.addEventListener('click', startGame);

