function Corpo() {
    return (
        <div class="corpo">
            <Esquerda />
            <Sidebar />
        </div>
    );
}

function Esquerda() {
    return (
        <div class="esquerda">
            <div class="stories">
                <Story />
                <Story />
                <Story />
                <Story />
                <Story />
                <Story />
                <Story />
                <Story />
                <Setinha />
            </div>

            <div class="posts">
                <Post />
                <Post />
            </div>
        </div>
    );
}

function Story() {
    return (
        <div class="story">
            <div class="imagem">
                <img src="assets/img/9gag.svg" />
            </div>
            <div class="usuario">
                9gag
            </div>
        </div>
    );
}

function Setinha() {
    return (
        <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
    );
}

function Post() {
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src="assets/img/meowed.svg" />
                    meowed
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src="assets/img/gato-telefone.svg" />
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
                    <img src="assets/img/respondeai.svg" />
                    <div class="texto">
                        Curtido por <strong>respondeai</strong> e
                        <strong>outras 101.523 pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Sidebar() {
    return (
        <div class="sidebar">
            <Usuario />
            <Sugestoes />
            <Links />
            <Copyright />
        </div>
    );
}

function Usuario() {
    return (
        <div class="usuario">
            <img src="assets/img/catanacomics.svg" />
            <div class="texto">
                <strong>catanacomics</strong>
                Catana
            </div>
        </div>
    );
}

function Sugestoes() {
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            <Sugestao />
            <Sugestao />
            <Sugestao />
            <Sugestao />
            <Sugestao />
            <Sugestao />
        </div>
    );
}

function Sugestao() {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src="assets/img/bad.vibes.memes.svg" />
                <div class="texto">
                    <div class="nome">bad.vibes.memes</div>
                    <div class="razao">Segue você</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    );
}


function Links() {
    return (
        <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
            Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>
    );
}

function Copyright() {
    return (
        <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
        </div>
    );
}



export default Corpo;