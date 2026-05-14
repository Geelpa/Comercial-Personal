let estadoAtual = {};

function gerar() {

    let usosSel = [...document.querySelectorAll('input[type="checkbox"]:checked')]
        .map(x => x.value);

    let pessoas = document.getElementById("pessoas").value;

    let key = escolherPlano(
        pessoas,
        usosSel,
    );

    estadoAtual = {
        key,
        usosSel,
        pessoas,
    };

    atualizarTela();
}

function copiar() {
    let intro =
        document.getElementById("textoIntro").innerText.trim();

    let argumentos =
        document.getElementById("textoArgumentos").innerText.trim();

    let fechamento =
        document.getElementById("textoFechamento").innerText.trim();

    // remove blocos vazios
    let textoFinal = [
        intro,
        argumentos,
        fechamento
    ]
        .filter(t => t)
        .join("\n\n");

    navigator.clipboard.writeText(textoFinal);
}


