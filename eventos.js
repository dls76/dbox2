const evCard_eventos = [
    { evento: 'Viagem SP', data: '2026-01-25T00:00:00', link: 'https://drive.google.com/drive/folders/1GDEIqsWb6SZT9xI7g9yJWGHwLcHDUV2C?usp=sharing' },
    { evento: 'Reunião de Pais 6º-EM', data: '2026-01-28T00:00:00', link: 'https://drive.google.com/drive/folders/1YnR_EOwDHEavkNNaa2U1OAzYmq2K4cg4?usp=drive_link' },
    { evento: 'Reunião Geral CAC', data: '2026-01-29T00:00:00', link: 'https://drive.google.com/drive/folders/1q_L3cf4pZjUfzawEUGpn-xv1JRz_Ovlv?usp=drive_link' },
    { evento: 'Reunião de Pais EI-5º', data: '2026-01-29T00:00:00', link: 'https://drive.google.com/drive/folders/1_loTW-wqqkVy0mBnUYZw8FnxLsQ_jIw1?usp=drive_link' },
    { evento: '1º Dia/Entrega Materiais', data: '2026-02-02T00:00:00', link: 'https://drive.google.com/drive/folders/1lpR2ZPp00QhaYder8ZxXvuAEwAjMn2nW?usp=drive_link' },
    { evento: 'Visita Técnica', data: '2026-03-04T00:00:00', link: 'https://drive.google.com/drive/folders/1WYPFE80ATSA8qSxXjWY4tKfWv42ls9W7?usp=drive_link' },
    { evento: 'Cantata de Páscoa', data: '2026-03-29T00:00:00', link: 'https://drive.google.com/drive/folders/1VIWuJb-U7fykdTihSfudt_3ivVXO-j-M?usp=drive_link' },
    { evento: 'Reunião Participativa 1ºB', data: '2026-03-16T00:00:00', link: 'https://drive.google.com/drive/folders/10nl5E6geGUVanFJfMLQmr2J0hA5CgtZp?usp=drive_link' },
    { evento: 'Homenagem às Mulheres', data: '2026-03-05T00:00:00', link: 'https://drive.google.com/drive/folders/1QkYLdKW0isZPIH2NwZOt9WHmxtPyGFPN?usp=drive_link' },
    { evento: 'Jogos Interséries', data: '2026-10-19T00:00:00', link: 'https://drive.google.com/drive/folders/1-W26B0UGp1GlgIOp4lDtlv9EXPAfxWo8?usp=drive_link' },
    { evento: 'Retiro Espiritual SP', data: '2026-04-30T00:00:00', link: 'https://drive.google.com/drive/folders/1hCBuCw9ZzHfY6xDGZRHRp6PAl6bUOhhf?usp=sharing' },
    { evento: 'Formaturas 9º e 3ºEM', data: '2026-12-14T00:00:00', link: 'https://drive.google.com/drive/folders/14A1-5aZWK5h0OdmrjIwQDvou3SPtyrl5?usp=drive_link' },
    { evento: 'Semana Santa Escolar', data: '2026-03-30T00:00:00', link: 'https://docs.google.com/spreadsheets/d/1279-I3gBN-nRmL-2hsB8XNVosCy0sDL0QZnI33DQ4No/edit?usp=sharing' },
    { evento: 'Sem. Oração Servidores', data: '2026-05-04T00:00:00', link: 'https://drive.google.com/drive/folders/1HGPzrCApOOkJS7WPDHS2m7pmXvgGGZTd?usp=drive_link' },
    { evento: 'Homenagem às Mães', data: '2026-05-17T00:00:00', link: 'https://drive.google.com/drive/folders/1HK6GPeS5NBl9tHln484F0jfdVU6iupf2?usp=drive_link' },
    { evento: 'Excursão 9º', data: '2026-08-24T00:00:00', link: 'https://drive.google.com/drive/folders/1mzOWYeEDlsQ_rs9ssEnnjlG_qAcj3ov3?usp=sharing' },
    { evento: 'Excursão Terceirão', data: '2026-09-20T00:00:00', link: 'https://drive.google.com/drive/folders/1Laxq-eRY-EM6322TUkCK0g_Cww12QkJl?usp=sharing' },
    { evento: 'Beto Carrero', data: '2026-08-26T00:00:00', link: 'https://drive.google.com/drive/folders/1h6GEy5YH83yJrUtyRJ1L41_nK8M2v3fb?usp=sharing' },
    { evento: 'Escola de Pais', data: '2026-04-28T00:00:00', link: 'https://drive.google.com/drive/folders/1m74E9rHQJlrtdTBJmBBeUuHr9rBreT66?usp=drive_link' },
];

