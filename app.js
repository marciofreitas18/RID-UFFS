// Dados oficiais mapeados do Anexo II da Resolução 49/CONSUNI/UFFS/2020
const estruturaRID = [
  {
    categoria: "1. ATIVIDADES DE ENSINO",
    idCat: "ensino",
    itens: [
      { id: "1_1_1", sub: "1.1. COMPONENTES CURRICULARES", cod: "1.1.1", desc: "Ministração de Componente Curricular na Graduação", fator: 2.5, calc: "grad", unit: "pts/15h" },
      { id: "1_1_2", sub: "1.1. COMPONENTES CURRICULARES", cod: "1.1.2", desc: "Ministração de Componente Curricular na Pós-Graduação", fator: 2.5, calc: "grad", unit: "pts/15h" },
      { id: "1_2_1", sub: "1.2 ATIVIDADES DE PLANEJAMENTO, ORGANIZAÇÃO, EXECUÇÃO E AVALIAÇÃO", cod: "1.2.1", desc: "Membro titular de colegiado de curso", fator: 2.0, calc: "mult", unit: "pts/semestre" },
      { id: "1_2_2", sub: "1.2 ATIVIDADES DE PLANEJAMENTO, ORGANIZAÇÃO, EXECUÇÃO E AVALIAÇÃO", cod: "1.2.2", desc: "Membro suplente de colegiado de curso", fator: 1.0, calc: "mult", unit: "pts/semestre" },
      { id: "1_2_3", sub: "1.2 ATIVIDADES DE PLANEJAMENTO, ORGANIZAÇÃO, EXECUÇÃO E AVALIAÇÃO", cod: "1.2.3", desc: "Membro do Núcleo Docente Estruturante (NDE)", fator: 2.0, calc: "mult", unit: "pts/semestre" },
      { id: "1_2_4", sub: "1.2 ATIVIDADES DE PLANEJAMENTO, ORGANIZAÇÃO, EXECUÇÃO E AVALIAÇÃO", cod: "1.2.4", desc: "Coordenação de estágios", fator: 5.0, calc: "mult", unit: "pts/semestre" },
      { id: "1_3_1", sub: "1.3 ORIENTAÇÕES E PARTICIPAÇÃO EM BANCAS", cod: "1.3.1", desc: "Orientação de trabalho de conclusão de curso (TCC)", fator: 4.0, calc: "mult", unit: "pts/TCC" },
      { id: "1_3_2", sub: "1.3 ORIENTAÇÕES E PARTICIPAÇÃO EM BANCAS", cod: "1.3.2", desc: "Orientação de Residência Médica", fator: 5.0, calc: "mult", unit: "pts/residência" },
      { id: "1_3_7", sub: "1.3 ORIENTAÇÕES E PARTICIPAÇÃO EM BANCAS", cod: "1.3.7", desc: "Tutoriamento de Grupo PET ou PIBID", fator: 8.0, calc: "mult", unit: "pts/semestre" },
      { id: "1_3_13", sub: "1.3 ORIENTAÇÕES E PARTICIPAÇÃO EM BANCAS", cod: "1.3.13", desc: "Membro de banca de concurso público (Magistério Superior)", fator: 4.0, calc: "mult", unit: "pts/banca" },
      { id: "1_4_1", sub: "1.4 OUTRAS ATIVIDADES LIGADAS AO ENSINO", cod: "1.4.1", desc: "Execução de palestra", fator: 2.0, calc: "mult", unit: "pts/palestra" },
      { id: "1_4_2", sub: "1.4 OUTRAS ATIVIDADES LIGADAS AO ENSINO", cod: "1.4.2", desc: "Execução de mini-curso", fator: 2.0, calc: "mult", unit: "pts/mini-curso" }
    ]
  },
  {
    categoria: "2. ATIVIDADES DE PESQUISA",
    idCat: "pesquisa",
    itens: [
      { id: "2_1_1", sub: "2.1. COORDENAÇÃO E/OU COLABORAÇÃO EM PROJETO DE PESQUISA", cod: "2.1.1", desc: "Coordenação de projeto de pesquisa institucionalizado", fator: 3.0, calc: "mult", unit: "pts/(proj.sem)" },
      { id: "2_1_2", sub: "2.1. COORDENAÇÃO E/OU COLABORAÇÃO EM PROJETO DE PESQUISA", cod: "2.1.2", desc: "Coordenação de projeto com fomento externo aprovado", fator: 5.0, calc: "mult", unit: "pts/(proj.sem)" },
      { id: "2_2_1", sub: "2.2 ORIENTAÇÕES E SUPERVISÕES", cod: "2.2.1", desc: "Orientação de dissertação de mestrado", fator: 10.0, calc: "mult", unit: "pts/dissertação" },
      { id: "2_2_2", sub: "2.2 ORIENTAÇÕES E SUPERVISÕES", cod: "2.2.2", desc: "Orientação de tese de doutorado", fator: 15.0, calc: "mult", unit: "pts/tese" },
      { id: "2_3_1", sub: "2.3. PUBLICAÇÕES", cod: "2.3.1", desc: "Artigo científico em revista Qualis A", fator: 15.0, calc: "mult", unit: "pts/artigo" },
      { id: "2_3_2", sub: "2.3. PUBLICAÇÕES", cod: "2.3.2", desc: "Artigo científico em revista Qualis B", fator: 10.0, calc: "mult", unit: "pts/artigo" },
      { id: "2_3_6", sub: "2.3. PUBLICAÇÕES", cod: "2.3.6", desc: "Autor de livro com corpo editorial", fator: 15.0, calc: "mult", unit: "pts/livro" },
      { id: "2_6_4", sub: "2.6. OUTRAS ATIVIDADES DE PESQUISA", cod: "2.6.4", desc: "Patente registrada", fator: 25.0, calc: "mult", unit: "pts/patente" },
      { id: "2_6_5", sub: "2.6. OUTRAS ATIVIDADES DE PESQUISA", cod: "2.6.5", desc: "Patente concedida", fator: 50.0, calc: "mult", unit: "pts/patente" }
    ]
  },
  {
    categoria: "3. ATIVIDADES DE EXTENSÃO",
    idCat: "extensao",
    itens: [
      { id: "3_1_1", sub: "3.1. AÇÕES DE EXTENSÃO E CULTURA", cod: "3.1.1", desc: "Coordenação de programa de extensão institucionalizado", fator: 4.0, calc: "mult", unit: "pts/(prog.sem)" },
      { id: "3_1_3", sub: "3.1. AÇÕES DE EXTENSÃO E CULTURA", cod: "3.1.3", desc: "Coordenação de projeto de extensão institucionalizado", fator: 3.0, calc: "mult", unit: "pts/(proj.sem)" },
      { id: "3_3_1", sub: "3.3 PRODUTOS ACADÊMICOS", cod: "3.3.1", desc: "Produtos acadêmicos de extensão e cultura", fator: 1.0, calc: "mult", unit: "pts/produto" }
    ]
  },
  {
    categoria: "4. ATIVIDADES DE FORMAÇÃO",
    idCat: "formacao",
    itens: [
      { id: "4_1_1", sub: "4.1. FORMAÇÃO", cod: "4.1.1", desc: "Pós-Graduação Stricto Sensu (com afastamento UFFS)", fator: 45.0, calc: "mult", unit: "pts/semestre" },
      { id: "4_1_2", sub: "4.1. FORMAÇÃO", cod: "4.1.2", desc: "Pós-Graduação Stricto Sensu (sem afastamento)", fator: 28.0, calc: "mult", unit: "pts/semestre" },
      { id: "4_1_6", sub: "4.1. FORMAÇÃO", cod: "4.1.6", desc: "Cursos de formação docente promovidos pela UFFS (máx. 6)", fator: 2.0, calc: "mult", unit: "pts/curso" }
    ]
  },
  {
    categoria: "5. ATIVIDADES DE ADMINISTRAÇÃO E GESTÃO UNIVERSITÁRIA",
    idCat: "gestao",
    itens: [
      { id: "5_1_1", sub: "5.1. ADMINISTRAÇÃO E GESTÃO", cod: "5.1.1", desc: "Reitor, Vice-Reitor, Pró-Reitor ou Diretor de Campus", fator: 45.0, calc: "mult", unit: "pts/semestre" },
      { id: "5_1_7", sub: "5.1. ADMINISTRAÇÃO E GESTÃO", cod: "5.1.7", desc: "Coordenador de Curso de Graduação ou Pós-Graduação", fator: 30.0, calc: "mult", unit: "pts/semestre" },
      { id: "5_1_12", sub: "5.1. ADMINISTRAÇÃO E GESTÃO", cod: "5.1.12", desc: "Membro de comissão constituída por ato da administração", fator: 5.0, calc: "mult", unit: "pts/semestre" },
      { id: "5_1_19", sub: "5.1. ADMINISTRAÇÃO E GESTÃO", cod: "5.1.19", desc: "Membro titular de órgão colegiado superior", fator: 6.0, calc: "mult", unit: "pts/semestre" }
    ]
  }
];

