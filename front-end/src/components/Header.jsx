import img from "../assets/logo/logo-com-texto-explora-maranhao.png";

export function Header() {

  return (
    <header>
      <nav>
        <div class="barraDeNavegacao">
          {/* <!--logo--> */}
          <a href="../../index.html"><img src={img}
            alt="Logo do Explora Maranhão" class="logoComTexto" /></a>

          {/* <!--items de menu--> */}
          <ul class="navMenu">
            <li class="listaMenu"><a href="../../index.html" class="botoesDoMenu">Home</a></li>
            <li class="listaMenu"><a href="./front-end/paginas/sobre.html" class="botoesDoMenu">Sobre</a>
            </li>
            <li class="listaMenu"><a href="../paginas/destinos.html" class="botoesDoMenu">Destinos</a></li>
            <li class="botaoContato"><a href="#contato">Contato</a></li>
            <li class="botaoContato" data-bs-toggle="modal" data-bs-target="#janelaModal"><a
              href="#contato">Entrar</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
