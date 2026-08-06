// Catálogo Oficial da Resolução 49/CONSUNI/UFFS
const catalogoRID = [
  // ENSINO
  { id: "1_1_1", cod: "1.1.1.", desc: "Ministração de Componente Curricular na Graduação", fator: 2.5, unit: "pontos/15h", cat: "ensino", calc: "horas" },
  { id: "1_1_2", cod: "1.1.2.", desc: "Ministração de Componente Curricular na Pós-Graduação", fator: 2.5, unit: "pontos/15h", cat: "ensino", calc: "horas" },
  { id: "1_2_1", cod: "1.2.1.", desc: "Membro titular de colegiado de curso", fator: 2.0, unit: "pontos/semestre", cat: "ensino" },
  { id: "1_2_3", cod: "1.2.3.", desc: "Membro do Núcleo Docente Estruturante (NDE)", fator: 2.0, unit: "pontos/semestre", cat: "ensino" },
  { id: "1_3_1", cod: "1.3.1.", desc: "Orientação de trabalho de conclusão de curso (TCC)", fator: 4.0, unit: "pontos/TCC", cat: "ensino" },
  { id: "1_3_4", cod: "1.3.4.", desc: "Orientação de estágio curricular obrigatório", fator: 2.0, unit: "pontos/estagiário", cat: "ensino" },
  { id: "1_3_6", cod: "1.3.6.", desc: "Orientação de monitoria", fator: 3.0, unit: "pontos/projeto", cat: "ensino" },
  { id: "1_4_1", cod: "1.4.1.", desc: "Execução de palestra", fator: 2.0, unit: "pontos/palestra", cat: "ensino" },

  // PESQUISA
  { id: "2_1_1", cod: "2.1.1.", desc: "Coordenação de projeto de pesquisa institucionalizado", fator: 3.0, unit: "pontos/semestre", cat: "pesquisa" },
  { id: "2_1_3", cod: "2.1.3.", desc: "Coordenação de grupo de pesquisa", fator: 2.0, unit: "pontos/semestre", cat: "pesquisa" },
  { id: "2_2_1", cod: "2.2.1.", desc: "Orientação de dissertação de mestrado", fator: 10.0, unit: "pontos/dissertação", cat: "pesquisa" },
  { id: "2_2_2", cod: "2.2.2.", desc: "Orientação de tese de doutorado", fator: 15.0, unit: "pontos/tese", cat: "pesquisa" },
  { id: "2_3_1", cod: "2.3.1.", desc: "Publicação de artigo científico Qualis A", fator: 15.0, unit: "pontos/artigo", cat: "pesquisa" },
  { id: "2_3_2", cod: "2.3.2.", desc: "Publicação de artigo científico Qualis B", fator: 10.0, unit: "pontos/artigo", cat: "pesquisa" },

  // EXTENSÃO
  { id: "3_1_1", cod: "3.1.1.", desc: "Coordenação de programa de extensão ou cultura", fator: 4.0, unit: "pontos/semestre", cat: "extensao" },
  { id: "3_1_3", cod: "3.1.3.", desc: "Coordenação de projeto de extensão ou cultura", fator: 3.0, unit: "pontos/semestre", cat: "extensao" },
  { id: "3_3_1", cod: "3.3.1.", desc: "Produtos acadêmicos de extensão e cultura", fator: 1.0, unit: "ponto/produto", cat: "extensao" },

  // FORMAÇÃO
  { id: "4_1_1", cod: "4.1.1.", desc: "Pós-graduação stricto sensu (com afastamento)", fator: 45.0, unit: "pontos/semestre", cat: "formacao" },
  { id: "4_1_2", cod: "4.1.2.", desc: "Pós-graduação stricto sensu (sem afastamento)", fator: 28.0, unit: "pontos/semestre", cat: "formacao" },
  { id: "4_1_6", cod: "4.1.6.", desc: "Participação em cursos de formação docente UFFS", fator: 2.0, unit: "pontos/curso", cat: "formacao" },

  // GESTÃO
  { id: "5_1_1", cod: "5.1.1.", desc: "Reitor, Vice-Reitor, Pró-Reitor ou Diretor de Campus", fator: 45.0, unit: "pontos/semestre", cat: "gestao" },
  { id: "5_1_7", cod: "5.1.7.", desc: "Coordenador de curso de graduação ou pós-graduação", fator: 30.0, unit: "pontos/semestre", cat: "gestao" },
  { id: "5_1_12", cod: "5.1.12.", desc: "Membro de comissão instituída por ato administrativo", fator: 5.0, unit: "pontos/semestre", cat: "gestao" }
];

