var errosWhatsApp = [
    { codigo: "130472", categoria: "Falha", descricao: "Número em experimento", causa: "Número do usuário em experimento.", solucao: "Aguardar a liberação automática do número, pois o destinatário está participando de um experimento da Meta. Caso o erro persista, entre em contato com o suporte e com o gerente de conta responsável para análise do caso.", acao: "Aguardar algumas horas e realizar uma nova tentativa de envio. Caso o erro persista, recomenda-se testar com outros números e aguardar a liberação automática do destinatário.." },

    { codigo: "131047", categoria: "Falha", descricao: "Fora da janela de 24 horas", causa: "Mais de 24 horas se passaram desde a última resposta do usuário.", solucao: "Utilizar um template de mensagem aprovado pela Meta para reabrir a conversa com o destinatário. Após o envio do template, caso o usuário responda, a janela de 24 horas será reativada e permitirá o envio de mensagens normalmente.", resposta: "O número informado não está disponível no WhatsApp ou está inválido.", acao: "Verificar se a última interação do usuário ocorreu há mais de 24 horas. Caso positivo, realizar o envio por meio de template aprovado. Alternativamente, aguardar o retorno do usuário para que a janela de atendimento seja reaberta." },

    { codigo: "131049", categoria: "Falha", descricao: "Meta não entregou para proteger o ecossistema", causa: "A Meta bloqueou a entrega da mensagem para proteger a experiência do usuário. Isso geralmente ocorre quando são identificados sinais de baixa qualidade no envio, como alto volume de mensagens, falta de engajamento dos destinatários, ausência de opt-in válido ou comportamento considerado semelhante a spam.", solucao: "Evitar o reenvio imediato das mensagens. Recomenda-se aguardar ao menos 24 horas antes de uma nova tentativa e reduzir a pressão de marketing sobre o contato.", resposta: "Identificamos baixa qualidade de engajamento. Recomendamos revisar o conteúdo e frequência.", acao: "Evitar envios em massa para usuários que não interagiram recentemente e priorizar contatos que tenham opt-in válido. Recomenda-se também melhorar a qualidade e relevância das mensagens, além de reduzir a frequência de envios. Caso o erro persista, ajustar a estratégia de disparo e realizar novos testes." },

    { codigo: "131000", categoria: "Falha", descricao: "Algo deu errado", causa: "Erro genérico retornado pela Meta indicando falha no envio da mensagem, sem causa específica exposta.", solucao: "Reenviar a mensagem após alguns instantes e validar o formato da requisição para garantir que todos os parâmetros estejam corretos.", resposta: "O número atingiu limites de envio. Recomendamos reduzir o volume.", acao: "Acompanhar a recorrência do erro. Caso ocorra de forma frequente, acionar o suporte e o gerente de conta responsável para análise mais detalhada." },
    { codigo: "131016", categoria: "Falha", descricao: "Serviço Indisponível", causa: "Parte do serviço da Meta está temporariamente indisponível, impedindo o envio da mensagem.", solucao: "Aguardar a normalização do serviço antes de realizar uma nova tentativa de envio.", resposta: "Há um problema de faturamento na conta. Revise as configurações.", acao: "Acompanhar o status da plataforma e tentar novamente após alguns minutos. Caso o erro persista por um longo período, entrar em contato com o suporte e o gerente de conta responsável." },
    { codigo: "131026", categoria: "Falha", descricao: "Mensagem não entregue", causa: "A mensagem não foi entregue porque o número de destino pode não possuir WhatsApp ativo, estar bloqueado, localizado em uma região restrita, não ter aceitado os termos mais recentes do aplicativo ou estar utilizando uma versão desatualizada.", solucao: "Verificar se o número de destino é válido e possui WhatsApp ativo. Garantir que o aplicativo esteja atualizado e que não haja bloqueios que impeçam o recebimento de mensagens.", resposta: "O sistema identificou uma falha genérica 131026.", acao: "Confirmar o número com o destinatário e validar se ele consegue interagir normalmente com outros contatos. Caso o problema persista, orientar o usuário a atualizar o aplicativo e revisar possíveis restrições na conta." },
    { codigo: "131031", categoria: "Falha", descricao: "Conta bloqueada", causa: "Revisar o status da conta, validar o PIN de verificação em duas etapas e garantir que todas as etapas de verificação estejam concluídas corretamente.", solucao: "Verificar se os parâmetros estão corretos e reprocessar.", resposta: "O sistema identificou uma falha genérica 131031.", acao: "Verificar possíveis bloqueios ou pendências na conta. Caso não seja possível resolver, entrar em contato com o suporte e o gerente de conta responsável para análise e orientação junto à Meta." },
    { codigo: "131053", categoria: "Falha", descricao: "Erro ao subir mídia", causa: "Falha no upload da mídia devido a formato não suportado, arquivo corrompido ou problema no próprio arquivo enviado.", solucao: "Verificar o arquivo de mídia, garantindo que esteja em um formato suportado e que não esteja corrompido. Caso necessário, realizar um novo upload do arquivo.", resposta: "O sistema identificou uma falha genérica 131053.", acao: "Confirmar se o formato e o tamanho da mídia estão dentro dos padrões suportados. Após os ajustes, realizar uma nova tentativa de envio. Se o erro persistir, testar com outro arquivo ou acionar o suporte e o gerente de conta responsável para análise." },
    { codigo: "132005", categoria: "Template", descricao: "Texto do template criado, ficou extenso e gerou falha", causa: "O template utilizado continha uma quantidade elevada de variáveis e/ou conteúdo, fazendo com que o texto final excedesse os limites suportados pelo WhatsApp Manager, gerando falha no processamento da mensagem.", solucao: "Reduzir o conteúdo do template e a quantidade de variáveis, além de revisar as traduções para garantir que o tamanho final esteja dentro do limite permitido.", resposta: "O template enviado possui erro 132005.", acao: "Revisar o template no WhatsApp Manager, validar o tamanho final da mensagem considerando variáveis e traduções e, após os ajustes, realizar uma nova tentativa de envio." },
    { codigo: "132007", categoria: "Template", descricao: "Template viola política de formato / conteúdo.", causa: "O template utilizado viola as políticas de conteúdo ou formato do WhatsApp, por conter elementos não permitidos ou fora das diretrizes da plataforma.", solucao: "Revisar o conteúdo do template e ajustá-lo conforme as políticas do WhatsApp, removendo ou corrigindo os elementos que estejam em desacordo.", resposta: "O template enviado possui erro 132007.", acao: "Consultar as diretrizes oficiais do WhatsApp, realizar as correções necessárias no template e reenviá-lo para aprovação. Após a aprovação, realizar uma nova tentativa de envio." }
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
    { codigo: "400 INVALID_ARGUMENT", categoria: "Falha", descricao: "Parâmetros inválidos na requisição", causa: "Algum parâmetro errado na requisição.", solucao: "Revisar os parâmetros da requisição e garantir que estejam no formato correto.", resposta: "Parâmetros inválidos. Verifique o formato da requisição.", acao: "Corrigir os parâmetros e realizar uma nova tentativa de envio." },
    { codigo: "404 NOT_FOUND", categoria: "Falha", descricao: "RCS não disponível para o número", causa: "RCS desabilitado no aparelho do destinatário ou número não habilitado para receber RCS.", solucao: "Verificar se o número está habilitado para receber RCS e se oapparelho é compatível.", resposta: "RCS não está disponível para este número.", acao: "Confirmar que o destinatário possui RCS habilitado ou utilizar outro canal como fallback." },
    { codigo: "500 INTERNAL", categoria: "Falha", descricao: "Erro interno no servidor RCS", causa: "Erro interno no servidor de RCS ou erro inesperado na hora do processamento (erro da própria Google).", solucao: "Aguarde algunos instantes e tente novamente. Caso o erro persista, entre em contato com o suporte.", resposta: "Erro interno no servidor RCS. Tente novamente mais tarde.", acao: "Reenviar a mensagem após alguns minutos. Se o erro persistir, acione o suporte técnico." },
    { codigo: "503 UNAVAILABLE", categoria: "Falha", descricao: "Serviço temporariamente indisponível", causa: "Serviço temporariamente indisponível / falha de conexão entre os provedores.", solucao: "Aguardar a normalização do serviço e tentar novamente.", resposta: "Serviço temporariamente indisponível. Tente novamente em alguns minutos.", acao: "Aguardar a recuperação do serviço e realizar uma nova tentativa de envio." },

    { codigo: "Enviado", categoria: "Status", descricao: "Mensagem enviada da plataforma para o Google RCS", causa: "Mensagem foi enviada com sucesso para o servidor RCS do Google.", solucao: "Nenhuma ação necessária.", resposta: "Mensagem enviada com sucesso.", acao: "Aguardar o próximo status de entrega." },
    { codigo: "Entregue", categoria: "Status", descricao: "Mensagem entregue com sucesso ao destinatário", causa: "A mensagem foi recebida pelo servidor RCS e entregue ao destinatário.", solucao: "Nenhuma ação necessária.", resposta: "Mensagem entregue ao destinatário.", acao: "Mensagem entregue com sucesso." },
    { codigo: "Lido", categoria: "Status", descricao: "Mensagem foi aberta/visualizada pelo destinatário", causa: "O destinatário abriu e visualizou a mensagem.", solucao: "Nenhuma ação necessária.", resposta: "Mensagem visualizada pelo destinatário.", acao: "Mensagem foi aberta pelo destinatário." },
    { codigo: "Recebido", categoria: "Status", descricao: "Mensagem recebida pelo aplicativo de mensagens no aparelho", causa: "A mensagem foi recebida pelo aplicativo de mensagens no dispositivo do destinatário.", solucao: "Nenhuma ação necessária.", resposta: "Mensagem recebida no aplicativo.", acao: "Mensagem recebida no dispositivo." },
    { codigo: "Enviando", categoria: "Status", descricao: "Mensagem em processo de envio, ainda não finalizada", causa: "A mensagem está sendo processada e enviada para o servidor RCS.", solucao: "Nenhuma ação necessária.", resposta: "Mensagem em processamento.", acao: "Aguardar a conclusão do envio." },
    { codigo: "Pendente", categoria: "Status", descricao: "Mensagem aguardando processamento/envio", causa: "A mensagem está na fila aguardando processamento/envio.", solucao: "Nenhuma ação necessária.", resposta: "Mensagem aguardando processamento.", acao: "Aguardar o processamento da mensagem." }
];

