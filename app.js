function gerar() {
    let usos = Array.from(document.querySelectorAll('input[type=checkbox]:checked')).map(u => u.value);
    let pessoas = document.getElementById("pessoas").value;
    let perfil = document.getElementById("perfil").value;
    let dor = document.getElementById("dor").value;

    let planoKey = escolherPlano(pessoas, usos, perfil);
    let plano = planos[planoKey];

    let up = sugerirPlanoAcima(planoKey);
    let down = sugerirPlanoAbaixo(planoKey);

    let mensagem = montarMensagem(plano, usos, pessoas, perfil, dor);

    document.getElementById("planoPrincipal").innerText = plano.nome;

    document.getElementById("planoDown").innerText = down || "";
    document.getElementById("planoUp").innerText = up || "";

    document.getElementById("resultado").innerText = mensagem;
    document.getElementById("resultadoBox").classList.remove("hidden");
}

function montarMensagem(plano, usos, pessoas, perfil, dor) {

    let beneficios = usos.map(u => usosDetalhados[u]).filter(Boolean);

    if (pessoas !== "1") {
        beneficios.push("vários dispositivos funcionando ao mesmo tempo sem travar");
    }

    if (perfil && perfis[perfil]) {
        beneficios.push(perfis[perfil]);
    }

    if (dor && dores[dor]) {
        beneficios.push(dores[dor]);
    }

    let fraseBeneficio = beneficios.slice(0, 3).join(", ");

    return `O *${plano.nome}* faz sentido pra você porque garante ${fraseBeneficio}.

💰 ${plano.preco}/mês`;
}

function copiar() {
    let texto = document.getElementById("resultado").innerText;
    navigator.clipboard.writeText(texto);
    alert("Texto copiado!");
}