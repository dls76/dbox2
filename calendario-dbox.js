const eventos = [
    {nome: 'Evento 1', dataInicial: new Date(2024, 2, 1), dataFinal: new Date(2024, 2, 1), responsavel: 'Douglas', foto: 'img/dls.png'},
    {nome: 'Evento 2', dataInicial: new Date(2024, 2, 2), dataFinal: new Date(2024, 2, 2), responsavel: 'Douglas', foto: 'img/dls.png'},
    {nome: 'Evento 3', dataInicial: new Date(2024, 2, 3), dataFinal: new Date(2024, 2, 3), responsavel: 'Douglas', foto: 'img/dls.png'},
    {nome: 'Evento 4', dataInicial: new Date(2024, 2, 4), dataFinal: new Date(2024, 2, 4), responsavel: 'Douglas', foto: 'img/dls.png'},
    {nome: 'Evento 5', dataInicial: new Date(2024, 2, 5), dataFinal: new Date(2024, 2, 5), responsavel: 'Douglas', foto: 'img/dls.png'},
    {nome: 'Evento 6', dataInicial: new Date(2024, 2, 6), dataFinal: new Date(2024, 2, 6), responsavel: 'Douglas', foto: 'img/dls.png'},
    {nome: 'Evento 7', dataInicial: new Date(2024, 2, 7), dataFinal: new Date(2024, 2, 20), responsavel: 'Douglas', foto: 'img/dls.png'},
    {nome: 'Evento 8', dataInicial: new Date(2024, 2, 8), dataFinal: new Date(2024, 2, 8), responsavel: 'Douglas', foto: 'img/dls.png'},
    {nome: 'Evento 9', dataInicial: new Date(2024, 2, 9), dataFinal: new Date(2024, 2, 9), responsavel: 'Douglas', foto: 'img/dls.png'},
    {nome: 'Evento 10', dataInicial: new Date(2024, 2, 10), dataFinal: new Date(2024, 2, 10), responsavel: 'Douglas', foto: 'img/dls.png'},
    {nome: 'Evento 11', dataInicial: new Date(2024, 2, 11), dataFinal: new Date(2024, 2, 11), responsavel: 'Douglas', foto: 'img/dls.png'},
    {nome: 'Evento 12', dataInicial: new Date(2024, 2, 12), dataFinal: new Date(2024, 2, 12), responsavel: 'Douglas', foto: 'img/dls.png'},
    {nome: 'Evento 13', dataInicial: new Date(2024, 2, 13), dataFinal: new Date(2024, 2, 19), responsavel: 'Douglas', foto: 'img/dls.png'},
    {nome: 'Evento 14', dataInicial: new Date(2024, 2, 14), dataFinal: new Date(2024, 2, 22), responsavel: 'Douglas', foto: 'img/dls.png'},
    {nome: 'Evento 15', dataInicial: new Date(2024, 2, 15), dataFinal: new Date(2024, 2, 15), responsavel: 'Douglas', foto: 'img/dls.png'},
    {nome: 'Evento 16', dataInicial: new Date(2024, 2, 16), dataFinal: new Date(2024, 2, 16), responsavel: 'Douglas', foto: 'img/dls.png'},
    {nome: 'Evento 17', dataInicial: new Date(2024, 2, 17), dataFinal: new Date(2024, 2, 17), responsavel: 'Douglas', foto: 'img/dls.png'},
    {nome: 'Evento 18', dataInicial: new Date(2024, 2, 18), dataFinal: new Date(2024, 2, 18), responsavel: 'Douglas', foto: 'img/dls.png'},
    {nome: 'Evento 19', dataInicial: new Date(2024, 2, 19), dataFinal: new Date(2024, 2, 19), responsavel: 'Douglas', foto: 'img/dls.png'},
    {nome: 'Evento 20', dataInicial: new Date(2024, 2, 20), dataFinal: new Date(2024, 2, 21), responsavel: 'Douglas', foto: 'img/dls.png'},

    // Outro calendário
    {nome: 'Evento A', dataInicial: new Date(2024, 1, 1), dataFinal: new Date(2024, 2, 1), responsavel: 'Douglas', foto: 'img/dls.png'},
    {nome: 'Evento B', dataInicial: new Date(2024, 1, 2), dataFinal: new Date(2024, 2, 2), responsavel: 'Douglas', foto: 'img/dls.png'},
    {nome: 'Evento C', dataInicial: new Date(2024, 1, 3), dataFinal: new Date(2024, 2, 3), responsavel: 'Douglas', foto: 'img/dls.png'},
    {nome: 'Evento D', dataInicial: new Date(2024, 1, 4), dataFinal: new Date(2024, 2, 4), responsavel: 'Douglas', foto: 'img/dls.png'},
    {nome: 'Evento E', dataInicial: new Date(2024, 1, 5), dataFinal: new Date(2024, 2, 5), responsavel: 'Douglas', foto: 'img/dls.png'},
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

    if (e.dataInicial.getDate() !== e.dataFinal.getDate() || e.dataInicial.getMonth() !== e.dataFinal.getMonth()) {
        data.innerText = `${e.dataInicial.getDate()} ${meses[e.dataInicial.getMonth()]} a ${e.dataFinal.getDate()} ${meses[e.dataFinal.getMonth()]}`;
    } else {
        data.innerText = `${e.dataInicial.getDate()} ${meses[e.dataInicial.getMonth()]}`;
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



