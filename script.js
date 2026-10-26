const perguntas = [
    {
        pergunta: "1. Qual é o momento correto de colocar a camisinha?",
        opcoes: [
            { texto: "Antes de qualquer contato sexual", correta: true, feedback: "Correto! Evita DSTs e gravidez desde o início." },
            { texto: "Apenas no momento da ejaculação", correta: false, feedback: "Incorreto! O fluido pré-ejaculatório também pode transmitir infecções." }
        ]
    },
    {
        pergunta: "2. Como deve ser feita a abertura da embalagem?",
        opcoes: [
            { texto: "Com os dentes ou tesoura para ser mais rápido", correta: false, feedback: "Incorreto! Objetos afiados podem rasgar o látex." },
            { texto: "Com as mãos, no local indicado do picotado", correta: true, feedback: "Correto! Garante a integridade do preservativo." }
        ]
    },
    {
        pergunta: "3. O que deve ser feito na ponta da camisinha ao colocá-la?",
        opcoes: [
            { texto: "Apertar o reservatório tirando todo o ar", correta: true, feedback: "Correto! Evita que o reservatório estoure." },
            { texto: "Deixar ar acumulado para ter mais espaço", correta: false, feedback: "Incorreto! O ar acumulado aumenta o risco de rompimento." }
        ]
    },
    {
        pergunta: "4. Qual é a data de validade ideal para uso?",
        opcoes: [
            { texto: "Sempre dentro do prazo estipulado na embalagem", correta: true, feedback: "Correto! Preservativos vencidos perdem a resistência." },
            { texto: "Pode usar se estiver vencida há poucos meses", correta: false, feedback: "Incorreto! O material pode estar fragilizado." }
        ]
    },
    {
        pergunta: "5. É seguro usar dois preservativos ao mesmo tempo?",
        opcoes: [
            { texto: "Sim, aumenta a proteção", correta: false, feedback: "Incorreto! O atrito entre os dois pode rasgá-los." },
            { texto: "Não, deve-se usar apenas um por vez", correta: true, feedback: "Correto! Usar um único preservativo é o procedimento seguro." }
        ]
    },
    {
        pergunta: "6. Qual lubrificante é recomendado com camisinha de látex?",
        opcoes: [
            { texto: "À base de água ou silicone", correta: true, feedback: "Correto! Não danificam o material de látex." },
            { texto: "Óleos corporais, vaselina ou manteiga", correta: false, feedback: "Incorreto! Derivados de óleo danificam o látex rapidamente." }
        ]
    },
    {
        pergunta: "7. Como verificar se a camisinha está do lado certo antes de desenrolar?",
        opcoes: [
            { texto: "A borda deve estar virada para fora, como um chapéu", correta: true, feedback: "Correto! Facilita o desenrolar suavemente." },
            { texto: "Se não desenrolar, force até descer", correta: false, feedback: "Incorreto! Se estiver ao contrário, deve ser descartada e substituída." }
        ]
    },
    {
        pergunta: "8. O que fazer se a camisinha for colocada ao contrário por engano?",
        opcoes: [
            { texto: "Descarte-a e use uma nova", correta: true, feedback: "Correto! Pode ter havido contato com fluidos pré-ejaculatórios." },
            { texto: "Vire do outro lado e continue usando", correta: false, feedback: "Incorreto! Pode haver transferência de fluidos." }
        ]
    },
    {
        pergunta: "9. Onde a camisinha deve ser guardada?",
        opcoes: [
            { texto: "Em local fresco, seco e longe do calor direto", correta: true, feedback: "Correto! O calor excessivo deteriora o látex." },
            { texto: "Na carteira ou porta-luvas do carro", correta: false, feedback: "Incorreto! O calor e a fricção danificam o produto." }
        ]
    },
    {
        pergunta: "10. Qual o procedimento correto ao retirar o preservativo após o ato?",
        opcoes: [
            { texto: "Segurar pela base antes de perder a ereção", correta: true, feedback: "Correto! Evita vazamentos e desprendimento." },
            { texto: "Espere o corpo esfriar totalmente para retirar", correta: false, feedback: "Incorreto! O preservativo pode escapar internamente." }
        ]
    },
    {
        pergunta: "11. Como deve ser feito o descarte da camisinha usada?",
        opcoes: [
            { texto: "Dar um nó e jogar no lixo comum", correta: true, feedback: "Correto! Mantém a higiene e evita vazamentos." },
            { texto: "Jogar no vaso sanitário", correta: false, feedback: "Incorreto! Pode causar entupimentos no esgoto." }
        ]
    },
    {
        pergunta: "12. Preservativos protegem contra Infecções Sexualmente Transmissíveis (ISTs)?",
        opcoes: [
            { texto: "Sim, são o método mais eficaz contra ISTs", correta: true, feedback: "Correto! Protege contra HIV, sífilis, hepatites, entre outras." },
            { texto: "Não, protegem apenas contra gravidez", correta: false, feedback: "Incorreto! É o principal método de prevenção combinado." }
        ]
    },
    {
        pergunta: "13. O que fazer se a camisinha rasgar durante o uso?",
        opcoes: [
            { texto: "Interromper, higienizar e substituir por uma nova", correta: true, feedback: "Correto! Além disso, busque orientação de saúde preventiva." },
            { texto: "Continuar se já estiver no final", correta: false, feedback: "Incorreto! Interrompa imediatamente para conter riscos." }
        ]
    },
    {
        pergunta: "14. Existe tamanho único para preservativos masculinos?",
        opcoes: [
            { texto: "Não, existem diferentes larguras para melhor ajuste", correta: true, feedback: "Correto! O tamanho adequado evita que aperte ou escape." },
            { texto: "Sim, todas têm exatamente as mesmas dimensões", correta: false, feedback: "Incorreto! Há variações de tamanho no mercado." }
        ]
    },
    {
        pergunta: "15. A camisinha feminina (interna) pode ser usada junto com a masculina (externa)?",
        opcoes: [
            { texto: "Não, use apenas uma das duas opções", correta: true, feedback: "Correto! O atrito entre ambas pode causar o rompimento." },
            { texto: "Sim, para dupla camada de proteção", correta: false, feedback: "Incorreto! Nunca combine dois preservativos simultaneamente." }
        ]
    },
    {
        pergunta: "16. Como saber se a embalagem da camisinha está selada corretamente?",
        opcoes: [
            { texto: "Verificar se há uma 'bolha de ar' ao pressionar a embalagem", correta: true, feedback: "Correto! Indica que a embalagem está hermeticamente fechada." },
            { texto: "Se a embalagem estiver amassada ou aberta, está normal", correta: false, feedback: "Incorreto! Embalagens furadas ressecam o preservativo." }
        ]
    },
    {
        pergunta: "17. A camisinha pode ser reutilizada se lavada com água e sabão?",
        opcoes: [
            { texto: "Nunca! É um produto estritamente descartável e descartável único", correta: true, feedback: "Correto! O uso único é indispensável para a segurança." },
            { texto: "Sim, desde que seja bem higienizada", correta: false, feedback: "Incorreto! Reutilizar destrói a eficácia do látex." }
        ]
    },
    {
        pergunta: "18. Para pessoas com alergia ao látex, qual é a opção recomendada?",
        opcoes: [
            { texto: "Preservativos de poliuretano ou poli-isopreno", correta: true, feedback: "Correto! Materiais hipoalergênicos seguros." },
            { texto: "Não utilizar nenhum tipo de preservativo", correta: false, feedback: "Incorreto! Existem opções sem látex disponíveis." }
        ]
    },
    {
        pergunta: "19. É necessário usar preservativo em sexo oral?",
        opcoes: [
            { texto: "Sim, previne a transmissão de ISTs bucais e genitais", correta: true, feedback: "Correto! Infecções também são transmitidas via sexo oral." },
            { texto: "Não, não há risco de contaminação", correta: false, feedback: "Incorreto! Há riscos de transmissão de diversas ISTs." }
        ]
    },
    {
        pergunta: "20. O uso do anticoncepcional oral dispensa o uso da camisinha?",
        opcoes: [
            { texto: "Não! A pílula previne gravidez, mas não protege contra ISTs", correta: true, feedback: "Correto! A camisinha oferece dupla proteção." },
            { texto: "Sim, pois a proteção contraceptiva é garantida", correta: false, feedback: "Incorreto! A pílula não oferece nenhuma barreira contra infecções." }
        ]
    },
    {
        pergunta: "21. Quando a camisinha deve ser desenrolada?",
        opcoes: [
            { texto: "Diretamente sobre o corpo ereto", correta: true, feedback: "Correto! Desenrolar no ar facilita dobraduras indesejadas." },
            { texto: "Desenrolar totalmente nas mãos antes de colocar", correta: false, feedback: "Incorreto! Dificulta o encaixe e pode rasgar." }
        ]
    },
    {
        pergunta: "22. Preservativos distribuídos no sistema público de saúde são confiáveis?",
        opcoes: [
            { texto: "Sim, passam pelos mesmos testes rigorosos de qualidade", correta: true, feedback: "Correto! São certificados pelos órgãos de vigilância sanitária." },
            { texto: "Não, apenas os comprados em farmácia funcionam", correta: false, feedback: "Incorreto! Ambos possuem os mesmos padrões de segurança." }
        ]
    },
    {
        pergunta: "23. O que significa 'dupla proteção' na saúde sexual?",
        opcoes: [
            { texto: "Prevenção simultânea de gravidez não planejada e ISTs", correta: true, feedback: "Correto! Promove saúde sexual completa e consciente." },
            { texto: "Usar duas camisinhas ao mesmo tempo", correta: false, feedback: "Incorreto! Refere-se à prevenção de gravidez e ISTs combinadas." }
        ]
    }
];

