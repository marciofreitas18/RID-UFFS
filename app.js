// Dados oficiais com os 125 itens do Anexo II da Resolução 49/CONSUNI/UFFS/2020
const dadosRID = [
  // 1. ENSINO
  { id: "1_1_1", cod: "1.1.1.", desc: "Ministração de Componente Curricular na Graduação", fator: 2.5, unit: "pontos/15 horas-aula", cat: "ensino", sub: "1.1. COMPONENTES CURRICULARES (GRADUAÇÃO E PÓS-GRADUAÇÃO)", calc: "horas" },
  { id: "1_1_2", cod: "1.1.2.", desc: "Ministração de Componente Curricular na Pós-Graduação", fator: 2.5, unit: "pontos/15 horas-aula", cat: "ensino", sub: "1.1. COMPONENTES CURRICULARES (GRADUAÇÃO E PÓS-GRADUAÇÃO)", calc: "horas" },
  { id: "1_2_1", cod: "1.2.1.", desc: "Membro titular de colegiado de curso", fator: 2.0, unit: "pontos/semestre", cat: "ensino", sub: "1.2 ATIVIDADES DE PLANEJAMENTO, ORGANIZAÇÃO, EXECUÇÃO E AVALIAÇÃO REFERENTES AO ENSINO" },
  { id: "1_2_2", cod: "1.2.2.", desc: "Membro suplente de colegiado de curso", fator: 1.0, unit: "pontos/semestre", cat: "ensino", sub: "1.2 ATIVIDADES DE PLANEJAMENTO, ORGANIZAÇÃO, EXECUÇÃO E AVALIAÇÃO REFERENTES AO ENSINO" },
  { id: "1_2_3", cod: "1.2.3.", desc: "Membro do Núcleo Docente Estruturante (NDE)", fator: 2.0, unit: "pontos/semestre", cat: "ensino", sub: "1.2 ATIVIDADES DE PLANEJAMENTO, ORGANIZAÇÃO, EXECUÇÃO E AVALIAÇÃO REFERENTES AO ENSINO" },
  { id: "1_2_4", cod: "1.2.4.", desc: "Membro de fóruns de ensino", fator: 1.0, unit: "pontos/semestre", cat: "ensino", sub: "1.2 ATIVIDADES DE PLANEJAMENTO, ORGANIZAÇÃO, EXECUÇÃO E AVALIAÇÃO REFERENTES AO ENSINO" },
  { id: "1_2_5", cod: "1.2.5.", desc: "Membro de outras comissões ligadas ao ensino", fator: 0.5, unit: "pontos/semestre", cat: "ensino", sub: "1.2 ATIVIDADES DE PLANEJAMENTO, ORGANIZAÇÃO, EXECUÇÃO E AVALIAÇÃO REFERENTES AO ENSINO" },
  { id: "1_2_6", cod: "1.2.5.b", desc: "Coordenação de estágios", fator: 5.0, unit: "pontos/semestre", cat: "ensino", sub: "1.2 ATIVIDADES DE PLANEJAMENTO, ORGANIZAÇÃO, EXECUÇÃO E AVALIAÇÃO REFERENTES AO ENSINO" },
  { id: "1_3_1", cod: "1.3.1.", desc: "Orientação de trabalho de conclusão de curso de graduação (TCC)", fator: 4.0, unit: "pontos/TCC", cat: "ensino", sub: "1.3 ORIENTAÇÕES E PARTICIPAÇÃO EM BANCAS DE AVALIAÇÃO" },
  { id: "1_3_2", cod: "1.3.2.", desc: "Orientação de Residência Médica", fator: 5.0, unit: "pontos/residência", cat: "ensino", sub: "1.3 ORIENTAÇÕES E PARTICIPAÇÃO EM BANCAS DE AVALIAÇÃO" },
  { id: "1_3_3", cod: "1.3.3.", desc: "Coorientação de trabalho de conclusão de curso - TCC", fator: 2.0, unit: "pontos/TCC", cat: "ensino", sub: "1.3 ORIENTAÇÕES E PARTICIPAÇÃO EM BANCAS DE AVALIAÇÃO" },
  { id: "1_3_4", cod: "1.3.4.", desc: "Orientação de estágio curricular obrigatório", fator: 2.0, unit: "pontos/estagiário", cat: "ensino", sub: "1.3 ORIENTAÇÕES E PARTICIPAÇÃO EM BANCAS DE AVALIAÇÃO" },
  { id: "1_3_5", cod: "1.3.5.", desc: "Orientação de estágio não-obrigatório", fator: 1.0, unit: "pontos/estagiário", cat: "ensino", sub: "1.3 ORIENTAÇÕES E PARTICIPAÇÃO EM BANCAS DE AVALIAÇÃO" },
  { id: "1_3_6", cod: "1.3.6.", desc: "Orientação de monitoria", fator: 3.0, unit: "pontos/projeto", cat: "ensino", sub: "1.3 ORIENTAÇÕES E PARTICIPAÇÃO EM BANCAS DE AVALIAÇÃO" },
  { id: "1_3_7", cod: "1.3.7.", desc: "Tutoriamento de Grupo PET ou PIBID", fator: 8.0, unit: "pontos/semestre", cat: "ensino", sub: "1.3 ORIENTAÇÕES E PARTICIPAÇÃO EM BANCAS DE AVALIAÇÃO" },
  { id: "1_3_8", cod: "1.3.8.", desc: "Orientação de monografia de curso de especialização", fator: 4.0, unit: "pontos/monografia", cat: "ensino", sub: "1.3 ORIENTAÇÕES E PARTICIPAÇÃO EM BANCAS DE AVALIAÇÃO" },
  { id: "1_3_9", cod: "1.3.9.", desc: "Membro de banca examinadora de TCC de graduação, pós-graduação lato sensu ou estágio supervisionado", fator: 0.5, unit: "pontos/banca", cat: "ensino", sub: "1.3 ORIENTAÇÕES E PARTICIPAÇÃO EM BANCAS DE AVALIAÇÃO" },
  { id: "1_3_10", cod: "1.3.10.", desc: "Membro de banca examinadora de livre-docência", fator: 2.0, unit: "pontos/banca", cat: "ensino", sub: "1.3 ORIENTAÇÕES E PARTICIPAÇÃO EM BANCAS DE AVALIAÇÃO" },
  { id: "1_3_11", cod: "1.3.11.", desc: "Membro de banca examinadora para Professor Titular da carreira EBTT", fator: 2.0, unit: "pontos/banca", cat: "ensino", sub: "1.3 ORIENTAÇÕES E PARTICIPAÇÃO EM BANCAS DE AVALIAÇÃO" },
  { id: "1_3_12", cod: "1.3.12.", desc: "Membro de banca de processo seletivo para contratação de professor temporário", fator: 1.0, unit: "pontos/banca", cat: "ensino", sub: "1.3 ORIENTAÇÕES E PARTICIPAÇÃO EM BANCAS DE AVALIAÇÃO" },
  { id: "1_3_13", cod: "1.3.13.", desc: "Membro de banca de concurso público para professor da Carreira do Magistério Superior", fator: 4.0, unit: "pontos/banca", cat: "ensino", sub: "1.3 ORIENTAÇÕES E PARTICIPAÇÃO EM BANCAS DE AVALIAÇÃO" },
  { id: "1_3_14", cod: "1.3.14.", desc: "Coordenação de projetos de ensino", fator: 1.0, unit: "ponto/(projeto.semestre)", cat: "ensino", sub: "1.3 ORIENTAÇÕES E PARTICIPAÇÃO EM BANCAS DE AVALIAÇÃO" },
  { id: "1_3_15", cod: "1.3.15.", desc: "Colaboração em projetos de ensino", fator: 0.5, unit: "pontos/(projeto.semestre)", cat: "ensino", sub: "1.3 ORIENTAÇÕES E PARTICIPAÇÃO EM BANCAS DE AVALIAÇÃO" },
  { id: "1_4_1", cod: "1.4.1.", desc: "Execução de palestra", fator: 2.0, unit: "pontos/palestra", cat: "ensino", sub: "1.4 OUTRAS ATIVIDADES LIGADAS AO ENSINO" },
  { id: "1_4_2", cod: "1.4.2.", desc: "Execução de mini-curso", fator: 2.0, unit: "pontos/mini-curso", cat: "ensino", sub: "1.4 OUTRAS ATIVIDADES LIGADAS AO ENSINO" },
  { id: "1_4_3", cod: "1.4.3.", desc: "Execução de oficina", fator: 2.0, unit: "pontos/oficina", cat: "ensino", sub: "1.4 OUTRAS ATIVIDADES LIGADAS AO ENSINO" },

  // 2. PESQUISA
  { id: "2_1_1", cod: "2.1.1.", desc: "Coordenação de projeto de pesquisa, de desenvolvimento tecnológico e/ou de inovação institucionalizado", fator: 3.0, unit: "pontos/(projeto.semestre)", cat: "pesquisa", sub: "2.1. COORDENAÇÃO E/OU COLABORAÇÃO EM PROJETO OU GRUPO DE PESQUISA" },
  { id: "2_1_2", cod: "2.1.2.", desc: "Coordenação de projeto com fomento aprovado em edital de agência externa", fator: 5.0, unit: "pontos/(projeto.semestre)", cat: "pesquisa", sub: "2.1. COORDENAÇÃO E/OU COLABORAÇÃO EM PROJETO OU GRUPO DE PESQUISA" },
  { id: "2_1_3", cod: "2.1.3.", desc: "Coordenação de grupo de pesquisa", fator: 2.0, unit: "pontos/semestre", cat: "pesquisa", sub: "2.1. COORDENAÇÃO E/OU COLABORAÇÃO EM PROJETO OU GRUPO DE PESQUISA" },
  { id: "2_1_4", cod: "2.1.4.", desc: "Colaboração em projeto de pesquisa institucionalizado", fator: 1.0, unit: "ponto/(projeto.semestre)", cat: "pesquisa", sub: "2.1. COORDENAÇÃO E/OU COLABORAÇÃO EM PROJETO OU GRUPO DE PESQUISA" },
  { id: "2_1_5", cod: "2.1.5.", desc: "Bolsista de Produtividade CNPq/CAPES", fator: 5.0, unit: "pontos/semestre", cat: "pesquisa", sub: "2.1. COORDENAÇÃO E/OU COLABORAÇÃO EM PROJETO OU GRUPO DE PESQUISA" },
  { id: "2_2_1", cod: "2.2.1.", desc: "Orientação de dissertação de mestrado", fator: 10.0, unit: "pontos/dissertação", cat: "pesquisa", sub: "2.2 ORIENTAÇÕES E SUPERVISÕES" },
  { id: "2_2_2", cod: "2.2.2.", desc: "Orientação de tese de doutorado", fator: 15.0, unit: "pontos/tese", cat: "pesquisa", sub: "2.2 ORIENTAÇÕES E SUPERVISÕES" },
  { id: "2_2_3", cod: "2.2.3.", desc: "Supervisão de pós-doutorado", fator: 2.0, unit: "pontos/(supervisão.semestre)", cat: "pesquisa", sub: "2.2 ORIENTAÇÕES E SUPERVISÕES" },
  { id: "2_2_4", cod: "2.2.4.", desc: "Orientação de iniciação científica, tecnológica ou de inovação", fator: 1.5, unit: "pontos/(orientação.semestre)", cat: "pesquisa", sub: "2.2 ORIENTAÇÕES E SUPERVISÕES" },
  { id: "2_2_5", cod: "2.2.5.", desc: "Coorientação de dissertação de mestrado", fator: 5.0, unit: "pontos/dissertação", cat: "pesquisa", sub: "2.2 ORIENTAÇÕES E SUPERVISÕES" },
  { id: "2_2_6", cod: "2.2.6.", desc: "Coorientação de tese de doutorado", fator: 7.0, unit: "pontos/tese", cat: "pesquisa", sub: "2.2 ORIENTAÇÕES E SUPERVISÕES" },
  { id: "2_3_1", cod: "2.3.1.", desc: "Publicação de artigo científico em revista indexada Qualis A", fator: 15.0, unit: "pontos/artigo", cat: "pesquisa", sub: "2.3. PUBLICAÇÕES" },
  { id: "2_3_2", cod: "2.3.2.", desc: "Publicação de artigo científico em revista indexada Qualis B", fator: 10.0, unit: "pontos/artigo", cat: "pesquisa", sub: "2.3. PUBLICAÇÕES" },
  { id: "2_3_3", cod: "2.3.3.", desc: "Publicação de artigo científico em revista indexada Qualis C", fator: 8.0, unit: "pontos/artigo", cat: "pesquisa", sub: "2.3. PUBLICAÇÕES" },
  { id: "2_3_4", cod: "2.3.4.", desc: "Outros artigos publicados (revistas não indexadas)", fator: 3.0, unit: "pontos/artigo", cat: "pesquisa", sub: "2.3. PUBLICAÇÕES" },
  { id: "2_3_5", cod: "2.3.5.", desc: "Textos em jornais, revistas e outros", fator: 0.5, unit: "pontos/texto", cat: "pesquisa", sub: "2.3. PUBLICAÇÕES" },
  { id: "2_3_6", cod: "2.3.6.", desc: "Autor de livro publicado em editoras com corpo editorial", fator: 15.0, unit: "pontos/livro", cat: "pesquisa", sub: "2.3. PUBLICAÇÕES" },
  { id: "2_3_7", cod: "2.3.7.", desc: "Autor de capítulo de livro publicado em editoras com corpo editorial", fator: 6.0, unit: "pontos/capítulo", cat: "pesquisa", sub: "2.3. PUBLICAÇÕES" },
  { id: "2_3_8", cod: "2.3.8.", desc: "Publicação de trabalho completo em evento", fator: 2.0, unit: "pontos/trabalho", cat: "pesquisa", sub: "2.3. PUBLICAÇÕES" },
  { id: "2_3_9", cod: "2.3.9.", desc: "Resumo expandido publicado em evento", fator: 1.0, unit: "ponto/resumo", cat: "pesquisa", sub: "2.3. PUBLICAÇÕES" },
  { id: "2_3_10", cod: "2.3.10.", desc: "Publicação de resumo em evento", fator: 0.5, unit: "ponto/resumo", cat: "pesquisa", sub: "2.3. PUBLICAÇÕES" },
  { id: "2_3_11", cod: "2.3.11.", desc: "Apresentação oral de trabalho em evento", fator: 1.5, unit: "ponto/apresentação", cat: "pesquisa", sub: "2.3. PUBLICAÇÕES" },
  { id: "2_3_12", cod: "2.3.12.", desc: "Apresentação de pôster em evento", fator: 1.0, unit: "ponto/apresentação", cat: "pesquisa", sub: "2.3. PUBLICAÇÕES" },
  { id: "2_6_4", cod: "2.6.4.", desc: "Patente registrada", fator: 25.0, unit: "pontos/patente", cat: "pesquisa", sub: "2.6. OUTRAS ATIVIDADES DE PESQUISA" },
  { id: "2_6_5", cod: "2.6.5.", desc: "Patente concedida", fator: 50.0, unit: "pontos/patente", cat: "pesquisa", sub: "2.6. OUTRAS ATIVIDADES DE PESQUISA" },

  // 3. EXTENSÃO
  { id: "3_1_1", cod: "3.1.1.", desc: "Coordenação de programa de extensão ou cultura institucionalizado", fator: 4.0, unit: "pontos/(programa.semestre)", cat: "extensao", sub: "3.1. COORDENAÇÃO E/OU COLABORAÇÃO EM AÇÕES DE EXTENSÃO E/OU CULTURA" },
  { id: "3_1_2", cod: "3.1.2.", desc: "Vice-coordenação de programa de extensão ou cultura institucionalizado", fator: 2.0, unit: "pontos/semestre", cat: "extensao", sub: "3.1. COORDENAÇÃO E/OU COLABORAÇÃO EM AÇÕES DE EXTENSÃO E/OU CULTURA" },
  { id: "3_1_3", cod: "3.1.3.", desc: "Coordenação de projeto de extensão ou cultura institucionalizado", fator: 3.0, unit: "pontos/(projeto.semestre)", cat: "extensao", sub: "3.1. COORDENAÇÃO E/OU COLABORAÇÃO EM AÇÕES DE EXTENSÃO E/OU CULTURA" },
  { id: "3_1_4", cod: "3.1.4.", desc: "Coordenação de curso ou evento de extensão ou cultura", fator: 2.0, unit: "pontos/semestre", cat: "extensao", sub: "3.1. COORDENAÇÃO E/OU COLABORAÇÃO EM AÇÕES DE EXTENSÃO E/OU CULTURA" },
  { id: "3_1_5", cod: "3.1.5.", desc: "Colaboração em programa, projeto, curso ou evento de extensão ou cultura", fator: 1.0, unit: "ponto/(ação.semestre)", cat: "extensao", sub: "3.1. COORDENAÇÃO E/OU COLABORAÇÃO EM AÇÕES DE EXTENSÃO E/OU CULTURA" },
  { id: "3_3_1", cod: "3.3.1.", desc: "Produtos acadêmicos de extensão e cultura (artística, manuais, relatórios, apps, jogos, etc.)", fator: 1.0, unit: "ponto/produto", cat: "extensao", sub: "3.3 PRODUTOS ACADÊMICOS DE EXTENSÃO E CULTURA" },

  // 4. FORMAÇÃO
  { id: "4_1_1", cod: "4.1.1.", desc: "Pós-graduação stricto sensu (com afastamento para capacitação UFFS)", fator: 45.0, unit: "pontos/semestre", cat: "formacao", sub: "4.1. FORMAÇÃO" },
  { id: "4_1_2", cod: "4.1.2.", desc: "Pós-graduação stricto sensu (sem afastamento)", fator: 28.0, unit: "pontos/semestre", cat: "formacao", sub: "4.1. FORMAÇÃO" },
  { id: "4_1_3", cod: "4.1.3.", desc: "Pós-graduação lato sensu", fator: 10.0, unit: "pontos/semestre", cat: "formacao", sub: "4.1. FORMAÇÃO" },
  { id: "4_1_6", cod: "4.1.6.", desc: "Participação em cursos de formação docente promovidos pela UFFS (máx. 6)", fator: 2.0, unit: "pontos/curso", cat: "formacao", sub: "4.1. FORMAÇÃO" },

  // 5. GESTÃO
  { id: "5_1_1", cod: "5.1.1.", desc: "Reitor, Vice-Reitor, Pró-Reitor ou Diretor de Campus", fator: 45.0, unit: "pontos/semestre", cat: "gestao", sub: "5.1. ADMINISTRAÇÃO/GESTÃO UNIVERSITÁRIA" },
  { id: "5_1_7", cod: "5.1.7.", desc: "Coordenador de curso de graduação ou de pós-graduação", fator: 30.0, unit: "pontos/semestre", cat: "gestao", sub: "5.1. ADMINISTRAÇÃO/GESTÃO UNIVERSITÁRIA" },
  { id: "5_1_8", cod: "5.1.8.", desc: "Coordenador adjunto de curso de graduação ou de pós-graduação", fator: 10.0, unit: "pontos/semestre", cat: "gestao", sub: "5.1. ADMINISTRAÇÃO/GESTÃO UNIVERSITÁRIA" },
  { id: "5_1_12", cod: "5.1.12.", desc: "Membro de comissão constituída por ato da administração superior", fator: 5.0, unit: "pontos/semestre", cat: "gestao", sub: "5.1. ADMINISTRAÇÃO/GESTÃO UNIVERSITÁRIA" },
  { id: "5_1_19", cod: "5.1.19.", desc: "Membro titular de órgão colegiado superior", fator: 6.0, unit: "pontos/semestre", cat: "gestao", sub: "5.1. ADMINISTRAÇÃO/GESTÃO UNIVERSITÁRIA" }
];

