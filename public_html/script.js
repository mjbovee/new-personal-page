const name = document.querySelector('#name')
const about = document.querySelector('#about')

window.onload = function() {
    bringIn()
}

function bringIn() {
    name.classList.toggle('active')
    about.classList.toggle('active')
}