let indiceAtual = 0;

function carregarPergunta() {
    if (indiceAtual >= perguntas.length) {
        finalizarQuiz();
        return;
    }

    const q = perguntas[indiceAtual];
    document.getElementById("step-badge").innerText = `Pergunta ${indiceAtual + 1} de ${perguntas.length}`;
    document.getElementById("question-text").innerText = q.pergunta;

    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";

    q.opcoes.forEach(opcao => {
        const btn = document.createElement("button");
        btn.className = "btn-option";
        btn.innerText = opcao.texto;
        btn.onclick = () => responder(opcao);
        optionsContainer.appendChild(btn);
    });
}

function responder(opcao) {
    adicionarAoFluxograma(opcao);
    indiceAtual++;
    carregarPergunta();
}

function adicionarAoFluxograma(opcao) {
    const flowchart = document.getElementById("flowchart");

    const arrow = document.createElement("div");
    arrow.className = "arrow";
    arrow.innerText = "↓";
    flowchart.appendChild(arrow);

    const node = document.createElement("div");
    node.className = `node ${opcao.correta ? 'correct' : 'incorrect'}`;
    node.innerText = `${opcao.feedback}`;
    flowchart.appendChild(node);
}

function finalizarQuiz() {
    document.getElementById("quiz-screen").classList.add("hidden");
    document.getElementById("reset-btn").classList.remove("hidden");
    
    const flowchart = document.getElementById("flowchart");
    const arrow = document.createElement("div");
    arrow.className = "arrow";
    arrow.innerText = "↓";
    flowchart.appendChild(arrow);

    const endNode = document.createElement("div");
    endNode.className = "node start";
    endNode.innerText = "Concluído! Lembre-se: Use sempre preservativo.";
    flowchart.appendChild(endNode);
}

function reiniciar() {
    indiceAtual = 0;
    document.getElementById("quiz-screen").classList.remove("hidden");
    document.getElementById("reset-btn").classList.add("hidden");
    
    document.getElementById("flowchart").innerHTML = '<div class="node start">Início</div>';
    
    carregarPergunta();
}

carregarPergunta();