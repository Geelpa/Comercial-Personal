const planos = {
    essential: { nome: "300Mb", preco: "R$ 99,90" },
    start: { nome: "500Mb", preco: "R$ 109,90" },
    plus: { nome: "600Mb", preco: "R$ 129,90" },
    power: { nome: "800Mb", preco: "R$ 149,90" },
    premium: { nome: "1Gb", preco: "R$ 199,90" }
};

const ordem = ["essential", "start", "plus", "power", "premium"];

const usos = {
    home_office: { t: "reuniões e trabalho online", p: 3 },
    gamer_competitivo: { t: "jogos online com resposta rápida", p: 4 },
    streaming_alto: { t: "filmes em alta qualidade", p: 3 },
    redes_intenso: { t: "uso intenso de redes sociais", p: 2 },
    downloads_pesados: { t: "downloads frequentes", p: 3 },
    estudos_online: { t: "aulas online", p: 2 },
    casa_conectada: { t: "vários dispositivos conectados", p: 3 }
};

const perfis = {
    economico: { t: "economia", p: -2 },
    custo_beneficio: { t: "equilíbrio", p: 0 },
    exigente: { t: "máximo desempenho", p: 3 },
    familia: { t: "uso compartilhado", p: 2 }
};

const dores = {
    lento: "lentidão",
    trava_streaming: "travamentos em vídeos",
    trava_jogo: "lag nos jogos",
    wifi_fraco: "Wi-Fi fraco",
    queda_constante: "quedas de conexão",
    horario_pico: "queda à noite",
    muitos_usuarios: "problemas com várias pessoas"
};