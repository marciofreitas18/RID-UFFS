// Carrega as tabelas dinamica e calcula totais
document.addEventListener("DOMContentLoaded", async () => {
  // Carrega os itens do arquivo de configuracao ou define via script
  renderizarFormulario();
});

function renderizarFormulario() {
  const container = document.getElementById("container-categorias");
  
  // Renderiza cada categoria
  categoriasRID.forEach(cat => {
    let html = `
      <div class="card mb-4 shadow-sm">
        <div class="card-header card-header-uffs">${cat.nome}</div>
        <div class="card-body p-2 table-responsive">
          <table class="table table-sm table-hover mb-0">
            <thead class="thead-light">
              <tr>
                <th style="width: 45%">Especificação do Item</th>
                <th style="width: 15%">Fator de Pontuação</th>
                <th style="width: 10%">Quantidade</th>
                <th style="width: 10%">Total</th>
                <th style="width: 20%">Comprovante (PDF)</th>
              </tr>
            </thead>
            <tbody id="body-${cat.id}">
              <!-- Os itens correspondentes a esta categoria serao inseridos aqui -->
            </tbody>
          </table>
        </div>
        <div class="card-footer bg-light text-right">
          <strong>Subtotal ${cat.nome}: <span id="subtotal-${cat.id}" class="text-success">0.00</span> pts</strong>
        </div>
      </div>
    `;
    container.innerHTML += html;
  });
}

// Calculo em tempo real
function calcularTotais() {
  let totais = { ensino: 0, pesquisa: 0, extensao: 0, formacao: 0, gestao: 0 };
  let totalGeral = 0;

  const inputs = document.querySelectorAll('.item-qtd');
  inputs.forEach(input => {
    const val = parseFloat(input.value) || 0;
    const fator = parseFloat(input.dataset.fator) || 0;
    const cat = input.dataset.cat;
    const cod = input.dataset.cod;
    
    let totalItem = 0;
    // Regra especial para ensino em horas (1.1.1 e 1.1.2)
    if (cod === "1.1.1." || cod === "1.1.2.") {
      totalItem = (val / 15.0) * fator;
    } else {
      totalItem = val * fator;
    }

    document.getElementById(`tot_${input.id.replace('qtd_', '')}`).innerText = totalItem.toFixed(2);
    if (totais[cat] !== undefined) {
      totais[cat] += totalItem;
    }
  });

  for (let cat in totais) {
    const el = document.getElementById(`subtotal-${cat}`);
    if (el) el.innerText = totais[cat].toFixed(2);
    totalGeral += totais[cat];
  }

  document.getElementById("pontuacao-total-geral").innerText = totalGeral.toFixed(2);
}

// Geração de PDF unificado (Relatorio + PDFs anexados)
async function gerarRIDCompletoComComprovantes() {
  const { PDFDocument } = PDFLib;
  const pdfFinal = await PDFDocument.create();

  const nomeDocente = document.getElementById("nome_civil").value || "Docente";
  const siape = document.getElementById("siape").value || "---";

  // 1. Ficha Resumo
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
    <h4>Resumo da Pontuação Obtida:</h4>
    <ul>
      <li><strong>1. Atividades de Ensino:</strong> ${document.getElementById("subtotal-ensino") ? document.getElementById("subtotal-ensino").innerText : '0.00'} pts</li>
      <li><strong>2. Atividades de Pesquisa:</strong> ${document.getElementById("subtotal-pesquisa") ? document.getElementById("subtotal-pesquisa").innerText : '0.00'} pts</li>
      <li><strong>3. Atividades de Extensão:</strong> ${document.getElementById("subtotal-extensao") ? document.getElementById("subtotal-extensao").innerText : '0.00'} pts</li>
      <li><strong>4. Atividades de Formação:</strong> ${document.getElementById("subtotal-formacao") ? document.getElementById("subtotal-formacao").innerText : '0.00'} pts</li>
      <li><strong>5. Administração e Gestão:</strong> ${document.getElementById("subtotal-gestao") ? document.getElementById("subtotal-gestao").innerText : '0.00'} pts</li>
    </ul>
    <h3>Pontuação Total Final: ${document.getElementById("pontuacao-total-geral").innerText} pts</h3>
    <br><br><br>
    <div style="text-align:center;">
      <p>_____________________________________________<br>Assinatura do Docente</p>
    </div>
  `;

  // Renderiza HTML para PDF
  const opt = { margin: 10, filename: 'RID.pdf', html2canvas: { scale: 2 } };
  const ridBuffer = await html2pdf().set(opt).from(ridSummaryHTML).outputPdf('arraybuffer');
  const pdfRIDDoc = await PDFDocument.load(ridBuffer);
  const paginasRID = await pdfFinal.copyPages(pdfRIDDoc, pdfRIDDoc.getPageIndices());
  paginasRID.forEach(p => pdfFinal.addPage(p));

  // 2. Anexa PDFs enviados nos campos de upload
  const inputsPDF = document.querySelectorAll('.pdf-input');
  for (const input of inputsPDF) {
    if (input.files && input.files[0]) {
      const file = input.files[0];
      if (file.type === "application/pdf") {
        const fileBuffer = await file.arrayBuffer();
        try {
          const docAnexo = await PDFDocument.load(fileBuffer);
          const paginasAnexo = await pdfFinal.copyPages(docAnexo, docAnexo.getPageIndices());
          paginasAnexo.forEach(p => pdfFinal.addPage(p));
        } catch (err) {
          console.error(`Erro ao mesclar comprovante:`, err);
        }
      }
    }
  }

  // 3. Fazer download
  const pdfBytes = await pdfFinal.save();
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `RID_COMPLETO_${siape}.pdf`;
  link.click();
}
