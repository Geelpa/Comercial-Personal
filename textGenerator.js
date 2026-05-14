function gerarTexto() {

    let { key, usosSel, pessoas } = estadoAtual;

    let plano = planos[key];
    let personalidade = argumentosPlano[key];

    let argumentos = [];

    if (usosSel.includes("home_office")) {
        argumentos.push(
            "- Você consegue participar de reuniões e acessar sistemas sem lentidão nos momentos importantes."
        );
    }

    if (usosSel.includes("gamer_competitivo")) {
        argumentos.push(
            "- Jogos online ficam muito mais estáveis, principalmente em partidas competitivas."
        );
    }

    if (usosSel.includes("streaming_alto")) {
        argumentos.push(
            "- O plano já acompanha benefícios de entretenimento inclusos para aproveitar filmes e séries com mais estabilidade."
        );
    }

    if (usosSel.includes("casa_conectada")) {
        argumentos.push(
            "- Muitos aparelhos conectados exigem mais estabilidade da internet no dia a dia."
        );
    }

    if (pessoas != "1") {
        argumentos.push(
            "- Com mais pessoas utilizando ao mesmo tempo, velocidade de sobra faz bastante diferença."
        );
    }

    argumentos = argumentos.slice(0, 3);

    return {

        intro: [
            `Minha recomendação é o plano de *${plano.nome}* 🚀`,
            personalidade.titulo,
            personalidade.experiencia
        ].join("\n\n"),

        argumentos: argumentos.join("\n\n"),

        fechamento: [
            personalidade.destaque
        ].join("\n\n")

    };
}

