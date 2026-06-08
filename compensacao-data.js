// ─── Paleta de cores ciclada para tags ───────────────────────────────────────
export const colorClasses = ['color-0', 'color-1', 'color-2', 'color-3', 'color-4'];
const colorMap = {};
let colorIdx = 0;

export function getColorClass(nome) {
    if (!colorMap[nome]) {
        colorMap[nome] = colorClasses[colorIdx % colorClasses.length];
        colorIdx++;
    }
    return colorMap[nome];
}

// ─── Dados ────────────────────────────────────────────────────────────────────
export const escalaCompensacao = {
    manha: {
        SEG: ['Pr. Fábio', 'Andressa'],
        TER: [],
        QUA: ['Camila', 'Jaque'],
        QUI: ['Valéria'],
        SEX: ['Joyce', 'Diretor']
    },
    tarde: {
        SEG: ['Pr. Fábio'],
        TER: ['RA'],
        QUA: ['Carin', 'Rocha'],
        QUI: ['Murilo'],
        SEX: ['Carol', 'Josi', 'Renata']
    }
};

export const alteracoesPorDia = {
    '08/06/2026': { manha: { SEG: ['Pr. Fábio'] } },
    '12/06/2026': { manha: { SEX: ['Diretor', 'Joyce', 'Andressa'] } },
};

// ─── Helpers de data ─────────────────────────────────────────────────────────
export function formatarData(data) {
    return `${String(data.getDate()).padStart(2,'0')}/${String(data.getMonth()+1).padStart(2,'0')}/${data.getFullYear()}`;
}

export function getSegundaFeiraBase() {
    const hoje = new Date();
    const diaSemana = hoje.getDay();
    const hora = hoje.getHours();
    const adiantarSemana = (diaSemana === 5 && hora >= 17) || diaSemana === 6 || diaSemana === 0;
    const diff = hoje.getDate() - diaSemana + (diaSemana === 0 ? -6 : 1);
    const segunda = new Date(hoje);
    segunda.setDate(diff);
    segunda.setHours(0, 0, 0, 0);
    if (adiantarSemana) segunda.setDate(segunda.getDate() + 7);
    return segunda;
}

export function getSegundaFeira(offsetSemanas = 0) {
    const base = getSegundaFeiraBase();
    base.setDate(base.getDate() + offsetSemanas * 7);
    return base;
}

export function getPeriodoSemana(offsetSemanas = 0) {
    const segunda = getSegundaFeira(offsetSemanas);
    const sexta = new Date(segunda);
    sexta.setDate(segunda.getDate() + 4);
    return `${formatarData(segunda)} → ${formatarData(sexta)}`;
}

// ─── Lógica da escala ─────────────────────────────────────────────────────────
export function getEscalaSemana(offsetSemanas = 0) {
    const segunda = getSegundaFeira(offsetSemanas);
    const escalaFinal = JSON.parse(JSON.stringify(escalaCompensacao));
    const alteracoesEncontradas = [];
    const diasSemana = ['SEG', 'TER', 'QUA', 'QUI', 'SEX'];
    const diasNomes  = { SEG: 'Segunda', TER: 'Terça', QUA: 'Quarta', QUI: 'Quinta', SEX: 'Sexta' };

    for (let i = 0; i < 5; i++) {
        const dataAtual = new Date(segunda);
        dataAtual.setDate(segunda.getDate() + i);
        const dataFormatada = formatarData(dataAtual);
        const diaSemana = diasSemana[i];

        if (alteracoesPorDia[dataFormatada]) {
            const alt = alteracoesPorDia[dataFormatada];
            if (alt.manha && alt.manha[diaSemana] !== undefined) {
                const novo = alt.manha[diaSemana];
                escalaFinal.manha[diaSemana] = novo;
                alteracoesEncontradas.push(`${diasNomes[diaSemana]}, ${dataFormatada} — Manhã: ${novo.length ? novo.join(' e ') : 'Ninguém'}`);
            }
            if (alt.tarde && alt.tarde[diaSemana] !== undefined) {
                const novo = alt.tarde[diaSemana];
                escalaFinal.tarde[diaSemana] = novo;
                alteracoesEncontradas.push(`${diasNomes[diaSemana]}, ${dataFormatada} — Tarde: ${novo.length ? novo.join(' e ') : 'Ninguém'}`);
            }
        }
    }

    return {
        escala: escalaFinal,
        isEspecial: alteracoesEncontradas.length > 0,
        observacoes: alteracoesEncontradas,
        periodo: getPeriodoSemana(offsetSemanas),
        segunda
    };
}

export function getFuncionariosDia(periodo, dia, offsetSemanas = 0) {
    const { escala } = getEscalaSemana(offsetSemanas);
    return escala?.[periodo]?.[dia] ?? [];
}

// ─── Condições especiais da semana ───────────────────────────────────────────

export const condicoesEspeciais = {
    feriados: [
    //'DD/MM/YYYY'
    ],
    ferias: [
     //{ inicio: '04/07/2026', fim: '15/07/2026' }
    ],
    semanasOracao: [
        // 'DD/MM/YYYY' — segunda-feira da semana
    ],
    primeiraUltimaSemana: [
        //'29/06/2026' — segunda-feira da semana
    ],
};

/**
 * Retorna a condição especial ativa hoje, ou null se não houver.
 * @returns {'feriado'|'ferias'|'semanaOracao'|'primeiraUltima'|null}
 */
export function getCondicaoEspecialHoje() {
    const hoje = formatarData(new Date());
    const { feriados, ferias, semanasOracao, primeiraUltimaSemana } = condicoesEspeciais;

    if (feriados.includes(hoje))
        return 'feriado';

    if (ferias.some(({ inicio, fim }) => hoje >= inicio && hoje <= fim))
        return 'ferias';

    const segundaAtual = formatarData(getSegundaFeiraBase());

    if (semanasOracao.includes(segundaAtual))
        return 'semanaOracao';

    if (primeiraUltimaSemana.includes(segundaAtual))
        return 'primeiraUltima';

    return null;
}
