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

let atividadesSelecionadas = [];

document.addEventListener("DOMContentLoaded", function() {
  popularTodosOsSelects();
  renderizarTodasAsTabelas();
});

function popularTodosOsSelects() {
  const categorias = ["ensino", "pesquisa", "extensao", "formacao", "gestao"];
  categorias.forEach(cat => {
    const select = document.getElementById(`select-${cat}`);
    if (select) {
      const itensCat = catalogoRID.filter(i => i.cat === cat);
      let optionsHTML = `<option value="">-- Selecione uma atividade --</option>`;
      itensCat.forEach(item => {
        optionsHTML += `<option value="${item.id}">[${item.cod}] ${item.desc} (${item.fator} ${item.unit})</option>`;
      });
      select.innerHTML = optionsHTML;
    }
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
        <td><small><strong>${item.cod}</strong> ${item.desc}</small></td>
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

    const nomeDocente = document.getElementById("nome_civil")?.value || "Docente";
    const siape = document.getElementById("siape")?.value || "---";

    let paginaAtual = 2;
    const itensComPagina = [];

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
    
    ridElement.style.width = "750px";
    ridElement.style.padding = "0px";
    ridElement.style.margin = "0px";
    ridElement.style.boxSizing = "border-box";
    ridElement.style.fontFamily = "Arial, sans-serif";
    ridElement.style.fontSize = "10px";
    ridElement.style.color = "#333";
    ridElement.style.backgroundColor = "#fff";

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

      tabelasGruposHtml += `
        <div style="margin-top: 10px; page-break-inside: avoid;">
          <h4 style="background:#006b3f; color:white; padding:4px 8px; margin:0 0 6px 0; font-size:11px; font-weight:bold; border-radius:2px;">
            ${grupo.titulo}
          </h4>
      `;
      
      if (itensDoGrupo.length === 0) {
        tabelasGruposHtml += `<p style="font-style:italic; color:#777; margin:2px 0 8px 5px; font-size:9.5px;">Nenhuma atividade declarada neste grupo.</p>`;
      } else {
        tabelasGruposHtml += `
          <table style="width:100%; border-collapse:collapse; margin-bottom:4px; font-size:9.5px; table-layout: fixed;">
            <thead>
              <tr style="background:#f2f4f5;">
                <th style="border:1px solid #bbb; padding:4px; text-align:left; width:52%;">Código / Descrição da Atividade</th>
                <th style="border:1px solid #bbb; padding:4px; text-align:center; width:12%;">Qtd/Horas</th>
                <th style="border:1px solid #bbb; padding:4px; text-align:center; width:12%;">Pontos</th>
                <th style="border:1px solid #bbb; padding:4px; text-align:center; width:24%;">Localização Comprovante</th>
              </tr>
            </thead>
            <tbody>
        `;

        itensDoGrupo.forEach(item => {
          let pts = item.calc === "horas" ? (item.qtd / 15.0) * item.fator : item.qtd * item.fator;
          subtotalGrupo += pts;

          tabelasGruposHtml += `
            <tr style="page-break-inside: avoid;">
              <td style="border:1px solid #bbb; padding:4px; word-wrap:break-word;"><strong>${item.cod}</strong> ${item.desc}</td>
              <td style="border:1px solid #bbb; padding:4px; text-align:center;">${item.qtd}</td>
              <td style="border:1px solid #bbb; padding:4px; text-align:center; font-weight:bold; color:#006b3f;">${pts.toFixed(2)}</td>
              <td style="border:1px solid #bbb; padding:4px; text-align:center; color:#444; font-size:9px;">${item.paginaInfo}</td>
            </tr>
          `;
        });

        tabelasGruposHtml += `
            </tbody>
          </table>
          <div style="text-align:right; font-weight:bold; margin-bottom:10px; font-size:10px;">
            Subtotal ${grupo.titulo}: <span style="color:#006b3f;">${subtotalGrupo.toFixed(2)} pts</span>
          </div>
        `;
      }

      tabelasGruposHtml += `</div>`;
    });

    ridElement.innerHTML = `
      <div style="text-align:center; margin:0 0 10px 0; padding:0;">
        <img src="brasaodarepublica.png" style="width:55px; height:auto; margin:0 auto 4px auto; display:block;" alt="Brasão da República">
        <h3 style="margin:0; color:#004d2d; font-size:12px; font-weight:bold; text-transform:uppercase; line-height:1.2;">República Federativa do Brasil</h3>
        <h4 style="margin:2px 0 0 0; color:#006b3f; font-size:11px; font-weight:bold; text-transform:uppercase; line-height:1.2;">Universidade Federal da Fronteira Sul - UFFS</h4>
        <h5 style="margin:4px 0 0 0; font-size:10px; font-weight:bold; color:#333; line-height:1.2;">RELATÓRIO INDIVIDUAL DOCENTE (RID) — RESOLUÇÃO 239/CONSUNI/UFFS/2026</h5>
      </div>

      <hr style="border:0; border-top: 1.5px solid #006b3f; margin:8px 0 10px 0;">

      <div style="background-color:#f9f9f9; padding:8px 10px; border:1px solid #ddd; border-radius:3px; margin-bottom:10px; page-break-inside: avoid;">
        <table style="width:100%; font-size:9.5px; border-collapse:collapse;">
          <tr>
            <td style="padding:2px 0; width:55%;"><strong>Docente:</strong> ${nomeDocente}</td>
            <td style="padding:2px 0; width:45%;"><strong>SIAPE:</strong> ${siape}</td>
          </tr>
          <tr>
            <td style="padding:2px 0;"><strong>Lotação:</strong> ${document.getElementById("lotacao")?.value || "---"}</td>
            <td style="padding:2px 0;"><strong>Regime:</strong> ${document.getElementById("regime")?.value || "---"}</td>
          </tr>
          <tr>
            <td style="padding:2px 0;"><strong>Período Avaliado:</strong> ${document.getElementById("periodo_avaliacao")?.value || "---"}</td>
            <td style="padding:2px 0;"><strong>Data Progressão:</strong> ${document.getElementById("data_progressao")?.value || "---"}</td>
          </tr>
        </table>
      </div>

      ${tabelasGruposHtml}

      <div style="margin-top:15px; page-break-inside: avoid;">
        <div style="padding:8px 12px; background:#e8f5e9; border:1px solid #a5d6a7; border-radius:3px; text-align:right; font-size:11px; color:#1b5e20;">
          <strong>PONTUAÇÃO TOTAL FINAL: ${document.getElementById("pontuacao-total-geral")?.innerText || "0.00"} PTS</strong>
        </div>

        <div style="text-align:center; margin-top:35px;">
          <p style="margin:0;">____________________________________________________</p>
          <p style="margin-top:4px; font-weight:bold; font-size:10px;">Assinatura do Docente</p>
        </div>
      </div>
    `;

    const opt = {
      margin: [10, 10, 10, 10],
      filename: `RID_OFICIAL_${siape}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, logging: false, scrollY: 0 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      pagebreak: { mode: ['css', 'legacy'] }
    };

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
