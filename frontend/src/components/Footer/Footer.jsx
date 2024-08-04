import React from 'react';
// import ReactDOM from 'react-dom'
import './footer.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { all } from '@awesome.me/kit-KIT_CODE/icons';
import visaSvg from '../../assets/img/visa.svg';
import mcSvg from '../../assets/img/mc.svg';
import paypalSvg from '../../assets/img/paypal.svg';
import dinersSvg from '../../assets/img/diners.svg';
import amexSvg from '../../assets/img/amex.svg';
import applepaySvg from '../../assets/img/applepay.svg';
import paywithgoogleSvg from '../../assets/img/paywithgoogle.svg';
import pixPng from '../../assets/img/pix.png';

import { Link } from "react-router-dom";

import { FaPhone } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";

// library.add(...all);
export class Footer extends React.Component {
    render () {
        // const phone = <FontAwesomeIcon icon="fa-solid fa-phone" />
        // ReactDOM.render(phone, document.body)
        return (
            <body>
                <footer>
                    <div class="secaoContato">
                        <div class="contato" id="contato">
                            <h3>Contato</h3>
                            {/* <p>{phone}</p> */}
                            {/* // <p><FontAwesomeIcon icon={faPhone} />(98) 4002-8922</p> */}
                            <p><FaPhone />(98) 4002-8922</p>
                            <p><FaWhatsapp />(98) 98906-6255</p>
                            <p><FaEnvelope />contato@exploramaranhao.com.br</p>
                        </div>
                        <div class="servicos">
                            <h3>Serviços</h3>
                            <Link to="/">Home</Link>
                            <Link to="/sobre">Sobre</Link>
                            <Link to="/destinos">Destinos</Link>
                        </div>
                        <div class="formasDePagamento">
                            <h3>Formas de Pagamento</h3>
                            <div>
                                <img src={visaSvg} alt="Visa"/>
                                <img src={mcSvg} alt="MasterCard"/>
                                <img src={paypalSvg} alt="PayPal"/>
                                <img src={dinersSvg} alt="Diners Club"/>
                                <img src={amexSvg} alt="American Express"/>
                                <img src={applepaySvg} alt="Apple Pay"/>
                                <img src={paywithgoogleSvg} alt="Google Pay"/>
                                <img src={pixPng} alt="Pix"/>
                            </div>
                        </div>
                    </div>
                    <div class="rodape">
                        <p>Desenvolvido por <a href="https://www.linkedin.com/in/kauan-guilherme-santos-a9a70a295/"
                                class="linkLinkedIn">Kauan Guilherme Santos</a> e <a
                                href="https://www.linkedin.com/in/ricardo-aguiar-537764200/" class="linkLinkedIn">Ricardo
                                Aguiar</a>.</p>
                    </div>
                </footer>
                <script src="https://kit.fontawesome.com/26cdbafd8c.js" crossorigin="anonymous"></script>
            </body>
        )
    }
}