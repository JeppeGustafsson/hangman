const logKey = (e) => {
    Array.from(output.children).forEach(item => {
        if (item.firstChild.nextSibling.innerHTML === e.code.slice(3).toLowerCase()) {
                item.classList.add('active');
        }
    });
    logError(e);
    if (document.querySelectorAll('.active').length === output.children.length) {
        setTimeout (() => {
            document.getElementById('end-section').style.opacity = "0.8";
            document.getElementById('end-section').style.pointerEvents = "all";
        }, 500);
        document.getElementById('end-text').innerHTML = 'You win';
        document.getElementById('restart-btn').innerHTML = 'Rematch';
    }
}

document.addEventListener('keypress', logKey);