// Estado dos itens selecionados
let atividadesSelecionadas = [];

window.onload = function() {
  popularSelects();
  renderizarTodasAsTabelas();
};

function popularSelects() {
  const categorias = ["ensino", "pesquisa", "extensao", "formacao", "gestao"];
  
  categorias.forEach(cat => {
    const select = document.getElementById(`select-${cat}`);
    if (!select) return;
    
    const itensCat = catalogoRID.filter(i => i.cat === cat);
    select.innerHTML = `<option value="">-- Selecione uma atividade de ${cat} --</option>` +
      itensCat.map(i => `<option value="${i.id}">[${i.cod}] ${i.desc} (${i.fator} ${i.unit})</option>`).join('');
  });
}

function adicionarAtividade(cat) {
  const select = document.getElementById(`select-${cat}`);
  const qtdInput = document.getElementById(`qtd-${cat}`);

  const itemId = select.value;
  const qtd = parseFloat(qtdInput.value);

  if (!itemId) {
    alert("Selecione uma atividade válida.");
    return;
  }
  if (isNaN(qtd) || qtd <= 0) {
    alert("Informe uma quantidade ou carga horária válida maior que zero.");
    return;
  }

  const itemInfo = catalogoRID.find(i => i.id === itemId);
  if (!itemInfo) return;

  const novoItem = {
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
  };

  atividadesSelecionadas.push(novoItem);

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

function salvarComprovante(uid, inputElement) {
  const item = atividadesSelecionadas.find(i => i.uid === uid);
  if (item && inputElement.files && inputElement.files[0]) {
    item.arquivoPDF = inputElement.files[0];
  }
}

function renderizarTodasAsTabelas() {
  ["ensino", "pesquisa", "extensao", "formacao", "gestao"].forEach(cat => renderizarTabelaCategoria(cat));
}

function renderizarTabelaCategoria(cat) {
  const container = document.getElementById(`tabela-${cat}`);
  if (!container) return;

  const itens = atividadesSelecionadas.filter(i => i.cat === cat);

  if (itens.length === 0) {
    container.innerHTML = `<div class="alert alert-light text-center border text-muted">Nenhuma atividade adicionada nesta categoria.</div>`;
    return;
  }

  let html = `
    <table class="table table-bordered table-sm table-hover">
      <thead class="thead-light">
        <tr>
          <th style="width: 40%">Atividade</th>
          <th style="width: 15%">Fator</th>
          <th style="width: 10%">Qtd/Horas</th>
          <th style="width: 10%">Pontos</th>
          <th style="width: 20%">Comprovante PDF</th>
          <th style="width: 5%">Excluir</th>
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
          <button class="btn btn-outline-danger btn-sm" onclick="removerAtividade(${item.uid}, '${cat}')">
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

// CORREÇÃO DA GERAÇÃO DE PDF E MESCLAGEM DOS COMPROVANTES
async function gerarRIDCompletoComComprovantes() {
  const btn = document.getElementById("btn-gerar-pdf");
  btn.disabled = true;
  btn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Gerando PDF...`;

  try {
    const { PDFDocument } = PDFLib;
    const pdfFinal = await PDFDocument.create();

    const nomeDocente = document.getElementById("nome_civil").value || "Docente";
    const siape = document.getElementById("siape").value || "---";

    // 1. Criação da folha de resumo RID
    const ridElement = document.createElement("div");
    ridElement.style.padding = "30px";
    ridElement.style.fontFamily = "Arial, sans-serif";

    let tabelaResumoHtml = atividadesSelecionadas.map(item => {
      let pts = item.calc === "horas" ? (item.qtd / 15.0) * item.fator : item.qtd * item.fator;
      return `<tr>
        <td style="border:1px solid #ddd; padding:6px;">${item.cod} ${item.desc}</td>
        <td style="border:1px solid #ddd; padding:6px;">${item.qtd}</td>
        <td style="border:1px solid #ddd; padding:6px;">${pts.toFixed(2)}</td>
      </tr>`;
    }).join('');

    ridElement.innerHTML = `
      <h3 style="text-align:center; color:#006b3f;">UNIVERSIDADE FEDERAL DA FRONTEIRA SUL</h3>
      <h4 style="text-align:center;">RELATÓRIO INDIVIDUAL DOCENTE (RID)</h4>
      <hr>
      <p><strong>Docente:</strong> ${nomeDocente} | <strong>SIAPE:</strong> ${siape}</p>
      <p><strong>Lotação:</strong> ${document.getElementById("lotacao").value} | <strong>Regime:</strong> ${document.getElementById("regime").value}</p>
      <p><strong>Período:</strong> ${document.getElementById("periodo_avaliacao").value}</p>
      <hr>
      <h4>Atividades Declaradas:</h4>
      <table style="width:100%; border-collapse:collapse; margin-bottom:20px;">
        <thead>
          <tr style="background:#f2f2f2;">
            <th style="border:1px solid #ddd; padding:6px; text-align:left;">Atividade</th>
            <th style="border:1px solid #ddd; padding:6px; text-align:left;">Qtd/Horas</th>
            <th style="border:1px solid #ddd; padding:6px; text-align:left;">Pontos</th>
          </tr>
        </thead>
        <tbody>
          ${tabelaResumoHtml || '<tr><td colspan="3" style="text-align:center; padding:10px;">Nenhuma atividade registrada.</td></tr>'}
        </tbody>
      </table>
      <h3>Pontuação Total: ${document.getElementById("pontuacao-total-geral").innerText} pts</h3>
      <br><br><br>
      <div style="text-align:center;">
        <p>_____________________________________________<br>Assinatura do Docente</p>
      </div>
    `;

    const opt = { margin: 10, filename: 'RID.pdf', html2canvas: { scale: 2 } };
    const ridBuffer = await html2pdf().set(opt).from(ridElement).outputPdf('arraybuffer');
    
    const pdfRIDDoc = await PDFDocument.load(ridBuffer);
    const paginasRID = await pdfFinal.copyPages(pdfRIDDoc, pdfRIDDoc.getPageIndices());
    paginasRID.forEach(p => pdfFinal.addPage(p));

    // 2. Anexação dos Comprovantes PDF carregados
    for (const item of atividadesSelecionadas) {
      if (item.arquivoPDF) {
        const fileBuffer = await item.arquivoPDF.arrayBuffer();
        try {
          const docAnexo = await PDFDocument.load(fileBuffer);
          const paginasAnexo = await pdfFinal.copyPages(docAnexo, docAnexo.getPageIndices());
          paginasAnexo.forEach(p => pdfFinal.addPage(p));
        } catch (e) {
          console.error("Erro ao mesclar PDF anexo:", e);
        }
      }
    }

    // 3. Download do PDF final mesclado
    const pdfBytes = await pdfFinal.save();
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `RID_COMPLETO_${siape}.pdf`;
    link.click();

  } catch (err) {
    alert("Ocorreu um erro ao gerar o PDF: " + err.message);
  } finally {
    btn.disabled = false;
    btn.innerHTML = `<i class="fas fa-file-pdf"></i> Gerar RID + Comprovantes PDF`;
  }
}
