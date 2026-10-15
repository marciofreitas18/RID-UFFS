// Categorias Oficiais conforme a Resolução Nº 239/CONSUNI/UFFS/2026
const categoriasRID = [
  { id: "ensino", nome: "1. ATIVIDADES DE ENSINO" },
  { id: "pesquisa", nome: "2. ATIVIDADES DE PESQUISA" },
  { id: "extensao", nome: "3. ATIVIDADES DE EXTENSÃO" },
  { id: "formacao", nome: "4. ATIVIDADES DE FORMAÇÃO" },
  { id: "gestao", nome: "5. ATIVIDADES DE ADMINISTRAÇÃO E GESTÃO UNIVERSITÁRIA" }
];

// Catálogo com itens parametrizados da Resolução 239/CONSUNI/UFFS/2026
const catalogoRID = [
  // 1. ENSINO
  { id: "1_1_1", cod: "1.1.1.", desc: "Ministração de Componente Curricular na Graduação", fator: 2.5, unit: "pontos/15h", cat: "ensino", calc: "horas" },
  { id: "1_1_2", cod: "1.1.2.", desc: "Ministração de Componente Curricular na Pós-Graduação", fator: 2.5, unit: "pontos/15h", cat: "ensino", calc: "horas" },
  { id: "1_2_1", cod: "1.2.1.", desc: "Membro titular de colegiado de curso", fator: 2.0, unit: "pontos/semestre", cat: "ensino" },
  { id: "1_2_2", cod: "1.2.2.", desc: "Membro suplente de colegiado de curso", fator: 1.0, unit: "pontos/semestre", cat: "ensino" },
  { id: "1_2_3", cod: "1.2.3.", desc: "Membro do Núcleo Docente Estruturante (NDE)", fator: 2.0, unit: "pontos/semestre", cat: "ensino" },
  { id: "1_2_4", cod: "1.2.4.", desc: "Membro de fóruns de ensino", fator: 1.0, unit: "pontos/semestre", cat: "ensino" },
  { id: "1_2_5", cod: "1.2.5.", desc: "Membro de outras comissões ligadas ao ensino", fator: 0.5, unit: "pontos/semestre", cat: "ensino" },
  { id: "1_2_6", cod: "1.2.6.", desc: "Coordenação de estágios", fator: 5.0, unit: "pontos/semestre", cat: "ensino" },
  { id: "1_3_1", cod: "1.3.1.", desc: "Orientação de trabalho de conclusão de curso (TCC)", fator: 4.0, unit: "pontos/TCC", cat: "ensino" },
  { id: "1_3_2", cod: "1.3.2.", desc: "Orientação de Residência Médica", fator: 5.0, unit: "pontos/unidade", cat: "ensino" },
  { id: "1_3_3", cod: "1.3.3.", desc: "Coorientação de TCC ou Residência Médica", fator: 2.0, unit: "pontos/unidade", cat: "ensino" },
  { id: "1_3_4", cod: "1.3.4.", desc: "Orientação de estágio curricular obrigatório", fator: 2.0, unit: "pontos/estagiário", cat: "ensino" },
  { id: "1_3_5", cod: "1.3.5.", desc: "Orientação de estágio curricular não obrigatório", fator: 1.0, unit: "pontos/estagiário", cat: "ensino" },
  { id: "1_3_6", cod: "1.3.6.", desc: "Orientação de monitoria", fator: 3.0, unit: "pontos/projeto", cat: "ensino" },
  { id: "1_3_7", cod: "1.3.7.", desc: "Orientação ou supervisão de PET, PIBID ou Residência Pedagógica", fator: 4.0, unit: "pontos/semestre", cat: "ensino" },
  { id: "1_3_8", cod: "1.3.8.", desc: "Tutoria acadêmica", fator: 2.0, unit: "pontos/semestre", cat: "ensino" },
  { id: "1_4_1", cod: "1.4.1.", desc: "Execução de palestra ou aula inaugural", fator: 2.0, unit: "pontos/palestra", cat: "ensino" },
  { id: "1_4_2", cod: "1.4.2.", desc: "Participação em banca de TCC de Graduação", fator: 1.5, unit: "pontos/banca", cat: "ensino" },

  // 2. PESQUISA
  { id: "2_1_1", cod: "2.1.1.", desc: "Coordenação de projeto de pesquisa institucionalizado", fator: 3.0, unit: "pontos/semestre", cat: "pesquisa" },
  { id: "2_1_2", cod: "2.1.2.", desc: "Colaboração em projeto de pesquisa institucionalizado", fator: 1.5, unit: "pontos/semestre", cat: "pesquisa" },
  { id: "2_1_3", cod: "2.1.3.", desc: "Coordenação de grupo de pesquisa cadastrado no CNPq", fator: 2.0, unit: "pontos/semestre", cat: "pesquisa" },
  { id: "2_2_1", cod: "2.2.1.", desc: "Orientação de dissertação de mestrado concluída", fator: 10.0, unit: "pontos/dissertação", cat: "pesquisa" },
  { id: "2_2_2", cod: "2.2.2.", desc: "Orientação de tese de doutorado concluída", fator: 15.0, unit: "pontos/tese", cat: "pesquisa" },
  { id: "2_2_3", cod: "2.2.3.", desc: "Orientação em andamento de Mestrado", fator: 4.0, unit: "pontos/semestre", cat: "pesquisa" },
  { id: "2_2_4", cod: "2.2.4.", desc: "Orientação em andamento de Doutorado", fator: 6.0, unit: "pontos/semestre", cat: "pesquisa" },
  { id: "2_2_5", cod: "2.2.5.", desc: "Orientação de Iniciação Científica (IC/IT)", fator: 3.0, unit: "pontos/projeto", cat: "pesquisa" },
  { id: "2_3_1", cod: "2.3.1.", desc: "Publicação de artigo científico Qualis A", fator: 15.0, unit: "pontos/artigo", cat: "pesquisa" },
  { id: "2_3_2", cod: "2.3.2.", desc: "Publicação de artigo científico Qualis B", fator: 10.0, unit: "pontos/artigo", cat: "pesquisa" },
  { id: "2_3_3", cod: "2.3.3.", desc: "Publicação de livro autoral com conselho editorial", fator: 20.0, unit: "pontos/livro", cat: "pesquisa" },
  { id: "2_3_4", cod: "2.3.4.", desc: "Publicação de capítulo de livro", fator: 5.0, unit: "pontos/capítulo", cat: "pesquisa" },
  { id: "2_4_1", cod: "2.4.1.", desc: "Banca de defesa de Mestrado", fator: 3.0, unit: "pontos/banca", cat: "pesquisa" },
  { id: "2_4_2", cod: "2.4.2.", desc: "Banca de defesa de Doutorado", fator: 5.0, unit: "pontos/banca", cat: "pesquisa" },

  // 3. EXTENSÃO
  { id: "3_1_1", cod: "3.1.1.", desc: "Coordenação de programa de extensão ou cultura", fator: 4.0, unit: "pontos/semestre", cat: "extensao" },
  { id: "3_1_2", cod: "3.1.2.", desc: "Colaboração em programa de extensão ou cultura", fator: 2.0, unit: "pontos/semestre", cat: "extensao" },
  { id: "3_1_3", cod: "3.1.3.", desc: "Coordenação de projeto de extensão ou cultura", fator: 3.0, unit: "pontos/semestre", cat: "extensao" },
  { id: "3_1_4", cod: "3.1.4.", desc: "Colaboração em projeto de extensão ou cultura", fator: 1.5, unit: "pontos/semestre", cat: "extensao" },
  { id: "3_2_1", cod: "3.2.1.", desc: "Orientação de bolsista ou voluntário de extensão", fator: 2.0, unit: "pontos/projeto", cat: "extensao" },
  { id: "3_3_1", cod: "3.3.1.", desc: "Produtos acadêmicos de extensão e cultura", fator: 1.0, unit: "pontos/unidade", cat: "extensao" },
  { id: "3_4_1", cod: "3.4.1.", desc: "Organização de evento de extensão", fator: 3.0, unit: "pontos/evento", cat: "extensao" },

  // 4. FORMAÇÃO
  { id: "4_1_1", cod: "4.1.1.", desc: "Pós-graduação stricto sensu (com afastamento)", fator: 45.0, unit: "pontos/semestre", cat: "formacao" },
  { id: "4_1_2", cod: "4.1.2.", desc: "Pós-graduação stricto sensu (sem afastamento)", fator: 28.0, unit: "pontos/semestre", cat: "formacao" },
  { id: "4_1_3", cod: "4.1.3.", desc: "Estágio Pós-Doutoral (com afastamento)", fator: 45.0, unit: "pontos/semestre", cat: "formacao" },
  { id: "4_1_4", cod: "4.1.4.", desc: "Estágio Pós-Doutoral (sem afastamento)", fator: 28.0, unit: "pontos/semestre", cat: "formacao" },
  { id: "4_1_5", cod: "4.1.5.", desc: "Cursos de formação continuada (mínimo 20h)", fator: 1.0, unit: "pontos/curso", cat: "formacao" },
  { id: "4_1_6", cod: "4.1.6.", desc: "Participação em cursos de formação docente UFFS", fator: 2.0, unit: "pontos/curso", cat: "formacao" },

  // 5. GESTÃO
  { id: "5_1_1", cod: "5.1.1.", desc: "Reitor, Vice-Reitor, Pró-Reitor ou Diretor de Campus", fator: 45.0, unit: "pontos/semestre", cat: "gestao" },
  { id: "5_1_2", cod: "5.1.2.", desc: "Secretário Especial ou Superintendente", fator: 40.0, unit: "pontos/semestre", cat: "gestao" },
  { id: "5_1_3", cod: "5.1.3.", desc: "Pró-Reitor Adjunto ou Diretor de Assessoria/Secretaria", fator: 35.0, unit: "pontos/semestre", cat: "gestao" },
  { id: "5_1_7", cod: "5.1.7.", desc: "Coordenador de curso de graduação ou pós-graduação", fator: 30.0, unit: "pontos/semestre", cat: "gestao" },
  { id: "5_1_8", cod: "5.1.8.", desc: "Coordenador adjunto ou de subárea de programa acadêmico", fator: 15.0, unit: "pontos/semestre", cat: "gestao" },
  { id: "5_1_12", cod: "5.1.12.", desc: "Membro de comissão instituída por ato administrativo", fator: 5.0, unit: "pontos/semestre", cat: "gestao" },
  { id: "5_1_13", cod: "5.1.13.", desc: "Membro do CONSUNI ou CÂMARAS FONTES", fator: 5.0, unit: "pontos/semestre", cat: "gestao" }
];


