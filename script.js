var errosWhatsApp = [
    { codigo: "131026", categoria: "Entrega", descricao: "Message Undeliverable", causa: "Número não está no WhatsApp ou inválido.", solucao: "Validar número e confirmar se está ativo.", resposta: "O número informado não está disponível no WhatsApp ou está inválido.", acao: "Confirmar número no catálogo do WhatsApp e reenviar." },
    { codigo: "131049", categoria: "Entrega", descricao: "Meta bloqueou envio", causa: "Mensagens consideradas indesejadas.", solucao: "Revisar conteúdo e reduzir frequência.", resposta: "Identificamos baixa qualidade de engajamento. Recomendamos revisar o conteúdo e frequência.", acao: "Inserir consentimento explícito e reduzir volume de envios." },
    { codigo: "130472", categoria: "Entrega", descricao: "Número em experimento", causa: "Teste interno da plataforma.", solucao: "Aguardar liberação automática.", resposta: "O número informado está em um experimento da Meta e temporariamente indisponível.", acao: "Aguardar algumas horas e tentar novamente." },
    { codigo: "131048", categoria: "Bloqueio", descricao: "Erros de Bloqueio / Spam", causa: "Muitas mensagens ou denúncias.", solucao: "Reduzir envios e revisar estratégia.", resposta: "O número atingiu limites de envio. Recomendamos reduzir o volume.", acao: "Pauses envios e revise a qualidade da mensagem." },
    { codigo: "131042", categoria: "Conta", descricao: "Problema de pagamento", causa: "Falta de billing ativo.", solucao: "Configurar pagamento.", resposta: "Há um problema de faturamento na conta. Revise as configurações.", acao: "Atualizar dados de pagamento e reconectar a conta." },
    { codigo: "132000", categoria: "Template", descricao: "Template inválido", causa: "Parâmetros incorretos.", solucao: "Corrigir estrutura.", resposta: "O template enviado possui parâmetros inválidos.", acao: "Ajustar variáveis e enviar para validação novamente." },
    { codigo: "130429", categoria: "Limite", descricao: "Limite de envio atingido", causa: "Muitas chamadas em pouco tempo.", solucao: "Reduzir frequência.", resposta: "Foi identificado excesso de requisições. Reduza a frequência.", acao: "Espalhar envios para evitar spikes." }
];

var errosSMS = [
    { codigo: "10001", categoria: "Entrega", descricao: "Aparelho de destino desconhecido", causa: "Prefixo desatualizado ou número digitado incorretamente.", solucao: "Realizar a atualização do prefixo, ou então digitar o número corretamente.", resposta: "Número inválido. Use o padrão internacional (E.164).", acao: "V" },

    { codigo: "10004", categoria: "Entrega", descricao: "Aparelho de destino inativo", causa: "Aparelho inativo no momento da tentativa de entrega do SMS.", solucao: "Entrar em contato com suporte e realizarem uma nova tentativa de disparo.", resposta: "Sua conta está com saldo insuficiente para envio de SMS.", acao: "Analisar se o número está realmente ativo e apto para recebimento." },

    { codigo: "10009", categoria: "Bloqueio", descricao: "Invalid Message: Anti-fraude", causa: "Conteúdo bloqueado pelo anti-fraude.", solucao: "Revisar o conteúdo e realizar a liberação prévia em ambas as pontas.", resposta: "Mensagem bloqueada pelo operador devido a conteúdo suspeito.", acao: "Alterar o texto e solicitar nova autorização do usuário." },

    { codigo: "10010", categoria: "Entrega", descricao: "Aparelho de destino inacessível", causa: "A operadora não obteve sucesso para estabelecer contato com a linha do cliente.", solucao: "Recomendamos nesse caso, que o titular da linha entre em contato com a operadora e identifique possíveis indisponibilidades em sua linha.", resposta: "Ultrapassou limite de envio de SMS. Aguarde e tente novamente.", acao: "Diminuir taxa de envio e tentar novamente após janela." },
    { codigo: "210005", categoria: "Entrega", descricao: "Operadora não suportada", causa: "Operadora no bloqueio.", solucao: "Usar operadora alternativa.", resposta: "O número pertence a operadora não suportada atualmente.", acao: "Verificar operadora e mudar para rota compatível." }
];

