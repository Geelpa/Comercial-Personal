function atualizarTela() {

    let { key } = estadoAtual;

    let plano = planos[key];

    let i = ordem.indexOf(key);

    let downKey = i > 0 ? ordem[i - 1] : null;
    let upKey = i < ordem.length - 1 ? ordem[i + 1] : null;

    document.getElementById("principal").innerText =
        plano.nome;

    document.getElementById("down").innerText =
        downKey ? planos[downKey].nome : "";

    document.getElementById("up").innerText =
        upKey ? planos[upKey].nome : "";

    estadoAtual.downKey = downKey;
    estadoAtual.upKey = upKey;

    document.getElementById("texto").innerText =
        gerarTexto();

    document
        .getElementById("resultadoBox")
        .classList.remove("hidden");
}