const formasAfericaoRID = {
  "1.1.1": "Carga horária ministrada na graduação no período de avaliação.",
  "1.1.2": "Carga horária ministrada na pós-graduação no período de avaliação.",
  "1.2.1": "Número de semestres no período avaliado em que foi membro titular de colegiado de curso.",
  "1.2.2": "Número de semestres no período avaliado em que foi membro suplente de colegiado de curso.",
  "1.2.3": "Número de semestres no período avaliado em que foi membro do NDE de curso.",
  "1.2.4": "Número de semestres no período avaliado em que foi membro de fóruns de ensino.",
  "1.2.5": "Número de semestres no período avaliado em que foi membro de outras comissões ligadas ao ensino.",
  "1.2.6": "Número de semestres no período avaliado em que foi coordenador de estágios do curso.",
  "1.3.1": "Número de TCCs orientados no período avaliado.",
  "1.3.2": "Número de residências orientadas no período avaliado.",
  "1.3.3": "Número de TCCs coorientados no período avaliado.",
  "1.3.4": "Número de estagiários obrigatórios orientados no período avaliado.",
  "1.3.5": "Número de estagiários não obrigatórios orientados no período avaliado.",
  "1.3.6": "Número de projetos de monitoria orientados no período avaliado.",
  "1.3.7": "Número de semestres no período avaliado em que tutoriou Grupo PET ou PIBID.",
  "1.3.8": "Número de monografias de especialização orientadas no período avaliado.",
  "1.3.9": "Número de bancas em que participou no período avaliado.",
  "1.3.10": "Número de bancas de livre-docência em que participou no período avaliado.",
  "1.3.11": "Número de bancas para Professor Titular da carreira EBTT em que participou no período avaliado.",
  "1.3.12": "Número de bancas de contratação de professor substituto em que participou no período avaliado.",
  "1.3.13": "Número de bancas de concurso público para a Carreira do Magistério Superior em que participou no período avaliado.",
  "1.3.14": "Somatório do número de projetos/grupos de ensino coordenados nos semestres do período avaliado.",
  "1.3.15": "Somatório do número de colaborações em projetos/grupos de ensino nos semestres do período avaliado.",
  "1.4.1": "Número de palestras ministradas no período avaliado.",
  "1.4.2": "Número de minicursos ministrados no período avaliado.",
  "1.4.3": "Número de oficinas ministradas no período avaliado.",

  "2.1.1": "Somatório do número de projetos coordenados nos semestres do período avaliado.",
  "2.1.2": "Somatório do número de projetos coordenados nos semestres do período avaliado.",
  "2.1.3": "Número de semestres no período avaliado em que coordenou grupo de pesquisa.",
  "2.1.4": "Somatório do número de projetos em que colaborou nos semestres do período avaliado.",
  "2.1.5": "Número de semestres no período avaliado em que permaneceu como bolsista.",

  "2.2.1": "Número de dissertações orientadas no período avaliado.",
  "2.2.2": "Número de teses orientadas no período avaliado.",
  "2.2.3": "Somatório do número de supervisionados nos semestres do período avaliado.",
  "2.2.4": "Somatório do número de orientados nos semestres do período avaliado.",
  "2.2.5": "Número de coorientações de mestrado no período avaliado.",
  "2.2.6": "Número de coorientações de doutorado no período avaliado.",

  "2.3.1": "Número de artigos Qualis A publicados no período avaliado.",
  "2.3.2": "Número de artigos Qualis B publicados no período avaliado.",
  "2.3.3": "Número de artigos Qualis C publicados no período avaliado.",
  "2.3.4": "Número de outros artigos publicados no período avaliado.",
  "2.3.5": "Número de textos publicados no período avaliado.",
  "2.3.6": "Número de livros publicados no período avaliado.",
  "2.3.7": "Número de capítulos publicados no período avaliado.",
  "2.3.8": "Número de trabalhos completos publicados no período avaliado.",
  "2.3.9": "Número de resumos expandidos publicados no período avaliado.",
  "2.3.10": "Número de resumos publicados no período avaliado.",
  "2.3.11": "Número de apresentações orais no período avaliado.",
  "2.3.12": "Número de apresentações de pôster no período avaliado.",

  "2.4.1": "Número de semestres no período avaliado em que foi editor.",
  "2.4.2": "Número de semestres no período avaliado em que foi editor de seção.",
  "2.4.3": "Número de anais de eventos editados no período avaliado.",
  "2.4.4": "Número de números especiais ou dossiês de periódico editados no período avaliado.",
  "2.4.5": "Número de semestres no período avaliado em que integrou conselho editorial de editora.",
  "2.4.6": "Número de semestres no período avaliado em que integrou conselho editorial de periódico.",
  "2.4.7": "Número de eventos em que participou como membro de comitê científico no período avaliado.",
  "2.4.8": "Somatório da participação em comitês nos semestres do período avaliado.",
  "2.4.9": "Somatório da participação em comitês nos semestres do período avaliado.",
  "2.4.10": "Número de revisões realizadas no período avaliado.",
  "2.4.11": "Número de avaliações de projetos realizadas no período avaliado.",

  "2.5.1": "Número de bancas de mestrado em que participou no período avaliado.",
  "2.5.2": "Número de bancas de qualificação em que participou no período avaliado.",
  "2.5.3": "Número de bancas de doutorado em que participou no período avaliado.",
  "2.5.4": "Número de comissões de seleção em que participou no período avaliado.",

  "2.6.1": "Número de livros traduzidos no período avaliado.",
  "2.6.2": "Número de capítulos traduzidos no período avaliado.",
  "2.6.3": "Número de artigos traduzidos no período avaliado.",
  "2.6.4": "Número de patentes registradas no período avaliado.",
  "2.6.5": "Número de patentes concedidas no período avaliado.",
  "2.6.6": "Número de produções técnicas no período avaliado.",

  "3.1.1": "Somatório do número de programas coordenados nos semestres do período avaliado.",
  "3.1.2": "Número de semestres no período avaliado em que exerceu a vice-coordenação.",
  "3.1.3": "Somatório do número de projetos coordenados nos semestres do período avaliado.",
  "3.1.4": "Somatório do número de cursos ou eventos coordenados nos semestres do período avaliado.",
  "3.1.5": "Somatório do número de ações em que colaborou nos semestres do período avaliado.",
  "3.1.6": "Somatório do número de ações coordenadas nos semestres do período avaliado.",
  "3.1.7": "Número de semestres no período avaliado em que coordenou núcleo de estudos.",

  "3.2.1": "Número de semestres no período avaliado em que exerceu a função.",
  "3.2.2": "Número de semestres no período avaliado em que exerceu a função.",
  "3.2.3": "Somatório da participação em comitês nos semestres do período avaliado.",
  "3.2.4": "Somatório da participação em comitês nos semestres do período avaliado.",
  "3.2.5": "Somatório da participação em comissões nos semestres do período avaliado.",
  "3.2.6": "Número de semestres no período avaliado em que integrou o conselho editorial.",
  "3.2.7": "Número de revisões realizadas no período avaliado.",
  "3.2.8": "Número de editais em que atuou como avaliador no período avaliado.",
  "3.2.9": "Número de avaliações realizadas no período avaliado.",

  "3.3.1": "Somatório do número de produtos nos semestres do período avaliado.",

  "3.4.1": "Somatório do número de orientados nos semestres do período avaliado.",
  "3.4.2": "Somatório do número de orientados nos semestres do período avaliado.",
  "3.4.3": "Somatório do número de orientados nos semestres do período avaliado.",
  "3.4.4": "Somatório do número de orientados nos semestres do período avaliado.",

  "4.1.1": "Número de semestres no período avaliado.",
  "4.1.2": "Número de semestres no período avaliado.",
  "4.1.3": "Número de semestres no período avaliado.",
  "4.1.4": "Número de semestres no período avaliado.",
  "4.1.5": "Número de semestres no período avaliado.",
  "4.1.6": "Número de participações no período avaliado (máximo de 6 formações).",
  "4.1.7": "Número de participações no período avaliado (máximo de 10 palestras).",
  "4.1.8": "Número de participações no período avaliado (máximo de 10 seminários).",
  "4.1.9": "Número de participações no período avaliado (máximo de 10 cursos).",

  "5.1.1": "Número de semestres no período avaliado em que exerceu a função.",
  "5.1.2": "Número de semestres no período avaliado em que exerceu a função.",
  "5.1.3": "Número de semestres no período avaliado em que exerceu a função.",
  "5.1.4": "Número de semestres no período avaliado em que exerceu a função.",
  "5.1.5": "Número de semestres no período avaliado em que exerceu a função.",
  "5.1.6": "Número de semestres no período avaliado em que exerceu a função.",
  "5.1.7": "Número de semestres no período avaliado em que exerceu a função.",
  "5.1.8": "Número de semestres no período avaliado em que exerceu a função.",
  "5.1.9": "Número de semestres no período avaliado em que exerceu a função.",
  "5.1.10": "Número de semestres no período avaliado em que exerceu a função.",
  "5.1.11": "Número de semestres no período avaliado em que exerceu a função.",
  "5.1.12": "Número de semestres no período avaliado em que exerceu a função.",
  "5.1.13": "Número de semestres no período avaliado em que exerceu a função.",
  "5.1.14": "Número de semestres no período avaliado em que exerceu a função.",
  "5.1.15": "Número de semestres no período avaliado em que exerceu a função.",
  "5.1.16": "Número de semestres no período avaliado em que exerceu a função.",
  "5.1.17": "Número de participações no período avaliado.",
  "5.1.18": "Número de participações no período avaliado.",
  "5.1.19": "Número de semestres no período avaliado em que exerceu a função.",
  "5.1.20": "Número de semestres no período avaliado em que exerceu a função.",
  "5.1.21": "Número de semestres no período avaliado em que exerceu a função.",
  "5.1.22": "Número de semestres no período avaliado em que exerceu a função.",
  "5.1.23": "Número de semestres no período avaliado em que exerceu a função.",
  "5.1.24": "Número de semestres no período avaliado em que exerceu a função.",
  "5.1.25": "Somatório do número de laboratórios em que colaborou nos semestres do período avaliado."
};