// Injeta o formulário HTML dinamicamente ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("container-categorias");
  
  estruturaRID.forEach(cat => {
    let htmlCard = `
      <div class="card mb-4 shadow-sm">
        <div class="card-header card-header-uffs">${cat.categoria}</div>
        <div class="card-body p-2">
          <table class="table table-sm table-hover mb-0">
            <thead class="thead-light">
              <tr>
                <th style="width: 40%">Item / Descrição</th>
                <th style="width: 15%">Fator</th>
                <th style="width: 15%">Qtd / Horas</th>
                <th style="width: 10%">Pontos</th>
                <th style="width: 20%">Comprovante (PDF)</th>
              </tr>
            </thead>
            <tbody>
    `;

    let subAtual = "";
    cat.itens.forEach(it => {
      if (it.sub !== subAtual) {
        subAtual = it.sub;
        htmlCard += `<tr><td colspan="5" class="subcat-title">${subAtual}</td></tr>`;
      }

      htmlCard += `
        <tr>
          <td><small><strong>${it.cod}</strong> ${it.desc}</small></td>
          <td><small class="text-muted">${it.fator} ${it.unit}</small></td>
          <td>
            <input type="number" step="0.1" min="0" class="form-control form-control-sm item-qtd" 
                   data-fator="${it.fator}" data-calc="${it.calc}" data-cat="${cat.idCat}" id="qtd_${it.id}" 
                   oninput="calcularTotais()">
          </td>
          <td><span id="tot_${it.id}" class="font-weight-bold text-success">0.00</span></td>
          <td>
            <input type="file" class="form-control-file form-control-sm pdf-input" accept="application/pdf" data-item="${it.cod}">
          </td>
        </tr>
      `;
    });

    htmlCard += `
            </tbody>
          </table>
        </div>
        <div class="card-footer bg-light text-right">
          <strong>Subtotal ${cat.categoria}: <span id="subtotal-${cat.idCat}" class="text-success">0.00</span> pts</strong>
        </div>
      </div>
    `;

    container.innerHTML += htmlCard;
  });
});

