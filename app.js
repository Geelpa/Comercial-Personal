let estadoAtual = {};

function gerar() {

    let usosSel = [...document.querySelectorAll('input[type="checkbox"]:checked')]
        .map(x => x.value);

    let pessoas = document.getElementById("pessoas").value;
    let perfil = document.getElementById("perfil").value;

    let key = escolherPlano(
        pessoas,
        usosSel,
        perfil
    );

    estadoAtual = {
        key,
        usosSel,
        pessoas,
        perfil
    };

    atualizarTela();
}