var errosEmail = [
    { codigo: "30001", categoria: "Entrega", descricao: "E-mail bounce", causa: "Endereço inexistente ou caixa cheia.", solucao: "Verificar endereço e tentar novamente.", resposta: "O e-mail informado não pôde ser entregue.", acao: "Confirmar endereço e reenviar." },
    { codigo: "30002", categoria: "Bloqueio", descricao: "Spam flagged", causa: "Conteúdo identificado como spam.", solucao: "Revisar assunto e corpo.", resposta: "Mensagem marcada como spam pelo provedor.", acao: "Ajustar conteúdo e obter consentimento." },
    { codigo: "30003", categoria: "Conta", descricao: "Domínio bloqueado", causa: "Reputação baixa do domínio.", solucao: "Melhorar reputação.", resposta: "Seu domínio está bloqueado.", acao: "Verificar reputação e limpar listas." },
    { codigo: "30004", categoria: "Limite", descricao: "Limite diário excedido", causa: "Muitos e-mails enviados.", solucao: "Reduzir volume.", resposta: "Ultrapassou limite de envio diário.", acao: "Espalhar envios ao longo do dia." },
    { codigo: "30005", categoria: "Template", descricao: "HTML inválido", causa: "Estrutura de e-mail incorreta.", solucao: "Corrigir HTML.", resposta: "O template possui erros de formatação.", acao: "Validar HTML e reenviar." }
];

var errosRCS = [
    { codigo: "40001", categoria: "Entrega", descricao: "Número não suportado", causa: "Dispositivo não compatível com RCS.", solucao: "Verificar compatibilidade.", resposta: "O número não suporta RCS.", acao: "Confirmar suporte e usar fallback." },
    { codigo: "40002", categoria: "Bloqueio", descricao: "Conteúdo rejeitado", causa: "Violação de políticas.", solucao: "Revisar conteúdo.", resposta: "Mensagem rejeitada por políticas.", acao: "Ajustar mensagem e reenviar." },
    { codigo: "40003", categoria: "Conta", descricao: "Conta não verificada", causa: "Falta verificação.", solucao: "Verificar conta.", resposta: "Conta RCS não verificada.", acao: "Completar verificação e reconectar." },
    { codigo: "40004", categoria: "Limite", descricao: "Taxa excedida", causa: "Envios muito rápidos.", solucao: "Reduzir frequência.", resposta: "Ultrapassou taxa de envio.", acao: "Diminuir velocidade e tentar novamente." },
    { codigo: "40005", categoria: "Template", descricao: "Rich card inválida", causa: "Estrutura incorreta.", solucao: "Corrigir template.", resposta: "Rich card possui erros.", acao: "Ajustar estrutura e validar." }
];

var CATEGORIAS = ["Entrega", "Bloqueio", "Template", "Conta", "Limite"];
var selectedCodigo = null, activeCategory = "all", activeChannel = "whatsapp", erros = errosWhatsApp;
var CATEGORIAS = ["Entrega", "Bloqueio", "Template", "Conta", "Limite"];
var selectedCodigo = null, activeCategory = "all";

