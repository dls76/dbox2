const eventos = [
    
    
    {dataInicial: new Date(2024, 8, 2), dataFinal: new Date(2024, 8, 2), nome: "Reunião Administrativa - Departamentais e Coordenadores – Remoto (tarde)", responsável: "Douglas", foto: 'img/dls.png'},
    {dataInicial: new Date(2024, 8, 2), dataFinal: new Date(2024, 8, 30), nome: "Hipótese de Escrita EI 4, 5 anos e 1º ano EF – 3ª Testagem", responsável: "Douglas", foto: 'img/dls.png'},
    {dataInicial: new Date(2024, 8, 2), dataFinal: new Date(2024, 8, 2), nome: "Início do Ranking matrículas 2024", responsável: "Douglas", foto: 'img/dls.png'},
    {dataInicial: new Date(2024, 8, 2), dataFinal: new Date(2024, 8, 2), nome: "Início Campanha de Matrículas 2025 – Digital", responsável: "Douglas", foto: 'img/dls.png'},
    {dataInicial: new Date(2024, 8, 3), dataFinal: new Date(2024, 8, 3), nome: "Projetos Quebrando o Silêncio e de Sexualidade - FI", responsável: "Douglas", foto: 'img/dls.png'},
    {dataInicial: new Date(2024, 8, 3), dataFinal: new Date(2024, 8, 3), nome: "Comissão de Educação/Diretiva", responsável: "Douglas", foto: 'img/dls.png'},
    {dataInicial: new Date(2024, 8, 7), dataFinal: new Date(2024, 8, 7), nome: "Feriado Independência do Brasil", responsável: "Douglas", foto: 'img/dls.png'},
    {dataInicial: new Date(2024, 8, 8), dataFinal: new Date(2024, 8, 8), nome: "Feriado Municipal (Curitiba) ", responsável: "Douglas", foto: 'img/dls.png'},
    {dataInicial: new Date(2024, 8, 9), dataFinal: new Date(2024, 8, 13), nome: "Período de aplicação da AV2 – datas unificadas USB com fund 2 e EM - 2ª, 3ª E 4ª aula", responsável: "Douglas", foto: 'img/dls.png'},
    {dataInicial: new Date(2024, 8, 10), dataFinal: new Date(2024, 8, 11), nome: "11 – Planejamento ASP", responsável: "Douglas", foto: 'img/dls.png'},
    {dataInicial: new Date(2024, 8, 11), dataFinal: new Date(2024, 8, 15), nome: "I Will Go Teen – Encontro de Comunidades Memi – FAP", responsável: "Douglas", foto: 'img/dls.png'},
    {dataInicial: new Date(2024, 8, 15), dataFinal: new Date(2024, 8, 18), nome: "Excursão de formandos 9ºEF (a confirmar)", responsável: "Douglas", foto: 'img/dls.png'},
    {dataInicial: new Date(2024, 8, 15), dataFinal: new Date(2024, 8, 15), nome: "Plantão de Matrículas", responsável: "Douglas", foto: 'img/dls.png'},
    {dataInicial: new Date(2024, 8, 17), dataFinal: new Date(2024, 8, 17), nome: "Formadores de Área – Tarde", responsável: "Douglas", foto: 'img/dls.png'},
    {dataInicial: new Date(2024, 8, 17), dataFinal: new Date(2024, 8, 17), nome: "Dia D (primeiro)", responsável: "Douglas", foto: 'img/dls.png'},
    {dataInicial: new Date(2024, 8, 17), dataFinal: new Date(2024, 8, 17), nome: "Fórum IATec – Financeiro – 15h", responsável: "Douglas", foto: 'img/dls.png'},
    {dataInicial: new Date(2024, 8, 18), dataFinal: new Date(2024, 8, 18), nome: "Conselho de Classe (antes da recuperação)", responsável: "Douglas", foto: 'img/dls.png'},
    {dataInicial: new Date(2024, 8, 20), dataFinal: new Date(2024, 8, 20), nome: "Entrega das convocações para a Recuperação Bimestral aos alunos", responsável: "Douglas", foto: 'img/dls.png'},
    {dataInicial: new Date(2024, 8, 20), dataFinal: new Date(2024, 8, 20), nome: "Data limite para a entrega ao SOP dos conteúdos e métodos avaliativos do 4º bimestre", responsável: "Douglas", foto: 'img/dls.png'},
    {dataInicial: new Date(2024, 8, 22), dataFinal: new Date(2024, 8, 22), nome: "Dia do Contador e Tesoureiro(a) escolar", responsável: "Douglas", foto: 'img/dls.png'},
    {dataInicial: new Date(2024, 8, 23), dataFinal: new Date(2024, 8, 27), nome: "Recuperação Bimestral", responsável: "Douglas", foto: 'img/dls.png'},
    {dataInicial: new Date(2024, 8, 23), dataFinal: new Date(2024, 8, 27), nome: "Aplicação das Provas Diagnósticas de Alfabetização ASP", responsável: "Douglas", foto: 'img/dls.png'},
    {dataInicial: new Date(2024, 8, 23), dataFinal: new Date(2024, 9, 4),  nome: "Enem Interativo – aplicação", responsável: "Douglas", foto: 'img/dls.png'},
    {dataInicial: new Date(2024, 8, 24), dataFinal: new Date(2024, 8, 24), nome: "Treinamento IATec – Adconnetc – TI’s", responsável: "Douglas", foto: 'img/dls.png'},
    {dataInicial: new Date(2024, 8, 28), dataFinal: new Date(2024, 9, 4),  nome: "Excursão de Formandos 3ºEM (Caldas Novas - GO)", responsável: "Douglas", foto: 'img/dls.png'},
    {dataInicial: new Date(2024, 8, 28), dataFinal: new Date(2024, 8, 28), nome: "Batismo da Primavera - ASP", responsável: "Douglas", foto: 'img/dls.png'},
    {dataInicial: new Date(2024, 8, 30), dataFinal: new Date(2024, 8, 30), nome: "Final do 3º bimestre", responsável: "Douglas", foto: 'img/dls.png'},
    {dataInicial: new Date(2024, 8, 30), dataFinal: new Date(2024, 8, 30), nome: "Dia da Secretária(o) ", responsável: "Douglas", foto: 'img/dls.png'},
    {dataInicial: new Date(2024, 8, 30), dataFinal: new Date(2024, 8, 30), nome: "Data limite para o envio dos Cronogramas Avaliativos aos alunos", responsável: "Douglas", foto: 'img/dls.png'},
    {dataInicial: new Date(2024, 8, 30), dataFinal: new Date(2024, 8, 30), nome: "Data limite para a regularização dos registros dos conteúdos do mês, no SAD", responsável: "Douglas", foto: 'img/dls.png'},
    {dataInicial: new Date(2024, 8, 1), dataFinal: new Date(2024, 8, 30), nome: "Pesquisa de qualidade - Pais e responsáveis  - USB", responsável: "Douglas", foto: 'img/dls.png'},
    {dataInicial: new Date(2024, 8, 1), dataFinal: new Date(2024, 8, 30), nome: "Análise do Calendário 2025", responsável: "Douglas", foto: 'img/dls.png'},
    {dataInicial: new Date(2024, 8, 1), dataFinal: new Date(2024, 8, 30), nome: "Ensaio fotográfico – Formatura", responsável: "Douglas", foto: 'img/dls.png'},

    {dataInicial: new Date(2024, 9, 1), dataFinal: new Date(2024, 9, 1), nome: "Maná"},
    {dataInicial: new Date(2024, 9, 1), dataFinal: new Date(2024, 9, 1), nome: "Encerramento da visitação dos alunos"},
    {dataInicial: new Date(2024, 9, 1), dataFinal: new Date(2024, 9, 1), nome: "Treinamento IATec – e-Bolsa – Gestor de Bolsa"},
    {dataInicial: new Date(2024, 9, 1), dataFinal: new Date(2024, 9, 1), nome: "Início do 4º bimestre"},
    {dataInicial: new Date(2024, 9, 1), dataFinal: new Date(2024, 9, 2), nome: "GEPEA Administrativo, Financeiro e Pedagógico - Presencial – FAP"},
    {dataInicial: new Date(2024, 9, 2), dataFinal: new Date(2024, 9, 2), nome: "Culto do Envio – Pedagogia FAP"},
    {dataInicial: new Date(2024, 9, 1), dataFinal: new Date(2024, 9, 1), nome: "Comissão de Educação/Diretiva"},
    {dataInicial: new Date(2024, 9, 1), dataFinal: new Date(2024, 9, 1), nome: "Aulão Unificado - Terceirão "},
    {dataInicial: new Date(2024, 9, 3), dataFinal: new Date(2024, 9, 5), nome: "Encontro MEMI/PR (FAP) - Pastor escolar + 2 ou 3 alunos"},
    {dataInicial: new Date(2024, 9, 5), dataFinal: new Date(2024, 9, 5), nome: "Final Bom de Bíblia – ASP "},
    {dataInicial: new Date(2024, 9, 7), dataFinal: new Date(2024, 9, 7), nome: "Feriado Municipal Paranaguá) "},
    {dataInicial: new Date(2024, 9, 7), dataFinal: new Date(2024, 9, 11), nome: "Semana da Criança"},
    {dataInicial: new Date(2024, 9, 7), dataFinal: new Date(2024, 9, 7), nome: "Aula de Campo TMA (EI-5º | Manhã: 7 às 12; Tarde: 13h às 18h)"},
    {dataInicial: new Date(2024, 9, 7), dataFinal: new Date(2024, 9, 9), nome: "Fair Play KIDS CAC"},
    {dataInicial: new Date(2024, 9, 10), dataFinal: new Date(2024, 9, 10), nome: "Aula de Campo Tio Miro (EI AO 1º ANO)"},
    {dataInicial: new Date(2024, 9, 7), dataFinal: new Date(2024, 9, 9), nome: "“Projeto Fair Play” - Módulo Jogos da Amizade "},
    {dataInicial: new Date(2024, 9, 7), dataFinal: new Date(2024, 9, 11), nome: "Comemoração do Dia do Professor por escola (combinar com profs compartilhados para participarem das escolas onde dá aula – presente recebe da escola onde tem o registro)"},
    {dataInicial: new Date(2024, 9, 7), dataFinal: new Date(2024, 9, 7), nome: "Reunião Administrativa - Departamentais e Coordenadores – Remoto (tarde)"},
    {dataInicial: new Date(2024, 9, 7), dataFinal: new Date(2024, 10, 11), nome: "Estágio Pedagogia/FAP, nas unidades escolares"},
    {dataInicial: new Date(2024, 9, 9), dataFinal: new Date(2024, 9, 9), nome: "Início Avaliações Cliente Oculto"},
    {dataInicial: new Date(2024, 9, 11), dataFinal: new Date(2024, 9, 11), nome: "Data limite para entrega das avaliações 4º Bimestre - Para Análise do SOP "},
    {dataInicial: new Date(2024, 9, 12), dataFinal: new Date(2024, 9, 12), nome: "Feriado N. S. Aparecida"},
    {dataInicial: new Date(2024, 9, 14), dataFinal: new Date(2024, 9, 14), nome: "Recesso (dia permutado com recesso)"},
    {dataInicial: new Date(2024, 9, 15), dataFinal: new Date(2024, 9, 15), nome: "Recesso – Dia do Professor "},
    {dataInicial: new Date(2024, 9, 15), dataFinal: new Date(2024, 9, 15), nome: "Fórum IATec – Financeiro – 15h"},
    {dataInicial: new Date(2024, 9, 16), dataFinal: new Date(2024, 9, 17), nome: "16 ou 17 - Aulão Unificado - Terceirão "},
    {dataInicial: new Date(2024, 9, 18), dataFinal: new Date(2024, 9, 24), nome: "Análise de quadro de pessoal das unidades para 2024"},
    {dataInicial: new Date(2024, 9, 18), dataFinal: new Date(2024, 9, 18), nome: "Dia do Pastor Escolar "},
    {dataInicial: new Date(2024, 9, 19), dataFinal: new Date(2024, 9, 19), nome: "Matrículas abertas para alunos novos – vaga garantida para o aluno veterano até esse dia"},
    {dataInicial: new Date(2024, 9, 19), dataFinal: new Date(2024, 9, 19), nome: "Dia do Técnico em Informática"},
    {dataInicial: new Date(2024, 9, 24), dataFinal: new Date(2024, 9, 31), nome: "Período de aplicação da AV1 – datas unificadas para fund 2 e EM"},
    {dataInicial: new Date(2024, 9, 21), dataFinal: new Date(2024, 9, 25), nome: "Semana Criacionista"},
    {dataInicial: new Date(2024, 9, 26), dataFinal: new Date(2024, 9, 26), nome: "Sábado de Educação e Criacionismo"},
    {dataInicial: new Date(2024, 9, 28), dataFinal: new Date(2024, 10, 11), nome: "PAAEB"},
    {dataInicial: new Date(2024, 9, 29), dataFinal: new Date(2024, 9, 29), nome: "Capacitação Pastores de Escola: ACP e ASP"}, 
    {dataInicial: new Date(2024, 9, 1), dataFinal: new Date(2024, 9, 1), nome: "Projetos “Rumo ao 6º ano” e “Rumo ao Ensino Médio” com os alunos"},
    {dataInicial: new Date(2024, 9, 1), dataFinal: new Date(2024, 9, 1), nome: "Atenção aos Processos Seletivos Seriados das Universidades Estaduais: UEM, UEPG, UEL e UNICENTRO. (PAC, PAS e PSS)"},
    {dataInicial: new Date(2024, 9, 1), dataFinal: new Date(2024, 9, 1), nome: "Atenção às inscrições dos vestibulares"},

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



