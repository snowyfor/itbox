const btnRandom = document.querySelector('#btnRandom');
const btnRed = document.querySelector('#btnRed');
const btnBlue = document.querySelector('#btnBlue');
const btnGreen = document.querySelector('#btnGreen');

function btnRandomHandler() {
    let colors = ['crimson', 'darkgreen', 'darkblue'];
    let number = Math.floor(Math.random() * colors.length);

    let body = document.querySelector('body');
    body.style.backgroundColor = colors[number];
}
function btnRedHandler() {
    let body = document.querySelector('body');
    body.style.backgroundColor = 'crimson';
}
function btnBlueHandler() {
    let body = document.querySelector('body');
    body.style.backgroundColor = 'darkblue';
}
function btnGreenHandler() {
    let body = document.querySelector('body');
    body.style.backgroundColor = 'darkgreen';
}

btnRandom.addEventListener('click', btnRandomHandler);
btnRed.addEventListener('click', btnRedHandler);
btnBlue.addEventListener('click', btnBlueHandler);
btnGreen.addEventListener('click', btnGreenHandler);

