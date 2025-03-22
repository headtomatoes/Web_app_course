function getElement(selector) { 
    return document.querySelector(selector);
}
const form = getElement('#hiddenForm');
const submitButton = getElement('#submit');
const notification = getElement('#notification');
function startCountdown() {
    form.style.display = 'block';
    let count = 60;
    let interval = setInterval(function() {
        count--;
        let minutes = Math.floor(count / 60);
        let seconds = count % 60;
        getElement('#countdown').textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
        if (count <= 0) {
            clearInterval(interval);
            form.style.display = 'none';
            getElement('#start').style.display = 'none';
            notification.style.display = 'block';
            submitButton.style.display = 'block';
        }
    }, 1000);
}


document.addEventListener("DOMContentLoaded", () => {
    // specify the function that's run when the Join button is clicked
    getElement("#start").addEventListener("click", startCountdown);
});