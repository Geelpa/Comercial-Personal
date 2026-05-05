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

function gerarTexto() {

    let { key, usosSel, pessoas, dor } = estadoAtual;

    let plano = planos[key];

    let usosTexto = usosSel.map(u => usos[u]?.t).filter(Boolean);
    let principalUso = usosTexto[0] || "uso comum";

    let dorTexto = dor ? dores[dor] : "";

    let texto = `Faz sentido ir de *${plano.nome}* no seu caso 👇

👉 Principalmente porque você usa pra ${principalUso}${pessoas != "1" ? " e tem mais pessoas conectadas" : ""}

👉 Isso te garante mais estabilidade e desempenho${dorTexto ? " e resolve " + dorTexto : ""}

💰 ${plano.preco}/mês`;

    document.getElementById("texto").innerText = texto;
    document.getElementById("resultadoBox").classList.remove("hidden");
}

function copiar() {
    navigator.clipboard.writeText(document.getElementById("texto").innerText);
    alert("Copiado!");
}