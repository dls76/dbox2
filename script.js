
const btnMobile = document.getElementById('btn-mobile')

function toggleMenu() {
    
    const nav = document.getElementById('nav')

    nav.classList.toggle('active')

}

btnMobile.addEventListener('click', toggleMenu)

document.getElementById("linkRotinas").addEventListener("click", function(event){
    event.preventDefault();
    window.open("https://calendar.google.com/calendar/u/0/r", "_blank");
    window.open("https://mail.google.com/mail/u/0/#inbox", "_blank");
    window.open("https://www.classapp.com.br/", "_blank");
    window.open("https://acrm.sdasystems.org/login/", "_blank");
    window.open("https://app.powerbi.com/groups/me/apps/ba9d2c5f-5784-4ae0-bd7f-e95646d75b33/reports/338d7393-2455-4cbc-80bb-869af34d0c42/870332ce8437ac7e07ff?redirectedFromSignup=1&experience=power-bi", "_blank");
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
