function Posts() {
    return (
        <div class="posts">
            <div class="post">
                <Topo imagem="./assets/img/meowed.svg" usuario="meowed" />
                <Conteudo imagem="assets/img/gato-telefone.svg" />
                <Fundo curtida="assets/img/respondeai.svg" usuario="respondeai" quantidade="101.523" />
            </div>
            <div class="post">
                <Topo imagem="./assets/img/barked.svg" usuario="meowed" />
                <Conteudo imagem="./assets/img/dog.svg" />
                <Fundo curtida="./assets/img/adorable_animals.svg" usuario="adorable_animals" quantidade="99.159" />
            </div>
        </div>
    );
}


function Topo(props) {
    return (
        <div class="topo">
            <div class="usuario">
                <img src={props.imagem} />
                {props.usuario}
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
    );
}

function Conteudo(props) {
    return (
        <div class="conteudo">
            <img src={props.imagem} />
        </div>
    );
}

function Fundo(props) {
    return (
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
                    Curtido por <strong>{props.usuario}</strong> e
                    <strong>outras {props.quantidade} pessoas</strong>
                </div>
            </div>
        </div>
    );
}

export default Posts;
