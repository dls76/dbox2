
const btnMobile = document.getElementById('btn-mobile')

function toggleMenu() {
    
    const nav = document.getElementById('nav')

    nav.classList.toggle('active')

}

btnMobile.addEventListener('click', toggleMenu)


 
document.getElementById("linkRotinas").addEventListener("click", function(event){
    event.preventDefault();
    window.open("https://calendar.google.com/calendar/u/0/r");
    window.open("https://mail.google.com/mail/u/0/#inbox");
    window.open("https://www.classapp.com.br/");
    window.open("https://acrm.sdasystems.org/login/");
});

function scrollToTop() {
    window.scrollTo(0, 0)
}

const btTop = document.querySelector('#top')
window.addEventListener("scroll", ()=>{
    if (window.scrollY > 200) {
        btTop.classList.add("active")
    } else {
        btTop.classList.remove("active")
    }
})