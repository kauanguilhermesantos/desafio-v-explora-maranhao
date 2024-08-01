import React from 'react';
import logoComTexto from '../../assets/logo/logo-com-texto-explora-maranhao.png';
import '../Reset/reset.css';
import './header.css';
import './hover.css';

export class Header extends React.Component {
    render () {
        return (
            <header>
                <nav className="barraDeNavegacao">
                    <a href="index.html"><img src={logoComTexto}
                            alt="Logo do Explora Maranhão" className="logoComTexto"/></a>
                    <ul className="navMenu">
                        <li className="listaMenu"><a href="index.html" className="botoesDoMenu">Home</a></li>
                        <li className="listaMenu"><a href="./front-end/paginas/sobre.html" className="botoesDoMenu">Sobre</a></li>
                        <li className="listaMenu"><a href="./paginas/destinos.html" className="botoesDoMenu">Destinos</a></li>
                        <li className="botaoContato"><a href="#contato">Contato</a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}