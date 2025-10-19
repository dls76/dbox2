import { pessoas, mss } from './aniversariantes-data.js';

function adicionarProximosAniversariantes() {
  const container = document.getElementById('divhomeproxaniversariantes');
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0); // Zera horas para comparação exata

  // Cria uma nova data para o aniversário ajustando o ano
  const aniversariosFuturos = pessoas.map(pessoa => {
    const aniversario = new Date(hoje.getFullYear(), pessoa.mes, pessoa.dia);
    if (aniversario < hoje) aniversario.setFullYear(aniversario.getFullYear() + 1);
    const diasAte = Math.ceil((aniversario - hoje) / (1000 * 60 * 60 * 24));
    return { ...pessoa, data: aniversario, diasAte };
  });

  // Ordena e pega os 5 próximos
  const proximos = aniversariosFuturos.sort((a, b) => a.data - b.data).slice(0, 5);

  // Limpa o container
  container.innerHTML = '';

  // Adiciona título
  const titulo = document.createElement('div');
  titulo.classList.add('tituloproximosanivers');
  titulo.innerHTML = 'Próximos Aniversariantes';
  container.appendChild(titulo);

  if (proximos.length > 0) {
    proximos.forEach((aniversariante, index) => {
      const divAniv = document.createElement('div');
      divAniv.classList.add('proximosaniversariantes');

      // Foto
      const divFoto = document.createElement('div');
      divFoto.classList.add('fotoaniv');
      const img = document.createElement('img');
      img.src = aniversariante.foto;
      img.alt = aniversariante.nome;
      divFoto.appendChild(img);

      // Container para texto
      const divTexto = document.createElement('div');
      divTexto.classList.add('textoaniv');

      // Linha superior: Nome (esquerda, grande) e Data/Icon (direita, grande)
      const divSuperior = document.createElement('div');
      divSuperior.classList.add('linhasuperior');

      // Limitar nome a 20 caracteres com reticências se necessário
      const nomeDisplay = aniversariante.nome.length > 20 ? aniversariante.nome.substring(0, 20) + '...' : aniversariante.nome;
      const spanNome = document.createElement('span');
      spanNome.classList.add('nomegrande');
      spanNome.textContent = nomeDisplay;

      const spanData = document.createElement('span');
      spanData.classList.add('datagrande');

      const dia = aniversariante.dia.toString().padStart(2, '0');
      const mes = (aniversariante.mes + 1).toString().padStart(2, '0');

      const aniversarioHoje = (aniversariante.dia === hoje.getDate() && aniversariante.mes === hoje.getMonth());

      if (aniversarioHoje) {
        spanData.innerHTML = '🎂'; // Ícone de bolo de aniversário, mais refinado e específico para aniversários
        spanData.style.color = '#B52532'; // Cor vermelha para destaque
      } else {
        spanData.textContent = `${dia}/${mes}`;
      }

      divSuperior.appendChild(spanNome);
      divSuperior.appendChild(spanData);

      // Linha inferior: Função (esquerda, pequena, cor fraca) e Contagem (direita, pequena, cor fraca)
      const divInferior = document.createElement('div');
      divInferior.classList.add('linhainferior');

      const spanFuncao = document.createElement('span');
      spanFuncao.classList.add('funcaomenor');
      spanFuncao.style.color = '#666'; // Cor mais fraca
      spanFuncao.textContent = aniversariante.funcao;

      let spanContagem;
      if (aniversarioHoje) {
        spanContagem = document.createElement('span');
        spanContagem.classList.add('contagemmenor');
        spanContagem.style.color = '#B52532'; // Vermelho para destaque
        spanContagem.textContent = 'É hoje!';
      } else {
        spanContagem = document.createElement('span');
        spanContagem.classList.add('contagemmenor');
        spanContagem.style.color = '#666';
        spanContagem.textContent = `em ${aniversariante.diasAte} dias`;
      }

      divInferior.appendChild(spanFuncao);
      divInferior.appendChild(spanContagem);

      divTexto.appendChild(divSuperior);
      divTexto.appendChild(divInferior);

      divAniv.appendChild(divFoto);
      divAniv.appendChild(divTexto);

      container.appendChild(divAniv);

      // *** NOVA PARTE: Adiciona separador após cada card, exceto o último ***
      if (index < proximos.length - 1) {
        const separator = document.createElement('div');
        separator.classList.add('separator');
        container.appendChild(separator);
      }
      // ***
    });
  } else {
    const semAniversariantes = document.createElement('div');
    semAniversariantes.classList.add('semAniversariantes');
    semAniversariantes.innerHTML = 'Nenhum aniversariante nos próximos dias.';
    container.appendChild(semAniversariantes);
  }

  // Botão "Lista completa"
  const maisBox = document.createElement('div');
  maisBox.classList.add('maisBox');

  const maisLink = document.createElement('a');
  maisLink.classList.add('mais');
  maisLink.href = 'aniversariantes-list.html';
  maisLink.target = '_blank';
  maisLink.textContent = 'Lista completa';

  maisBox.appendChild(maisLink);
  container.appendChild(maisBox);
}

window.adicionarProximosAniversariantes = adicionarProximosAniversariantes;
window.onload = adicionarProximosAniversariantes;