function obterFormaAfericao(item) {
  return formasAfericaoRID[item.cod] || "Consulte a forma de aferição prevista no Anexo II da Resolução nº 239/CONSUNI/UFFS/2026.";
}


let atividadesSelecionadas = [];

document.addEventListener("DOMContentLoaded", function() {
  popularTodosOsSelects();
  renderizarTodasAsTabelas();
});


function popularTodosOsSelects() {
  categoriasRID.forEach(categoria => {
    const cat = categoria.id;
    const select = document.getElementById(`select-${cat}`);
    if (!select) return;

    select.innerHTML =
      `<option value="">-- Selecione uma atividade --</option>` +
      catalogoRID
        .filter(item => item.cat === cat)
        .map(item =>
          `<option value="${item.id}">[${item.cod}] ${esc(item.desc)} (${item.fator} ${esc(item.unit)})</option>`
        )
        .join("");

    let orientacao = document.getElementById(`afericao-${cat}`);

    if (!orientacao) {
      orientacao = document.createElement("div");
      orientacao.id = `afericao-${cat}`;
      orientacao.className = "small mt-2 mb-2";
      orientacao.style.cssText =
        "display:none;background:#f0f7f2;border-left:4px solid #008037;padding:10px;border-radius:4px;";

      select.insertAdjacentElement("afterend", orientacao);
    }

    // Substitui o evento anterior, se houver, sem acumular listeners.
    select.onchange = function () {
      const item = catalogoRID.find(i => i.id === select.value);

      if (!item) {
        orientacao.style.display = "none";
        orientacao.innerHTML = "";
        return;
      }

      orientacao.innerHTML = `
        <strong>Fator de pontuação:</strong>
        ${item.fator} ${esc(item.unit)}
        <div class="mt-1">
          <strong>Forma de aferição:</strong>
          ${esc(obterFormaAfericao(item))}
        </div>
      `;

      orientacao.style.display = "block";
    };
  });
}


