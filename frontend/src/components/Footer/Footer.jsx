import React from 'react';

export class Footer extends React.Component {
    render () {
        return (
            <footer>
                <div class="secaoContato">
                    <div class="contato" id="contato">
                        <h3>Contato</h3>
                        <p><i class="fa-solid fa-phone"></i>(98) 4002-8922</p>
                        <p><i class="fa-brands fa-square-whatsapp"></i>(98) 98906-6255</p>
                        <p><i class="fa-solid fa-envelope"></i>contato@exploramaranhao.com.br</p>
                    </div>
                    <div class="servicos">
                        <h3>Serviços</h3>
                        <p><a href="./index.html">Home</a></p>
                        <p><a href="./front-end/paginas/sobre.html">Sobre</a></p>
                        <p><a href="./front-end/paginas/destinos.html">Destinos</a></p>
                    </div>
                    <div class="formasDePagamento">
                        <h3>Formas de Pagamento</h3>
                        <div>
                            <img src="./front-end/assets/img/visa.svg" alt="Visa"/>
                            <img src="./front-end/assets/img/mc.svg" alt="MasterCard"/>
                            <img src="./front-end/assets/img/paypal.svg" alt="PayPal"/>
                            <img src="./front-end/assets/img/diners.svg" alt="Diners Club"/>
                            <img src="./front-end/assets/img/amex.svg" alt="American Express"/>
                            <img src="./front-end/assets/img/applepay.svg" alt="Apple Pay"/>
                            <img src="./front-end/assets/img/paywithgoogle.svg" alt="Google Pay"/>
                            <img src="./front-end/assets/img/pix.png" alt="Pix"/>
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
        )
    }
}