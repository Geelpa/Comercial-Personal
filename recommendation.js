function escolherPlano(pessoas, usosSel) {
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
    if (pessoas == "1") concorrencia += 1;
    if (pessoas == "3") concorrencia += 4;
    if (pessoas == "5") concorrencia += 8;

    let score =
        intensidade * 1.1 +
        concorrencia * 1.2 +
        sensibilidade * 1.3;

    console.log("SCORE FINAL:", score);
    console.log("---------------");

    let plano;

    if (score <= 8) {
        plano = "start";
    }
    else if (score <= 12) {
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

    // Não recomendar 1GB para 1-2 pessoas
    if (pessoas == 1) {
        if (plano === "premium") {
            plano = "power";
        }
    }

    // 🎮 gamer
    if (usosSel.includes("gamer_competitivo")) {
        score += 3;
    }

    // 💼 home office
    if (usosSel.includes("home_office") && pessoas != "1") {
        score += 2;
    }

    return plano;
}
