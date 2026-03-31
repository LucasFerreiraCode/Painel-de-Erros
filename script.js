/* =========================
   ELEMENTOS
========================= */
const busca = document.getElementById("busca");
const lista = document.getElementById("listaErros");
const detalhes = document.getElementById("detalhes");
const filtroCategoria = document.getElementById("filtroCategoria");

/* =========================
   TEMA (DARK / LIGHT)
========================= */
function toggleTheme() {
    const body = document.body;

    if (body.classList.contains("dark")) {
        body.classList.remove("dark");
        body.classList.add("light");
        localStorage.setItem("tema", "light");
    } else {
        body.classList.remove("light");
        body.classList.add("dark");
        localStorage.setItem("tema", "dark");
    }
}

(function () {
    const tema = localStorage.getItem("tema") || "dark";
    document.body.classList.add(tema);
})();

/* =========================
   BASE DE ERROS
========================= */
const erros = {
    "131026 - Message Undeliverable": {
        categoria: "Entrega",
        descricao: "Mensagem não pode ser entregue.",
        causa: "Número não está no WhatsApp ou inválido.",
        solucao: "Validar número e confirmar se está ativo.",
        resposta:
            "O número informado não está disponível no WhatsApp ou está inválido."
    },

    "131049 - Meta bloqueou envio": {
        categoria: "Entrega",
        descricao: "Bloqueio por qualidade de envio.",
        causa: "Mensagens consideradas indesejadas.",
        solucao: "Revisar conteúdo e reduzir frequência.",
        resposta:
            "Identificamos baixa qualidade de engajamento. Recomendamos revisar o conteúdo e frequência."
    },

    "130472 - Número em experimento": {
        categoria: "Entrega",
        descricao: "Número em experimento da Meta.",
        causa: "Teste interno da plataforma.",
        solucao: "Aguardar liberação automática.",
        resposta:
            "O número informado está em um experimento da Meta e temporariamente indisponível."
    },

    "131048 - Erros de Bloqueio / Spam": {
        categoria: "Bloqueio",
        descricao: "Limite de envio atingido / spam.",
        causa: "Muitas mensagens ou denúncias.",
        solucao: "Reduzir envios e revisar estratégia.",
        resposta:
            "O número atingiu limites de envio. Recomendamos reduzir o volume."
    },

    "131042 - Problema de pagamento": {
        categoria: "Conta",
        descricao: "Problema de cobrança.",
        causa: "Falta de billing ativo.",
        solucao: "Configurar pagamento.",
        resposta:
            "Há um problema de faturamento na conta. Revise as configurações."
    },

    "132000 - Template inválido": {
        categoria: "Template",
        descricao: "Template inválido.",
        causa: "Parâmetros incorretos.",
        solucao: "Corrigir estrutura.",
        resposta:
            "O template enviado possui parâmetros inválidos."
    },

    "130429 - Limite de envio atingido": {
        categoria: "Limite",
        descricao: "Limite de requisições atingido.",
        causa: "Muitas chamadas em pouco tempo.",
        solucao: "Reduzir frequência.",
        resposta:
            "Foi identificado excesso de requisições. Reduza a frequência."
    }
};

/* =========================
   DIAGNÓSTICO INTELIGENTE
========================= */
function diagnosticoInteligente(erro) {
    if (!erro) return { nivel: "-", acao: "-" };

    let nivel = "Baixo";
    let acao = "Monitorar situação.";

    switch (erro.categoria) {
        case "Bloqueio":
            nivel = "Alto";
            acao = "Parar envios imediatamente.";
            break;

        case "Entrega":
            nivel = "Médio";
            acao = "Validar número e conteúdo.";
            break;

        case "Conta":
            nivel = "Alto";
            acao = "Verificar billing.";
            break;

        case "Limite":
            nivel = "Médio";
            acao = "Reduzir volume de envios.";
            break;

        case "Template":
            nivel = "Baixo";
            acao = "Corrigir parâmetros.";
            break;
    }

    return { nivel, acao };
}

/* =========================
   RENDER LISTA
========================= */
function renderizarLista() {
    lista.innerHTML = "";

    const fragment = document.createDocumentFragment();
    for (const codigo of Object.keys(erros)) {
        const erro = erros[codigo];
        const desc = (erro.descricao || '').toLowerCase();
        const txt = (busca.value || '').toLowerCase();

        const matchTexto =
            codigo.toLowerCase().includes(txt) ||
            desc.includes(txt);

        const matchCategoria =
            !filtroCategoria.value || erro.categoria === filtroCategoria.value;

        if (!matchTexto || !matchCategoria) continue;

        const li = document.createElement('li');
        const strong = document.createElement('strong');
        strong.textContent = codigo;
        const small = document.createElement('small');
        small.textContent = erro.categoria;

        li.appendChild(strong);
        li.appendChild(document.createElement('br'));
        li.appendChild(small);

        li.addEventListener('click', () => mostrarDetalhes(codigo));
        fragment.appendChild(li);
    }
    lista.appendChild(fragment);
}

/* =========================
   MOSTRAR DETALHES
========================= */
function mostrarDetalhes(codigo) {
    const erro = erros[codigo];
    if (!erro) return;

    const d = diagnosticoInteligente(erro);

    detalhes.innerHTML = `
    <h3>Erro ${codigo}</h3>

    <div class="info-box"><b>Categoria:</b> ${erro.categoria}</div>
    <div class="info-box"><b>Descrição:</b> ${erro.descricao}</div>
    <div class="info-box"><b>Causa:</b> ${erro.causa}</div>
    <div class="info-box"><b>Solução:</b> ${erro.solucao}</div>

    <hr>

    <div class="info-box"><b>Impacto:</b> ${d.nivel}</div>
    <div class="info-box"><b>Ação recomendada:</b> ${d.acao}</div>

    <hr>

    <div class="info-box" id="resposta"><b>Resposta:</b> ${erro.resposta}</div>
  
  `;
}



/* =========================
   FILTRO (BUSCA + CATEGORIA)
========================= */
function filtrarErros() {
    const texto = busca.value.toLowerCase();
    const categoriaSelecionada = filtroCategoria.value;

    lista.innerHTML = "";

    for (let codigo in erros) {
        const erro = erros[codigo];

        const matchTexto =
            codigo.includes(texto) ||
            erro.descricao.toLowerCase().includes(texto);

        const matchCategoria =
            !categoriaSelecionada || erro.categoria === categoriaSelecionada;

        if (matchTexto && matchCategoria) {
            const li = document.createElement("li");

            li.innerHTML = `
        <strong>${codigo}</strong><br>
        <small>${erro.categoria}</small>
      `;

            li.onclick = () => mostrarDetalhes(codigo);

            lista.appendChild(li);
        }
    }
}

/* =========================
   INIT
========================= */
renderizarLista();