// Realiza os cálculos de pontuação
function calcularTotais() {
  let totaisPorCat = { ensino: 0, pesquisa: 0, extensao: 0, formacao: 0, gestao: 0 };
  let totalGeral = 0;

  estruturaRID.forEach(cat => {
    cat.itens.forEach(it => {
      const input = document.getElementById(`qtd_${it.id}`);
      const val = parseFloat(input.value) || 0;
      let totalItem = 0;

      if (it.calc === "grad") {
        totalItem = (val / 15.0) * it.fator; // Regra 2.5 pts a cada 15h
      } else {
        totalItem = val * it.fator;
      }

      document.getElementById(`tot_${it.id}`).innerText = totalItem.toFixed(2);
      totaisPorCat[cat.idCat] += totalItem;
    });

    document.getElementById(`subtotal-${cat.idCat}`).innerText = totaisPorCat[cat.idCat].toFixed(2);
    totalGeral += totaisPorCat[cat.idCat];
  });

  document.getElementById("pontuacao-total-geral").innerText = totalGeral.toFixed(2);
}

// Gera o PDF consolidado (Relatório RID + Anexo dos Comprovantes)
async function gerarRIDCompletoComComprovantes() {
  const { PDFDocument } = PDFLib;
  const pdfFinal = await PDFDocument.create();

  // 1. Monta HTML do relatório sumarizado do RID
  const nomeDocente = document.getElementById("nome_civil").value || "Docente";
  const siape = document.getElementById("siape").value || "---";
  const totalPontos = document.getElementById("pontuacao-total-geral").innerText;

  const ridSummaryHTML = document.createElement("div");
  ridSummaryHTML.style.padding = "20px";
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
      <li><strong>Atividades de Ensino:</strong> ${document.getElementById("subtotal-ensino").innerText} pts</li>
      <li><strong>Atividades de Pesquisa:</strong> ${document.getElementById("subtotal-pesquisa").innerText} pts</li>
      <li><strong>Atividades de Extensão:</strong> ${document.getElementById("subtotal-extensao").innerText} pts</li>
      <li><strong>Atividades de Formação:</strong> ${document.getElementById("subtotal-formacao").innerText} pts</li>
      <li><strong>Administração e Gestão:</strong> ${document.getElementById("subtotal-gestao").innerText} pts</li>
    </ul>
    <h3>Pontuação Total Final: ${totalPontos} pts</h3>
    <br><br><br>
    <div style="text-align:center;">
      <p>_____________________________________________<br>Assinatura do Docente</p>
    </div>
  `;

  // 2. Renderiza Ficha RID em PDF
  const opt = { margin: 10, filename: 'RID.pdf', html2canvas: { scale: 2 } };
  const ridBuffer = await html2pdf().set(opt).from(ridSummaryHTML).outputPdf('arraybuffer');
  const pdfRIDDoc = await PDFDocument.load(ridBuffer);
  const paginasRID = await pdfFinal.copyPages(pdfRIDDoc, pdfRIDDoc.getPageIndices());
  paginasRID.forEach(p => pdfFinal.addPage(p));

  // 3. Mescla os Comprovantes em PDF anexados
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
          console.error(`Erro ao anexar PDF do item ${input.dataset.item}:`, err);
        }
      }
    }
  }

  // 4. Download final
  const pdfBytes = await pdfFinal.save();
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `RID_COMPLETO_${siape}.pdf`;
  link.click();
}
