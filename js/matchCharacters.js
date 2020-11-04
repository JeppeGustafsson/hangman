const logKey = (e) => {
    Array.from(output.children).forEach(item => {
        if (item.firstChild.nextSibling.innerHTML === e.code.slice(3).toLowerCase()) {
                item.classList.add('active');
        }
    });
    logError(e);
}

document.addEventListener('keypress', logKey);