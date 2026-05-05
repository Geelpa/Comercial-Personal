const planos = {
    essential: {
        nome: "Plano Essential 300Mb",
        preco: "R$ 99,90"
    },
    start: {
        nome: "Plano Start 500Mb",
        preco: "R$ 109,90"
    },
    plus: {
        nome: "Plano Plus 600Mb",
        preco: "R$ 129,90"
    },
    power: {
        nome: "Plano Power 800Mb",
        preco: "R$ 149,90"
    },
    premium: {
        nome: "Plano Premium 1Gb",
        preco: "R$ 199,90"
    }
};

const ordemPlanos = ["essential", "start", "plus", "power", "premium"];

// 🔥 USOS MAIS DETALHADOS
const usosDetalhados = {
    trabalho: "reuniões sem travar e envio rápido de arquivos",
    gamer: "resposta rápida e estabilidade nos jogos",
    streaming: "filmes e séries em alta qualidade sem travar",
    redes: "navegação rápida em redes sociais",
    downloads: "downloads e uploads mais rápidos",
    estudos: "aulas online sem interrupções"
};

// 🔥 PERFIS
const perfis = {
    economico: "mantendo um bom custo-benefício",
    equilibrado: "equilibrando desempenho e investimento",
    exigente: "com foco em alta performance",
    familia: "atendendo bem todos da casa ao mesmo tempo"
};

// 🔥 PROBLEMAS MAIS COMPLETOS
const dores = {
    lento: "elimina a lentidão no dia a dia",
    trava: "evita travamentos mesmo com vários acessos",
    instavel: "traz mais estabilidade na conexão",
    wifi: "melhora o alcance do Wi-Fi na casa",
    queda: "reduz quedas de conexão",
    pico: "mantém desempenho mesmo em horários de pico"
};

function escolherPlano(pessoas, usos, perfil) {

    if (perfil === "economico") {
        return pessoas === "1" ? "essential" : "start";
    }

    if (perfil === "exigente" || usos.includes("gamer")) return "premium";

    if (pessoas === "5" || usos.includes("trabalho")) return "power";

    if (usos.includes("streaming") || usos.includes("downloads")) return "plus";

    return "start";
}

function sugerirPlanoAcima(planoKey) {
    let i = ordemPlanos.indexOf(planoKey);
    return i < ordemPlanos.length - 1 ? planos[ordemPlanos[i + 1]].nome : null;
}

function sugerirPlanoAbaixo(planoKey) {
    let i = ordemPlanos.indexOf(planoKey);
    return i > 0 ? planos[ordemPlanos[i - 1]].nome : null;
}