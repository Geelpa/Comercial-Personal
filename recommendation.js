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

    // 🎮 gamer
    if (usosSel.includes("gamer_competitivo")) {
        score += 2;
    }

    // 💼 home office
    if (usosSel.includes("home_office") && pessoas != "1") {
        score += 2;
    }

    // 🔥 exigente
    if (perfil === "exigente") {
        score += 2;
    }

    let plano;

    if (score <= 9) {
        plano = "start";
    }
    else if (score <= 13) {
        plano = "plus";
    }
    else if (score <= 18) {
        plano = "power";
    }
    else {
        plano = "premium";
    }

    // 🎬 STREAMING = mínimo PLUS
    if (usosSel.includes("streaming_alto")) {
        if (plano === "start") {
            plano = "plus";
        }
    }

    return plano;
}
