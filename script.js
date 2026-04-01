var erros = [
    { codigo: "131026", categoria: "Entrega", descricao: "Message Undeliverable", causa: "Número não está no WhatsApp ou inválido.", solucao: "Validar número e confirmar se está ativo.", resposta: "O número informado não está disponível no WhatsApp ou está inválido." },
    { codigo: "131049", categoria: "Entrega", descricao: "Meta bloqueou envio", causa: "Mensagens consideradas indesejadas.", solucao: "Revisar conteúdo e reduzir frequência.", resposta: "Identificamos baixa qualidade de engajamento. Recomendamos revisar o conteúdo e frequência." },
    { codigo: "130472", categoria: "Entrega", descricao: "Número em experimento", causa: "Teste interno da plataforma.", solucao: "Aguardar liberação automática.", resposta: "O número informado está em um experimento da Meta e temporariamente indisponível." },
    { codigo: "131048", categoria: "Bloqueio", descricao: "Erros de Bloqueio / Spam", causa: "Muitas mensagens ou denúncias.", solucao: "Reduzir envios e revisar estratégia.", resposta: "O número atingiu limites de envio. Recomendamos reduzir o volume." },
    { codigo: "131042", categoria: "Conta", descricao: "Problema de pagamento", causa: "Falta de billing ativo.", solucao: "Configurar pagamento.", resposta: "Há um problema de faturamento na conta. Revise as configurações." },
    { codigo: "132000", categoria: "Template", descricao: "Template inválido", causa: "Parâmetros incorretos.", solucao: "Corrigir estrutura.", resposta: "O template enviado possui parâmetros inválidos." },
    { codigo: "130429", categoria: "Limite", descricao: "Limite de envio atingido", causa: "Muitas chamadas em pouco tempo.", solucao: "Reduzir frequência.", resposta: "Foi identificado excesso de requisições. Reduza a frequência." }
];
var CATEGORIAS = ["Entrega", "Bloqueio", "Template", "Conta", "Limite"];
var selectedCodigo = null, activeCategory = "all";

function diagnostico(e) { switch (e.categoria) { case "Bloqueio": return { nivel: "Alto", acao: "Parar envios imediatamente." }; case "Conta": return { nivel: "Alto", acao: "Verificar billing." }; case "Entrega": return { nivel: "Médio", acao: "Validar número e conteúdo." }; case "Limite": return { nivel: "Médio", acao: "Reduzir volume de envios." }; case "Template": return { nivel: "Baixo", acao: "Corrigir parâmetros." }; default: return { nivel: "Baixo", acao: "Monitorar situação." } } }

function renderStats() {
    var counts = {}; erros.forEach(function (e) { counts[e.categoria] = (counts[e.categoria] || 0) + 1 });
    var c = document.getElementById("stats");
    c.innerHTML = CATEGORIAS.map(function (cat) { return '<button class="stat-btn ' + (activeCategory === cat ? "active" : "") + '" data-cat="' + cat + '"><div class="stat-count">' + (counts[cat] || 0) + '</div><div class="stat-label">' + cat + '</div></button>' }).join("");
    c.querySelectorAll(".stat-btn").forEach(function (btn) { btn.addEventListener("click", function () { var cat = btn.dataset.cat; activeCategory = activeCategory === cat ? "all" : cat; document.getElementById("categoryFilter").value = activeCategory; renderStats(); render() }) });
}

function render() {
    var search = document.getElementById("searchInput").value.toLowerCase();
    var filtered = erros.filter(function (e) { return (e.codigo.includes(search) || e.descricao.toLowerCase().includes(search)) && (activeCategory === "all" || e.categoria === activeCategory) });
    document.getElementById("errorCount").textContent = filtered.length;
    var list = document.getElementById("errorList");
    if (!filtered.length) { list.innerHTML = '<div style="text-align:center;padding:4rem 0;color:var(--muted);font-size:.875rem">Nenhum erro encontrado</div>'; return }
    list.innerHTML = filtered.map(function (e) { return '<li class="error-item ' + (e.codigo === selectedCodigo ? "selected" : "") + '" data-codigo="' + e.codigo + '"><div><div class="error-code">' + e.codigo + '</div><div class="error-desc">' + e.descricao + '</div></div><span class="badge badge-' + e.categoria + '">' + e.categoria + '</span></li>' }).join("");
    list.querySelectorAll(".error-item").forEach(function (item) { item.addEventListener("click", function () { selectedCodigo = item.dataset.codigo; render(); renderDetails() }) });
    renderStats();
}

function renderDetails() {
    var erro = erros.find(function (e) { return e.codigo === selectedCodigo }); if (!erro) return;
    var d = diagnostico(erro), c = document.getElementById("errorDetails");
    c.innerHTML = '<div class="detail-header"><div><div style="display:flex;align-items:center;gap:.5rem;margin-bottom:.25rem"><span class="detail-title">Erro ' + erro.codigo + '</span><span class="badge badge-' + erro.categoria + '">' + erro.categoria + '</span></div><div class="detail-desc">' + erro.descricao + '</div></div><span class="severity severity-' + d.nivel + '">' + d.nivel + '</span></div><hr class="divider"><div class="info-field"><span class="info-icon">📄</span><div><div class="info-label">Causa</div><div class="info-value">' + erro.causa + '</div></div></div><div class="info-field"><span class="info-icon">🔧</span><div><div class="info-label">Solução</div><div class="info-value">' + erro.solucao + '</div></div></div><div class="info-field"><span class="info-icon">⚡</span><div><div class="info-label">Ação recomendada</div><div class="info-value">' + d.acao + '</div></div></div><hr class="divider"><div class="response-box"><div class="response-label">Resposta sugerida</div><div class="response-text">' + erro.resposta + '</div></div><button class="copy-btn" id="copyBtn">📋 Copiar detalhes</button>';
    document.getElementById("copyBtn").addEventListener("click", function () { navigator.clipboard.writeText("Erro " + erro.codigo + " - " + erro.descricao + "\nCategoria: " + erro.categoria + "\nCausa: " + erro.causa + "\nSolução: " + erro.solucao + "\nResposta: " + erro.resposta).then(function () { var b = document.getElementById("copyBtn"); b.textContent = "✅ Copiado!"; setTimeout(function () { b.textContent = "📋 Copiar detalhes" }, 2000) }) });
}

document.addEventListener("DOMContentLoaded", function () { document.getElementById("searchInput").addEventListener("input", render); document.getElementById("categoryFilter").addEventListener("change", function (e) { activeCategory = e.target.value; render() }); render() });