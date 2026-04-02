var errosWhatsApp = [
    { codigo: "130472", categoria: "Falha", descricao: "Número em experimento", causa: "Número do usuário em experimento.", solucao: "Aguardar a liberação automática do número, pois o destinatário está participando de um experimento da Meta. Caso o erro persista, entre em contato com o suporte e com o gerente de conta responsável para análise do caso.", acao: "Aguardar algumas horas e realizar uma nova tentativa de envio. Caso o erro persista, recomenda-se testar com outros números e aguardar a liberação automática do destinatário.." },

    { codigo: "131047", categoria: "Falha", descricao: "Fora da janela de 24 horas", causa: "Mais de 24 horas se passaram desde a última resposta do usuário.", solucao: "Utilizar um template de mensagem aprovado pela Meta para reabrir a conversa com o destinatário. Após o envio do template, caso o usuário responda, a janela de 24 horas será reativada e permitirá o envio de mensagens normalmente.", resposta: "O número informado não está disponível no WhatsApp ou está inválido.", acao: "Verificar se a última interação do usuário ocorreu há mais de 24 horas. Caso positivo, realizar o envio por meio de template aprovado. Alternativamente, aguardar o retorno do usuário para que a janela de atendimento seja reaberta." },

    { codigo: "131049", categoria: "Falha", descricao: "Meta não entregou para proteger o ecossistema", causa: "A Meta bloqueou a entrega da mensagem para proteger a experiência do usuário. Isso geralmente ocorre quando são identificados sinais de baixa qualidade no envio, como alto volume de mensagens, falta de engajamento dos destinatários, ausência de opt-in válido ou comportamento considerado semelhante a spam.", solucao: "Evitar o reenvio imediato das mensagens. Recomenda-se aguardar ao menos 24 horas antes de uma nova tentativa e reduzir a pressão de marketing sobre o contato.", resposta: "Identificamos baixa qualidade de engajamento. Recomendamos revisar o conteúdo e frequência.", acao: "Evitar envios em massa para usuários que não interagiram recentemente e priorizar contatos que tenham opt-in válido. Recomenda-se também melhorar a qualidade e relevância das mensagens, além de reduzir a frequência de envios. Caso o erro persista, ajustar a estratégia de disparo e realizar novos testes." },

    { codigo: "131000", categoria: "Falha", descricao: "Algo deu errado", causa: "Erro genérico retornado pela Meta indicando falha no envio da mensagem, sem causa específica exposta.", solucao: "Reenviar a mensagem após alguns instantes e validar o formato da requisição para garantir que todos os parâmetros estejam corretos.", resposta: "O número atingiu limites de envio. Recomendamos reduzir o volume.", acao: "Acompanhar a recorrência do erro. Caso ocorra de forma frequente, acionar o suporte e o gerente de conta responsável para análise mais detalhada." },
    { codigo: "131016", categoria: "Falha", descricao: "Serviço Indisponível", causa: "Parte do serviço da Meta está temporariamente indisponível, impedindo o envio da mensagem.", solucao: "Aguardar a normalização do serviço antes de realizar uma nova tentativa de envio.", resposta: "Há um problema de faturamento na conta. Revise as configurações.", acao: "Acompanhar o status da plataforma e tentar novamente após alguns minutos. Caso o erro persista por um longo período, entrar em contato com o suporte e o gerente de conta responsável." },
    { codigo: "131026", categoria: "Falha", descricao: "Mensagem não entregue", causa: "A mensagem não foi entregue porque o número de destino pode não possuir WhatsApp ativo, estar bloqueado, localizado em uma região restrita, não ter aceitado os termos mais recentes do aplicativo ou estar utilizando uma versão desatualizada.", solucao: "Verificar se o número de destino é válido e possui WhatsApp ativo. Garantir que o aplicativo esteja atualizado e que não haja bloqueios que impeçam o recebimento de mensagens.", resposta: "O sistema identificou uma falha genérica 131026.", acao: "Confirmar o número com o destinatário e validar se ele consegue interagir normalmente com outros contatos. Caso o problema persista, orientar o usuário a atualizar o aplicativo e revisar possíveis restrições na conta." },
    { codigo: "131031", categoria: "Falha", descricao: "Conta bloqueada", causa: "Revisar o status da conta, validar o PIN de verificação em duas etapas e garantir que todas as etapas de verificação estejam concluídas corretamente.", solucao: "Verificar se os parâmetros estão corretos e reprocessar.", resposta: "O sistema identificou uma falha genérica 131031.", acao: "Verificar possíveis bloqueios ou pendências na conta. Caso não seja possível resolver, entrar em contato com o suporte e o gerente de conta responsável para análise e orientação junto à Meta." },
    { codigo: "131053", categoria: "Falha", descricao: "Erro ao subir mídia", causa: "Falha no upload da mídia devido a formato não suportado, arquivo corrompido ou problema no próprio arquivo enviado.", solucao: "Verificar o arquivo de mídia, garantindo que esteja em um formato suportado e que não esteja corrompido. Caso necessário, realizar um novo upload do arquivo.", resposta: "O sistema identificou uma falha genérica 131053.", acao: "Confirmar se o formato e o tamanho da mídia estão dentro dos padrões suportados. Após os ajustes, realizar uma nova tentativa de envio. Se o erro persistir, testar com outro arquivo ou acionar o suporte e o gerente de conta responsável para análise." },
    { codigo: "132005", categoria: "Template", descricao: "Template inválido 132005", causa: "Parâmetros do template inválidos.", solucao: "Corrigir o template e reenviar para aprovação.", resposta: "O template enviado possui erro 132005.", acao: "Ajustar template e enviar novamente." },
    { codigo: "132007", categoria: "Template", descricao: "Template inválido 132007", causa: "Parâmetros do template inválidos.", solucao: "Corrigir o template e reenviar para aprovação.", resposta: "O template enviado possui erro 132007.", acao: "Ajustar template e enviar novamente." }
];

