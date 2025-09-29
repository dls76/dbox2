import { plantaosexta } from './escalas.js';

function renderizarEscala() {
    const escala = document.getElementById('plantaoContent');
    
    if (!escala) {
        console.error('Elemento plantaoContent não encontrado!');
        return;
    }

    // Obtém a data atual normalizada (meia-noite no fuso local)
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    let plantaoMaisProximo = null;
    let menorDiferenca = Infinity;

    // Meses abreviados
    const mesesAbreviados = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

    plantaosexta.forEach((plantao, index) => {
        const div = document.createElement('div');
        div.className = 'plantao-item';
        div.id = `plantao-${index}`;
        
        // Normaliza a data do plantão para meia-noite
        const dataPlantao = new Date(plantao.data);
        dataPlantao.setHours(0, 0, 0, 0);
        
        // Formata a data como "14/Nov"
        const dia = dataPlantao.getDate().toString().padStart(2, '0');
        const mes = mesesAbreviados[dataPlantao.getMonth()];
        const dataFormatada = `${dia}/${mes}`;
        
        // Verifica se é o plantão mais próximo da data atual (futuro ou hoje)
        const diferencaDias = Math.floor((dataPlantao - hoje) / (1000 * 60 * 60 * 24));
        
        if (diferencaDias >= 0 && diferencaDias < menorDiferenca) {
            menorDiferenca = diferencaDias;
            plantaoMaisProximo = div;
        }
        
        // Adiciona classe especial se for hoje ou futuro próximo
        if (diferencaDias === 0) {
            div.classList.add('plantao-hoje');
        } else if (diferencaDias > 0 && diferencaDias <= 7) {
            div.classList.add('plantao-proximo');
        }
        
        div.innerHTML = `
            <div class="data">${dataFormatada}</div>
            <div class="person">Plantão: ${plantao.person}</div>
            ${plantao.monitoria ? `<div class="monitoria">Monitoria: ${plantao.monitoria}</div>` : ''}
        `;
        
        escala.appendChild(div);
    });

    // Rola até o plantão mais próximo após um pequeno delay
    if (plantaoMaisProximo) {
        setTimeout(() => {
            plantaoMaisProximo.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }, 100);
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderizarEscala);
} else {
    renderizarEscala();
}