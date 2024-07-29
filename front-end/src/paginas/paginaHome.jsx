import '../css/style.css';
import '../css/reset.css';
import '../css/hover.css';
import '../css/slider.css'

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Card } from '../components/Card';

export function PageHome() {
  return (
    <>
      {/* colocar app aqui */}
      <Header />
      {/*conteudo 2*/}
      <>
        <main>
          <section className="banner">
            {/* <!-- <img src="./assets/img/banner.png" alt="Imagem de turismo" className="imagemTurismo"> --> */}
            <h1>Encontre aqui o destino da sua próxima aventura!</h1>
          </section>

          <h2 className="destinosHome">Destinos mais procurados</h2>

          <div className="slider-container">

            <div className="slider-container-up">


              <div className="botoesDestinosMaisProcurado">
                <button id="anterior"> L </button>
              </div>

              <div className="destinosMaisProcurados">
                <div className="slider-wrapper">
                  <div className="slider">
                    <Card />
                    <Card />
                    <Card />
                  </div>
                </div>
              </div>

              <div className="botoesDestinosMaisProcurado">
                <button id="proximo" className="botoesDestinosMaisProcurado"> R </button>
              </div>

            </div>

            <ul className="pontinhosDestinosMaisProcurado">
              <li className="ativo" data-index="0">•</li>
              <li data-index="1">•</li>
              <li data-index="2">•</li>
              <li data-index="3">•</li>
            </ul>

          </div>
        </main>
      </>

      <Footer />
    </>
  );
}
