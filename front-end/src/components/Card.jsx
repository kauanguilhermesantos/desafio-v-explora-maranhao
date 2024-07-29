import imageCard from "../assets/img/1.png"

export function Card() {
  return (
    <div class="cardDestinosMaisProcurados">
      <img src={imageCard} alt="" class="imagemCardDestinoMaisProcurado" />
      <p class="NomeCardDestinoMaisProcurado">Onde Judas Perdeu as Botas</p>
      <p class="cidadeCardDestinoMaisProcurado">Cidade Invisível</p>
      <span class="tipoAtrativoCardDestinoMaisProcurado">Perdição</span>
    </div>
  );
}
