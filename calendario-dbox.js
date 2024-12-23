const eventos = [
    {dataInicial: new Date(2024, 11, 20), dataFinal: new Date(2024, 11, 25), nome: "Recesso escolar", responsável: '', foto: ''},
    {dataInicial: new Date(2024, 11, 26), dataFinal: new Date(2025, 0, 26), nome: "Férias de Professores", responsável: '', foto: ''},
    {dataInicial: new Date(2025, 0, 1), dataFinal: new Date(2025, 0, 1), nome: "Feriado Confraternização Universal", responsável: '', foto: ''},
    {dataInicial: new Date(2025, 0, 14), dataFinal: new Date(2025, 0, 17), nome: "Reunião de Departamento - ASP", responsável: '', foto: ''},
    {dataInicial: new Date(2025, 0, 18), dataFinal: new Date(2025, 0, 31), nome: "Missão Calebe", responsável: '', foto: ''},
    {dataInicial: new Date(2025, 0, 20), dataFinal: new Date(2025, 0, 20), nome: "Reunião Planejamento Administrativo – Equipe Gestora - ASP (manejo de crise)", responsável: '', foto: ''},
    {dataInicial: new Date(2025, 0, 21), dataFinal: new Date(2025, 0, 22), nome: "GEPEA – USB – Catre S L Purunã – Administrativo e pedagógico – presencial , financeiro – on line", responsável: '', foto: ''},    

// 20 a 24/01 - Pós em Capelania - FAP
// 21 - Treinamento em emergências saúde PUC - ADM e Monitoria
// 22 – Capacitação dos TIs – ASP (dia todo)
// 23 – Capacitação de Monitores, Zeladores e Coordenadores de disciplina, Auxiliares, Tutores, Psicólogos e Cipeiros, Cantinas e nutricionista, Auxiliares de bibliotecas (Nesta capacitação ter um momento de abordagem terapêutica - manejo de crise)
// 26/01 – Feriado Fazenda Rio Grande
// 26 a 29/01 - Concílio Família Ministerial (ASP)
// 27 - Início das Atividades Docentes
// 27 a 31 - Planejamento nas Unidades – Professores
// 27 a 30/01 - Reunião de Pais e Projeto de Acolhimento (antes do início das aulas
// 28 - Reunião de pais 6º ao EM (novos 18h30 - auditório e veteranos 19h30 - ginásio) 
// 29 - Reunião de pais geral (novos e veteranos) - EI ao 5º
// 30 – Capacitação Geral de Professores (Nesta capacitação ter um momento de abordagem terapêutica - manejo de crise)
// 30 - Reunião Bilíngue com pais (a confirmar)
// 31 – Encontro Pastores recém-chegados na educação USB - Zoom

]

let currentDate = new Date()

const eventosOrdenados = eventos.sort((a, b) => a.dataInicial - b.dataInicial); // Ordena os eventos com base na data inicial

const meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

const diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

const descritivo = document.querySelector('.descritivo');

eventosOrdenados.forEach((e) => {

    const evento = document.createElement('div');
    evento.classList.add('evento');

    const data = document.createElement('div');
    data.classList.add('data');

    let di = e.dataInicial.getDate()
    let df = e.dataFinal.getDate()
    let mi = e.dataInicial.getMonth()
    let mf = e.dataFinal.getMonth()

    if (di !== df || mi !== mf) {
        data.innerText = `${di} a ${df} ${meses[mf]}`;
    } else {
        data.innerText = `${di} ${meses[mi]}`;
    }

    const titulo = document.createElement('div');
    titulo.classList.add('titulo-evento');
    titulo.innerText = e.nome;

    const responsavel = document.createElement('div');
    responsavel.classList.add('responsavel-evento');

    let foto = new Image();
    foto.src = e.foto;
    foto.classList.add('img');
    responsavel.appendChild(foto);

    evento.appendChild(data);
    evento.appendChild(titulo);
    evento.appendChild(responsavel);

    descritivo.appendChild(evento);
});