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
        concorrencia: 2,
        sensibilidade: 4
    },

    gamer_competitivo: {
        intensidade: 3,
        concorrencia: 1,
        sensibilidade: 5
    },

    streaming_alto: {
        intensidade: 1,
        concorrencia: 1,
        sensibilidade: 1
    },

    redes_intenso: {
        intensidade: 2,
        concorrencia: 2,
        sensibilidade: 1
    },

    estudos_online: {
        intensidade: 2,
        concorrencia: 2,
        sensibilidade: 3
    },

    casa_conectada: {
        intensidade: 1,
        concorrencia: 2,
        sensibilidade: 1
    }

};
const perfis = {
    economico: { t: "economia", p: -1 },
    custo_beneficio: { t: "equilíbrio", p: 0 },
    exigente: { t: "máximo desempenho", p: 3 },
    familia: { t: "uso compartilhado", p: 2 }
};
