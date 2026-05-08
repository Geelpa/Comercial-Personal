function gerarTexto() {

    let { key, usosSel, pessoas } = estadoAtual;

    let plano = planos[key];
    let personalidade = argumentosPlano[key];

    let argumentos = [];

    if (usosSel.includes("home_office")) {
        argumentos.push(
            "Você consegue participar de reuniões e acessar sistemas sem aquela sensação de lentidão nos momentos importantes."
        );
    }

    if (usosSel.includes("gamer_competitivo")) {
        argumentos.push(
            "Nos jogos online, estabilidade faz muita diferença, principalmente em partidas competitivas."
        );
    }

    if (usosSel.includes("streaming_alto")) {
        argumentos.push(
            "Além da estabilidade para assistir conteúdos, esse perfil combina bastante com os benefícios de entretenimento inclusos."
        );
    }

    if (usosSel.includes("casa_conectada")) {
        argumentos.push(
            "Hoje é comum vários aparelhos ficarem conectados ao mesmo tempo, e isso exige mais estabilidade da internet."
        );
    }

    if (pessoas != "1") {
        argumentos.push(
            "Como existe mais gente utilizando ao mesmo tempo, faz bastante diferença ter velocidade de sobra."
        );
    }

    argumentos = argumentos.slice(0, 3);

    let textoArgumentos = argumentos
        .map(a => `• ${a} `)
        .join("\n");
    return [
        `Inicio a minha recomendação com o plano de *${plano.nome}* 🚀 
        Segue mais detalhes:`,

        personalidade.titulo,

        personalidade.experiencia,

        textoArgumentos,

        personalidade.destaque

    ].join("\n\n");
}
