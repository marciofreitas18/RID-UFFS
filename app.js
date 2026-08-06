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
  { id: "5_1_13", cod: "5.1.13.", desc: "Membro do CONSUNI ou CÂMARAS FONTES", fator: 5.0, unit: "pontos/semestre", cat: "gestao" },

  // 6. PRODUÇÃO INTEL. E MATERIAL DIDÁTICO/PEDAGÓGICO
  { id: "6_1_1", cod: "6.1.1.", desc: "Elaboração de material didático impresso ou digital", fator: 3.0, unit: "pontos/unidade", cat: "didatico" },
  { id: "6_1_2", cod: "6.1.2.", desc: "Desenvolvimento de softwares, guias ou recursos pedagógicos", fator: 4.0, unit: "pontos/unidade", cat: "didatico" },
  { id: "6_1_3", cod: "6.1.3.", desc: "Registro de Propriedade Intelectual ou Patente", fator: 20.0, unit: "pontos/unidade", cat: "didatico" }
];

let atividadesSelecionadas = [];

document.addEventListener("DOMContentLoaded", function() {
  popularTodosOsSelects();
  renderizarTodasAsTabelas();
});

function popularTodosOsSelects() {
  const categorias = ["ensino", "pesquisa", "extensao", "formacao", "gestao", "didatico"];
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

function salvarComprovante(uid, inputElement) {
  const item = atividadesSelecionadas.find(i => i.uid === uid);
  if (item && inputElement.files && inputElement.files[0]) {
    item.arquivoPDF = inputElement.files[0];
  }
}

function renderizarTodasAsTabelas() {
  ["ensino", "pesquisa", "extensao", "formacao", "gestao", "didatico"].forEach(cat => renderizarTabelaCategoria(cat));
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
    <table class="table table-bordered table-sm table-hover mt-3">
      <thead class="thead-light">
        <tr>
          <th style="width: 40%">Atividade</th>
          <th style="width: 15%">Fator</th>
          <th style="width: 10%">Qtd/Horas</th>
          <th style="width: 10%">Pontos</th>
          <th style="width: 20%">Comprovante PDF</th>
          <th style="width: 5%">Ação</th>
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

// GERAÇÃO DO RID COM BRASÃO DA REPÚBLICA E SEPARAÇÃO PELOS 6 GRUPOS OFICIAIS DA RES. 239/2026
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

    for (const item of atividadesSelecionadas) {
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
      { key: "gestao", titulo: "5. ATIVIDADES DE ADMINISTRAÇÃO E GESTÃO UNIVERSITÁRIA" },
      { key: "didatico", titulo: "6. PRODUÇÃO INTEL. E MATERIAL DIDÁTICO/PEDAGÓGICO" }
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
        <h3 style="margin:2px; color:#004d2d; font-size:15px; font-weight:bold;">REPÚBLICA FEDERATIVA DO BRASIL</h3>
        <h4 style="margin:2px; color:#006b3f; font-size:13px; font-weight:bold;">UNIVERSIDADE FEDERAL DA FRONTEIRA SUL - UFFS</h4>
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

    for (const item of atividadesSelecionadas) {
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
