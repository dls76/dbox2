window.addEventListener('load', loadAniversariantes)

let dataAtual = new Date()

let diaDoMes = ('0' + dataAtual.getDate()).slice(-2)

let dataAtualCompleta = document.querySelector('#dataAtualizada')

dataAtualCompleta.innerHTML = `${diasDaSemana[dataAtual.getDay()]}, ${diaDoMes} de ${mss[dataAtual.getMonth()]} de ${dataAtual.getFullYear()}`


function loadAniversariantes() {    

    for ( let i=0; pessoas.length; i++ ) { 

        // if ( pessoas[i].mes == dataAtual.getMonth() ) { 

            let h1 = document.querySelector('#h1-aniversariantes')
            h1.classList.add('h1Aniver')
            h1.innerHTML = "Aniversariantes"

            let main = document.querySelector('#main-aniversariantes')
            main.classList.add('mainAniver')

            let linha = document.createElement('div')
            linha.classList.add('linha')
            main.appendChild(linha)
            
            let dia = document.createElement('div')
            dia.classList.add('dia')

            if ( pessoas[i].dia < 10) {
                dia.innerHTML = '0' + pessoas[i].dia + '<br>' + (mss[pessoas[i].mes]).slice(0,3)
            } else {
                dia.innerHTML = pessoas[i].dia + '<br>' + (mss[pessoas[i].mes]).slice(0,3)
            }

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

            let regressiva = document.createElement('div')
            regressiva.classList.add('regressivaAniver')
            linha.appendChild(regressiva)
            

            const today = dataAtual
            today.setHours(0,0,0,0)

            const timeDiff = pessoas[i].data - today
            const daysRemaining = Math.floor(timeDiff/(1000*60*60*24))

            if (daysRemaining < -1) {
                regressiva.innerHTML = `${Math.abs(daysRemaining)} dias atrás`
                regressiva.style.color = "lightgray"
            } else if (daysRemaining == -1) {
                regressiva.innerHTML = `Ontem`
                regressiva.style.color = "lightgray"
            } else if (daysRemaining == 0) {
                regressiva.innerHTML = `Hoje!`
                regressiva.style.color = "red"
                regressiva.style.fontWeight = "600"
            } else if (daysRemaining == 1) {
                regressiva.innerHTML = `Amanhã`
                regressiva.style.color = "dodgerblue"
                regressiva.style.fontWeight = "600"
            } else {
                regressiva.innerHTML = `Faltam ${daysRemaining} dias`
            }
        // } 
    }
}