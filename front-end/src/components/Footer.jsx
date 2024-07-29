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
      <div class="secaoContato">

        <div class="contato" id="contato">
          <h3>Contato</h3>
          <p><i class="fa-solid fa-phone"></i>(98) 4002-8922</p>
          <p><i class="fa-brands fa-square-whatsapp"></i>(98) 98906-6255</p>
          <p><i class="fa-solid fa-envelope"></i>contato@exploramaranhao.com.br</p>
        </div>

        <div class="servicos">
          <h3>Serviços</h3>
          <p><a href="../../index.html">Home</a></p>
          <p><a href="../paginas/sobre.html">Sobre</a></p>
          <p><a href="../paginas/destinos.html">Destinos</a></p>
        </div>

        <div class="formasDePagamento">
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
      <div class="rodape">
        <p>Desenvolvido por <a href="https://www.linkedin.com/in/kauan-guilherme-santos-a9a70a295/"
          class="linkLinkedIn">Kauan Guilherme Santos</a> e <a
            href="https://www.linkedin.com/in/ricardo-aguiar-537764200/" class="linkLinkedIn">Ricardo
            Aguiar</a>.</p>
      </div>
    </footer>
  );
}
