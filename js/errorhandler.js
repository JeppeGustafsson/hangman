let errors = [];
const errorOutput = document.getElementById('error-words');

const logError = (e) => {
    let test = Array.from(output.children).find(item => {
        if( item.firstChild.nextSibling.innerHTML === e.code.slice(3).toLowerCase() ) {
            return item;
        }
    });
    if ( typeof test === 'undefined') {
        if ( output.children.length === 0 ) {
            console.log('empty');
        } else {
            errors.push(e.code.slice(3).toLowerCase()); 
            const errorObject = `<p>${e.code.slice(3).toLowerCase()}</p>`;
            errorOutput.innerHTML += errorObject;
            hangman();
        }
    };
};