document.addEventListener("DOMContentLoaded", () => {
  renderizarFormulario();
});

function renderizarFormulario() {
  const container = document.getElementById("container-categorias");
  if (!container) return;
  container.innerHTML = "";

  const categorias = [
    { id: "ensino", nome: "1. ATIVIDADES DE ENSINO" },
    { id: "pesquisa", nome: "2. ATIVIDADES DE PESQUISA" },
    { id: "extensao", nome: "3. ATIVIDADES DE EXTENSÃO" },
    { id: "formacao", nome: "4. ATIVIDADES DE FORMAÇÃO" },
    { id: "gestao", nome: "5. ATIVIDADES DE ADMINISTRAÇÃO E GESTÃO UNIVERSITÁRIA" }
  ];

  categorias.forEach(cat => {
    let htmlCard = `
      <div class="card mb-4 shadow-sm">
        <div class="card-header card-header-uffs">${cat.nome}</div>
        <div class="card-body p-2 table-responsive">
          <table class="table table-sm table-hover mb-0">
            <thead class="thead-light">
              <tr>
                <th style="width: 45%">Item / Especificação</th>
                <th style="width: 15%">Fator</th>
                <th style="width: 10%">Qtd / Horas</th>
                <th style="width: 10%">Pontos</th>
                <th style="width: 20%">Comprovante (PDF)</th>
              </tr>
            </thead>
            <tbody>
    `;

    let subAtual = "";
    const itensCat = dadosRID.filter(i => i.cat === cat.id);

    itensCat.forEach(it => {
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
                   data-fator="${it.fator}" data-calc="${it.calc || ''}" data-cat="${cat.id}" data-cod="${it.cod}" id="qtd_${it.id}" 
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
          <strong>Subtotal ${cat.nome}: <span id="subtotal-${cat.id}" class="text-success">0.00</span> pts</strong>
        </div>
      </div>
    `;

    container.innerHTML += htmlCard;
  });
}

function calcularTotais() {
  let totais = { ensino: 0, pesquisa: 0, extensao: 0, formacao: 0, gestao: 0 };
  let totalGeral = 0;

  const inputs = document.querySelectorAll('.item-qtd');
  inputs.forEach(input => {
    const val = parseFloat(input.value) || 0;
    const fator = parseFloat(input.dataset.fator) || 0;
    const cat = input.dataset.cat;
    const calc = input.dataset.calc;

    let totalItem = 0;
    if (calc === "horas") {
      totalItem = (val / 15.0) * fator;
    } else {
      totalItem = val * fator;
    }

    const itemSpanId = `tot_${input.id.replace('qtd_', '')}`;
    const spanItem = document.getElementById(itemSpanId);
    if (spanItem) spanItem.innerText = totalItem.toFixed(2);

    if (totais[cat] !== undefined) {
      totais[cat] += totalItem;
    }
  });

  for (let cat in totais) {
    const subSpan = document.getElementById(`subtotal-${cat}`);
    if (subSpan) subSpan.innerText = totais[cat].toFixed(2);
    totalGeral += totais[cat];
  }

  const geralSpan = document.getElementById("pontuacao-total-geral");
  if (geralSpan) geralSpan.innerText = totalGeral.toFixed(2);
}

// PDF Export
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
    <h3>Pontuação Total: ${document.getElementById("pontuacao-total-geral").innerText} pts</h3>
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

  const pdfBytes = await pdfFinal.save();
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `RID_COMPLETO_${siape}.pdf`;
  link.click();
}
