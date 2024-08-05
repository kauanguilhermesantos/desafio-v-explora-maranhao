import "../css/slider.css"

import { Card } from "./Card";


export function Slider() {
  return (

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

  );
}
