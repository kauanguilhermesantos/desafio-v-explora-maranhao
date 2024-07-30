import { Filter } from "./Filter";
import { BarraBusca } from "./BarraBusca";

export function Main() {

  return (
    /* < !--main-- > */
    <main>
      {/* <!--banner--> */}
      <div className="bannerSobre">
        <h1>Maranhão, meu tesouro, meu torrão!</h1>
      </div>

      <div className="paragrafoInicialSobre">
        <h2>Explore o Maranhão: O Destino dos Seus Sonhos Está Aqui!</h2>
        <BarraBusca />
      </div>

      {/* < !--filtros e quadrados--> */}

      <div className="conteudo">

        <div className="conteudo_filtros">

          <Filter />
          <Filter />

        </div>
        <div className="conteudo_cards">

        </div>

      </div>

    </main>
  );

}
