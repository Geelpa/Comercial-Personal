let estadoAtual = {};

function escolherPlano(pessoas, usosSel, perfil) {

    let score = 0;

    usosSel.forEach(u => score += usos[u]?.p || 0);
    if (perfil) score += perfis[perfil]?.p || 0;

    if (pessoas == "3") score += 2;
    if (pessoas == "5") score += 4;

    // 🔥 refinamento (menos rígido)
    if (usosSel.includes("gamer_competitivo") && pessoas != "1") score += 2;
    if (usosSel.includes("home_office") && usosSel.includes("casa_conectada")) score += 2;

    if (score <= 3) return "essential";
    if (score <= 6) return "start";
    if (score <= 9) return "plus";
    if (score <= 12) return "power";
    return "premium";
}

function gerar() {
    let usosSel = [...document.querySelectorAll('input:checked')].map(x => x.value);
    let pessoas = document.getElementById("pessoas").value;
    let perfil = document.getElementById("perfil").value;
    let dor = document.getElementById("dor").value;

    let key = escolherPlano(pessoas, usosSel, perfil);

    estadoAtual = { key, usosSel, pessoas, perfil, dor };

    atualizarTela();
}

function atualizarTela() {

    let { key } = estadoAtual;
    let plano = planos[key];

    let i = ordem.indexOf(key);

    let downKey = i > 0 ? ordem[i - 1] : null;
    let upKey = i < ordem.length - 1 ? ordem[i + 1] : null;

    document.getElementById("principal").innerText = plano.nome;
    document.getElementById("down").innerText = downKey ? planos[downKey].nome : "";
    document.getElementById("up").innerText = upKey ? planos[upKey].nome : "";

    estadoAtual.downKey = downKey;
    estadoAtual.upKey = upKey;

    gerarTexto();
}

function trocarPlano(tipo) {
    if (tipo === "down" && estadoAtual.downKey) {
        estadoAtual.key = estadoAtual.downKey;
    }
    if (tipo === "up" && estadoAtual.upKey) {
        estadoAtual.key = estadoAtual.upKey;
    }

    atualizarTela();
}

// 🔥 ARGUMENTAÇÃO NÍVEL VENDEDOR
function gerarTexto() {

    let { key, usosSel, pessoas, perfil, dor } = estadoAtual;
    let plano = planos[key];

    let argumentos = [];
    let prioridade = "";

    // 🎯 DETECTAR O PRINCIPAL MOTIVO
    if (usosSel.includes("gamer_competitivo")) {
        prioridade = "desempenho nos jogos";
        argumentos.push("jogos com resposta rápida e sem lag");
    }

    if (usosSel.includes("home_office")) {
        prioridade = prioridade || "trabalho sem travar";
        argumentos.push("reuniões estáveis e envio rápido de arquivos");
    }

    if (usosSel.includes("streaming_alto")) {
        prioridade = prioridade || "streaming sem travar";
        argumentos.push("filmes e séries em alta qualidade sem interrupções");
    }

    if (usosSel.includes("casa_conectada")) {
        argumentos.push("vários dispositivos funcionando ao mesmo tempo sem perda de desempenho");
    }

    if (usosSel.includes("downloads_pesados")) {
        argumentos.push("downloads e uploads muito mais rápidos");
    }

    // 👥 contexto real
    if (pessoas != "1") {
        argumentos.push("mantendo estabilidade mesmo com várias pessoas usando");
    }

    // ⚠️ dor → impacto forte
    if (dor) {
        argumentos.push("resolvendo " + dores[dor]);
    }

    // 🔥 VARIAÇÃO INTELIGENTE
    let inicio;

    if (prioridade) {
        inicio = `Faz sentido ir de *${plano.nome}*, principalmente pelo ${prioridade} 👇`;
    } else {
        inicio = `O *${plano.nome}* faz mais sentido no seu cenário 👇`;
    }

    let argumentosFinal = argumentos.slice(0, 3).join(", ");

    let fechamento = "";

    if (perfil === "economico") {
        fechamento = "sem pesar no bolso.";
    } else if (perfil === "exigente") {
        fechamento = "com desempenho de sobra.";
    } else {
        fechamento = "sem se preocupar com a internet.";
    }

    let texto = `${inicio}

👉 Você ganha ${argumentosFinal}

💰 ${plano.preco}/mês — ${fechamento}`;

    document.getElementById("texto").innerText = texto;
    document.getElementById("resultadoBox").classList.remove("hidden");
}

function copiar() {
    navigator.clipboard.writeText(document.getElementById("texto").innerText);
    alert("Copiado!");
}