const evCard_gradients = [
    'linear-gradient(135deg, #FF5F6D, #845EC2)',
    'linear-gradient(135deg, #F9A826, #F58529)',
    'linear-gradient(135deg, #00C9A7, #92FE9D)',
    'linear-gradient(135deg, #1E3C72, #2A5298)',
    'linear-gradient(135deg, #0093E9, #80D0C7)'
];

const slider = document.getElementById('evCard_sliderContent');
const sliderWrapper = document.querySelector('.evCard_sliderWrapper');
const btnPrev = document.querySelector('.evCard_btnPrev');
const btnNext = document.querySelector('.evCard_btnNext');

let currentIndex = 0;

function isMobile() {
    return window.innerWidth <= 600;
}

function getVisibleCards() {
    if (window.innerWidth <= 600) return 1;
    if (window.innerWidth <= 900) return 2;
    return 4;
}

function diasPara(dataStr) {
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    const dataEvento = new Date(dataStr);
    dataEvento.setHours(0, 0, 0, 0);

    const diffMs = dataEvento - hoje;
    const diffDias = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

    if (diffDias === 0) return 'Hoje!';
    if (diffDias === 1) return 'Amanhã';
    if (diffDias < 0) return `Há ${Math.abs(diffDias)} dia${Math.abs(diffDias) === 1 ? '' : 's'}`;
    return `Em ${diffDias} dia${diffDias === 1 ? '' : 's'}`;
}

function renderCards() {
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]
    const eventosOrdenados = evCard_eventos
        .map((e) => {
            const dataEvento = new Date(e.data);
            dataEvento.setHours(0, 0, 0, 0);
            return { ...e, dataEvento };
        })
        .sort((a, b) => a.dataEvento - b.dataEvento);

    currentIndex = eventosOrdenados.findIndex((e) => e.dataEvento >= hoje);
    if (currentIndex === -1) currentIndex = 0;

    slider.innerHTML = eventosOrdenados.map((e, i) => `
    <div class="evCard_item">
      <a class="evCard_link" href="${e.link}" target="_blank" rel="noopener noreferrer">
        <div class="evCard_inner" style="background: ${evCard_gradients[i % evCard_gradients.length]}">
          <p>${new Date(e.data).getDate()} ${meses[new Date(e.data).getMonth()]}</p>
          <h3 title="${e.evento}">${e.evento}</h3>
          <p>${diasPara(e.data)}</p>
        </div>
      </a>
    </div>
  `).join('');
}

function updateNavButtons() {
    const totalCards = slider.children.length;
    const visibleCards = getVisibleCards();
    const maxIndex = Math.max(0, totalCards - visibleCards);

    btnPrev.disabled = currentIndex <= 0;
    btnNext.disabled = currentIndex >= maxIndex;

    btnPrev.style.opacity = btnPrev.disabled ? '0.5' : '1';
    btnNext.style.opacity = btnNext.disabled ? '0.5' : '1';
    btnPrev.style.cursor = btnPrev.disabled ? 'not-allowed' : 'pointer';
    btnNext.style.cursor = btnNext.disabled ? 'not-allowed' : 'pointer';
}

function updateSlider() {
    const cardWidth = slider.querySelector('.evCard_item')?.offsetWidth || 0;

    if (isMobile()) {
        sliderWrapper.scrollTo({
            left: currentIndex * cardWidth,
            behavior: 'smooth'
        });
    } else {
        slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }

    updateNavButtons();
}

btnNext.addEventListener('click', () => {
    const totalCards = slider.children.length;
    const visibleCards = getVisibleCards();
    const maxIndex = Math.max(0, totalCards - visibleCards);

    if (currentIndex < maxIndex) {
        currentIndex++;
        updateSlider();
    }
});

btnPrev.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

sliderWrapper.addEventListener('scroll', () => {
    if (!isMobile()) return;

    const cardWidth = slider.querySelector('.evCard_item')?.offsetWidth || 1;
    currentIndex = Math.round(sliderWrapper.scrollLeft / cardWidth);
    updateNavButtons();
});

window.addEventListener('resize', () => {
    const totalCards = slider.children.length;
    const visibleCards = getVisibleCards();
    const maxIndex = Math.max(0, totalCards - visibleCards);

    if (currentIndex > maxIndex) {
        currentIndex = maxIndex;
    }

    updateSlider();
});

renderCards();

requestAnimationFrame(() => {
    updateSlider();
});