function adicionarAtividade(cat) {
  const select = document.getElementById(`select-${cat}`);
  const qtdInput = document.getElementById(`qtd-${cat}`);

  if (!select || !qtdInput) return;
  const itemId = select.value;
  const qtd = parseFloat(qtdInput.value);

  if (!itemId) { alert("Selecione uma atividade."); return; }
  if (isNaN(qtd) || qtd <= 0) { alert("Informe uma quantidade válida."); return; }

  const itemInfo = catalogoRID.find(i => i.id === itemId);
  if (!itemInfo) return;

  atividadesSelecionadas.push({
    uid: Date.now() + Math.random(),
    id: itemInfo.id,
    cod: itemInfo.cod,
    desc: itemInfo.desc,
    fator: itemInfo.fator,
    unit: itemInfo.unit,
    cat: itemInfo.cat,
    calc: itemInfo.calc,
    qtd: qtd,
    arquivoPDF: null
  });

  select.value = "";
  qtdInput.value = "";

  renderizarTabelaCategoria(cat);
  calcularTotais();
}

function removerAtividade(uid, cat) {
  atividadesSelecionadas = atividadesSelecionadas.filter(item => item.uid !== uid);
  renderizarTabelaCategoria(cat);
  calcularTotais();
}

function editarAtividade(uid, cat) {
  const item = atividadesSelecionadas.find(i => i.uid === uid);
  if (!item) return;

  const novaQtdStr = prompt(`Editar quantidade/horas para:\n"${item.cod} ${item.desc}"`, item.qtd);

  if (novaQtdStr !== null) {
    const novaQtd = parseFloat(novaQtdStr.replace(',', '.'));
    if (!isNaN(novaQtd) && novaQtd > 0) {
      item.qtd = novaQtd;
      renderizarTabelaCategoria(cat);
      calcularTotais();
    } else {
      alert("Por favor, insira um valor numérico válido e maior que zero.");
    }
  }
}

