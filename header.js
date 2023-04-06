
let menuDotted = document.querySelector('.menu-dotted')
menuDotted.addEventListener('click', openDotted)

function openDotted(){
    let subDotted = document.querySelector('.sub-dotted')
    subDotted.classList.add('scale-in-tr')
    subDotted.classList.toggle('showDotted')
}