function diagnostico(e) {
    if (e.acao) {
        var nivel = "Baixo";
        switch (e.categoria) {
            case "Bloqueio": nivel = "Alto"; break;
            case "Conta": nivel = "Alto"; break;
            case "Entrega": nivel = "Médio"; break;
            case "Limite": nivel = "Médio"; break;
            case "Template": nivel = "Baixo"; break;
        }
        return { nivel: nivel, acao: e.acao };
    }

    switch (e.categoria) {
        case "Bloqueio": return { nivel: "Alto", acao: "Parar envios imediatamente." };
        case "Conta": return { nivel: "Alto", acao: "Verificar billing." };
        case "Entrega": return { nivel: "Médio", acao: "Validar número e conteúdo." };
        case "Limite": return { nivel: "Médio", acao: "Reduzir volume de envios." };
        case "Template": return { nivel: "Baixo", acao: "Corrigir parâmetros." };
        default: return { nivel: "Baixo", acao: "Monitorar situação." };
    }
}

function switchChannel(channel) {
    activeChannel = channel;
    if (channel === "whatsapp") {
        erros = errosWhatsApp;
        document.getElementById("apiType").textContent = "Meta WhatsApp";
        document.getElementById("whatsappBtn").classList.add("active");
        document.getElementById("smsBtn").classList.remove("active");
        document.getElementById("emailBtn").classList.remove("active");
        document.getElementById("rcsBtn").classList.remove("active");
    } else if (channel === "sms") {
        erros = errosSMS;
        document.getElementById("apiType").textContent = "SMS";
        document.getElementById("smsBtn").classList.add("active");
        document.getElementById("whatsappBtn").classList.remove("active");
        document.getElementById("emailBtn").classList.remove("active");
        document.getElementById("rcsBtn").classList.remove("active");
    } else if (channel === "email") {
        erros = errosEmail;
        document.getElementById("apiType").textContent = "E-mail";
        document.getElementById("emailBtn").classList.add("active");
        document.getElementById("whatsappBtn").classList.remove("active");
        document.getElementById("smsBtn").classList.remove("active");
        document.getElementById("rcsBtn").classList.remove("active");
    } else if (channel === "rcs") {
        erros = errosRCS;
        document.getElementById("apiType").textContent = "RCS";
        document.getElementById("rcsBtn").classList.add("active");
        document.getElementById("whatsappBtn").classList.remove("active");
        document.getElementById("smsBtn").classList.remove("active");
        document.getElementById("emailBtn").classList.remove("active");
    }
    selectedCodigo = null;
    activeCategory = "all";
    document.getElementById("categoryFilter").value = "all";
    render();
    renderDetails();
}

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
    var d = diagnostico(erro);
    if (erro.codigo === "10001") {
        d.acao = "Entrar em contato com o suporte para atualização do prefixo ou correção do número.";
    }
    var c = document.getElementById("errorDetails");
    c.innerHTML = '<div class="detail-header"><div><div style="display:flex;align-items:center;gap:.5rem;margin-bottom:.25rem"><span class="detail-title">Erro ' + erro.codigo + '</span><span class="badge badge-' + erro.categoria + '">' + erro.categoria + '</span></div><div class="detail-desc">' + erro.descricao + '</div></div><span class="severity severity-' + d.nivel + '">' + d.nivel + '</span></div><hr class="divider"><div class="info-field"><span class="info-icon">📄</span><div><div class="info-label">Causa</div><div class="info-value">' + erro.causa + '</div></div></div><div class="info-field"><span class="info-icon">🔧</span><div><div class="info-label">Solução</div><div class="info-value">' + erro.solucao + '</div></div></div><div class="info-field"><span class="info-icon">⚡</span><div><div class="info-label">Ação recomendada</div><div class="info-value">' + d.acao + '</div></div></div>';

}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("searchInput").addEventListener("input", render);
    document.getElementById("categoryFilter").addEventListener("change", function (e) { activeCategory = e.target.value; render(); });

    document.getElementById("whatsappBtn").addEventListener("click", function () { switchChannel("whatsapp"); });
    document.getElementById("smsBtn").addEventListener("click", function () { switchChannel("sms"); });
    document.getElementById("emailBtn").addEventListener("click", function () { switchChannel("email"); });
    document.getElementById("rcsBtn").addEventListener("click", function () { switchChannel("rcs"); });

    switchChannel("whatsapp");
});