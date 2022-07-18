const sugestoes= [
    {imagem:"./assets/img/bad.vibes.memes.svg", nome:"bad.vibes.memes"},
    {imagem:"./assets/img/chibirdart.svg", nome:"chibirdart"},
    {imagem:"./assets/img/razoesparaacreditar.svg", nome:"razoesparaacreditar"},
    {imagem:"./assets/img/adorable_animals.svg", nome:"adorable_animal"},
    {imagem:"./assets/img/smallcutecats.svg", nome:"smallcutecats"}
];

function Sidebar() {
    return (
        <div className="sidebar">
            <Usuario username="catanacomics" name="Catana"/>
            <Sugestoes />
            <Links />
            <Copyright />
        </div>
    );
}

function Usuario(props) {
    return (
        <div className="usuario">
            <img src="assets/img/catanacomics.svg" />
            <div className="texto">
                <strong>{props.username}</strong>
                {props.name}
            </div>
        </div>
    );
}

function Sugestoes() {
    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {sugestoes.map((sugestao, index) => (
                <Sugestao key={index} imagem={sugestao.imagem} nome={sugestao.nome}/>
            ))}
        </div>
    );
}

function Sugestao(props) {
    return (
        <div className="sugestao">
            <div className="usuario">
                <img src={props.imagem} />
                <div className="texto">
                    <div className="nome">{props.nome}</div>
                    <div className="razao">Segue você</div>
                </div>
            </div>

            <div className="seguir">Seguir</div>
        </div>
    );
}


function Links() {
    return (
        <div className="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
            Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>
    );
}

function Copyright() {
    return (
        <div className="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
        </div>
    );
}

export default Sidebar;