import { Filter } from "./Filter";
import { BarraBusca } from "./BarraBusca";

export function Main() {

  return (
    /* < !--main-- > */
    <main>
      {/* <!--banner--> */}
      <div class="bannerSobre">
        <h1>Maranhão, meu tesouro, meu torrão!</h1>
      </div>

      <div class="paragrafoInicialSobre">
        <h2>Explore o Maranhão: O Destino dos Seus Sonhos Está Aqui!</h2>
        <BarraBusca />
      </div>

      {/* < !--filtros e quadrados--> */}

      <div class="conteudo">

        <div class="conteudo_filtros">

          <Filter />
          <Filter />

        </div>
        <div class="conteudo_cards">

        </div>

      </div>

    </main>
  );

}
