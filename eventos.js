window.addEventListener("load", mostrarEventos)

const meses = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ']

let eventos = [

    // {data1: new Date(2023, 1, 27), data2: new Date(2023, 2, 3), descritivo: "Semana Hábitos de Estudo – SOE", cal: 'caab', resp: "", foto: "", detalhes: ""},
    // {data1: new Date(2023, 1, 27), data2: new Date(2023, 1, 27), descritivo: "Início do reforço escolar - Ed. Infantil e Fund I", cal: "caab", resp: "", foto: "", detalhes: ""},
    // {data1: new Date(2023, 1, 27), data2: new Date(2023, 1, 27), descritivo: "Data limite para o envio dos cronogramas avaliativos bimestrais aos alunos – SOP responsável em montar o cronograma - SOE responsável para disponibilizar para alunos, responsáveis e portal.", cal: "asp", resp: "", foto: "", detalhes: ""},
    // {data1: new Date(2023, 1, 27), data2: new Date(2023, 1, 27), descritivo: "Data final para início dos livros didáticos. Fazer o levantamento dos alunos que não compraram ainda.", cal: "caab", resp: "", foto: "", detalhes: ""},
    // {data1: new Date(2023, 1, 23), data2: new Date(2023, 2, 4), descritivo: "Dez Dias de Oração (educação ênfase fidelidade)", cal: "asp", resp: "", foto: "", detalhes: ""},
    
    // MARÇO
    // {data1: new Date(2023, 2, 1), data2: new Date(2023, 2, 31), descritivo: "Reuniões Pedagógicas Individuais - FII-EM", cal: "caab", resp: "", foto: "", detalhes: ""},
    // {data1: new Date(2023, 2, 1), data2: new Date(2023, 2, 2), descritivo: "Reunião ECO - SOE e SOP – ASP (presencial)", cal: "asp", resp: "", foto: "", detalhes: ""},
    // {data1: new Date(2023, 2, 1), data2: new Date(2023, 2, 1), descritivo: "1º - Celebra FUND II e EM - Lançamento programa Redação Nota 1000 - Prof Marlus", cal: "caab", resp: "", foto: "", detalhes: ""},
    // {data1: new Date(2023, 2, 6), data2: new Date(2023, 2, 10), descritivo: "Período de aplicação da AV1 FI- colocar nos primeiros dias as provas com mais complicação de correção.", cal: "asp", resp: "", foto: "", detalhes: ""},
    // {data1: new Date(2023, 2, 6), data2: new Date(2023, 2, 10), descritivo: "Período de aplicação da AV1 I BIM – corrigir, lançar notas no SAD e devolver aos estudantes até 5 dias úteis após a data da sua avaliação.", cal: "asp", resp: "", foto: "", detalhes: ""},
    // {data1: new Date(2023, 2, 6), data2: new Date(2023, 2, 10), descritivo: "Lançamento PMDE", cal: "asp", resp: "", foto: "", detalhes: ""},
    // {data1: new Date(2023, 2, 6), data2: new Date(2023, 2, 31), descritivo: "Recuperação e Remediação do 1º ano - (acrescentar alunos que não estão alfabetizados)", cal: "", resp: "", foto: "", detalhes: ""},
    // {data1: new Date(2023, 2, 6), data2: new Date(2023, 2, 13), descritivo: "Diagnóstica 1º ao 5º ano – (conteúdo anterior)", cal: "asp", resp: "", foto: "", detalhes: ""},
    // {data1: new Date(2023, 2, 6), data2: new Date(2023, 2, 10), descritivo: "Lançamento do PMDS/PMDE", cal: "asp", resp: "", foto: "", detalhes: ""},
    // {data1: new Date(2023, 2, 6), data2: new Date(2023, 2, 6), descritivo: "Comissão de Literatura (dia todo - 8h30 às 11h30 e 13h30 às 17h)", cal: "asp", resp: "", foto: "", detalhes: ""},
    // {data1: new Date(2023, 2, 7), data2: new Date(2023, 2, 7), descritivo: "Comissão de Educação/Diretiva", cal: "asp", resp: "", foto: "", detalhes: ""},
    // {data1: new Date(2023, 2, 7), data2: new Date(2023, 2, 7), descritivo: "Início da classe bíblica FI", cal: "caab", resp: "", foto: "", detalhes: ""},
    // {data1: new Date(2023, 2, 8), data2: new Date(2023, 2, 8), descritivo: "Dia internacional da mulher", cal: "caab", resp: "", foto: "", detalhes: ""},
    // {data1: new Date(2023, 2, 8), data2: new Date(2023, 2, 8), descritivo: "Comissão de Matemática (dia todo - 8h30 às 11h30 e 13h30 às 17h)", cal: "asp", resp: "", foto: "", detalhes: ""},
    // {data1: new Date(2023, 2, 9), data2: new Date(2023, 2, 9), descritivo: "Comissão de Educação Física (dia todo - 8h30 às 11h30 e 13h30 às 17h)", cal: "asp", resp: "", foto: "", detalhes: ""},
    // {data1: new Date(2023, 2, 11), data2: new Date(2023, 2, 11), descritivo: "Retiro Espiritual CAAB - Recanto Céu Azul - SJP", cal: "caab", resp: "", foto: "", detalhes: ""},
    // {data1: new Date(2023, 2, 12), data2: new Date(2023, 2, 12), descritivo: "Dia do Bibliotecário", cal: "caab", resp: "", foto: "", detalhes: "", pais: true, niv: ""},
    // {data1: new Date(2023, 2, 13), data2: new Date(2023, 2, 17), descritivo: "Pré conselho EI e 1º ano FI", cal: "caab", resp: "", foto: "", detalhes: "", pais: true, niv: "inf5"},
    // {data1: new Date(2023, 2, 13), data2: new Date(2023, 2, 13), descritivo: "Comissão Redação/PQD dia todo (8h30 às 11h30 e 13h30 às 17h)", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, pais: false, niv: ""},
    // {data1: new Date(2023, 2, 13), data2: new Date(2023, 2, 13), descritivo: "Reunião Bibliotecário auxiliar presencial.", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, pais: false, niv: ""},
    // {data1: new Date(2023, 2, 14), data2: new Date(2023, 2, 14), descritivo: "Formadores de área (tarde)", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, pais: false, niv: ""},
    // {data1: new Date(2023, 2, 14), data2: new Date(2023, 2, 14), descritivo: "2ª Chamada AV1 I BIM - FI-EM", cal: "caab", resp: "", foto: "", detalhes: "", pais: true, pais: false, niv: ""},
    // {data1: new Date(2023, 2, 14), data2: new Date(2023, 2, 15), descritivo: "Realização do APSE", cal: "", resp: "caab", foto: "", detalhes: "", pais: true, pais: false, niv: ""},
    // {data1: new Date(2023, 2, 18), data2: new Date(2023, 2, 18), descritivo: "Dia do Jovem Adventista", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, pais: false, niv: ""},
    // {data1: new Date(2023, 2, 19), data2: new Date(2023, 2, 19), descritivo: "Feriado São José dos Pinhais", cal: "out", resp: "", foto: "", detalhes: "", pais: false, pais: false, niv: ""},
    // {data1: new Date(2023, 2, 20), data2: new Date(2023, 2, 20), descritivo: "Feriado Pinhais", cal: "out", resp: "", foto: "", detalhes: "", pais: false, pais: false, niv: ""},
    // {data1: new Date(2023, 2, 20), data2: new Date(2023, 2, 20), descritivo: "Início do Outono", cal: "out", resp: "", foto: "", detalhes: "", pais: true, pais: false, niv: ""},
    // {data1: new Date(2023, 2, 20), data2: new Date(2023, 2, 20), descritivo: "Data limite para o lançamento das notas AV1 no SAD (prof)", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, pais: false, niv: ""},
    // {data1: new Date(2023, 2, 21), data2: new Date(2023, 2, 21), descritivo: "Reunião com alunos/pais bolsistas – assinatura documento(s) de comprometimento e ciência", cal: "caab", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    // {data1: new Date(2023, 2, 21), data2: new Date(2023, 2, 21), descritivo: "Reunião de departamentais e Coordenadoras de Campo (remoto)", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    // {data1: new Date(2023, 2, 21), data2: new Date(2023, 2, 21), descritivo: "Reunião Participativa de Pais e alunos - 6º ao EM", cal: "caab", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    // {data1: new Date(2023, 2, 22), data2: new Date(2023, 2, 22), descritivo: "Reunião Grupo Gestor com presença da USB – presencial ASP", cal: "caab", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    // {data1: new Date(2023, 2, 23), data2: new Date(2023, 2, 23), descritivo: "ECO - Encontro Coordes e Orients - SOE E SOP – presencial ASP", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    // {data1: new Date(2023, 2, 26), data2: new Date(2023, 2, 29), descritivo: "Encontro de Pastores Escolares - USB", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    // {data1: new Date(2023, 2, 27), data2: new Date(2023, 2, 31), descritivo: "1ª Semana de Oração e Impacto Esperança nas escolas - (projeto cada escola numa cidade) - FII ao Médio", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    // {data1: new Date(2023, 2, 28), data2: new Date(2023, 2, 29), descritivo: "Enem TEEN e TREINEIRO 1º BIM", cal: "caab", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    // {data1: new Date(2023, 2, 27), data2: new Date(2023, 2, 27), descritivo: "Feriado Municipal de União da Vitória", cal: "out", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    // {data1: new Date(2023, 2, 27), data2: new Date(2023, 2, 31), descritivo: "Impacto Esperança nas escolas - (projeto cada escola numa cidade)", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    // {data1: new Date(2023, 2, 27), data2: new Date(2023, 2, 31), descritivo: "Pesquisa de satisfação com todos os alunos novos (link pelo departamento)", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    // {data1: new Date(2023, 2, 27), data2: new Date(2023, 2, 31), descritivo: "Semana de oração", cal: "caab", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    // {data1: new Date(2023, 2, 27), data2: new Date(2023, 2, 31), descritivo: "Encontro Pedagógico SOP individual - EI e FI", cal: "caab", resp: "", foto: "", detalhes: "", pais: false, niv: "inf5"},
    // {data1: new Date(2023, 2, 28), data2: new Date(2023, 2, 28), descritivo: "Reunião Participativa de Pais e alunos - após AV1 - Horário aula", cal: "caab", resp: "", foto: "", detalhes: "", pais: false, niv: "inf5"},
    // {data1: new Date(2023, 2, 28), data2: new Date(2023, 2, 29), descritivo: "GEPEA pedagógico – Presencial IAP", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    // {data1: new Date(2023, 2, 30), data2: new Date(2023, 2, 30), descritivo: "Devolutiva APSE aos alunos e pais (zoom)", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    // {data1: new Date(2023, 2, 30), data2: new Date(2023, 2, 30), descritivo: "Impacto Esperança – data única para entrega do livro da esperança", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    // {data1: new Date(2023, 2, 31), data2: new Date(2023, 2, 31), descritivo: "Data limite para a regularização dos registros dos conteúdos e notas do mês no SAD (prof)", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    // {data1: new Date(2023, 2, 31), data2: new Date(2023, 2, 31), descritivo: "Relatório mensal de notificações para pais - impresso", cal: "caab", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    
    // ABRIL
    // {data1: new Date(2023, 3, 1), data2: new Date(2023, 3, 1), descritivo: "Impacto Esperança", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    // {data1: new Date(2023, 3, 1), data2: new Date(2023, 3, 8), descritivo: "Semana Santa", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    // {data1: new Date(2023, 3, 2), data2: new Date(2023, 3, 2), descritivo: "Domingo Letivo – Cantata de Páscoa (permutado com recesso do dia 20/02)", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    // {data1: new Date(2023, 3, 3), data2: new Date(2023, 3, 6), descritivo: "Semana Santa Escolar (1ª semana de Oração)", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    // {data1: new Date(2023, 3, 10), data2: new Date(2023, 3, 14), descritivo: "Período de aplicação da AV2 I BIM- corrigir, lançar notas no SAD e devolver aos estudantes até 5 dias úteis após a data da sua avaliação - FUND II ao Médio", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    // {data1: new Date(2023, 3, 3), data2: new Date(2023, 3, 20), descritivo: "Pesquisa/ avaliação dos professores pelos alunos", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    // {data1: new Date(2023, 3, 3), data2: new Date(2023, 3, 3), descritivo: "Data limite para a elaboração dos PEI’s dos alunos novos 2023 – SOE", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    // {data1: new Date(2023, 3, 10), data2: new Date(2023, 3, 14), descritivo: "Período de aplicação da AV2 - colocar nos primeiros dias as provas com mais complicação de correção - FI", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: "inf5"},
    // {data1: new Date(2023, 3, 4), data2: new Date(2023, 3, 4), descritivo: "Comissão de Educação/Diretiva", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    // {data1: new Date(2023, 3, 4), data2: new Date(2023, 3, 4), descritivo: "Reunião Pedagógica FUND II e EM - Formação Continuada e Pauta Pedagógica", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    // {data1: new Date(2023, 3, 5), data2: new Date(2023, 3, 5), descritivo: "Data limite para a entrega ao SOP dos (planejamentos) conteúdos e métodos avaliativos do 2º bimestre (prof).", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    // {data1: new Date(2023, 3, 7), data2: new Date(2023, 3, 7), descritivo: "Feriado  Sexta-feira Santa", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    // {data1: new Date(2023, 3, 9), data2: new Date(2023, 3, 9), descritivo: "Páscoa", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    // {data1: new Date(2023, 3, 10), data2: new Date(2023, 3, 28), descritivo: "Aplicação das provas diagnósticas de alfabetização – 1ª testagem – prova unificada ASP/USB", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    // {data1: new Date(2023, 3, 10), data2: new Date(2023, 3, 14), descritivo: "Simulado Enem Interativo – Sugestão ASP (13 e 14) Aplicação", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    // {data1: new Date(2023, 3, 10), data2: new Date(2023, 3, 20), descritivo: "Pesquisa/ avaliação dos professores pelos alunos", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    // {data1: new Date(2023, 3, 10), data2: new Date(2023, 3, 10), descritivo: "Comissão de Ciências USB (dia todo - 8h30 às 11h30 e 13h30 às 17h)", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    // {data1: new Date(2023, 3, 11), data2: new Date(2023, 3, 11), descritivo: "Formadores de área USB (tarde)", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    // {data1: new Date(2023, 3, 12), data2: new Date(2023, 3, 12), descritivo: "Comissão Literatura (tarde)", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    // {data1: new Date(2023, 3, 11), data2: new Date(2023, 3, 12), descritivo: "Simulado Enem Interativo - EM", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    // {data1: new Date(2023, 3, 17), data2: new Date(2023, 3, 17), descritivo: "2ª Chamada AV2 I BIM- FUND I ao Médio", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    // {data1: new Date(2023, 3, 18), data2: new Date(2023, 3, 18), descritivo: "Comissão de Arte (tarde)", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    // {data1: new Date(2023, 3, 18), data2: new Date(2023, 3, 18), descritivo: "Data limite para o registro de todas as Atividades Avaliativas de Aprendizagem do 1º bimestre no SAD (prof)", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    // {data1: new Date(2023, 3, 18), data2: new Date(2023, 3, 18), descritivo: "SAD ENCERRADO - 1º ENCERRAMENTO I BIM", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    // {data1: new Date(2023, 3, 18), data2: new Date(2023, 3, 18), descritivo: "Aulão Unificado - Alunos Terceirão - o dia todo", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    // {data1: new Date(2023, 3, 18), data2: new Date(2023, 3, 18), descritivo: "Reunião Pedagógica EI-FI", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: "inf5"},
    // {data1: new Date(2023, 3, 19), data2: new Date(2023, 3, 19), descritivo: "Conselho de Classe (novo formato de acordo com o regimento) - FUND I", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: "inf5"},
    // {data1: new Date(2023, 3, 20), data2: new Date(2023, 3, 20), descritivo: "Liberação dos gabaritos e provas – Enem Interativo", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    // {data1: new Date(2023, 3, 20), data2: new Date(2023, 3, 20), descritivo: "Organização das convocações para a Recuperação Bimestral e Entrega das convocações para a Recuperação Bimestral aos alunos FI", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    // {data1: new Date(2023, 3, 20), data2: new Date(2023, 3, 20), descritivo: "Conselho de Classe I BIM - FUND II E EM", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    // {data1: new Date(2023, 3, 21), data2: new Date(2023, 3, 21), descritivo: "Feriado Tiradentes", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    // {data1: new Date(2023, 3, 22), data2: new Date(2023, 3, 22), descritivo: "Início da divulgação dos resultados do Enem Interativo", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    
    // {data1: new Date (2023, 4, 15), data2: new Date (2023, 1, 19), descritivo: 'Pré-conselho SOE EI-FI', cal: 'asp', resp:, foto:, detalhes:, pais:, niv:
    {data1: new Date(2023, 3, 24), data2: new Date(2023, 3, 24), descritivo: "Data limite - Entrega do Planejamento e Calendário Avaliativo do II BIM/FUND II e EM", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 3, 24), data2: new Date(2023, 3, 28), descritivo: "Recuperação I bim FI ao EM", cal: "caab", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 3, 25), data2: new Date(2023, 3, 25), descritivo: "Reunião com psicólogos – remoto (8h)", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 3, 28), data2: new Date(2023, 3, 28), descritivo: "Final do 1º bimestre", cal: "out", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 3, 28), data2: new Date(2023, 3, 28), descritivo: "Relatório mensal de notificações para pais (impresso) - Rudi", cal: "caab", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 3, 30), data2: new Date(2023, 4, 15), descritivo: "Intercâmbio – Paris, Londres e Roma (ANP, ASP e ASR)", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},

    // MAIO
    {data1: new Date(2023, 4, 1), data2: new Date(2023, 4, 1), descritivo: "Feriado - Dia do Trabalho", cal: "out", resp: "", foto: "", detalhes: "", pais: true, niv: ""},
    {data1: new Date(2023, 4, 2), data2: new Date(2023, 4, 19), descritivo: "Projeto sexualidade com EF II e EM (SOE e Psicólogos)", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: "f2m"},
    {data1: new Date(2023, 4, 2), data2: new Date(2023, 4, 31), descritivo: "Reuniões Pedagógicas Individuais - FUND II e EM", cal: "caab", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 4, 2), data2: new Date(2023, 4, 2), descritivo: "Comissão de Educação/Diretiva", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 4, 2), data2: new Date(2023, 4, 2), descritivo: "Data limite para o envio dos Cronogramas Avaliativos aos alunos (2º Bim)", cal: "caab", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 4, 2), data2: new Date(2023, 4, 2), descritivo: "Início do 2º bimestre", cal: "caab", resp: "", foto: "", detalhes: "", pais: true, niv: ""},
    {data1: new Date(2023, 4, 2), data2: new Date(2023, 4, 2), descritivo: "“Projeto Fair Play” - Módulo Olimpíada do Conhecimento (Matemática/ Bom de Bíblia/Português/Redação) – fase unidade escolar", cal: "caab", resp: "", foto: "", detalhes: "", pais: true, niv: ""},
    {data1: new Date(2023, 4, 2), data2: new Date(2023, 4, 2), descritivo: "Envio do Cronograma Avaliativo II Bim - FUND II e EM", cal: "caab", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 4, 2), data2: new Date(2023, 4, 2), descritivo: "SAD ENCERRADO - 2º ENCERRAMENTO E ASSINATURA - I BIM", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 4, 2), data2: new Date(2023, 4, 5), descritivo: "2ª Semana de Hábitos de Estudos - FI ao Médio", cal: "asp", resp: "", foto: "", detalhes: "", pais: true, niv: "f2m"},
    {data1: new Date(2023, 4, 3), data2: new Date(2023, 4, 3), descritivo: "GEPEA Pedagógico – USB (remoto)", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 4, 5), data2: new Date(2023, 4, 5), descritivo: "Data limite para entrega das avaliações 2º Bimestre - Para Análise do SOP", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 4, 6), data2: new Date(2023, 4, 6), descritivo: "Sábado de Liberdade Religiosa", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 4, 7), data2: new Date(2023, 4, 7), descritivo: "Projeto Dia das Mães (Dia Letivo – dia permutado com recesso do dia 09/06)", cal: "caab", resp: "", foto: "", detalhes: "", pais: true, niv: "f2m"},
    {data1: new Date(2023, 4, 8), data2: new Date(2023, 4, 8), descritivo: "Dia do profissional de marketing", cal: "out", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 4, 8), data2: new Date(2023, 4, 8), descritivo: "Capacitação profs Mentores Chave do Enem e Aprofundamento itinerários - Presencial - 14 h - no auditório (a definir)", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 4, 8), data2: new Date(2023, 4, 12), descritivo: "Liberação para a visualização dos Pareceres e Boletins – 1º Bimestre / Entrega de boletins (Comunicar a disponibilidade no sistema)", cal: "caab", resp: "", foto: "", detalhes: "", pais: true, niv: ""},
    {data1: new Date(2023, 4, 8), data2: new Date(2023, 4, 12), descritivo: "Entrevistas UNASP e FADBA (pedagogia/licenciaturas)", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 4, 8), data2: new Date(2023, 4, 12), descritivo: "Assinatura virtual dos diários do 1º Bimestre (Conteúdos e Frequência) – SOP e secretaria", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 4, 8), data2: new Date(2023, 4, 19), descritivo: "Pesquisa da equipe administrativa por todos os professores e funcionários", cal: "caab", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 4, 9), data2: new Date(2023, 4, 11), descritivo: "Pastori - ASP", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 4, 9), data2: new Date(2023, 4, 12), descritivo: "Feira Educar – SP (diretores e tesoureiros)", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 4, 14), data2: new Date(2023, 4, 14), descritivo: "Dia das Mães", cal: "out", resp: "", foto: "", detalhes: "", pais: true, niv: ""},
    {data1: new Date(2023, 4, 15), data2: new Date(2023, 4, 19), descritivo: "Aula de campo - Projeto Água - TMA Acampamentos EI-1ºEF", cal: "caab", resp: "", foto: "", detalhes: "", pais: true, niv: "inf5"},
    {data1: new Date(2023, 4, 15), data2: new Date(2023, 4, 19), descritivo: "Período de aplicação da AV1 - 2º-5º", cal: "caab", resp: "", foto: "", detalhes: "", pais: true, niv: "inf5"},
    {data1: new Date(2023, 4, 15), data2: new Date(2023, 4, 19), descritivo: "Período de aplicação da AV1 - FII-EM", cal: "caab", resp: "", foto: "", detalhes: "", pais: true, niv: "f2m"},
    {data1: new Date(2023, 4, 15), data2: new Date(2023, 4, 19), descritivo: "Pré-conselho SOE EI-FI", cal: "caab", resp: "", foto: "", detalhes: "", pais: false, niv: "inf5"},
    {data1: new Date(2023, 4, 15), data2: new Date(2023, 4, 19), descritivo: "Encontro pedagógico individual - EI ao 1º FI", cal: "caab", resp: "", foto: "", detalhes: "", pais: false, niv: "inf5"},
    {data1: new Date(2023, 4, 15), data2: new Date(2023, 4, 19), descritivo: "Semana do Lenço – aventureiros (alunos e professores)", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 4, 18), data2: new Date(2023, 4, 18), descritivo: "Comissão de Matemática USB (tarde)", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 4, 18), data2: new Date(2023, 4, 18), descritivo: "Reunião de Assistentes Financeiros –", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 4, 19), data2: new Date(2023, 4, 21), descritivo: "Congresso de Liberdade Religiosa - Paraná", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 4, 20), data2: new Date(2023, 4, 20), descritivo: "Sábado da Criança e Dia Mundial dos Aventureiros", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 4, 22), data2: new Date(2023, 4, 22), descritivo: "Dia do abraço - SOE - FUND I", cal: "caab", resp: "", foto: "", detalhes: "", pais: false, niv: "inf5"},
    {data1: new Date(2023, 4, 22), data2: new Date(2023, 4, 22), descritivo: "Aula de campo - Projeto Água - TMA Acampamentos 2ºEF", cal: "caab", resp: "", foto: "", detalhes: "", pais: true, niv: "inf5"}, 
    {data1: new Date(2023, 4, 23), data2: new Date(2023, 4, 23), descritivo: "Reunião Participativa de Pais e alunos – (após AV1)- EI-FI", cal: "caab", resp: "", foto: "", detalhes: "", pais: true, niv: "inf5"},
    {data1: new Date(2023, 4, 23), data2: new Date(2023, 4, 23), descritivo: "Reunião Participativa de Pais e alunos – FII-EM", cal: "caab", resp: "", foto: "", detalhes: "", pais: true, niv: "f2m"},
    {data1: new Date(2023, 4, 24), data2: new Date(2023, 4, 24), descritivo: "Segunda chamada 2º-5ºEF", cal: "caab", resp: "", foto: "", detalhes: "", pais: true, niv: "inf5"},
    {data1: new Date(2023, 4, 24), data2: new Date(2023, 4, 24), descritivo: "2ª Chamada AV1 - FII-EM", cal: "caab", resp: "", foto: "", detalhes: "", pais: true, niv: "f2m"},
    {data1: new Date(2023, 4, 25), data2: new Date(2023, 4, 25), descritivo: "Enem TEEN II BIM- 6º A 8º", cal: "caab", resp: "", foto: "", detalhes: "", pais: true, niv: "f2m"},
    {data1: new Date(2023, 4, 26), data2: new Date(2023, 4, 26), descritivo: "Data limite para o lançamento das notas da AV1 no SAD (prof) e Data limite para a regularização dos registros dos conteúdos do mês, no SAD ", cal: "caab", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 4, 26), data2: new Date(2023, 4, 28), descritivo: "Together - ASP", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 4, 26), data2: new Date(2023, 4, 26), descritivo: "ENEM TREINEIRO 2º Bimestre - 9º-EM", cal: "caab", resp: "", foto: "", detalhes: "", pais: true, niv: "f2m"},
    {data1: new Date(2023, 4, 26), data2: new Date(2023, 4, 26), descritivo: "Relatório mensal de notificações para pais (impresso)", cal: "caab", resp: "", foto: "", detalhes: "", pais: true, niv: "f2m"},
    {data1: new Date(2023, 4, 29), data2: new Date(2023, 4, 29), descritivo: "Aula de campo - Projeto Água - TMA Acampamentos 3ºEF", cal: "caab", resp: "", foto: "", detalhes: "", pais: true, niv: "inf5"},
    {data1: new Date(2023, 4, 30), data2: new Date(2023, 4, 30), descritivo: "Aula de campo - Projeto Água - TMA Acampamentos 4ºEF", cal: "caab", resp: "", foto: "", detalhes: "", pais: true, niv: "inf5"},
    {data1: new Date(2023, 4, 28), data2: new Date(2023, 4, 30), descritivo: "Encontro de SOP e SOE - CATRE", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 4, 30), data2: new Date(2023, 5, 1), descritivo: "Encontro de Secretários, bibliotecários e auxiliares, jurídico e marketing – CATRE", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},    
    
    // JUNHO
    {data1: new Date(2023, 5, 1), data2: new Date(2023, 5, 1), descritivo: "Treinamento diretores (remoto)", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 5, 1), data2: new Date(2023, 5, 30), descritivo: "Pesquisa de satisfação (Pais e responsáveis)", cal: "caab", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 5, 1), data2: new Date(2023, 5, 30), descritivo: "Remediação da EI 5 anos", cal: "caab", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 5, 4), data2: new Date(2023, 5, 7), descritivo: "Premiação da Campanha de matrículas 2022 – equipe gestora", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 5, 6), data2: new Date(2023, 5, 6), descritivo: "Comissão de Educação/Diretiva", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 5, 6), data2: new Date(2023, 5, 6), descritivo: "Reunião Pedagógica FUND II e EM - Formação Continuada e Pauta Pedagógica", cal: "caab", resp: "", foto: "", detalhes: "", pais: false, niv: "f2m"},
    {data1: new Date(2023, 5, 8), data2: new Date(2023, 5, 8), descritivo: "Feriado Corpus Christi", cal: "out", resp: "", foto: "", detalhes: "", pais: true, niv: ""},
    {data1: new Date(2023, 5, 9), data2: new Date(2023, 5, 9), descritivo: "Recesso (Dia permutável com 45144 – Domingo letivo Dia dos Pais)", cal: "out", resp: "", foto: "", detalhes: "", pais: true, niv: ""},
    {data1: new Date(2023, 5, 12), data2: new Date(2023, 5, 16), descritivo: "Período de aplicação da AV2 II BIM - 6º ao EM", cal: "caab", resp: "", foto: "", detalhes: "", pais: true, niv: "f2m"},
    {data1: new Date(2023, 5, 12), data2: new Date(2023, 5, 16), descritivo: "Período de aplicação da AV2 II BIM - corrigir, lançar notas no SAD e devolver aos estudantes até 5 dias úteis após a data da sua avaliação - FII ao Médio", cal: "caab", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 5, 15), data2: new Date(2023, 5, 21), descritivo: "Período de aplicação da AV2 - colocar nos primeiros dias as provas com mais complicação de correção.", cal: "caab", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 5, 15), data2: new Date(2023, 5, 21), descritivo: "Período de aplicação da AV2 - 2º ao 5º ano.", cal: "caab", resp: "", foto: "", detalhes: "", pais: true, niv: "inf5"},
    {data1: new Date(2023, 5, 13), data2: new Date(2023, 5, 15), descritivo: "Projeto Educador Fiel nas escolas", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 5, 18), data2: new Date(2023, 5, 21), descritivo: "Encontro de Educação – CATRE", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 5, 20), data2: new Date(2023, 5, 20), descritivo: "Conselho de Educação – CATRE", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 5, 20), data2: new Date(2023, 5, 20), descritivo: "Início Campanha de Matrículas de Meio de Ano - digital", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 5, 20), data2: new Date(2023, 5, 20), descritivo: "2ª Chamada AV2 II BIM FUND II e EM", cal: "caab", resp: "", foto: "", detalhes: "", pais: true, niv: "f2m"},
    {data1: new Date(2023, 5, 20), data2: new Date(2023, 5, 30), descritivo: "Aplicação das provas diagnósticas de alfabetização – 2ª testagem", cal: "caab", resp: "", foto: "", detalhes: "", pais: true, niv: "inf5"},
    {data1: new Date(2023, 5, 24), data2: new Date(2023, 5, 24), descritivo: "Dia do Ancião", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 5, 23), data2: new Date(2023, 5, 23), descritivo: "2ª Chamada FI", cal: "caab", resp: "", foto: "", detalhes: "", pais: true, niv: "inf5"},
    {data1: new Date(2023, 5, 23), data2: new Date(2023, 5, 23), descritivo: "Data limite para o registro de todas as Atividades Avaliativas de Aprendizagem do 2º bimestre no SAD (prof)", cal: "caab", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 5, 23), data2: new Date(2023, 5, 23), descritivo: "SAD ENCERRADO - 1º ENCERRAMENTO II BIM - FII ao Médio", cal: "caab", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 5, 25), data2: new Date(2023, 5, 25), descritivo: "Domingo Letivo – “Projeto Fair Play” - Olimpíada do Conhecimento (Matemática/ Bom de bíblia/Português/Redação) – Fase Final (Dia Letivo – dia permutado com recesso do dia 17/07)", cal: "asp", resp: "", foto: "", detalhes: "", pais: true, niv: "f2m"},
    {data1: new Date(2023, 5, 26), data2: new Date(2023, 5, 26), descritivo: "Comissão de Educação Física USB (tarde)", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 5, 27), data2: new Date(2023, 5, 27), descritivo: "Comissão de Ciências da Natureza USB (tarde)", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 5, 27), data2: new Date(2023, 5, 27), descritivo: "Reunião de Bibliotecários USB (remoto)", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 5, 26), data2: new Date(2023, 5, 26), descritivo: "Conselho de Classe EI-FI (novo formato de acordo com o regimento)", cal: "caab", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 5, 26), data2: new Date(2023, 5, 26), descritivo: "Conselho de Classe II BIM - FUND II e EM", cal: "caab", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 5, 27), data2: new Date(2023, 5, 27), descritivo: "Organização das convocações para a Recuperação Bimestral e Entrega das convocações para a Recuperação Bimestral aos alunos", cal: "caab", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 5, 28), data2: new Date (2023, 6, 4), descritivo: 'Recuperação Bimestral II BIM - Fund II e Médio', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: true, niv: ' '},
    {data1: new Date(2023, 6, 29), data2: new Date (2023, 6, 5), descritivo: 'Recuperação Bimestral', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: true, niv: 'inf5'},
    {data1: new Date(2023, 5, 29), data2: new Date(2023, 5, 29), descritivo: "Data limite - Entrega do Planejamento e Calendário Avaliativo do III BIM/FUND II e EM", cal: "caab", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 5, 30), data2: new Date(2023, 5, 30), descritivo: "Relatório mensal de notificações para pais (impresso) - Rudi (CAAB)", cal: "caab", resp: "", foto: "", detalhes: "", pais: true, niv: ""},
    
    //JULHO
    {data1: new Date (2023, 6, 5), data2: new Date (2023, 6, 7), descritivo: 'COPA CAAB', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: true, niv: 'f2m'},
    {data1: new Date (2023, 6, 3), data2: new Date (2023, 6, 3), descritivo: 'Data limite para a entrega ao SOP dos (planejamentos) conteúdos e métodos avaliativos do 3º bimestre', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 6, 3), data2: new Date (2023, 6, 3), descritivo: 'Reunião Pedagógica EI-FI', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 6, 3), data2: new Date (2023, 6, 7), descritivo: 'Semana para cada unidade dar a devolutiva/feedbacks das avaliações de profs e funcionários', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 6, 4), data2: new Date (2023, 6, 4), descritivo: 'Comissão de Educação/Diretiva', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 6, 4), data2: new Date (2023, 6, 4), descritivo: 'Reunião com os psicólogos – presencial Asp (11h as 14h)', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 6, 7), data2: new Date (2023, 6, 7), descritivo: 'Final do 2º Bimestre', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: true, niv: ' '},
    {data1: new Date (2023, 6, 6), data2: new Date (2023, 6, 6), descritivo: 'SAD ENCERRADO - 2º ENCERRAMENTO E ASSINATURA - II BIM - FII E MÉDIO', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 6, 10), data2: new Date (2023, 6, 10), descritivo: 'Liberação do boletins – 2º bimestre - on line (Não precisa de reunião de pais)', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: true, niv: ' '},
    {data1: new Date (2023, 6, 9), data2: new Date (2023, 6, 21), descritivo: 'Recesso Docente (de 17 a 21 recesso para professores – compensação de alguns domingos letivos)', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 6, 9), data2: new Date (2023, 6, 24), descritivo: 'Recesso Discente', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: true, niv: ' '},
    {data1: new Date (2023, 6, 10), data2: new Date (2023, 6, 20), descritivo: 'Colônia de Férias/ Escola Cristã de Férias - Contraturno (quem fizer)', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 6, 20), data2: new Date (2023, 6, 21), descritivo: 'Reunião ECO SOP e SOE - Presencial', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 6, 24), data2: new Date (2023, 6, 24), descritivo: 'Planejamento das escolas com profs - Reunião de alinhamento', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 6, 25), data2: new Date (2023, 6, 25), descritivo: 'Início do 3º bimestre', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: true, niv: ' '},
    {data1: new Date (2023, 6, 24), data2: new Date (2023, 6, 28), descritivo: 'Planejamento Educação – USB', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 6, 25), data2: new Date (2023, 6, 31), descritivo: 'Semana Hábitos de Estudo (SOE)', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: true, niv: ' '},
    {data1: new Date (2023, 6, 25), data2: new Date (2023, 6, 25), descritivo: 'Reunião com Assistentes Financeiros - Campos', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 6, 28), data2: new Date (2023, 6, 28), descritivo: 'Data limite para a entrega dos critérios avaliativos e conteúdos do 3º bimestre para os alunos', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 6, 28), data2: new Date (2023, 6, 28), descritivo: 'Data limite para entrega das avaliações 3º Bimestre - Para Análise do SOP', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 6, 29), data2: new Date (2023, 6, 29), descritivo: 'Feriado Municipal Paranaguá)', cal: 'out', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 6, 31), data2: new Date (2023, 6, 31), descritivo: 'Data limite para a regularização dos registros dos conteúdos do mês, no SAD', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 6, 31), data2: new Date (2023, 6, 8), descritivo: 'Orçamento das escolas - 2024', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    
    //AGOSTO
    {data1: new Date (2023, 7, 1), data2: new Date (2023, 7, 1), descritivo: 'Noite Esportiva- 5º ano', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 7, 1), data2: new Date (2023, 7, 8), descritivo: 'Orçamento das escolas – 2023', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 7, 1), data2: new Date (2023, 7, 11), descritivo: 'Projeto sexualidade com EF I (SOE e Psicólogos)', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 7, 1), data2: new Date (2023, 7, 1), descritivo: 'Comissão de Educação/Diretiva', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 7, 3), data2: new Date (2023, 7, 4), descritivo: 'Data para a atualização dos PEI’s EI_FI', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 7, 6), data2: new Date (2023, 7, 6), descritivo: 'Projeto Dia dos Pais (Dia Letivo – dia permutado com recesso do dia 03/11)', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 7, 7), data2: new Date (2023, 7, 31), descritivo: 'Questionário Contextuais PAEEB (EM, docentes e equipes gestoras)', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 7, 7), data2: new Date (2023, 7, 7), descritivo: 'Capacitação profes de Redação - Presencial - 14 h -', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 7, 7), data2: new Date (2023, 7, 11), descritivo: 'Lançamento do PMDE – 2º Semestre', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 7, 8), data2: new Date (2023, 7, 8), descritivo: 'Liderança Vice-diretores (remoto)', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 7, 11), data2: new Date (2023, 7, 11), descritivo: 'Dia do Estudante', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 7, 13), data2: new Date (2023, 7, 13), descritivo: 'Dia dos Pais', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 7, 14), data2: new Date (2023, 7, 18), descritivo: 'Período de aplicação da AV1 FI - colocar nos primeiros dias as provas com mais complicação de correção.', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 7, 14), data2: new Date (2023, 7, 18), descritivo: 'Período de aplicação da AV1 - corrigir, lançar notas no SAD e devolver aos estudantes até 5 dias úteis após a data da sua avaliação', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 7, 15), data2: new Date (2023, 7, 17), descritivo: 'Lançamento de matrículas equipe administrativa – diretrizes e macros da campanha 2024 – ASP', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 7, 15), data2: new Date (2023, 7, 15), descritivo: 'Treinamento de promotores e atendimento de matrículas 2024 – manhã', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 7, 20), data2: new Date (2023, 7, 23), descritivo: 'Planejamento USB', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 7, 21), data2: new Date (2023, 7, 25), descritivo: 'Projeto Quebrando o Silêncio nas Escolas', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 7, 21), data2: new Date (2023, 7, 23), descritivo: 'GEPEA Pedagógico - USB', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 7, 21), data2: new Date (2023, 7, 21), descritivo: '2ª Chamada FI', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 7, 21), data2: new Date (2023, 7, 21), descritivo: '2ª Chamada FUND II e EM - AV1', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 7, 22), data2: new Date (2023, 7, 22), descritivo: 'Reunião ECO - SOP e SOP - Dia do Coordenador Pedagógico e Orientador – Presencial', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 7, 24), data2: new Date (2023, 7, 24), descritivo: 'Beto Carrero (Excursão)', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 7, 21), data2: new Date (2023, 7, 25), descritivo: 'Pré Conselho EI e 1º ano.', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 7, 21), data2: new Date (2023, 7, 25), descritivo: 'Encontro Pedagógico EI-FI', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 7, 25), data2: new Date (2023, 7, 25), descritivo: 'Relatório mensal de notificações para pais (impresso) - Rudi (CAAB)', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 7, 27), data2: new Date (2023, 7, 27), descritivo: 'Dia do Psicólogo', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 7, 26), data2: new Date (2023, 7, 26), descritivo: 'Projeto Quebrando o Silêncio', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 7, 27), data2: new Date (2023, 7, 27), descritivo: 'Domingo letivo apenas para CAPI e EAUV - Projeto Quebrando o Silêncio (Dia Letivo – dia permutado com recesso do dia 20/07)', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 7, 27), data2: new Date (2023, 7, 27), descritivo: 'Lançamento de Matrículas – ASP para as escolas', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 7, 28), data2: new Date (2023, 7, 28), descritivo: 'Início do Ranking matrículas 2024', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 7, 28), data2: new Date (2023, 7, 28), descritivo: 'Enem TEEN - 6º a 8º - III BIM', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 7, 28), data2: new Date (2023, 7, 29), descritivo: 'Enem TREINEIRO - 9º a EM - III BIM', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 7, 29), data2: new Date (2023, 7, 29), descritivo: 'Reunião participativa alunos e pais EI_FI – (após AV1)', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 7, 29), data2: new Date (2023, 7, 29), descritivo: 'Data limite para o lançamento das notas da AV1 no SAD (prof)', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 7, 31), data2: new Date (2023, 7, 31), descritivo: 'Capacitação profs Mentores Chave do Enem e Aprofundamento itinerários - Presencial - 14 h - no Auditório (ASP)', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 7, 31), data2: new Date (2023, 7, 31), descritivo: 'Data limite para a regularização dos registros dos conteúdos do mês, no SAD', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 7, 29), data2: new Date (2023, 7, 16), descritivo: 'Processo de rematrículas', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 7, 30), data2: new Date (2023, 7, 30), descritivo: 'Lançamento de matrículas servidores CAAB (rever esta data)', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 7, 30), data2: new Date (2023, 7, 30), descritivo: 'Beto Carrero', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 7, 31), data2: new Date (2023, 7, 31), descritivo: 'Lançamento de matrículas alunos e pais', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    
    //SETEMBRO
    {data1: new Date (2023, 8, 1), data2: new Date (2023, 8, 29), descritivo: 'Aplicação das Provas Diagnósticas da Alfabetização – 3ª testagem', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 8, 1), data2: new Date (2023, 8, 30), descritivo: 'Pesquisa de Satisfação – pais e responsáveis', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 8, 4), data2: new Date (2023, 8, 4), descritivo: 'Comissão de Redação/PQD (tarde)', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 8, 5), data2: new Date (2023, 8, 5), descritivo: 'Comissão de Educação/Diretiva', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 8, 5), data2: new Date (2023, 8, 5), descritivo: 'Encontro de Professores de Projeto de Vida (remoto)', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 8, 5 ), data2: new Date (2023, 8, 5 ), descritivo: 'Reunião Participativa de Pais e Estudantes - FUND II e EM - III BIM', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 8, 7), data2: new Date (2023, 8, 7), descritivo: 'Feriado Independência do Brasil', cal: 'out', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 8, 8), data2: new Date (2023, 8, 8), descritivo: 'Feriado Municipal (Curitiba) – CAAB, CAC, CCABR', cal: 'out', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 8, 8), data2: new Date (2023, 8, 8), descritivo: 'Recesso CAAP, CAFRG, CAPgua, CAPI, CASJP, CAUV', cal: 'out', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 8, 9), data2: new Date (2023, 8, 16), descritivo: 'Semana da Esperança', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 8, 11), data2: new Date (2023, 8, 11), descritivo: 'Início Campanha de Matrículas 2024 – digital', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 8, 11), data2: new Date (2023, 8, 15), descritivo: 'Semana do Lenço – Desbravadores (alunos e funcionários)', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 8, 11), data2: new Date (2023, 8, 11), descritivo: 'Reunião de alinhamento ECO - SOE e SOP - On Line - 8h30', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 8, 11), data2: new Date (2023, 8, 15), descritivo: 'Período de aplicação da AV2 - FI - colocar nos primeiros dias as provas com mais complicação de correção.', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 8, 13), data2: new Date (2023, 8, 13), descritivo: 'Comissão de Ciências da Natureza (tarde)', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 8, 13), data2: new Date (2023, 8, 19), descritivo: 'Período de aplicação da AV2 III BIM - corrigir, lançar notas no SAD e devolver aos estudantes até 5 dias úteis após a data da sua avaliação.', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 8, 14), data2: new Date (2023, 8, 14), descritivo: 'Comissão de Matemática (tarde)', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 8, 16), data2: new Date (2023, 8, 16), descritivo: 'Dia Mundial do Desbravador / Batismo da Primavera', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 8, 17), data2: new Date (2023, 8, 17), descritivo: 'Super Dia D', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 8, 17), data2: new Date (2023, 8, 19), descritivo: '“Projeto Fair Play” - Módulo Jogos da Amizade – sendo dia 17 Dia Letivo – dia permutado com recesso do dia 45177 para CAAP/CAFRG/CAPI/CAPgua/CASJP/EAUV* / Para CAAB/CAC/CCABR – dia permutado com dia 19/07)', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 8, 18), data2: new Date (2023, 8, 22), descritivo: 'Aula de campo EI-FI - TMA Acampamentos', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 8, 20), data2: new Date (2023, 8, 20), descritivo: 'Data limite para a entrega ao SOP dos conteúdos e métodos avaliativos do 4º bimestre', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 8, 20), data2: new Date (2023, 8, 20), descritivo: '2ª Chamada FI', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 8, 20), data2: new Date (2023, 8, 20), descritivo: 'Comissão de Educação Física (tarde)', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 8, 21), data2: new Date (2023, 8, 21), descritivo: 'Conselho de Classe EI- FI(novo formato de acordo com o regimento)', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 8, 20), data2: new Date (2023, 8, 20), descritivo: '2ª Chamada - AV2 FUND II e EM', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 8, 21), data2: new Date (2023, 8, 21), descritivo: 'Conselho de Classe - III BIM', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 8, 21), data2: new Date (2023, 8, 21), descritivo: 'Comissão de Arte (tarde)', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 8, 22), data2: new Date (2023, 8, 22), descritivo: 'Entrega das convocações para a Recuperação Bimestral aos alunos', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 8, 21), data2: new Date (2023, 8, 22), descritivo: 'Organização das convocações para a Recuperação Bimestral', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 8, 22), data2: new Date (2023, 8, 22), descritivo: 'Dia do Contador e Tesoureiro(a) escolar', cal: 'out', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 8, 25), data2: new Date (2023, 8, 29), descritivo: 'Recuperação Bimestral FI', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 8, 25), data2: new Date (2023, 8, 25), descritivo: 'Recuperação Bimestral - FUND II e EM - III BIM', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 8, 26), data2: new Date (2023, 8, 26), descritivo: 'Data limite para o registro de todas as Atividades Avaliativas de Aprendizagem do 3º bimestre no SAD (prof) EI-FI', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 8, 27), data2: new Date (2023, 8, 29), descritivo: 'Caravana Arautos do Rei', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 8, 27), data2: new Date (2023, 8, 27), descritivo: 'Comissão de Literatura (tarde)', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 8, 29), data2: new Date (2023, 8, 29), descritivo: 'Final do 3º bimestre', cal: 'out', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 8, 29), data2: new Date (2023, 8, 29), descritivo: 'Relatório mensal de notificações para pais (impresso) - Rudi', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 8, 30), data2: new Date (2023, 8, 30), descritivo: 'Dia da Secretária(o)', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 8, 30), data2: new Date (2023, 8, 30), descritivo: 'Data limite para o envio dos Cronogramas Avaliativos aos alunos FI', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 8, 30), data2: new Date (2023, 8, 30), descritivo: 'Data limite para a regularização dos registros dos conteúdos do mês, no SAD', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    
    //OUTUBRO
    {data1: new Date (2023, 9, 2), data2: new Date (2023, 9, 4), descritivo: 'Visita às faculdades de pedagogia', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 9, 2), data2: new Date (2023, 9, 3), descritivo: 'Enem Interativo – EM', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 9, 2), data2: new Date (2023, 9, 2), descritivo: 'Início do 4º bimestre', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 9, 3), data2: new Date (2023, 9, 3), descritivo: 'Comissão de Educação/Diretiva', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 9, 4), data2: new Date (2023, 9, 5), descritivo: 'GEPEA – FAP', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 9, 4), data2: new Date (2023, 9, 20), descritivo: 'Projeto Redação Nota 1000 para alunos EM (cada escola agendar prof Marlus)', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 9, 4), data2: new Date (2023, 9, 4), descritivo: 'Encerramento de aplicação do Enem Interativo', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 9, 4), data2: new Date (2023, 9, 4), descritivo: 'Matrículas abertas para alunos novos – vaga garantida para o aluno veterano até esse dia', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 9, 5), data2: new Date (2023, 9, 5), descritivo: 'Liberação dos gabaritos e provas – Enem Interativo', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 9, 6), data2: new Date (2023, 9, 6), descritivo: 'SAD ENCERRADO - 2º ENCERRAMENTO E ASSINATURA - II BIM', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 9, 6), data2: new Date (2023, 9, 6), descritivo: 'Início da divulgação dos resultados do Enem Interativo', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 9, 6), data2: new Date (2023, 9, 6), descritivo: 'Data limite para entrega das avaliações 4º Bimestre - Para Análise do SOP', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 9, 7), data2: new Date (2023, 9, 7), descritivo: 'Sábado de Educação', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 9, 7), data2: new Date (2023, 9, 7), descritivo: 'Feriado Municipal Paranaguá)', cal: 'out', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 9, 8), data2: new Date (2023, 9, 8), descritivo: '1º Dia D – Mostra Cultural - (Dia Letivo – dia permutado com recesso do dia 18/07)', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 9, 9), data2: new Date (2023, 9, 9), descritivo: 'Início das Avaliações do Cliente Oculto', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 9, 9), data2: new Date (2023, 9, 9), descritivo: 'Liberação para a visualização dos Pareceres e Boletins – 3º Bimestre / Entrega de boletins', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 9, 9), data2: new Date (2023, 9, 9), descritivo: 'Impressão dos diários do 3º Bimestre (Conteúdos e Frequência)', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 9, 9), data2: new Date (2023, 9, 11), descritivo: 'Semana da Criança EI-FI', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 9, 11), data2: new Date (2023, 9, 15), descritivo: 'Campori da USB', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 9, 12), data2: new Date (2023, 9, 12), descritivo: 'Feriado N. S. Aparecida', cal: 'out', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 9, 13), data2: new Date (2023, 9, 13), descritivo: 'Recesso Dia do Professor (Dia permutado com 15/10)', cal: 'out', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 9, 16), data2: new Date (2023, 9, 10), descritivo: 'período de Estágio de pedagogia IAP', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 9, 16), data2: new Date (2023, 9, 20), descritivo: 'Semana Criacionista', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 9, 16), data2: new Date (2023, 9, 20), descritivo: 'Período de aplicação da AV1 FI', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 9, 16), data2: new Date (2023, 9, 20), descritivo: 'Período de aplicação da AV1 - corrigir, lançar notas no SAD e devolver aos estudantes até 5 dias úteis após a data da sua avaliação.', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 9, 16), data2: new Date (2023, 9, 19), descritivo: 'Comemoração do Dia do Professor por escola (combinar com profs compartilhados)', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 9, 18), data2: new Date (2023, 9, 19), descritivo: 'Concilio Ministerial', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 9, 19), data2: new Date (2023, 9, 19), descritivo: 'Dia do Técnico em Informática', cal: 'out', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 9, 20), data2: new Date (2023, 9, 20), descritivo: 'Dia do Pastor Escolar', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 9, 21), data2: new Date (2023, 9, 21), descritivo: 'Dia do Pastor / Sábado da Criação', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 9, 24), data2: new Date (2023, 9, 25), descritivo: 'Avaliação PAAEB – 5º ano FI', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 9, 26), data2: new Date (2023, 9, 26), descritivo: 'Aplicação PAAEB – 9º ano', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 9, 27), data2: new Date (2023, 9, 27), descritivo: 'Aplicação PAAEB – 2ª série EM', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 9, 23), data2: new Date (2023, 9, 23), descritivo: 'Vestibular UFPR', cal: 'out', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 9, 24), data2: new Date (2023, 9, 24), descritivo: '2ª Chamada FI', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 9, 24), data2: new Date (2023, 9, 24), descritivo: '2ª Chamada AV1 IV BIM - FUND II e EM', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 9, 24), data2: new Date (2023, 9, 25), descritivo: 'GEPEA – Departamentais e Coordenadores - IAESC', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 9, 25), data2: new Date (2023, 9, 25), descritivo: 'Reunião Assistentes Financeiros - Campos', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 9, 26), data2: new Date (2023, 9, 26), descritivo: 'Aulão Unificado - Terceirão - Depende da data do Enem', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 9, 27), data2: new Date (2023, 9, 27), descritivo: 'Relatório mensal de notificações para pais (impresso) - Rudi', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 9, 30), data2: new Date (2023, 9, 31), descritivo: 'Reunião ECO – Sop e SOE - Presencial', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 9, 30), data2: new Date (2023, 9, 30), descritivo: 'Enem TEEN - 6º a 8º ano', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 9, 30), data2: new Date (2023, 9, 31), descritivo: 'Enem TEEN e TREINEIRO - 9º a EM', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 9, 31), data2: new Date (2023, 9, 31), descritivo: 'Data limite para a regularização dos registros dos conteúdos do mês, no SAD', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    
    //NOVEMBRO
    {data1: new Date (2023, 10, 23), data2: new Date (2023, 10, 3), descritivo: 'Avaliação PAAEB – 5º ano, 9º ano e 2ª EM - - Sugestão ASP (26 a 03/11)', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 10, 1), data2: new Date (2023, 10, 10), descritivo: 'Reunião participativa Pais e Alunos (após a AV1)', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 10, 2), data2: new Date (2023, 10, 2), descritivo: 'Feriado Finados', cal: 'out', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 10, 3), data2: new Date (2023, 10, 3), descritivo: 'Recesso (Dia permutado com 12/11)', cal: 'out', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 10, 5), data2: new Date (2023, 10, 5), descritivo: 'ENEM 1º Dia', cal: 'out', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 10, 4), data2: new Date (2023, 10, 4), descritivo: 'Dia do Espírito de Profecia', cal: 'out', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 10, 6), data2: new Date (2023, 10, 10), descritivo: 'Análise de quadro de pessoal das unidades para 2024', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 10, 6), data2: new Date (2023, 10, 10), descritivo: 'Lançamento do Mutirão de Natal nas escolas', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 10, 6), data2: new Date (2023, 10, 10), descritivo: 'Pré Conselho EI-FI', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 10, 7), data2: new Date (2023, 10, 7), descritivo: 'Comissão de Educação/Diretiva', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 10, 7), data2: new Date (2023, 10, 7), descritivo: 'Reunião com Psicólogos (remoto – 8h)', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 10, 7), data2: new Date (2023, 10, 7), descritivo: 'Reunião participativa Pais e Alunos (após a AV1) EI-FI-horáro de aula', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 10, 8), data2: new Date (2023, 10, 8), descritivo: 'Comissão de Arte - dia todo (8h30 às 11h30 e 13h30 às 17h)', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 10, 9), data2: new Date (2023, 10, 9), descritivo: 'Comissão de Educação Física - dia todo (8h30 às 11h30 e 13h30 às 17h)', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 10, 10), data2: new Date (2023, 10, 10), descritivo: 'Entrega dos Conteúdos para as Provas Finais, aos alunos (2º ano EF ao EM)', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 10, 11), data2: new Date (2023, 10, 11), descritivo: 'Ordenação Pastoral - ASP', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 10, 12), data2: new Date (2023, 10, 12), descritivo: 'Corrida Vida e Saúde - ASP', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 10, 12), data2: new Date (2023, 10, 12), descritivo: 'ENEM 2º Dia', cal: 'out', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 10, 12), data2: new Date (2023, 10, 12), descritivo: 'Dia do Diretor Escolar', cal: 'out', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 10, 12), data2: new Date (2023, 10, 12), descritivo: 'Domingo letivo – 2º Dia D (Corrida Vida e saúde) - (Dia Letivo – dia permutado com recesso do dia 20/07)', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 10, 13), data2: new Date (2023, 10, 20), descritivo: 'Período de aplicação da AV2 - FI', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 10, 13), data2: new Date (2023, 10, 22), descritivo: 'AV2 - corrigir, lançar notas no SAD e devolver aos estudantes até 5 dias úteis após a data da sua avaliação.', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 10, 14), data2: new Date (2023, 10, 14), descritivo: 'Conselho de Educação USB (remoto)', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 10, 14), data2: new Date (2023, 10, 14), descritivo: 'Reunião Administrativa – Departamentais e Coordenadores - Remoto', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 10, 15), data2: new Date (2023, 10, 15), descritivo: 'Feriado Proclamação da República', cal: 'out', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 10, 15), data2: new Date (2023, 10, 15), descritivo: 'Concílio Anual USB', cal: 'out', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 10, 16), data2: new Date (2023, 10, 16), descritivo: 'Reunião de equipe gestora com departamento', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 10, 18), data2: new Date (2023, 10, 18), descritivo: 'Celebração do Minha Escola Minha Igreja', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 10, 20), data2: new Date (2023, 10, 30), descritivo: 'Provas diagnósticas da Alfabetização – 3º testagem', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 10, 20), data2: new Date (2023, 10, 20), descritivo: 'Comissão de Redação/PQD - dia todo (8h30 às 11h30 e 13h30 às 17h)', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 10, 22), data2: new Date (2023, 10, 22), descritivo: 'Comissão de Ciências da Natureza - dia todo (8h30 às 11h30 e 13h30 às 17h)', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 10, 23), data2: new Date (2023, 10, 23), descritivo: '2ª Chamada', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 10, 23), data2: new Date (2023, 10, 23), descritivo: '2ª Chamada AV2 IV BIM - FUND II e EM', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 10, 23), data2: new Date (2023, 10, 23), descritivo: 'Dia Mundial de Ações de Graças (Thanksgiving Day)', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 10, 22), data2: new Date (2023, 10, 22), descritivo: 'Data limite para o lançamento das todas Atividades Avaliativas de Aprendizagem do 4º bimestre no SAD e regularização dos registros dos conteúdos, no SAD', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 10, 24), data2: new Date (2023, 10, 24), descritivo: 'Conselho de Classe EI-FI (novo formato de acordo com o regimento)', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 10, 24), data2: new Date (2023, 10, 24), descritivo: 'Relatório mensal de notificações para pais (impresso) - Rudi', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 10, 27), data2: new Date (2023, 10, 27), descritivo: 'Acampamento TMA- 5º ano', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 10, 27), data2: new Date (2023, 10, 27), descritivo: 'Conselho de Classe IV BIM - FUND II e EM', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 10, 27), data2: new Date (2023, 10, 27), descritivo: 'Organização das convocações para a Recuperação Bimestral e Entrega das convocações para a Recuperação Bimestral aos alunos', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 10, 27), data2: new Date (2023, 10, 27), descritivo: 'Comissão de Matemática- dia todo (8h30 às 11h30 e 13h30 às 17h)', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 10, 28), data2: new Date (2023, 10, 28), descritivo: 'Dia do(a) Monitor(a)', cal: 'out', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 10, 28), data2: new Date (2023, 10, 28), descritivo: 'Comissão de Literatura - dia todo (8h30 às 11h30 e 13h30 às 17h)', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 10, 29), data2: new Date (2023, 10, 5), descritivo: 'Recuperação de 4º bimestre FI', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 10, 29), data2: new Date (2023, 10, 5), descritivo: 'Recuperação Bimestral - IV BIM - FUND II e EM', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 10, 30), data2: new Date (2023, 10, 30), descritivo: 'Rumo ao 6º ano', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    
    //DEZEMBRO
    {data1: new Date (2023, 11, 29), data2: new Date (2023, 11, 5), descritivo: 'Recuperação Bimestral - IV BIM - FUND II e EM', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 11, 3), data2: new Date (2023, 11, 3), descritivo: 'Domingo letivo Cantata de Natal – (Dia Letivo – dia permutado com recesso do dia 21/07)', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 11, 4), data2: new Date (2023, 11, 4), descritivo: 'Dia do Orientador Educacional', cal: 'out', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 11, 5), data2: new Date (2023, 11, 5), descritivo: 'Comissão de Educação/Diretiva', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 11, 7), data2: new Date (2023, 11, 7), descritivo: 'Data limite para a regularização dos registros dos conteúdos do mês, no SAD', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 11, 7), data2: new Date (2023, 11, 7), descritivo: 'Formatura Educação Infantil 5 anos', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 11, 8), data2: new Date (2023, 11, 8), descritivo: 'Liberação para a visualização dos Pareceres e Boletins/Entrega de notas – 4º Bimestre', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 11, 8), data2: new Date (2023, 11, 8), descritivo: 'Conselho e Organização das convocações e editais para as Provas Finais – (48h antes das provas finais)', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 11, 9), data2: new Date (2023, 11, 9), descritivo: 'Culto de Ação de Graças ASP – Grupo Gestor das unidades', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 11, 12), data2: new Date (2023, 11, 12), descritivo: 'Encerramento do 4º bimestre - lembrando que não podemos colocar provas finais antes dessa data', cal: 'out', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 11, 12), data2: new Date (2023, 11, 12), descritivo: 'Validação e assinatura dos diários do 4º Bimestre (Conteúdos e Frequência)', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 11, 13), data2: new Date (2023, 11, 14), descritivo: 'Provas Finais', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 11, 13), data2: new Date (2023, 11, 14), descritivo: 'Provas Finais - FUND II e EM', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 11, 15), data2: new Date (2023, 11, 15), descritivo: 'Conselho final e Entrega de Resultado Final', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 11, 15), data2: new Date (2023, 11, 15), descritivo: 'Encerramento das atividades do contraturno', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 11, 17), data2: new Date (2023, 11, 19), descritivo: 'Formaturas', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 11, 17), data2: new Date (2023, 11, 17), descritivo: 'Confraternização Ministerial ASP', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 11, 18), data2: new Date (2023, 11, 18), descritivo: 'Prazo para revisão de resultados', cal: 'asp', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 11, 18), data2: new Date (2023, 11, 18), descritivo: 'Formaturas 9º e Terceirão (Colégio Portão)', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 11, 19), data2: new Date (2023, 11, 19), descritivo: 'Conselho de revisão de resultados', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 11, 20), data2: new Date (2023, 11, 20), descritivo: 'Início das Férias docentes', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 11, 20), data2: new Date (2023, 11, 15), descritivo: 'Férias Administração das Unidades Escolares – limite máximo para retorno da equipe gestora da escola 15/01', cal: 'caab', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    {data1: new Date (2023, 11, 25), data2: new Date (2023, 11, 25), descritivo: 'Natal', cal: 'out', resp: ' ', foto: ' ', detalhes: ' ', pais: false, niv: ' '},
    
]



