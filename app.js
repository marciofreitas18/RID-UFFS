// Banco de dados dinâmico de categorias do RID
const categoriasRID = [
  { id: "ensino", nome: "1. ATIVIDADES DE ENSINO" },
  { id: "pesquisa", nome: "2. ATIVIDADES DE PESQUISA" },
  { id: "extensao", nome: "3. ATIVIDADES DE EXTENSÃO" },
  { id: "formacao", nome: "4. ATIVIDADES DE FORMAÇÃO" },
  { id: "gestao", nome: "5. ATIVIDADES DE ADMINISTRAÇÃO E GESTÃO UNIVERSITÁRIA" }
];

// Catálogo com os itens da Resolução 49/CONSUNI/UFFS
const catalogoRID = [
  // ENSINO
  { id: "1_1_1", cod: "1.1.1.", desc: "Ministração de Componente Curricular na Graduação", fator: 2.5, unit: "pontos/15h", cat: "ensino", calc: "horas" },
  { id: "1_1_2", cod: "1.1.2.", desc: "Ministração de Componente Curricular na Pós-Graduação", fator: 2.5, unit: "pontos/15h", cat: "ensino", calc: "horas" },
  { id: "1_2_1", cod: "1.2.1.", desc: "Membro titular de colegiado de curso", fator: 2.0, unit: "pontos/semestre", cat: "ensino" },
  { id: "1_2_3", cod: "1.2.3.", desc: "Membro do Núcleo Docente Estruturante (NDE)", fator: 2.0, unit: "pontos/semestre", cat: "ensino" },
  { id: "1_3_1", cod: "1.3.1.", desc: "Orientação de trabalho de conclusão de curso (TCC)", fator: 4.0, unit: "pontos/TCC", cat: "ensino" },
  
  // PESQUISA
  { id: "2_1_1", cod: "2.1.1.", desc: "Coordenação de projeto de pesquisa institucionalizado", fator: 3.0, unit: "pontos/semestre", cat: "pesquisa" },
  { id: "2_2_1", cod: "2.2.1.", desc: "Orientação de dissertação de mestrado", fator: 10.0, unit: "pontos/dissertação", cat: "pesquisa" },
  { id: "2_3_1", cod: "2.3.1.", desc: "Publicação de artigo científico Qualis A", fator: 15.0, unit: "pontos/artigo", cat: "pesquisa" },

  // EXTENSÃO
  { id: "3_1_1", cod: "3.1.1.", desc: "Coordenação de programa de extensão", fator: 4.0, unit: "pontos/semestre", cat: "extensao" },
  { id: "3_1_3", cod: "3.1.3.", desc: "Coordenação de projeto de extensão", fator: 3.0, unit: "pontos/semestre", cat: "extensao" },

  // FORMAÇÃO
  { id: "4_1_1", cod: "4.1.1.", desc: "Pós-graduação stricto sensu (com afastamento)", fator: 45.0, unit: "pontos/semestre", cat: "formacao" },

  // GESTÃO
  { id: "5_1_7", cod: "5.1.7.", desc: "Coordenador de curso de graduação ou pós-graduação", fator: 30.0, unit: "pontos/semestre", cat: "gestao" }
];

// Array que armazena as atividades adicionadas pelo usuário
let atividadesSelecionadas = [];

document.addEventListener("DOMContentLoaded", () => {
  renderizarInterfacePrincipal();
});

function renderizarInterfacePrincipal() {
  const container = document.getElementById("container-categorias");
  if (!container) return;

  container.innerHTML = `
    <!-- Card de Seleção e Adição de Atividades -->
    <div class="card mb-4 shadow-sm border-success">
      <div class="card-header bg-success text-white font-weight-bold">
        <i class="fas fa-plus-circle"></i> Selecionar e Adicionar Atividade Docente
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-7 form-group">
            <label><strong>Selecione a Atividade:</strong></label>
            <select id="select-atividade" class="form-control">
              <option value="">-- Escolha uma atividade para incluir no relatório --</option>
              ${catalogoRID.map(item => `<option value="${item.id}">[${item.cod}] ${item.desc} (${item.fator} ${item.unit})</option>`).join('')}
            </select>
          </div>
          <div class="col-md-3 form-group">
            <label><strong>Quantidade / Horas:</strong></label>
            <input type="number" id="input-qtd-adicionar" class="form-control" min="0.1" step="0.1" placeholder="Ex: 1 ou 30">
          </div>
          <div class="col-md-2 form-group d-flex align-items-end">
            <button type="button" class="btn btn-success btn-block" onclick="adicionarAtividade()">
              <i class="fas fa-plus"></i> Adicionar
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Tabelas de Categorias para Exibição dos Itens Selecionados -->
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
    alert("Por favor, escolha uma atividade na lista.");
    return;
  }
  if (isNaN(qtd) || qtd <= 0) {
    alert("Por favor, informe uma quantidade válida maior que zero.");
    return;
  }

  const itemInfo = catalogoRID.find(i => i.id === itemId);
  if (!itemInfo) return;

  // Adiciona ao array principal
  const novoItem = {
    uid: Date.now(), // ID único da entrada
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

  // Limpa os campos de seleção
  select.value = "";
  qtdInput.value = "";

  renderizarTabelas();
  calcularTotais();
}

function removerAtividade(uid) {
  atividadesSelecionadas = atividadesSelecionadas.filter(item => item.uid !== uid);
  renderizarTabelas();
  calcularTotais();
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
          <span class="badge badge-light text-dark">${itensDaCategoria.length} item(ns)</span>
        </div>
        <div class="card-body p-2 table-responsive">
          <table class="table table-sm table-hover mb-0">
            <thead class="thead-light">
              <tr>
                <th style="width: 40%">Atividade Selecionada</th>
                <th style="width: 15%">Fator</th>
                <th style="width: 10%">Qtd/Horas</th>
                <th style="width: 10%">Pontos</th>
                <th style="width: 20%">Comprovante PDF</th>
                <th style="width: 5%">Ação</th>
              </tr>
            </thead>
            <tbody>
    `;

    if (itensDaCategoria.length === 0) {
      html += `<tr><td colspan="6" class="text-center text-muted py-3">Nenhuma atividade adicionada nesta categoria.</td></tr>`;
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
              <button class="btn btn-outline-danger btn-sm" onclick="removerAtividade(${item.uid})" title="Remover atividade">
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
