

const addWord = () => {
    const inputValue = document.getElementById('game-word').value;
    const splitValue = inputValue.split("");
    console.log(splitValue);
}

document.getElementById('start-button').addEventListener('click', addWord)