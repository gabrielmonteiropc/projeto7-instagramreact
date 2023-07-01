function ArrayPost(props) {
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.imgPerfil} alt="meowed" />
                    {props.nomeDoUsuario}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.imgPost} alt="gato-telefone" />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.imgcurtidoPor} alt="respondeai" />
                    <div class="texto">
                        Curtido por <strong>{props.curtidoPorTexto}</strong> e <strong>outras {props.quantidadeLikes} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Posts() {

    const postsArray = [
        {
            nomeDoUsuario: "meowed",
            imgPerfil: "assets/img/meowed.svg",
            imgPost: "assets/img/gato-telefone.svg",
            imgcurtidoPor: "assets/img/respondeai.svg",
            curtidoPorTexto: "respondeai",
            quantidadeLikes: 101.523
        },
        {
            nomeDoUsuario: "meowed",
            imgPerfil: "assets/img/barked.svg",
            imgPost: "assets/img/dog.svg",
            imgcurtidoPor: "assets/img/adorable_animals.svg",
            curtidoPorTexto: "adorable_animals",
            quantidadeLikes: 200.541
        }
    ]

    return (
        <div class="posts">
            {postsArray.map((post) => (
                <ArrayPost
                    nomeDoUsuario={post.nomeDoUsuario}
                    imgPerfil={post.imgPerfil}
                    imgPost={post.imgPost}
                    imgcurtidoPor={post.imgcurtidoPor}
                    curtidoPorTexto={post.curtidoPorTexto}
                    quantidadeLikes={post.quantidadeLikes}
                />)
            )}
        </div>
    )
}