function salvarComprovante(uid, inputElement) {
  const item = atividadesSelecionadas.find(i => i.uid === uid);
  if (item && inputElement.files && inputElement.files[0]) {
    item.arquivoPDF = inputElement.files[0];
  }
}

function renderizarTodasAsTabelas() {
  ["ensino", "pesquisa", "extensao", "formacao", "gestao"].forEach(cat => renderizarTabelaCategoria(cat));
}

// Função para comparar códigos numéricos (ex: "1.1.1." vs "1.2.1.")
function compararCodigos(codA, codB) {
  const a = codA.replace(/\.$/, '').split('.').map(Number);
  const b = codB.replace(/\.$/, '').split('.').map(Number);

  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    const valA = a[i] || 0;
    const valB = b[i] || 0;
    if (valA !== valB) return valA - valB;
  }
  return 0;
}

function renderizarTabelaCategoria(cat) {
  const container = document.getElementById(`tabela-${cat}`);
  if (!container) return;

  // Filtra e ordena automaticamente pelo código numérico
  const itens = atividadesSelecionadas
    .filter(i => i.cat === cat)
    .sort((a, b) => compararCodigos(a.cod, b.cod));

  if (itens.length === 0) {
    container.innerHTML = `<div class="alert alert-light text-center border text-muted">Nenhuma atividade adicionada nesta categoria.</div>`;
    return;
  }

  let html = `
    <table class="table table-bordered table-sm table-hover mt-3">
      <thead class="thead-light">
        <tr>
          <th style="width: 38%">Atividade</th>
          <th style="width: 15%">Fator</th>
          <th style="width: 12%">Qtd/Horas</th>
          <th style="width: 10%">Pontos</th>
          <th style="width: 15%">Comprovante PDF</th>
          <th style="width: 10%" class="text-center">Ações</th>
        </tr>
      </thead>
      <tbody>
  `;

  itens.forEach(item => {
    let pontos = item.calc === "horas" ? (item.qtd / 15.0) * item.fator : item.qtd * item.fator;
    html += `
      <tr>
        <td>
  <div>
    <small>
      <strong>${esc(item.cod)}</strong>
      ${esc(item.desc)}
    </small>
  </div>

  <div style="
    margin-top:6px;
    padding:6px 8px;
    background:#f0f7f2;
    border-left:3px solid #008037;
    border-radius:3px;
    font-size:11px;
  ">
    <strong>Forma de aferição:</strong>
    ${esc(obterFormaAfericao(item))}
  </div>
</td>
        <td><small class="text-muted">${item.fator} ${item.unit}</small></td>
        <td><strong>${item.qtd}</strong></td>
        <td><span class="font-weight-bold text-success">${pontos.toFixed(2)}</span></td>
        <td>
          <input type="file" class="form-control-file form-control-sm" accept="application/pdf" onchange="salvarComprovante(${item.uid}, this)">
        </td>
        <td class="text-center">
          <button class="btn btn-outline-primary btn-sm mr-1" onclick="editarAtividade(${item.uid}, '${cat}')" title="Editar quantidade">
            <i class="fas fa-edit"></i>
          </button>
          <button class="btn btn-outline-danger btn-sm" onclick="removerAtividade(${item.uid}, '${cat}')" title="Excluir atividade">
            <i class="fas fa-trash"></i>
          </button>
        </td>
      </tr>
    `;
  });

  html += `</tbody></table>`;
  container.innerHTML = html;
}

