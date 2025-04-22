import { pessoas, mss, diasDaSemana } from './aniversariantes-data.js';

const dataAtual = new Date();
const diaDoMes = ('0' + dataAtual.getDate()).slice(-2);

const dataAtualCompleta = document.querySelector('#dataAtualizada');
if (dataAtualCompleta) {
  dataAtualCompleta.innerHTML = `${diasDaSemana[dataAtual.getDay()]}, ${diaDoMes} de ${mss[dataAtual.getMonth()]} de ${dataAtual.getFullYear()}`;
}

// Array que guardará os elementos DOM na ordem correta
let linhasDOMOrdenadas = [];

function loadAniversariantes() {
  const main = document.querySelector('#main-aniversariantes');
  const h1 = document.querySelector('#h1-aniversariantes');
  if (!main || !h1) return;

  h1.classList.add('h1Aniver');
  h1.innerHTML = "Aniversariantes " + dataAtual.getFullYear();

  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);

  // Ordena os aniversariantes pela data do ano atual (mes e dia)
  // Sem ajustar o ano para o próximo, para renderizar todos na ordem natural
  const ordenados = pessoas.slice().sort((a, b) => {
    // Cria datas no ano atual para comparação
    const dataA = new Date(hoje.getFullYear(), a.mes, a.dia);
    const dataB = new Date(hoje.getFullYear(), b.mes, b.dia);
    return dataA - dataB;
  });

  main.innerHTML = ''; // Limpa o container antes de adicionar

  linhasDOMOrdenadas = []; // Zera o array de elementos DOM

  for (let i = 0; i < ordenados.length; i++) {
    const pessoa = ordenados[i];
    const linha = document.createElement('div');
    linha.classList.add('linha');

    // Data do aniversário no ano atual (sem ajuste)
    const dataAniv = new Date(hoje.getFullYear(), pessoa.mes, pessoa.dia);
    linha.setAttribute('data-aniversario', dataAniv.toISOString());

    // Dia do aniversário formatado
    const dia = document.createElement('div');
    dia.classList.add('dia');
    dia.innerHTML = `${pessoa.dia < 10 ? '0' + pessoa.dia : pessoa.dia}<br>${mss[pessoa.mes].slice(0, 3)}`;
    linha.appendChild(dia);

    // Foto
    const box_foto = document.createElement('div');
    box_foto.classList.add('box-foto');
    const foto = new Image();
    foto.src = pessoa.foto;
    foto.alt = pessoa.nome;
    foto.classList.add('foto');
    box_foto.appendChild(foto);
    linha.appendChild(box_foto);

    // Informações
    const box_infoPessoa = document.createElement('div');
    box_infoPessoa.classList.add('box-infoPessoa');

    const nome = document.createElement('div');
    nome.classList.add('nome');
    nome.innerHTML = pessoa.nome;

    const funcao = document.createElement('div');
    funcao.classList.add('funcao');
    funcao.innerHTML = pessoa.funcao;

    box_infoPessoa.appendChild(nome);
    box_infoPessoa.appendChild(funcao);
    linha.appendChild(box_infoPessoa);

    // Regressiva - calcula diferença para o próximo aniversário real (ajustando ano se necessário)
    const proximoAniver = new Date(hoje.getFullYear(), pessoa.mes, pessoa.dia);
    if (proximoAniver < hoje) {
      proximoAniver.setFullYear(proximoAniver.getFullYear() + 1);
    }
    const diffDias = Math.floor((proximoAniver - hoje) / (1000 * 60 * 60 * 24));

    const regressiva = document.createElement('div');
    regressiva.classList.add('regressivaAniver');

    if (diffDias === 0) {
      regressiva.innerHTML = `Hoje!`;
      regressiva.style.color = "red";
      regressiva.style.fontWeight = "600";
    } else if (diffDias === 1) {
      regressiva.innerHTML = `Amanhã`;
      regressiva.style.color = "dodgerblue";
      regressiva.style.fontWeight = "600";
    } else {
      regressiva.innerHTML = `Em ${diffDias} dias`;
      regressiva.style.color = "black";
      regressiva.style.fontWeight = "normal";
    }

    linha.appendChild(regressiva);
    main.appendChild(linha);

    // Guarda o elemento e a pessoa, incluindo a data do próximo aniversário ajustada para scroll
    linhasDOMOrdenadas.push({ pessoa, element: linha, proximoAniver });
  }
}

function scrollToNextEvent() {
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);

  // Busca o próximo aniversário futuro (data ajustada)
  const proximoAniversariante = linhasDOMOrdenadas.find(({ proximoAniver }) => proximoAniver >= hoje);

  if (!proximoAniversariante) return;

  const elementoAlvo = proximoAniversariante.element;

  if (elementoAlvo) {
    const header = document.querySelector('header');
    const headerHeight = header ? header.offsetHeight : 0;
    const offsetTop = elementoAlvo.offsetTop;

    requestAnimationFrame(() => {
      window.scrollTo({
        top: offsetTop - headerHeight - 20,
        behavior: 'smooth'
      });
    });
  }
}

// Roda tudo depois que os elementos estiverem prontos
window.addEventListener('load', () => {
  loadAniversariantes();

  const observer = new MutationObserver(() => {
    if (document.querySelectorAll('.linha').length > 0) {
      observer.disconnect();

      // Pequeno delay para garantir layout pronto
      setTimeout(() => {
        scrollToNextEvent();
      }, 100);
    }
  });

  observer.observe(document.querySelector('#main-aniversariantes'), {
    childList: true,
    subtree: true
  });
});

// Botão "voltar ao topo"
const botaoTopo = document.getElementById("btnTopo");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    botaoTopo.classList.add("mostrar");
  } else {
    botaoTopo.classList.remove("mostrar");
  }
});

botaoTopo.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
