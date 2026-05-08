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
    let texto = document
        .getElementById("texto")
        .innerText;
    navigator.clipboard.writeText(texto);
}
