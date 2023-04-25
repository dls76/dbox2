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
    {data1: new Date(2023, 5, 8), data2: new Date(2023, 5, 8), descritivo: "Feriado Corpus Christi", cal: "out", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 5, 9), data2: new Date(2023, 5, 9), descritivo: "Recesso (Dia permutável com 45144 – Domingo letivo Dia dos Pais)", cal: "out", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 5, 12), data2: new Date(2023, 5, 16), descritivo: "Período de aplicação da AV2 II BIM - corrigir, lançar notas no SAD e devolver aos estudantes até 5 dias úteis após a data da sua avaliação - FII ao Médio", cal: "caab", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 5, 15), data2: new Date(2023, 5, 21), descritivo: "Período de aplicação da AV2 - colocar nos primeiros dias as provas com mais complicação de correção.", cal: "caab", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 5, 13), data2: new Date(2023, 5, 15), descritivo: "Projeto Educador Fiel nas escolas", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 5, 18), data2: new Date(2023, 5, 21), descritivo: "Encontro de Educação – CATRE", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 5, 20), data2: new Date(2023, 5, 20), descritivo: "Conselho de Educação – CATRE", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 5, 20), data2: new Date(2023, 5, 20), descritivo: "Início Campanha de Matrículas de Meio de Ano - digital", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 5, 20), data2: new Date(2023, 5, 20), descritivo: "2ª Chamada AV2 II BIM FUND II e EM", cal: "caab", resp: "", foto: "", detalhes: "", pais: false, niv: "f2m"},
    {data1: new Date(2023, 5, 20), data2: new Date(2023, 5, 30), descritivo: "Aplicação das provas diagnósticas de alfabetização – 2ª testagem", cal: "caab", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 5, 24), data2: new Date(2023, 5, 24), descritivo: "Dia do Ancião", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 5, 23), data2: new Date(2023, 5, 23), descritivo: "2ª Chamada FI", cal: "caab", resp: "", foto: "", detalhes: "", pais: false, niv: "inf5"},
    {data1: new Date(2023, 5, 23), data2: new Date(2023, 5, 23), descritivo: "Data limite para o registro de todas as Atividades Avaliativas de Aprendizagem do 2º bimestre no SAD (prof)", cal: "caab", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 5, 23), data2: new Date(2023, 5, 23), descritivo: "SAD ENCERRADO - 1º ENCERRAMENTO II BIM - FII ao Médio", cal: "caab", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 5, 25), data2: new Date(2023, 5, 25), descritivo: "Domingo Letivo – “Projeto Fair Play” - Olimpíada do Conhecimento (Matemática/ Bom de bíblia/Português/Redação) – Fase Final (Dia Letivo – dia permutado com recesso do dia 17/07)", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 5, 26), data2: new Date(2023, 5, 26), descritivo: "Comissão de Educação Física USB (tarde)", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 5, 27), data2: new Date(2023, 5, 27), descritivo: "Comissão de Ciências da Natureza USB (tarde)", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 5, 27), data2: new Date(2023, 5, 27), descritivo: "Reunião de Bibliotecários USB (remoto)", cal: "asp", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 5, 26), data2: new Date(2023, 5, 26), descritivo: "Conselho de Classe EI-FI (novo formato de acordo com o regimento)", cal: "caab", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 5, 26), data2: new Date(2023, 5, 26), descritivo: "Conselho de Classe II BIM - FUND II e EM", cal: "caab", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 5, 27), data2: new Date(2023, 5, 27), descritivo: "Organização das convocações para a Recuperação Bimestral e Entrega das convocações para a Recuperação Bimestral aos alunos", cal: "caab", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 5, 28), data2: new Date(2023, 6, 4), descritivo: "Recuperação Bimestral II BIM - Fund II e Médio", cal: "caab", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 5, 29), data2: new Date(2023, 5, 29), descritivo: "Data limite - Entrega do Planejamento e Calendário Avaliativo do III BIM/FUND II e EM", cal: "caab", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    {data1: new Date(2023, 5, 30), data2: new Date(2023, 5, 30), descritivo: "Relatório mensal de notificações para pais (impresso) - Rudi (CAAB)", cal: "caab", resp: "", foto: "", detalhes: "", pais: false, niv: ""},
    
    
    
    
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

            if ( cal == 'asp' ) { 
                ev.classList.add('verde')
            } else if ( cal == 'out') { 
                ev.classList.add('gray')
            } else if ( cal == 'caab' ) {
                if ( niv == 'inf5' ) {
                    ev.classList.add('lilas')
                } else if ( niv == 'f2m') {
                    ev.classList.add('ouro')
                } else {
                    ev.classList.add('azul-padrao')
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

            if ( cal == 'asp' ) { 
                ev.classList.add('verde')
            } else if ( cal == 'out') { 
                ev.classList.add('gray')
            } else if ( cal == 'caab' ) {
                if ( niv == 'inf5' ) {
                    ev.classList.add('lilas')
                } else if ( niv == 'f2m') {
                    ev.classList.add('ouro')
                } else {
                    ev.classList.add('azul-padrao')
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

    // load()
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