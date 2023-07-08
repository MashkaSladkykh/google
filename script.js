const btn = document.getElementById('lucky');
const parent = document.getElementById('logo-parent');
const logo = document.getElementById('logo');
const oddity = './img/oddity.svg';

btn.addEventListener('click', () => {
    logo.src = oddity;
})