function calcularTotais() {
  let totalGeral = 0;
  atividadesSelecionadas.forEach(item => {
    let pontos = item.calc === "horas" ? (item.qtd / 15.0) * item.fator : item.qtd * item.fator;
    totalGeral += pontos;
  });
  const elGeral = document.getElementById("pontuacao-total-geral");
  if (elGeral) elGeral.innerText = totalGeral.toFixed(2);
}

// GERAÇÃO DO RID COM BRASÃO DA REPÚBLICA E SEPARAÇÃO PELOS 5 GRUPOS OFICIAIS DA RES. 239/2026
async function gerarRIDOficialComBrasao() {
  const btn = document.getElementById("btn-gerar-pdf");
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Processando PDF e Páginas...`;
  }

  try {
    const { PDFDocument } = PDFLib;
    const pdfFinal = await PDFDocument.create();

    const nomeDocente = document.getElementById("nome_civil").value || "Docente";
    const siape = document.getElementById("siape").value || "---";

    let paginaAtual = 2; // O resumo do RID ocupa a Página 1
    const itensComPagina = [];

    // Garante que o PDF processe os itens na ordem numérica correta
    const atividadesOrdenadas = [...atividadesSelecionadas].sort((a, b) => compararCodigos(a.cod, b.cod));

    for (const item of atividadesOrdenadas) {
      let numPaginasAnexo = 0;
      let paginaInicio = "Sem comprovante";

      if (item.arquivoPDF) {
        const fileBuffer = await item.arquivoPDF.arrayBuffer();
        try {
          const docAnexoTemp = await PDFDocument.load(fileBuffer);
          numPaginasAnexo = docAnexoTemp.getPageCount();
          paginaInicio = `Página ${paginaAtual}` + (numPaginasAnexo > 1 ? ` a ${paginaAtual + numPaginasAnexo - 1}` : '');
          paginaAtual += numPaginasAnexo;
        } catch (e) {
          paginaInicio = "Erro ao ler arquivo";
        }
      }

      itensComPagina.push({ ...item, paginaInfo: paginaInicio });
    }

    const ridElement = document.createElement("div");
    ridElement.style.padding = "25px";
    ridElement.style.fontFamily = "Arial, sans-serif";
    ridElement.style.fontSize = "12px";

    const gruposOficiais = [
      { key: "ensino", titulo: "1. ATIVIDADES DE ENSINO" },
      { key: "pesquisa", titulo: "2. ATIVIDADES DE PESQUISA" },
      { key: "extensao", titulo: "3. ATIVIDADES DE EXTENSÃO" },
      { key: "formacao", titulo: "4. ATIVIDADES DE FORMAÇÃO" },
      { key: "gestao", titulo: "5. ATIVIDADES DE ADMINISTRAÇÃO E GESTÃO UNIVERSITÁRIA" }
    ];

    let tabelasGruposHtml = "";

    gruposOficiais.forEach(grupo => {
      const itensDoGrupo = itensComPagina.filter(i => i.cat === grupo.key);
      let subtotalGrupo = 0;

      tabelasGruposHtml += `<h4 style="background:#006b3f; color:white; padding:6px; margin-top:15px; margin-bottom:5px; font-size:12px;">${grupo.titulo}</h4>`;
      
      if (itensDoGrupo.length === 0) {
        tabelasGruposHtml += `<p style="font-style:italic; color:#666; margin-left:10px;">Nenhuma atividade declarada neste grupo.</p>`;
      } else {
        tabelasGruposHtml += `
          <table style="width:100%; border-collapse:collapse; margin-bottom:10px; font-size:11px;">
            <thead>
              <tr style="background:#e9ecef;">
                <th style="border:1px solid #aaa; padding:5px; text-align:left;">Código / Descrição da Atividade</th>
                <th style="border:1px solid #aaa; padding:5px; text-align:center;">Qtd/Horas</th>
                <th style="border:1px solid #aaa; padding:5px; text-align:center;">Pontos</th>
                <th style="border:1px solid #aaa; padding:5px; text-align:center;">Localização do Comprovante</th>
              </tr>
            </thead>
            <tbody>
        `;

        itensDoGrupo.forEach(item => {
          let pts = item.calc === "horas" ? (item.qtd / 15.0) * item.fator : item.qtd * item.fator;
          subtotalGrupo += pts;

          tabelasGruposHtml += `
            <tr>
              <td style="border:1px solid #aaa; padding:5px;"><strong>${item.cod}</strong> ${item.desc}</td>
              <td style="border:1px solid #aaa; padding:5px; text-align:center;">${item.qtd}</td>
              <td style="border:1px solid #aaa; padding:5px; text-align:center; font-weight:bold;">${pts.toFixed(2)}</td>
              <td style="border:1px solid #aaa; padding:5px; text-align:center; color:#006b3f; font-weight:bold;">${item.paginaInfo}</td>
            </tr>
          `;
        });

        tabelasGruposHtml += `
            </tbody>
          </table>
          <div style="text-align:right; font-weight:bold; margin-bottom:10px;">Subtotal ${grupo.titulo}: ${subtotalGrupo.toFixed(2)} pts</div>
        `;
      }
    });

    ridElement.innerHTML = `
      <div style="text-align:center; margin-bottom:15px;">
        <img src="brasaodarepublica.png" style="width:75px; height:auto; margin-bottom:6px;" alt="Brasão da República">
        <h3 style="margin:2px; font-size:15px; font-weight:bold;">REPÚBLICA FEDERATIVA DO BRASIL</h3>
        <h4 style="margin:2px; font-size:13px; font-weight:bold;">UNIVERSIDADE FEDERAL DA FRONTEIRA SUL - UFFS</h4>
        <h5 style="margin:2px; font-size:11px; font-weight:bold;">RELATÓRIO INDIVIDUAL DOCENTE (RID) — RESOLUÇÃO 239/CONSUNI/UFFS/2026</h5>
      </div>
      <hr style="border:0.5px solid #006b3f; margin-bottom:15px;">
      <table style="width:100%; margin-bottom:10px; font-size:11px;">
        <tr>
          <td><strong>Docente:</strong> ${nomeDocente}</td>
          <td><strong>SIAPE:</strong> ${siape}</td>
        </tr>
        <tr>
          <td><strong>Lotação:</strong> ${document.getElementById("lotacao").value}</td>
          <td><strong>Regime:</strong> ${document.getElementById("regime").value}</td>
        </tr>
        <tr>
          <td><strong>Período Avaliado:</strong> ${document.getElementById("periodo_avaliacao").value}</td>
          <td><strong>Data Progressão:</strong> ${document.getElementById("data_progressao").value}</td>
        </tr>
      </table>

      ${tabelasGruposHtml}

      <div style="margin-top:20px; padding:10px; background:#e9ecef; border:1px solid #aaa; text-align:right; font-size:14px;">
        <strong>PONTUAÇÃO TOTAL FINAL: ${document.getElementById("pontuacao-total-geral").innerText} PTS</strong>
      </div>

      <br><br>
      <div style="text-align:center; margin-top:30px;">
        <p>____________________________________________________<br>Assinatura do Docente</p>
      </div>
    `;

    const opt = { margin: 8, filename: 'RID_Oficial.pdf', html2canvas: { scale: 2, useCORS: true } };
    const ridBuffer = await html2pdf().set(opt).from(ridElement).outputPdf('arraybuffer');
    
    const pdfRIDDoc = await PDFDocument.load(ridBuffer);
    const paginasRID = await pdfFinal.copyPages(pdfRIDDoc, pdfRIDDoc.getPageIndices());
    paginasRID.forEach(p => pdfFinal.addPage(p));

    for (const item of atividadesOrdenadas) {
      if (item.arquivoPDF) {
        const fileBuffer = await item.arquivoPDF.arrayBuffer();
        try {
          const docAnexo = await PDFDocument.load(fileBuffer);
          const paginasAnexo = await pdfFinal.copyPages(docAnexo, docAnexo.getPageIndices());
          paginasAnexo.forEach(p => pdfFinal.addPage(p));
        } catch (e) {
          console.error("Erro ao mesclar comprovante:", e);
        }
      }
    }

    const pdfBytes = await pdfFinal.save();
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `RID_OFICIAL_${siape}.pdf`;
    link.click();

  } catch (err) {
    alert("Erro ao gerar RID oficial: " + err.message);
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = `<i class="fas fa-file-pdf"></i> Gerar RID Oficial + Comprovantes PDF`;
    }
  }
}
