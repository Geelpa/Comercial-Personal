const planos = {
    start: { nome: "500Mb", preco: "R$ 109,90" },
    plus: { nome: "600Mb", preco: "R$ 129,90" },
    power: { nome: "800Mb", preco: "R$ 149,90" },
    premium: { nome: "1Gb", preco: "R$ 199,90" }
};
const ordem = ["start", "plus", "power", "premium"];
const usos = {
    home_office: {
        intensidade: 3,
        concorrencia: 3,
        sensibilidade: 3
    },
    gamer_competitivo: {
        intensidade: 3,
        concorrencia: 2,
        sensibilidade: 1
    },
    streaming_alto: {
        intensidade: 2,
        concorrencia: 2,
        sensibilidade: 1
    },
    redes_intenso: {
        intensidade: 0,
        concorrencia: 0,
        sensibilidade: 0
    },
    estudos_online: {
        intensidade: 3,
        concorrencia: 2,
        sensibilidade: 2
    },
    casa_conectada: {
        intensidade: 1,
        concorrencia: 1,
        sensibilidade: 1
    }
};

const argumentosPlano = {
    start: {
        titulo:
            "É uma opção muito equilibrada pra quem quer boa velocidade no dia a dia sem exagerar no investimento.",

        experiencia:
            "Consegue atender redes sociais, vídeos, chamadas e vários aparelhos conectados com bastante estabilidade.",
        destaque:
            `Acaba sendo um plano que entrega muito bem custo-benefício. 
            
            Este plano está saindo por apenas 💰 ${planos.start.preco}/mês.`
    },
    plus: {
        titulo:
            "Além da velocidade e estabilidade, esse plano já entrega uma experiência mais completa no dia a dia.",
        experiencia:
            "Ele atende muito bem quem gosta de assistir filmes e séries, trabalhar, estudar e utilizar vários aparelhos ao mesmo tempo.",
        destaque:
            `Outro diferencial é que ele já inclui acesso à WATCHBR, agregando ainda mais entretenimento na rotina. 
            
            Este plano está saindo por apenas 💰 ${planos.plus.preco}/mês.`
    },
    power: {
        titulo:
            "Aqui já estamos falando de um plano de alta performance, pensado pra uso intenso e muitos dispositivos conectados.",
        experiencia:
            "Mesmo com várias pessoas utilizando ao mesmo tempo, ele mantém uma experiência muito estável e fluida em toda a casa.",
        destaque:
            `Além da velocidade de sobra, ainda inclui WATCHBR + HBO MAX para uma experiência ainda mais completa. 
            
            Este plano está saindo por apenas 💰 ${planos.power.preco}/mês. `
    },
    premium: {
        titulo:
            "Esse é o plano mais completo da categoria, pensado justamente pra quem quer o máximo de desempenho e estabilidade.",
        experiencia:
            "Ele consegue atender qualquer rotina da casa com extrema folga, mesmo com muitos dispositivos e usos simultâneos.",
        destaque:
            `Além da velocidade máxima, ainda conta com Wi-Fi 6, roteador extra e acesso à HBO MAX + WATCHBR.

            Este plano está saindo por apenas 💰 ${planos.premium.preco}/mês.`
    }
};