import React from 'react';
import logoComTexto from '../../assets/logo/logo-com-texto-explora-maranhao.png';
import logoSemTexto from '../../assets/logo/logo-sem-texto-explora-maranhao.png';
import '../Reset/reset.css';
import './header.css';
import './hover.css';
import { HiBars3 } from "react-icons/hi2";
import { RiCloseLargeFill } from "react-icons/ri";

import { Link } from "react-router-dom";

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile: window.innerWidth <= 834,
            isTablet: window.innerWidth <= 480,
            menuAtivo: false
        };
    }

    atualizaTamanho = () => {
        this.setState({
            isMobile: window.innerWidth <= 834,
            isTablet: window.innerWidth <= 480
        });
    };

    ativaMenu = () => {
        this.setState(estadoAntes => ({
            menuAtivo: !estadoAntes.menuAtivo
        }));
    }

    componentDidMount() {
        window.addEventListener('resize', this.atualizaTamanho);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.atualizaTamanho);
    }
    render () {
        const { isMobile, menuAtivo, isTablet } = this.state;
        return (
            <header>
                <nav className="barraDeNavegacao">
                        <Link to="/"><img src={isMobile ? logoSemTexto : logoComTexto} alt="Logo do Explora Maranhão" className="logoComTexto"/></Link>
                        {/* <a href="index.html"></a> */}
                        {isTablet && (
                            <button className={`menuToggle ${menuAtivo ? 'roda' : ''}`} onClick={this.ativaMenu}>
                                {menuAtivo ? <RiCloseLargeFill /> : <HiBars3 />}
                            </button>
                        )}
                        <ul className={`navMenu ${menuAtivo ? 'ativo' : ''}`}>
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