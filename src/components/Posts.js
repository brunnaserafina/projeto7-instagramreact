const postagem = [
    { imagem: "./assets/img/meowed.svg", usuario: "meowed", foto: "./assets/img/gato-telefone.svg", curtida: "./assets/img/respondeai.svg", nome: "respondeai", quant: "101.523" },
    { imagem: "./assets/img/barked.svg", usuario: "barked", foto: "./assets/img/dog.svg", curtida: "./assets/img/adorable_animals.svg", nome: "adorable_animals", quant: "99.159" }
];

function Posts() {
    return (
        <div class="posts">
            {postagem.map((post) => (
                <Post imagem={post.imagem} usuario={post.usuario} foto={post.foto} curtida={post.curtida} nome={post.nome} quantidade={post.quant} />
            ))}
        </div>
    );
}

function Post(props) {
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.imagem} />
                    {props.usuario}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>
            
            <div class="conteudo">
                <img src={props.foto} />
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
                    <img src={props.curtida} />
                    <div class="texto">
                        Curtido por <strong>{props.nome}</strong> e
                        <strong>outras {props.quantidade} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Posts;