var errosSMS = [
    { codigo: "10001", categoria: "Falha", descricao: "Aparelho de destino desconhecido", causa: "Prefixo desatualizado ou número digitado incorretamente.", solucao: "Realizar a atualização do prefixo, ou então digitar o número corretamente.", resposta: "Número inválido. Use o padrão internacional (E.164).", acao: "V" },

    { codigo: "10004", categoria: "Entrega", descricao: "Aparelho de destino inativo", causa: "Aparelho inativo no momento da tentativa de entrega do SMS.", solucao: "Entrar em contato com suporte e realizarem uma nova tentativa de disparo.", resposta: "Sua conta está com saldo insuficiente para envio de SMS.", acao: "Analisar se o número está realmente ativo e apto para recebimento." },

    { codigo: "10007", categoria: "Indisponivel", descricao: "Rejeitado pela operadora", causa: "A operadora rejeitou a mensagem.", solucao: "Entrar em contato com suporte para que analisem.", resposta: "Rota de envio está temporariamente indisponível. Tente novamente em alguns minutos.", acao: "Aguardar o retorno do time de suporte para análise e identificação do ocorrido." },

    { codigo: "10009", categoria: "Bloqueio", descricao: "Invalid Message: Anti-fraude", causa: "Conteúdo bloqueado pelo anti-fraude.", solucao: "Revisar o conteúdo e realizar a liberação prévia em ambas as pontas.", resposta: "Mensagem bloqueada pelo operador devido a conteúdo suspeito.", acao: "Entre em contato com o suporte para solicitar a liberação do seu conteúdo. Após a solicitação, aguarde a disponibilização do conteúdo e do link para que novos envios possam ser realizados." },

    { codigo: "10010", categoria: "Entrega", descricao: "Aparelho de destino inacessível", causa: "A operadora não obteve sucesso para estabelecer contato com a linha do cliente.", solucao: "Recomendamos nesse caso, que o titular da linha entre em contato com a operadora e identifique possíveis indisponibilidades em sua linha.", resposta: "Ultrapassou limite de envio de SMS. Aguarde e tente novamente.", acao: "Verificar se o aparelho está com sinal, se está desligado ou em modo avião." },
    { codigo: "10005", categoria: "Falha", descricao: "Erro de roteamento", causa: "Rota indisponível.", solucao: "Entrar em contato com suporte.", resposta: "O número pertence a operadora não suportada atualmente.", acao: "Verificar com o time de suporte se a rota está disponível." }
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

var CATEGORIAS = ["Entrega", "Bloqueio", "Template", "Conta", "Limite", "Falha"];
var selectedCodigo = null, activeCategory = "all", activeChannel = "whatsapp", erros = errosWhatsApp;
var CATEGORIAS = ["Entrega", "Bloqueio", "Template", "Conta", "Limite", "Falha"];
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
        case "Falha": return { nivel: "Alto", acao: "Investigar e tentar novamente." };
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
    c.innerHTML = '<div class="detail-header"><div><div style="display:flex;align-items:center;gap:.5rem;margin-bottom:.25rem"><span class="detail-title">Erro ' + erro.codigo + '</span><span class="badge badge-' + erro.categoria + '">' + erro.categoria + '</span></div><div class="detail-desc">' + erro.descricao + '</div></div></div><hr class="divider"><div class="info-field"><span class="info-icon">📄</span><div><div class="info-label">Causa</div><div class="info-value">' + erro.causa + '</div></div></div><div class="info-field"><span class="info-icon">🔧</span><div><div class="info-label">Solução</div><div class="info-value">' + erro.solucao + '</div></div></div><div class="info-field"><span class="info-icon">⚡</span><div><div class="info-label">Ação recomendada</div><div class="info-value">' + d.acao + '</div></div></div>';

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