function mostrarEventos(){
    
    for ( i = 0; i < eventos.length; i++ ) {
        
        let d1 = eventos[i].data1
        let d2 = eventos[i].data2
        let desc = eventos[i].descritivo
        let res = eventos[i].foto
        let cal = eventos[i].cal
        let pais = eventos[i].pais
        let niv = eventos[i].niv
        
        

        if ( d1 < d2 ) {

            let eventos = document.querySelector('#body-eventos')

            let ev = document.createElement('div') 
            ev.classList.add('evento')

            if ( pais ) {
                ev.classList.add('pais')
            }

            if ( cal == 'asp' ) { 
                ev.classList.add('verde', 'asp')
            } else if ( cal == 'out') { 
                ev.classList.add('gray', 'out')
            } else if ( cal == 'caab' ) {
                if ( niv == 'inf5' ) {
                    ev.classList.add('lilas', 'caab')
                } else if ( niv == 'f2m') {
                    ev.classList.add('ouro', 'caab')
                } else {
                    ev.classList.add('azul-padrao', 'caab')
                }
            }

            let data = document.createElement('div')
            data.classList.add('data')

            let dias = document.createElement('div')
            dias.classList.add('dias')
            
            let dia = document.createElement('div')
            dia.classList.add('dia')

            let a = document.createElement('div')
            a.classList.add('a')

            let dia2 = document.createElement('div')
            dia2.classList.add('dia2')

            let mes = document.createElement('div')
            mes.classList.add('mes')

            let descricao = document.createElement('div')
            descricao.classList.add('descricao')

            let responsavel = document.createElement('div')
            responsavel.classList.add('resp')

            dia.innerHTML = d1.getDate()
            a.innerHTML = 'a'
            dia2.innerHTML = d2.getDate()
            mes.innerHTML = meses[d1.getMonth()]

            descricao.innerHTML = desc
            responsavel.innerHTML = res

            eventos.appendChild(ev)
            ev.appendChild(data)
            data.appendChild(dias)
            data.appendChild(mes)

            dias.appendChild(dia)
            dias.appendChild(a)
            dias.appendChild(dia2)
            ev.appendChild(descricao)
            ev.appendChild(responsavel)
            
        } else {

            let eventos = document.querySelector('#body-eventos')

            let ev = document.createElement('div')
            ev.classList.add('evento')

            if ( pais ) {
                ev.classList.add('pais')
            }

            if ( cal == 'asp' ) { 
                ev.classList.add('verde', 'asp')
            } else if ( cal == 'out') { 
                ev.classList.add('gray', 'out')
            } else if ( cal == 'caab' ) {
                if ( niv == 'inf5' ) {
                    ev.classList.add('lilas', 'caab')
                } else if ( niv == 'f2m') {
                    ev.classList.add('ouro', 'caab')
                } else {
                    ev.classList.add('azul-padrao', 'caab')
                }
            }
            
            let data = document.createElement('div')
            data.classList.add('data')

            let dias = document.createElement('div')
            dias.classList.add('dias')
            
            let diaU = document.createElement('div')
            diaU.classList.add('diaU')

            let mes = document.createElement('div')
            mes.classList.add('mes')

            let descricao = document.createElement('div')
            descricao.classList.add('descricao')

            let responsavel = document.createElement('div')
            responsavel.classList.add('resp')

            diaU.innerHTML = d1.getDate()
            mes.innerHTML = meses[d1.getMonth()]
            descricao.innerHTML = desc

            eventos.appendChild(ev)
            ev.appendChild(data)
            data.appendChild(dias)
            data.appendChild(mes)

            dias.appendChild(diaU)
            ev.appendChild(descricao)

        }

        
    }

    filterSelection("all")
}

// Expande a área de filtros do calendário e muda o botão

// document.querySelector('#eventos-mais').addEventListener('click', ()=>{

//     let filtros = document.querySelector('#filtros')
//     filtros.classList.add('displayToggle')
//     document.querySelector('#eventos-mais').style.display = "none"
//     document.querySelector('#eventos-menos').style.display = "flex"
    

// })

// document.querySelector('#eventos-menos').addEventListener('click', ()=>{

//     let filtros = document.querySelector('#filtros')
//     filtros.classList.remove('displayToggle')
//     document.querySelector('#eventos-mais').style.display = "flex"
//     document.querySelector('#eventos-menos').style.display = "none"


// })