var selectedCodigo = null, activeChannel = "whatsapp", erros = errosWhatsApp;

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
        document.getElementById("rcsBtn").classList.remove("active");
    } else if (channel === "sms") {
        erros = errosSMS;
        document.getElementById("apiType").textContent = "SMS";
        document.getElementById("smsBtn").classList.add("active");
        document.getElementById("whatsappBtn").classList.remove("active");
        document.getElementById("rcsBtn").classList.remove("active");
    } else if (channel === "rcs") {
        erros = errosRCS;
        document.getElementById("apiType").textContent = "RCS";
        document.getElementById("rcsBtn").classList.add("active");
        document.getElementById("whatsappBtn").classList.remove("active");
        document.getElementById("smsBtn").classList.remove("active");
    }
    selectedCodigo = null;

    var listTitle = document.querySelector('.list-title');
    var metaHelp = document.getElementById('metaHelp');
    if (channel === 'whatsapp') {
        listTitle.classList.remove('sms');
        listTitle.classList.add('is-falha');
        listTitle.innerHTML = 'Falhas (<span id="errorCount">0</span>)';
        metaHelp.style.display = 'block';
    } else if (channel === 'sms') {
        listTitle.classList.remove('is-falha');
        listTitle.classList.add('sms');
        listTitle.innerHTML = 'Indisponivel (<span id="errorCount">0</span>)';
        metaHelp.style.display = 'none';
    } else if (channel === 'rcs') {
        listTitle.classList.remove('sms');
        listTitle.classList.add('is-falha');
        listTitle.innerHTML = 'Status e Falhas (<span id="errorCount">0</span>)';
        metaHelp.style.display = 'none';
    }

    render();
    renderDetails();
}

