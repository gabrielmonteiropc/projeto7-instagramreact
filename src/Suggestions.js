function ArraySugestao(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.image} alt="bad.vibes.memes.svg" />
                <div class="texto">
                    <div class="nome">{props.name}</div>
                    <div class="razao">{props.segueVoce}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}

export default function Suggestions() {

    const sugestoes = [
        { name: "bad.vibes.memes", image: "assets/img/bad.vibes.memes.svg", segueVoce: "Segue você" },
        { name: "chibirdart", image: "assets/img/chibirdart.svg", segueVoce: "Segue você" },
        { name: "razoesparaacreditar", image: "assets/img/razoesparaacreditar.svg", segueVoce: "Novo no Instagram" },
        { name: "adorable_animals", image: "assets/img/adorable_animals.svg", segueVoce: "Segue você" },
        { name: "smallcutecats", image: "assets/img/smallcutecats.svg", segueVoce: "Segue você" }
    ]

    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {sugestoes.map((sugestao) => (
            <ArraySugestao 
            name ={sugestao.name} 
            image={sugestao.image} 
            segueVoce={sugestao.segueVoce} />
            )
            )}
        </div>
    )
}