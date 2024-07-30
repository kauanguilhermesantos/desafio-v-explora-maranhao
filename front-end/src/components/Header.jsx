import img from "../assets/logo/logo-com-texto-explora-maranhao.png";

export function Header() {

  return (
    <header>
      <nav>
        <div className="barraDeNavegacao">
          {/* <!--logo--> */}
          <a href="../../index.html"><img src={img}
            alt="Logo do Explora Maranhão" className="logoComTexto" /></a>

          {/* <!--items de menu--> */}
          <ul className="navMenu">
            <li className="listaMenu"><a href="../../index.html" class="botoesDoMenu">Home</a></li>
            <li className="listaMenu"><a href="./front-end/paginas/sobre.html" class="botoesDoMenu">Sobre</a>
            </li>
            <li className="listaMenu"><a href="../paginas/destinos.html" class="botoesDoMenu">Destinos</a></li>
            <li className="botaoContato"><a href="#contato">Contato</a></li>
            <li className="botaoContato" data-bs-toggle="modal" data-bs-target="#janelaModal"><a
              href="#contato">Entrar</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