function render() {
    var search = document.getElementById("searchInput").value.toLowerCase();
    var filtered = erros.filter(function (e) { return (e.codigo.includes(search) || e.descricao.toLowerCase().includes(search)); });

    if (activeChannel === "sms") {
        var prioridades = ["10001", "10005"];
        var topFalhas = [];
        var demais = [];

        filtered.forEach(function (e) {
            if (prioridades.includes(e.codigo)) {
                topFalhas.push(e);
            } else {
                demais.push(e);
            }
        });

        filtered = topFalhas.concat(demais);
    }

    var count = filtered.length;
    var countFalha = 0;
    var countIndisponivel = 0;

    if (activeChannel === "sms") {
        countFalha = filtered.filter(function (e) { return e.categoria === "Falha"; }).length;
        countIndisponivel = filtered.filter(function (e) { return e.categoria !== "Falha"; }).length;
        count = countIndisponivel; // fallback para manter compatibilidade com uso existente
    } else if (activeChannel === "rcs") {
        countFalha = filtered.filter(function (e) { return e.categoria === "Falha"; }).length;
        countIndisponivel = filtered.filter(function (e) { return e.categoria !== "Falha"; }).length;
    }

    var errorCountEl = document.getElementById("errorCount");
    if (errorCountEl) {
        if (activeChannel === "sms") {
            errorCountEl.textContent = countIndisponivel;
            document.querySelector('.list-title').innerHTML = 'Indisponível (' + countIndisponivel + ') • Falhas (' + countFalha + ')';
        } else if (activeChannel === "rcs") {
            errorCountEl.textContent = countFalha;
            document.querySelector('.list-title').innerHTML = 'Falhas (' + countFalha + ')';
        } else {
            errorCountEl.textContent = count;
        }
    }

    var list = document.getElementById("errorList");
    if (!filtered.length) { list.innerHTML = '<div style="text-align:center;padding:4rem 0;color:var(--muted);font-size:.875rem">Nenhum erro encontrado</div>'; return }
    list.innerHTML = filtered.map(function (e) {
        var customFalha = "";
        if (activeChannel === "sms" && (e.codigo === "10001" || e.codigo === "10005")) {
            customFalha = '<span class="item-status">Falha</span>';
        }
        if (activeChannel === "rcs" && e.categoria === "Falha") {
            customFalha = '<span class="item-status">Falha</span>';
        }
        return '<li class="error-item ' + (e.codigo === selectedCodigo ? "selected" : "") + '" data-codigo="' + e.codigo + '"><div><div class="error-code">' + e.codigo + '</div><div class="error-desc">' + e.descricao + '</div></div>' + customFalha + '</li>';
    }).join("");
    list.querySelectorAll(".error-item").forEach(function (item) { item.addEventListener("click", function () { selectedCodigo = item.dataset.codigo; render(); renderDetails() }) });
}

