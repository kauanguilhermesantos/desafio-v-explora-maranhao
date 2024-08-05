import React from 'react';
import logoComTexto from '../../assets/logo/logo-com-texto-explora-maranhao.png';
import '../Reset/reset.css';
import './header.css';
import './hover.css';

import { Link } from "react-router-dom";

export class Header extends React.Component {
    render () {
        return (
            <header>
                <nav className="barraDeNavegacao">
                        <Link to="/"><img src={logoComTexto}
                                alt="Logo do Explora Maranhão" className="logoComTexto"/></Link>
                        {/* <a href="index.html"></a> */}
                        <ul className="navMenu">
                            <li className="listaMenu"><Link className="botoesDoMenu" to="/">Home</Link></li>
                            {/* <li ><a href="index.html" >Home</a></li> */}
                            <li className="listaMenu"><Link className="botoesDoMenu" to="/sobre">Sobre</Link></li>
                            {/* <li className="listaMenu"><a href="./front-end/paginas/sobre.html" className="botoesDoMenu">Sobre</a></li> */}
                            <li className="listaMenu"><Link className="botoesDoMenu" to="/destinos">Destinos</Link></li>
                            {/* <li className="listaMenu"><a href="./paginas/destinos.html" className="botoesDoMenu">Destinos</a></li> */}
                            <li className="botaoContato"><a href="#contato">Contato</a></li>
                        </ul>
                        
         
                </nav>
            </header>
        )
    }
}