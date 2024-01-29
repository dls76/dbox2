// window.addEventListener("load", mostrarEventos)

const meses = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ']

let eventos = [

    //Fevereiro
    {data1: new Date(2023, 1, 1), data2: new Date(2023, 1, 1), descritivo: "Reunião com os pais novos 6° ao médio. ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 1, 2), data2: new Date(2023, 1, 2), descritivo: "Reunião de Pastores recém-chegados na USB educação – zoom ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 1, 2), data2: new Date(2023, 1, 2), descritivo: "Projeto Acolhimento EI ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 1, 5), data2: new Date(2023, 1, 5), descritivo: "Entrega de materiais Ed.Infantil ao 5° ano ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 1, 5), data2: new Date(2023, 1, 5), descritivo: "Início do 1º bimestre / Início das Aulas 6° ao médio ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 1, 5), data2: new Date(2023, 1, 9), descritivo: "Semana de acolhimento dos alunos ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 1, 5), data2: new Date(2023, 1, 5), descritivo: "Data limite para entrega do planejamento ao SOP com os critérios avaliativos do bimestre ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 1, 6), data2: new Date(2023, 1, 6), descritivo: "Início das aulas Ed. Infantil ao 5° ano EFI ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 1, 6), data2: new Date(2023, 1, 6), descritivo: "Início das aulas Contraturno. ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 1, 5), data2: new Date(2023, 3, 15), descritivo: "Avaliação Diagnóstica - PAAEB (Público-alvo: alunos do 6º Ano EF e 1ª Série EM) ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 1, 6), data2: new Date(2023, 1, 6), descritivo: "Comissão de Educação/Diretiva ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 1, 6), data2: new Date(2023, 1, 6), descritivo: "Dia de acolhimento aos 6ºs anos ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 1, 11), data2: new Date(2023, 1, 11), descritivo: "Dia do Zelador ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 1, 12), data2: new Date(2023, 1, 12), descritivo: "Recesso Carnaval (Dia permutável com recesso) ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 1, 13), data2: new Date(2023, 1, 13), descritivo: "Feriado Carnaval ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 1, 14), data2: new Date(2023, 1, 14), descritivo: "Data limite para entrega das avaliações 1º Bimestre - Para Análise do SOP ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 1, 14), data2: new Date(2023, 1, 20), descritivo: "Revisão e organização dos critérios avaliativos com os devidos conteúdos do 1º bimestre - SOP ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 1, 14), data2: new Date(2023, 1, 23), descritivo: "Lançamento Redação Nota 1000 para alunos – EF II e EM – por escola (cada escola agendar com prof Marlus) ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 1, 15), data2: new Date(2023, 1, 15), descritivo: "Redação Nota Mil ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 1, 19), data2: new Date(2023, 1, 19), descritivo: "Inicio do uso dos livros didáticos (na unidades escolar). ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 1, 19), data2: new Date(2023, 1, 23), descritivo: "Semana Hábitos de Estudo – SOE ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 1, 19), data2: new Date(2023, 1, 21), descritivo: "Formação Programa Bilíngue – Catre S Luiz Purunã ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 1, 22), data2: new Date(2023, 2, 2), descritivo: "Dez dias de Oração ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 1, 23), data2: new Date(2023, 1, 23), descritivo: "Envio dos critérios avaliativos com os devidos conteúdos para alunos e pais ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 1, 23), data2: new Date(2023, 1, 23), descritivo: "Reunião de alinhamento - ECO - SOE E SOP - On Line - 8h30 ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 1, 23), data2: new Date(2023, 1, 23), descritivo: "Última data para cadastro e alteração de itinerários EM ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 1, 26), data2: new Date(2023, 1, 26), descritivo: "Data limite para o cadastro de alunos na plataforma da CPB, aprimora, aplicativo CPB ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 1, 26), data2: new Date(2023, 1, 26), descritivo: "Data limite para a obrigatoriedade do uso dos livros didáticos. Fazer o levantamento dos alunos que não compraram ainda. (ter o cuidado de verificar primeiramente se há falta de algum livro – loja)", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 1, 26), data2: new Date(2023, 1, 29), descritivo: "Sondagem de escrita individual CAC / Sondagem de esquema corporal (DESENHO) ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 1, 27), data2: new Date(2023, 1, 27), descritivo: "Feriado Municipal em Fazenda Rio Grande) ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 1, 28), data2: new Date(2023, 1, 28), descritivo: "Reunião Comissão de Educação Especial ", cal: "", resp: "", foto: "", detalhes: ""},

    //Março
    {data1: new Date(2023, 2, 1), data2: new Date(2023, 2, 31), descritivo: "Recuperação e Remediação do 1º ano e alunos não alfabetizados - (acrescentar alunos de outras séries) ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 3), data2: new Date(2023, 2, 8), descritivo: "Visita Técnica nas escolas ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 3), data2: new Date(2023, 2, 8), descritivo: "Lançamento do PMDE ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 3), data2: new Date(2023, 2, 8), descritivo: "Período de aplicação da AV1 – Fund II ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 3), data2: new Date(2023, 2, 8), descritivo: "Período de aplicação da AV1 – Dias unificados para Fund 2 e EM ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 3), data2: new Date(2023, 2, 3), descritivo: "Reunião Administrativa (departamentais e coordenadores campo) – remoto tarde ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 4), data2: new Date(2023, 2, 4), descritivo: "Treinamento IATec – Adconnetc – TI’s ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 4), data2: new Date(2023, 2, 4), descritivo: "Fórum IATec – Filantropia – 15h ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 4), data2: new Date(2023, 2, 6), descritivo: "Reunião Coordenadores pastoral Escolar – Presencial USB ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 7), data2: new Date(2023, 2, 7), descritivo: "Dia Internacional da Mulher ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 11), data2: new Date(2023, 2, 11), descritivo: "Fórum IATec – Acadêmico – 15h ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 11), data2: new Date(2023, 2, 11), descritivo: "Dia do Bibliotecário ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 11), data2: new Date(2023, 2, 11), descritivo: "Reunião bibliotecárias e auxiliares – presencial ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 11), data2: new Date(2023, 2, 11), descritivo: "PAMP ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 12), data2: new Date(2023, 2, 14), descritivo: "Reunião ECO - SOE e SOP – ASP (presencial) ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 12), data2: new Date(2023, 2, 12), descritivo: "Reunião de Secretários – ASP (presencial) ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 13), data2: new Date(2023, 2, 13), descritivo: "Data limite para o lançamento das notas AV1 no SAD (prof) ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 17), data2: new Date(2023, 2, 17), descritivo: "Reunião Participativa de Pais – Atividade Letiva para profs ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 17), data2: new Date(2023, 2, 17), descritivo: "Dia não letivo para alunos/ Atividades no contraturno normais ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 17), data2: new Date(2023, 2, 17), descritivo: "Reunião de pais? ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 17), data2: new Date(2023, 2, 22), descritivo: "Visitação Pastores Escolares - ACP e ASP USB ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 18), data2: new Date(2023, 2, 22), descritivo: "Aplicação das Provas Diagnósticas de Alfabetização - Hipótese de Escrita EI 4 5 anos e 1º ano EF – 1ª Testagem ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 18), data2: new Date(2023, 2, 18), descritivo: "Fórum IATec – Financeiro – 15h ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 18), data2: new Date(2023, 2, 28), descritivo: "Realização do APSE – EM - Cada escola faz com os alunos ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 19), data2: new Date(2023, 2, 19), descritivo: "Feriado Municipal S José dos Pinhais) ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 20), data2: new Date(2023, 2, 20), descritivo: "Feriado de Pinhais) ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 18), data2: new Date(2023, 2, 22), descritivo: "Aplicação das Provas Diagnósticas de Alfabetização ASP ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 20), data2: new Date(2023, 2, 20), descritivo: "Enem Interativo TEEN e TREINEIRO se há falta de algum livro – loja)", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 20), data2: new Date(2023, 2, 20), descritivo: "Reunião com alunos/pais bolsistas – assinatura documento(s) de comprometimento e ciência ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 20), data2: new Date(2023, 2, 20), descritivo: "Reunião Grupo Gestor (Diretores, vices, tesoureiros) – presencial ASP ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 22), data2: new Date(2023, 2, 22), descritivo: "Impacto Esperança ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 23), data2: new Date(2023, 2, 23), descritivo: "Domingo Letivo – Cantata de Páscoa (dia permutado com recesso) ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 24), data2: new Date(2023, 2, 28), descritivo: "Semana Santa Escolar e Impacto Esperança Escolas (1ª semana de Oração) ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 25), data2: new Date(2023, 2, 25), descritivo: "Fórum IATec – Pedagógico – 15h ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 27), data2: new Date(2023, 2, 27), descritivo: "Feriado Municipal de União da Vitória) ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 28), data2: new Date(2023, 2, 28), descritivo: "Recesso em União da Vitória) ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 27), data2: new Date(2023, 2, 27), descritivo: "Encerramento Ranking Matrículas 2024 ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 28), data2: new Date(2023, 2, 28), descritivo: "Feriado – Sexta-feira Santa ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 30), data2: new Date(2023, 2, 30), descritivo: "Páscoa ", cal: "", resp: "", foto: "", detalhes: ""},

    //Abril
    {data1: new Date(2023, 3, 1), data2: new Date(2023, 3, 1), descritivo: "Início da visitação dos alunos", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 3, 1), data2: new Date(2023, 3, 5), descritivo: "Pesquisa de satisfação com todos os alunos novos (link pelo departamento)", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 3, 1), data2: new Date(2023, 3, 5), descritivo: "Inicio da Classe Bíblica (5°s anos)", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 3, 1), data2: new Date(2023, 3, 5), descritivo: "AV2 Fund I", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 3, 1), data2: new Date(2023, 3, 12), descritivo: "Pesquisa/ avaliação dos professores pelos alunos", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 3, 1), data2: new Date(2023, 3, 22), descritivo: "Aplicação das provas diagnósticas de alfabetização – 1ª testagem – prova unificada ASP/USB", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 3, 1), data2: new Date(2023, 3, 5), descritivo: "Período de aplicação da AV2 – datas unificadas USB para fund 2 e EM - 2ª, 3ª E 4ª aula", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 3, 2), data2: new Date(2023, 3, 4), descritivo: "Devolutiva APSE aos alunos EM (zoom) - no momento da aula - Definir horário", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 3, 2), data2: new Date(2023, 3, 2), descritivo: "Comissão de Educação/Diretiva", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 3, 5), data2: new Date(2023, 3, 7), descritivo: "Encontro da AFAM", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 3, 6), data2: new Date(2023, 3, 6), descritivo: "Sábado de Educação", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 3, 8), data2: new Date(2023, 3, 19), descritivo: "Enem Interativo - (sugestão ASP - 8 a 12)", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 3, 8), data2: new Date(2023, 3, 8), descritivo: "Data limite para a entrega ao SOP dos (planejamentos) conteúdos e métodos avaliativos do 2º bimestre (prof)", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 3, 8), data2: new Date(2023, 3, 12), descritivo: "Escola Fiel", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 3, 11), data2: new Date(2023, 3, 11), descritivo: "Data limite para o registro de todas as Atividades Avaliativas de Aprendizagem do 1º bimestre no SAD (prof)", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 3, 11), data2: new Date(2023, 3, 11), descritivo: "Conselho de Classe (antes da recuperação)", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 3, 12), data2: new Date(2023, 3, 12), descritivo: "Organização das convocações para a Recuperação Bimestral e Entrega das convocações para a Recuperação Bimestral aos alunos", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 3, 13), data2: new Date(2023, 3, 13), descritivo: "Retiro Espiritual", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 3, 14), data2: new Date(2023, 3, 29), descritivo: "Missão Egito – USB/ CPB Bilingue", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 3, 15), data2: new Date(2023, 3, 19), descritivo: "Recuperação bimestral", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 3, 16), data2: new Date(2023, 3, 17), descritivo: "GEPEA administrativo, financeiro e pedagógico – Presencial IACS", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 3, 16), data2: new Date(2023, 3, 16), descritivo: "Fórum IATec – Financeiro – 15h", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 3, 17), data2: new Date(2023, 3, 17), descritivo: "Encerramento do 1º Bimestre", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 3, 18), data2: new Date(2023, 3, 18), descritivo: "Início do 2º bimestre", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 3, 19), data2: new Date(2023, 3, 19), descritivo: "Data limite para o envio dos Cronogramas Avaliativos aos alunos (2º Bim)", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 3, 21), data2: new Date(2023, 3, 21), descritivo: "Feriado Tiradentes", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 3, 22), data2: new Date(2023, 3, 23), descritivo: "REUNIÃO FORMATURA EI 5 ANOS (LANÇAR O RUMO AO 1º ANO – TIO MIRO)", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 3, 22), data2: new Date(2023, 3, 22), descritivo: "Liberação dos resultados Enem Interativo", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 3, 22), data2: new Date(2023, 3, 22), descritivo: "Data limite para a elaboração dos PEI’s dos alunos novos 2023 – SOE", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 3, 22), data2: new Date(2023, 3, 22), descritivo: "Capacitação Pastores Escolares – ACP e ASP", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 3, 22), data2: new Date(2023, 3, 26), descritivo: "Orçamento escolar", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 3, 23), data2: new Date(2023, 3, 26), descritivo: "Feira Educar SP", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 3, 26), data2: new Date(2023, 3, 28), descritivo: "Together", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 3, 29), data2: new Date(2023, 3, 29), descritivo: "Data limite para entrega das avaliações 2º Bimestre - Para Análise do SOP", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 3, 30), data2: new Date(2023, 3, 30), descritivo: "Premiação Fechamento Matrículas – ASP (Vice-diretor, vice-tesoureiros, secretário, auxiliar de secretaria, SOE, SOP e Pastor Escolar)", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 3, 30), data2: new Date(2023, 3, 30), descritivo: "Aulão Unificado - Alunos Terceirão - o dia todo", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 3, 30), data2: new Date(2023, 4, 3), descritivo: "2ª Semana de Hábitos de Estudos", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 3, 25), data2: new Date(2023, 3, 25), descritivo: "Reunião com psicólogos – remoto (8h)", cal: "", resp: "", foto: "", detalhes: ""},


    //Maio
    {data1: new Date(2023, 4, 1), data2: new Date(2023, 4, 1), descritivo: "Feriado Dia do Trabalho", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 4, 2), data2: new Date(2023, 4, 29), descritivo: "Pesquisa de Satisfação – PAIS", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 4, 2), data2: new Date(2023, 4, 2), descritivo: "Feira de Profissões (2ª Série EM – CHAVE do ENEM)", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 4, 3), data2: new Date(2023, 4, 3), descritivo: "Premiação Fechamento matrículas – ASP (diretores e tesoureiros", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 4, 5), data2: new Date(2023, 4, 20), descritivo: "Intercâmbio – Londres, Cardiff e Roma (ANP, ASP e ASR)", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 4, 2), data2: new Date(2023, 4, 28), descritivo: "Pesquisa da equipe administrativa por todos os professores e funcionários", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 4, 4), data2: new Date(2023, 4, 4), descritivo: "Bom de Biblia 1 fase", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 4, 5), data2: new Date(2023, 4, 5), descritivo: "Domingo Letivo Projeto Dia das Mães (dia permutado com recesso)", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 4, 6), data2: new Date(2023, 4, 6), descritivo: "Reunião administrativa departamentais e coordenadores campo (remoto – tarde)", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 4, 6), data2: new Date(2023, 4, 10), descritivo: "AV1 Fund II", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 4, 6), data2: new Date(2023, 4, 10), descritivo: "10 Período de aplicação da AV1 – datas unificadas para fund 2 e EM", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 4, 7), data2: new Date(2023, 4, 8), descritivo: "Pastori ASP", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 4, 8), data2: new Date(2023, 4, 8), descritivo: "Dia do profissional de marketing", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 4, 11), data2: new Date(2023, 4, 11), descritivo: "Sábado de Liberdade Religiosa", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 4, 12), data2: new Date(2023, 4, 12), descritivo: "Dia das Mães", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 4, 13), data2: new Date(2023, 4, 17), descritivo: "Enem TEEN e TREINEIRO", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 4, 13), data2: new Date(2023, 4, 13), descritivo: "Reunião de Assistentes Financeiros – Filantropia", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 4, 14), data2: new Date(2023, 4, 14), descritivo: "Projeto Fair Play” Módulo Olimpíada do Conhecimento Matemática/ Bom de Bíblia/Português/Redação) – fase unidade escolar", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 4, 14), data2: new Date(2023, 4, 14), descritivo: "Reunião Coordenadores da Pastoral Escolar USB (Remoto: período da tarde)", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 4, 15), data2: new Date(2023, 4, 15), descritivo: "Conselho de Educação remoto", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 4, 16), data2: new Date(2023, 4, 16), descritivo: "Plenária USB", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 4, 20), data2: new Date(2023, 4, 20), descritivo: "Data limite para o lançamento das notas da AV1 no SAD (prof) e Data limite para a regularização", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 4, 23), data2: new Date(2023, 4, 23), descritivo: "Reunião comissão de Educação Especial", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 4, 25), data2: new Date(2023, 4, 25), descritivo: "Bom de Bíblia 2 fases", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 4, 28), data2: new Date(2023, 4, 28), descritivo: "Treinamento IATec – eBolsa – Gestor de Bolsa", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 4, 29), data2: new Date(2023, 4, 29), descritivo: "Reunião Participativa de Pais – Atividade Letiva para profs", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 4, 29), data2: new Date(2023, 4, 29), descritivo: "Dia não letivo para alunos", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 4, 29), data2: new Date(2023, 4, 1), descritivo: "Convenção Jovem Maranata 2024 Brasília/DF , saída na terça (terça 28 e retorno domingo 02)", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 4, 30), data2: new Date(2023, 4, 30), descritivo: "Feriado Corpus Christi", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 4, 31), data2: new Date(2023, 4, 31), descritivo: "Recesso", cal: "", resp: "", foto: "", detalhes: ""},
]
/*
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
            } else if ( cal == 'cac' ) {
                if ( niv == 'inf5' ) {
                    ev.classList.add('lilas', 'cac')
                } else if ( niv == 'f2m') {
                    ev.classList.add('ouro', 'cac')
                } else {
                    ev.classList.add('azul-padrao', 'cac')
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
            } else if ( cal == 'cac' ) {
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
}*/


    eventos.forEach((e)=>{
        console.log(e.data1.getDate() + '-' + (e.data1.getMonth()+1) + ' | ' + e.descritivo)
    })
