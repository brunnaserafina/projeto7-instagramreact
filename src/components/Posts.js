import React from "react";

const postagem = [
    { imagem: "./assets/img/meowed.svg", usuario: "meowed", foto: "./assets/img/gato-telefone.svg", curtida: "./assets/img/respondeai.svg", nome: "respondeai", quant: "101.523" },
    { imagem: "./assets/img/barked.svg", usuario: "barked", foto: "./assets/img/dog.svg", curtida: "./assets/img/adorable_animals.svg", nome: "adorable_animals", quant: "99.159" }
];

function Posts() {
    return (
        <div className="posts">
            {postagem.map((post, index) => (
                <Post key={index} imagem={post.imagem} usuario={post.usuario} foto={post.foto} curtida={post.curtida} nome={post.nome} quantidade={post.quant} />
            ))}
        </div>
    );
}

function Post(props) {
    const [corLike, setCorLike] = React.useState("heart-outline");

    function mudarCor() {
        if (corLike === "heart-outline") {
            setCorLike("heart");
        } else {
            setCorLike("heart-outline");
        }
    }

    return (
        <div className="post">
            <div className="topo">
                <div className="usuario">
                    <img src={props.imagem} />
                    {props.usuario}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>
            
            <div className="conteudo">
                <img src={props.foto} onClick={() => setCorLike("heart")}/>
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon name={corLike} onClick={mudarCor}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={props.curtida} />
                    <div className="texto">
                        Curtido por <strong>{props.nome}</strong> e
                        <strong> outras {props.quantidade} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Posts;
