import { useState } from "react"

function ArrayPost(props) {

    let [postSalvo, setpostSalvo] = useState(false);
    let [curtidasSalvo, setcurtidasSalvo] = useState(false);
    let [numeroDeCurtidas, setnumeroDeCurtidas] = useState(props.quantidadeLikes)

    function iconeSalvarPost() {
        if (!postSalvo) {
            setpostSalvo(true);
        } else {
            setpostSalvo(false)
        }
    }

    function iconeSalvarLike() {
        if (!curtidasSalvo) {
            setcurtidasSalvo(true);
            setnumeroDeCurtidas(numeroDeCurtidas + 1)
        } else {
            setcurtidasSalvo(false)
            setnumeroDeCurtidas(numeroDeCurtidas - 1)
        }
    }

    function curtirImagem() {
        if (!curtidasSalvo) {
            setcurtidasSalvo(true);
            setnumeroDeCurtidas(numeroDeCurtidas + 1)
        }
    }

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

            <div onClick={curtirImagem} class="conteudo">
                <img src={props.imgPost} alt="gato-telefone" />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        {
                            !curtidasSalvo ?
                                <ion-icon onClick={iconeSalvarLike} name="heart-outline"></ion-icon>
                                :
                                <ion-icon onClick={iconeSalvarLike} class="vermelho" name="heart"></ion-icon>
                        }
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        {
                            !postSalvo ?
                                <ion-icon onClick={iconeSalvarPost} name="bookmark-outline"></ion-icon>
                                :
                                <ion-icon onClick={iconeSalvarPost} name="bookmark"></ion-icon>
                        }
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.imgcurtidoPor} alt="respondeai" />
                    <div class="texto">
                        Curtido por <strong>{props.curtidoPorTexto}</strong> e <strong>outras {numeroDeCurtidas} pessoas</strong>
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
            quantidadeLikes: 101523
        },
        {
            nomeDoUsuario: "meowed",
            imgPerfil: "assets/img/barked.svg",
            imgPost: "assets/img/dog.svg",
            imgcurtidoPor: "assets/img/adorable_animals.svg",
            curtidoPorTexto: "adorable_animals",
            quantidadeLikes: 200541
        }
    ]

    return (
        <div class="posts">
            {postsArray.map((post) => (
                <ArrayPost key={post.nomeDoUsuario}
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