import '../css/style.css';
import '../css/reset.css';
import '../css/hover.css';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Slider } from '../components/Slider';

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
          <Slider />
        </main>
      </>

      <Footer />
    </>
  );
}
