const sugestoes= [
    {imagem:"./assets/img/bad.vibes.memes.svg", nome:"bad.vibes.memes"},
    {imagem:"./assets/img/chibirdart.svg", nome:"chibirdart"},
    {imagem:"./assets/img/razoesparaacreditar.svg", nome:"razoesparaacreditar"},
    {imagem:"./assets/img/adorable_animals.svg", nome:"adorable_animal"},
    {imagem:"./assets/img/smallcutecats.svg", nome:"smallcutecats"}
];

function Sidebar() {
    return (
        <div class="sidebar">
            <Usuario username="catanacomics" name="Catana"/>
            <Sugestoes />
            <Links />
            <Copyright />
        </div>
    );
}

function Usuario(props) {
    return (
        <div class="usuario">
            <img src="assets/img/catanacomics.svg" />
            <div class="texto">
                <strong>{props.username}</strong>
                {props.name}
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
            {sugestoes.map((sugestao) => (
                <Sugestao imagem={sugestao.imagem} nome={sugestao.nome}/>
            ))}
        </div>
    );
}

function Sugestao(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.imagem} />
                <div class="texto">
                    <div class="nome">{props.nome}</div>
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

export default Sidebar;