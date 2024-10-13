export const plantoes = [
    { data: new Date(2024, 8, 24), nome: "Alexandro, Josi, Carin, Sila, Valéria" },
    { data: new Date(2024, 9, 1), nome: "Douglas, Alícia, Carin, Sila, Renata" },
    { data: new Date(2024, 9, 8), nome: "Alexandro, Josi, Juliana, Sila, Carol" },
    { data: new Date(2024, 9, 22), nome: "Douglas, Alícia, Carin, Sila, Andressa" },
    { data: new Date(2024, 9, 29), nome: "Alexandro, Josi, Juliana, Sila, Malu" },
    { data: new Date(2024, 10, 5), nome: "Douglas, Alícia, Carin, Sila, Jaque" },
    { data: new Date(2024, 10, 12), nome: "Alexandro, Josi, Juliana, Sila, Camila" },
    { data: new Date(2024, 10, 19), nome: "Douglas, Alícia, Carin, Sila, Valéria" },
    { data: new Date(2024, 10, 26), nome: "Alexandro, Josi, Juliana, Sila, Renata" },
    { data: new Date(2024, 11, 3), nome: "Douglas, Alícia, Carin, Sila, Carol" },
    { data: new Date(2024, 11, 10), nome: "Alexandro, Josi, Juliana, Sila, Andressa" },
    { data: new Date(2024, 11, 17), nome: "Alícia, Juliana, Sila, Malu" }
];


// Função para obter o próximo plantão, destacando o atual até o final do dia
export function getProximoPlantao() {
    const agora = new Date();
    // Filtra os plantões futuros ou que estão no mesmo dia
    let futureDates = plantoes.filter(e => e.data >= agora.setHours(0, 0, 0, 0));
    return futureDates.length > 0 ? futureDates[0] : null;
}

// Função para gerar a lista de plantões com destaque no próximo plantão
export function getListaPlantoesComDestaque() {


    const proximoPlantao = getProximoPlantao();
    const hoje = new Date().setHours(0, 0, 0, 0); // Dia atual sem horas

    
    return plantoes.map(plantao => {

        let dia = plantao.data.getDate();
        let mes = plantao.data.getMonth() + 1;
        dia = dia < 10 ? "0" + dia : dia;
        
        // Verifica se o plantão é o próximo ou se estamos no dia do plantão
        if (proximoPlantao && plantao.data.getTime() === proximoPlantao.data.getTime() && plantao.data.getTime() >= hoje) {
            
            return `<span class="destaque">${dia}/${mes} - ${plantao.nome}</span>`;
        }
        
        
        return `<span class="plantao">${dia}/${mes} - ${plantao.nome}</span>`;
    }).join('<br>');
    
}