function renderDetails() {
    var erro = erros.find(function (e) { return e.codigo === selectedCodigo }); if (!erro) return;
    var d = diagnostico(erro);
    if (erro.codigo === "10001") {
        d.acao = "Entrar em contato com o suporte para atualização do prefixo ou correção do número.";
    }
    var c = document.getElementById("errorDetails");
    var detailStatus = "";
    if (activeChannel === "sms" && (erro.codigo === "10001" || erro.codigo === "10005")) {
        detailStatus = '<span class="detail-status">Falha</span>';
    }
    if (activeChannel === "rcs" && erro.categoria === "Falha") {
        detailStatus = '<span class="detail-status">Falha</span>';
    }

    c.innerHTML = '<div class="detail-header"><div><div style="display:flex;align-items:center;gap:.5rem;margin-bottom:.25rem"><span class="detail-title">Erro ' + erro.codigo + '</span>' + detailStatus + '</div><div class="detail-desc">' + erro.descricao + '</div></div></div><hr class="divider"><div class="info-field"><span class="info-icon">📄</span><div><div class="info-label">Causa</div><div class="info-value">' + erro.causa + '</div></div></div><div class="info-field"><span class="info-icon">🔧</span><div><div class="info-label">Solução</div><div class="info-value">' + erro.solucao + '</div></div></div><div class="info-field"><span class="info-icon">⚡</span><div><div class="info-label">Ação recomendada</div><div class="info-value">' + d.acao + '</div></div></div>';

}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("searchInput").addEventListener("input", render);

    document.getElementById("whatsappBtn").addEventListener("click", function () { switchChannel("whatsapp"); });
    document.getElementById("smsBtn").addEventListener("click", function () { switchChannel("sms"); });
    document.getElementById("rcsBtn").addEventListener("click", function () { switchChannel("rcs"); });

    switchChannel("whatsapp");
});