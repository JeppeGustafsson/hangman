const hangmanWrapper = document.getElementById('hangman-wrapper');

const hangman = () => {
    switch(errorOutput.children.length) {
        case 1:
            hangmanWrapper.classList.add('one-wrong');
        break;
        case 2: 
            hangmanWrapper.classList.remove('one-wrong');
            hangmanWrapper.classList.add('two-wrong');
        break;
        case 3: 
            hangmanWrapper.classList.remove('two-wrong');
            hangmanWrapper.classList.add('three-wrong');
        break;
        case 4: 
            hangmanWrapper.classList.remove('three-wrong');
            hangmanWrapper.classList.add('four-wrong');
        break;
        case 5: 
            hangmanWrapper.classList.remove('four-wrong');
            hangmanWrapper.classList.add('five-wrong');
        break;
    }
}