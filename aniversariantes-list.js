window.addEventListener('load', loadAniversariantes)

let dataAtual = new Date()

function loadAniversariantes() {

    
    for ( let i=0; pessoas.length; i++ ) { 

        if ( pessoas[i].mes == dataAtual.getMonth() ) { 

            let h1 = document.querySelector('#h1-aniversariantes')
            h1.classList.add('h1Aniver')
            h1.innerHTML = "Aniversariantes de "+ mss[dataAtual.getMonth()]

            let main = document.querySelector('#main-aniversariantes')
            main.classList.add('mainAniver')

            let linha = document.createElement('div')
            linha.classList.add('linha')
            main.appendChild(linha)
            
            let dia = document.createElement('div')
            dia.classList.add('dia')
            dia.innerHTML = pessoas[i].dia
            linha.appendChild(dia)

            let box_foto = document.createElement('div')
            box_foto.classList.add('box-foto')
            linha.appendChild(box_foto)

            let foto = new Image()
            foto.src = pessoas[i].foto
            foto.classList.add('foto')
            box_foto.appendChild(foto)

            let box_infoPessoa = document.createElement('div')
            box_infoPessoa.classList.add('box-infoPessoa')
            linha.appendChild(box_infoPessoa)

            let nome = document.createElement('div')
            nome.classList.add('nome')
            nome.innerHTML = pessoas[i].nome
            box_infoPessoa.appendChild(nome)

            let funcao = document.createElement('div')
            funcao.classList.add('funcao')
            funcao.innerHTML = pessoas[i].funcao
            box_infoPessoa.appendChild(funcao)

        }
    }
}