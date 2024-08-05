import imgVisa from "../assets/img/visa.svg"
import imgPaypal from "../assets/img/paypal.svg"
import imgPix from "../assets/img/pix.png"
import imgDinners from "../assets/img/diners.svg"
import imgMasterCard from "../assets/img/mc.svg"
import imgPayGoogle from "../assets/img/paywithgoogle.svg"
import imgAmericaExpress from "../assets/img/amex.svg"
import imgApplePay from "../assets/img/applepay.svg"


export function Footer() {
  return (
    <footer>
      <div className="secaoContato">

        <div className="contato" id="contato">
          <h3>Contato</h3>
          <p><i className="fa-solid fa-phone"></i>(98) 4002-8922</p>
          <p><i className="fa-brands fa-square-whatsapp"></i>(98) 98906-6255</p>
          <p><i className="fa-solid fa-envelope"></i>contato@exploramaranhao.com.br</p>
        </div>

        <div className="servicos">
          <h3>Serviços</h3>
          <p><a href="../../index.html">Home</a></p>
          <p><a href="../paginas/sobre.html">Sobre</a></p>
          <p><a href="../paginas/destinos.html">Destinos</a></p>
        </div>

        <div className="formasDePagamento">
          <h3>Formas de Pagamento</h3>
          <div>
            <img src={imgVisa} alt="Visa" />
            <img src={imgMasterCard} alt="MasterCard" />
            <img src={imgPaypal} alt="PayPal" />
            <img src={imgDinners} alt="Diners Club" />
            {/* <!-- <br> --> */}
            <img src={imgAmericaExpress} alt="American Express" />
            <img src={imgApplePay} alt="Apple Pay" />
            <img src={imgPayGoogle} alt="Google Pay" />
            <img src={imgPix} alt="Pix" />
          </div>
        </div>
      </div>
      <div className="rodape">
        <p>Desenvolvido por <a href="https://www.linkedin.com/in/kauan-guilherme-santos-a9a70a295/"
          className="linkLinkedIn">Kauan Guilherme Santos</a> e <a
            href="https://www.linkedin.com/in/ricardo-aguiar-537764200/" className="linkLinkedIn">Ricardo
            Aguiar</a>.</p>
      </div>
    </footer>
  );
}
