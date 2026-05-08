let estadoAtual = {};

//////////////////////////////////////////////////////
// 🧠 ESCOLHA DE PLANO
//////////////////////////////////////////////////////

function escolherPlano(pessoas, usosSel, perfil) {

    let intensidade = 0;
    let concorrencia = 0;
    let sensibilidade = 0;

    usosSel.forEach(u => {
        let uso = usos[u];
        if (!uso) return;

        intensidade += uso.intensidade;
        concorrencia += uso.concorrencia;
        sensibilidade += uso.sensibilidade;
    });

    // 👥 pessoas
    if (pessoas == "3") concorrencia += 2;
    if (pessoas == "5") concorrencia += 3;

    let score =
        intensidade * 1.3 +
        concorrencia * 1.1 +
        sensibilidade * 1.5;

    // ajustes
    if (usosSel.includes("gamer_competitivo")) {
        score += 2;
    }

    if (usosSel.includes("home_office") && pessoas != "1") {
        score += 2;
    }

    if (perfil === "exigente") {
        score += 2;
    }

    // 🔥 NOVA BASE = 500Mb
    if (score <= 9) return "start";
    if (score <= 13) return "plus";
    if (score <= 18) return "power";

    return "premium";
}

//////////////////////////////////////////////////////
// 🚀 GERAÇÃO
//////////////////////////////////////////////////////

function gerar() {

    let usosSel = [...document.querySelectorAll('input[type="checkbox"]:checked')]
        .map(x => x.value);

    let pessoas = document.getElementById("pessoas").value;
    let perfil = document.getElementById("perfil").value;

    // se não existir dor no html
    let dorEl = document.getElementById("dor");
    let dor = dorEl ? dorEl.value : "";

    let key = escolherPlano(pessoas, usosSel, perfil);

    estadoAtual = {
        key,
        usosSel,
        pessoas,
        perfil,
        dor
    };

    atualizarTela();
}

//////////////////////////////////////////////////////
// 🖥️ TELA
//////////////////////////////////////////////////////

function atualizarTela() {

    let { key } = estadoAtual;

    let plano = planos[key];
    if (!plano) return;

    let i = ordem.indexOf(key);

    let downKey = i > 0 ? ordem[i - 1] : null;
    let upKey = i < ordem.length - 1 ? ordem[i + 1] : null;

    document.getElementById("principal").innerText = plano.nome;

    document.getElementById("down").innerText =
        downKey ? planos[downKey].nome : "";

    document.getElementById("up").innerText =
        upKey ? planos[upKey].nome : "";

    estadoAtual.downKey = downKey;
    estadoAtual.upKey = upKey;

    gerarTexto();
}

//////////////////////////////////////////////////////
// 🔄 TROCA MANUAL DE PLANO
//////////////////////////////////////////////////////

function trocarPlano(tipo) {

    if (tipo === "down" && estadoAtual.downKey) {
        estadoAtual.key = estadoAtual.downKey;
    }

    if (tipo === "up" && estadoAtual.upKey) {
        estadoAtual.key = estadoAtual.upKey;
    }

    atualizarTela();
}

//////////////////////////////////////////////////////
// 🧾 TEXTO
//////////////////////////////////////////////////////

function gerarTexto() {

    let { key, usosSel, pessoas, perfil, dor } = estadoAtual;

    let plano = planos[key];

    let argumentos = [];

    if (usosSel.includes("home_office")) {
        argumentos.push(
            "Você consegue participar de reuniões, acessar sistemas e enviar arquivos sem aquela sensação de internet presa nos momentos importantes."
        );
    }

    if (usosSel.includes("gamer_competitivo")) {
        argumentos.push(
            "Nos jogos online, a estabilidade faz bastante diferença, principalmente em partidas competitivas."
        );
    }

    if (usosSel.includes("streaming_alto")) {
        argumentos.push(
            "Dá pra assistir filmes e séries com tranquilidade, mesmo com outras pessoas usando ao mesmo tempo."
        );
    }

    if (usosSel.includes("redes_intenso")) {
        argumentos.push(
            "O uso diário fica muito mais fluido em vídeos, redes sociais e navegação constante."
        );
    }

    if (usosSel.includes("estudos_online")) {
        argumentos.push(
            "Aulas online e chamadas ficam mais estáveis, evitando travamentos em momentos importantes."
        );
    }

    if (usosSel.includes("casa_conectada")) {
        argumentos.push(
            "Hoje é comum vários aparelhos ficarem conectados ao mesmo tempo, e isso exige mais estabilidade da internet."
        );
    }

    if (pessoas != "1") {
        argumentos.push(
            "Como existe mais gente utilizando ao mesmo tempo, ter estabilidade acaba fazendo bastante diferença no dia a dia."
        );
    }

    if (dor && dores[dor]) {
        argumentos.push(
            `Além disso, esse plano ajuda bastante em situações como ${dores[dor]}.`
        );
    }

    argumentos = argumentos.slice(0, 3);

    let textoArgumentos = argumentos
        .map(a => `• ${a}`)
        .join("\n\n");

    let texto = `Inicio a minha recomendação com o plano de *${plano.nome}* 🚀

Pelo perfil de uso que você comentou, acredito que ele seja o ponto mais equilibrado entre desempenho, estabilidade e experiência no dia a dia.

${textoArgumentos}

💰 ${plano.preco}/mês`;

    document.getElementById("texto").innerText = texto;

    document
        .getElementById("resultadoBox")
        .classList.remove("hidden");
}

//////////////////////////////////////////////////////
// 📋 COPIAR
//////////////////////////////////////////////////////

function copiar() {

    navigator.clipboard.writeText(
        document.getElementById("texto").innerText
    );

    alert("Copiado!");
}

//////////////////////////////////////////////////////
// 🚀 EVENTOS AUTOMÁTICOS
//////////////////////////////////////////////////////

window.onload = () => {

    // selects
    document.querySelectorAll("select").forEach(select => {
        select.addEventListener("change", gerar);
    });

    // checkboxes
    document.querySelectorAll('input[type="checkbox"]').forEach(input => {
        input.addEventListener("change", gerar);
    });

    // inicia automático
    gerar();
};

