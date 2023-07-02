import {useState} from "react";

export default function User() {

    let [nomeUsuario, setnomeUsuario] = useState('catanacomics');
    let [imagemUsuario, setimagemUsuario] = useState('assets/img/catanacomics.svg');

    function trocarNome(){
        const novoNome = window.prompt('Digite o novo nome');

        if(novoNome  === null || novoNome === undefined || novoNome === "" ){
            window.alert('Digite seu nome');
        }else{
            setnomeUsuario(novoNome);
        }
    }

    function trocarImagem(){
        const novaImagem = window.prompt('Coloque o Link da nova imagem');

        if(novaImagem   === null || novaImagem  === undefined || novaImagem  === "" ){
            window.alert('Digite o Link da nova imagem');
        }else{
            setimagemUsuario(novaImagem );
        }
    }

    return (
        <div class="usuario">
            <img onClick = {trocarImagem} src={imagemUsuario} alt="imagem de perfil" data-test="profile-image" />
            <div class="texto">
                <span data-test="name">
                    <strong>{nomeUsuario}</strong>
                    <ion-icon data-test="edit-name" onClick = {trocarNome} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}