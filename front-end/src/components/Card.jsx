import imageCard from "../assets/img/1.png"

import "../css/card.css"

export function Card() {
  return (
    <div className="cardDestinosMaisProcurados">
      <img src={imageCard} alt="" className="imagemCardDestinoMaisProcurado" />
      <p className="NomeCardDestinoMaisProcurado">Onde Judas Perdeu as Botas</p>
      <p className="cidadeCardDestinoMaisProcurado">Cidade Invisível</p>
      <span className="tipoAtrativoCardDestinoMaisProcurado">Perdição</span>
    </div>
  );
}
