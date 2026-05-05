let estadoAtual = {};

function escolherPlano(pessoas, usosSel, perfil) {
    let score = 0;

    usosSel.forEach(u => score += usos[u]?.p || 0);
    if (perfil) score += perfis[perfil]?.p || 0;
    if (pessoas == "3") score += 2;
    if (pessoas == "5") score += 4;

    if (score <= 2) return "essential";
    if (score <= 5) return "start";
    if (score <= 8) return "plus";
    if (score <= 11) return "power";
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

// 🔥 NOVA FUNÇÃO COM ARGUMENTAÇÃO REAL
function gerarTexto() {

    let { key, usosSel, pessoas, dor } = estadoAtual;
    let plano = planos[key];

    let argumentos = [];

    // 🎯 USOS → benefício real
    usosSel.forEach(u => {

        if (u === "home_office") {
            argumentos.push("reuniões sem travar e envio rápido de arquivos");
        }

        if (u === "gamer_competitivo") {
            argumentos.push("resposta rápida nos jogos, sem lag");
        }

        if (u === "streaming_alto") {
            argumentos.push("filmes e séries em alta qualidade sem travamentos");
        }

        if (u === "downloads_pesados") {
            argumentos.push("downloads muito mais rápidos");
        }

        if (u === "casa_conectada") {
            argumentos.push("vários dispositivos funcionando ao mesmo tempo sem perder desempenho");
        }

        if (u === "redes_intenso") {
            argumentos.push("navegação fluida mesmo com vídeos e redes abertas");
        }

        if (u === "estudos_online") {
            argumentos.push("aulas online estáveis sem quedas");
        }

    });

    // 👥 pessoas → impacto real
    if (pessoas != "1") {
        argumentos.push("mantendo estabilidade mesmo com várias pessoas usando ao mesmo tempo");
    }

    // ⚠️ dor → fechamento de valor
    if (dor) {
        argumentos.push("resolvendo " + dores[dor]);
    }

    // 🔥 pega os 2 ou 3 melhores argumentos
    let argumentosFinal = argumentos.slice(0, 3).join(", ");

    let texto = `Faz sentido ir de *${plano.nome}* no seu caso 👇

👉 Porque ele garante ${argumentosFinal}

💰 ${plano.preco}/mês`;

    document.getElementById("texto").innerText = texto;
    document.getElementById("resultadoBox").classList.remove("hidden");
}

function copiar() {
    navigator.clipboard.writeText(document.getElementById("texto").innerText);
    alert("Copiado!");
}