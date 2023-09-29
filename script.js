window.onload = redirecionarParaAniversariantes()

function redirecionarParaAniversariantes() {
    window.location.href='https://dls76.github.io/aniversariantes/'
}


















const btnMobile = document.getElementById('btn-mobile')

function toggleMenu() {
    
    const nav = document.getElementById('nav')

    nav.classList.toggle('active')
    

}

btnMobile.addEventListener('click', toggleMenu)


let pessoa = {nome: 'Matheus', idade: 29, cidade: 'Floripa'}

// Transformar o objeto em string e salvar em localStorage
localStorage.setItem('pessoa', JSON.stringify(pessoa));

// Receber a string
let pessoaString = localStorage.getItem('pessoa');

// transformar em objeto novamente
let pessoaObj = JSON.parse(pessoaString);

// console.log(pessoaObj.nome + " " + pessoaObj.idade); 
// Matheus