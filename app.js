// Categorias do RID UFFS
const categoriasRID = [
  { id: "ensino", nome: "1. ATIVIDADES DE ENSINO" },
  { id: "pesquisa", nome: "2. ATIVIDADES DE PESQUISA" },
  { id: "extensao", nome: "3. ATIVIDADES DE EXTENSÃO" },
  { id: "formacao", nome: "4. ATIVIDADES DE FORMAÇÃO" },
  { id: "gestao", nome: "5. ATIVIDADES DE ADMINISTRAÇÃO E GESTÃO UNIVERSITÁRIA" }
];

// Catálogo com itens parametrizados do Anexo II
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
  { id: "4_1_6", cod: "4.1.6.", desc: "Participação em cursos de formação docente promovidos pela UFFS", fator: 2.0, unit: "pontos/curso", cat: "formacao" },

  // GESTÃO
  { id: "5_1_1", cod: "5.1.1.", desc: "Reitor, Vice-Reitor, Pró-Reitor ou Diretor de Campus", fator: 45.0, unit: "pontos/semestre", cat: "gestao" },
  { id: "5_1_7", cod: "5.1.7.", desc: "Coordenador de curso de graduação ou pós-graduação", fator: 30.0, unit: "pontos/semestre", cat: "gestao" },
  { id: "5_1_12", cod: "5.1.12.", desc: "Membro de comissão constituída por ato da administração superior", fator: 5.0, unit: "pontos/semestre", cat: "gestao" }
];

// Lista de atividades selecionadas pelo docente
let atividadesSelecionadas = [];

// Inicialização imediata ao carregar a página
window.onload = function() {
  renderizarPainelEConteudo();
};

function renderizarPainelEConteudo() {
  const container = document.getElementById("container-categorias");
  if (!container) return;

  container.innerHTML = `
    <!-- PAINEL INTERATIVO DE SELEÇÃO -->
    <div class="card mb-4 shadow-sm border-success">
      <div class="card-header bg-success text-white font-weight-bold">
        <i class="fas fa-plus-circle"></i> Painel Interativo: Adicionar Atividades ao Relatório
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-7 form-group">
            <label><strong>1. Selecione a Atividade:</strong></label>
            <select id="select-atividade" class="form-control">
              <option value="">-- Clique aqui para escolher uma atividade --</option>
              ${catalogoRID.map(item => `<option value="${item.id}">[${item.cod}] ${item.desc} (${item.fator} ${item.unit})</option>`).join('')}
            </select>
          </div>
          <div class="col-md-3 form-group">
            <label><strong>2. Quantidade / Carga Horária:</strong></label>
            <input type="number" id="input-qtd-adicionar" class="form-control" min="0.1" step="0.1" placeholder="Ex: 1 ou 60">
          </div>
          <div class="col-md-2 form-group d-flex align-items-end">
            <button type="button" class="btn btn-success btn-block" onclick="adicionarAtividade()">
              <i class="fas fa-plus"></i> Adicionar
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- TABELAS DAS CATEGORIAS -->
    <div id="tabelas-atividades"></div>
  `;

  renderizarTabelas();
}

function adicionarAtividade() {
  const select = document.getElementById("select-atividade");
  const qtdInput = document.getElementById("input-qtd-adicionar");

  const itemId = select.value;
  const qtd = parseFloat(qtdInput.value);

  if (!itemId) {
    alert("Por favor, selecione uma atividade na lista.");
    return;
  }
  if (isNaN(qtd) || qtd <= 0) {
    alert("Por favor, digite uma quantidade válida (maior que zero).");
    return;
  }

  const itemInfo = catalogoRID.find(i => i.id === itemId);
  if (!itemInfo) return;

  const novoItem = {
    uid: Date.now(),
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

  renderizarTabelas();
}

function removerAtividade(uid) {
  atividadesSelecionadas = atividadesSelecionadas.filter(item => item.uid !== uid);
  renderizarTabelas();
}

function renderizarTabelas() {
  const containerTabelas = document.getElementById("tabelas-atividades");
  if (!containerTabelas) return;

  containerTabelas.innerHTML = "";

  categoriasRID.forEach(cat => {
    const itensDaCategoria = atividadesSelecionadas.filter(item => item.cat === cat.id);

    let html = `
      <div class="card mb-4 shadow-sm">
        <div class="card-header card-header-uffs d-flex justify-content-between align-items-center">
          <span>${cat.nome}</span>
          <span class="badge badge-light text-dark">${itensDaCategoria.length} item(ns) selecionado(s)</span>
        </div>
        <div class="card-body p-2 table-responsive">
          <table class="table table-sm table-hover mb-0">
            <thead class="thead-light">
              <tr>
                <th style="width: 40%">Atividade Adicionada</th>
                <th style="width: 15%">Fator</th>
                <th style="width: 10%">Qtd/Horas</th>
                <th style="width: 10%">Pontos</th>
                <th style="width: 20%">Comprovante (PDF)</th>
                <th style="width: 5%">Ação</th>
              </tr>
            </thead>
            <tbody>
    `;

    if (itensDaCategoria.length === 0) {
      html += `<tr><td colspan="6" class="text-center text-muted py-3"><small>Nenhuma atividade selecionada nesta categoria ainda.</small></td></tr>`;
    } else {
      itensDaCategoria.forEach(item => {
        let totalItem = item.calc === "horas" ? (item.qtd / 15.0) * item.fator : item.qtd * item.fator;
        
        html += `
          <tr>
            <td><small><strong>${item.cod}</strong> ${item.desc}</small></td>
            <td><small class="text-muted">${item.fator} ${item.unit}</small></td>
            <td><strong>${item.qtd}</strong></td>
            <td><span class="font-weight-bold text-success">${totalItem.toFixed(2)}</span></td>
            <td>
              <input type="file" class="form-control-file form-control-sm" accept="application/pdf" onchange="salvarComprovante(${item.uid}, this)">
            </td>
            <td>
              <button class="btn btn-outline-danger btn-sm" onclick="removerAtividade(${item.uid})" title="Remover">
                <i class="fas fa-trash"></i>
              </button>
            </td>
          </tr>
        `;
      });
    }

    html += `
            </tbody>
          </table>
        </div>
        <div class="card-footer bg-light text-right">
          <strong>Subtotal ${cat.nome}: <span id="subtotal-${cat.id}" class="text-success">0.00</span> pts</strong>
        </div>
      </div>
    `;

    containerTabelas.innerHTML += html;
  });

  calcularTotais();
}

function salvarComprovante(uid, inputElement) {
  const item = atividadesSelecionadas.find(i => i.uid === uid);
  if (item && inputElement.files && inputElement.files[0]) {
    item.arquivoPDF = inputElement.files[0];
  }
}

function calcularTotais() {
  let subtotais = { ensino: 0, pesquisa: 0, extensao: 0, formacao: 0, gestao: 0 };
  let totalGeral = 0;

  atividadesSelecionadas.forEach(item => {
    let pontos = item.calc === "horas" ? (item.qtd / 15.0) * item.fator : item.qtd * item.fator;
    if (subtotais[item.cat] !== undefined) {
      subtotais[item.cat] += pontos;
    }
  });

  for (let cat in subtotais) {
    const el = document.getElementById(`subtotal-${cat}`);
    if (el) el.innerText = subtotais[cat].toFixed(2);
    totalGeral += subtotais[cat];
  }

  const elGeral = document.getElementById("pontuacao-total-geral");
  if (elGeral) elGeral.innerText = totalGeral.toFixed(2);
}

// Geração do PDF final
async function gerarRIDCompletoComComprovantes() {
  const { PDFDocument } = PDFLib;
  const pdfFinal = await PDFDocument.create();

  const nomeDocente = document.getElementById("nome_civil").value || "Docente";
  const siape = document.getElementById("siape").value || "---";

  const ridSummaryHTML = document.createElement("div");
  ridSummaryHTML.style.padding = "30px";
  ridSummaryHTML.innerHTML = `
    <h2 style="text-align:center; color:#006b3f;">UNIVERSIDADE FEDERAL DA FRONTEIRA SUL</h2>
    <h3 style="text-align:center;">RELATÓRIO INDIVIDUAL DOCENTE (RID)</h3>
    <hr>
    <p><strong>Docente:</strong> ${nomeDocente} | <strong>SIAPE:</strong> ${siape}</p>
    <p><strong>Lotação:</strong> ${document.getElementById("lotacao").value} | <strong>Regime:</strong> ${document.getElementById("regime").value}</p>
    <p><strong>Período Avaliado:</strong> ${document.getElementById("periodo_avaliacao").value}</p>
    <hr>
    <h4>Resumo da Pontuação:</h4>
    <ul>
      <li><strong>Ensino:</strong> ${document.getElementById("subtotal-ensino") ? document.getElementById("subtotal-ensino").innerText : '0.00'} pts</li>
      <li><strong>Pesquisa:</strong> ${document.getElementById("subtotal-pesquisa") ? document.getElementById("subtotal-pesquisa").innerText : '0.00'} pts</li>
      <li><strong>Extensão:</strong> ${document.getElementById("subtotal-extensao") ? document.getElementById("subtotal-extensao").innerText : '0.00'} pts</li>
      <li><strong>Formação:</strong> ${document.getElementById("subtotal-formacao") ? document.getElementById("subtotal-formacao").innerText : '0.00'} pts</li>
      <li><strong>Gestão:</strong> ${document.getElementById("subtotal-gestao") ? document.getElementById("subtotal-gestao").innerText : '0.00'} pts</li>
    </ul>
    <h3>Pontuação Total Final: ${document.getElementById("pontuacao-total-geral").innerText} pts</h3>
    <br><br>
    <div style="text-align:center;">
      <p>_____________________________________________<br>Assinatura do Docente</p>
    </div>
  `;

  const opt = { margin: 10, filename: 'RID.pdf', html2canvas: { scale: 2 } };
  const ridBuffer = await html2pdf().set(opt).from(ridSummaryHTML).outputPdf('arraybuffer');
  const pdfRIDDoc = await PDFDocument.load(ridBuffer);
  const paginasRID = await pdfFinal.copyPages(pdfRIDDoc, pdfRIDDoc.getPageIndices());
  paginasRID.forEach(p => pdfFinal.addPage(p));

  // Anexa comprovantes enviados
  for (const item of atividadesSelecionadas) {
    if (item.arquivoPDF) {
      const fileBuffer = await item.arquivoPDF.arrayBuffer();
      try {
        const docAnexo = await PDFDocument.load(fileBuffer);
        const paginasAnexo = await pdfFinal.copyPages(docAnexo, docAnexo.getPageIndices());
        paginasAnexo.forEach(p => pdfFinal.addPage(p));
      } catch (err) {
        console.error(`Erro ao mesclar PDF:`, err);
      }
    }
  }

  const pdfBytes = await pdfFinal.save();
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `RID_COMPLETO_${siape}.pdf`;
  link.click();
}
