import React from "react";
import "./cardHome.css";
import imagemTeste from "../../assets/img/1.png";

export class CardHome extends React.Component {
    render() {
        return (
            <div class="cardDestinosMaisProcurados">
                <img src={imagemTeste}alt="Imagem teste" class="imagemCardDestinoMaisProcurado"/>
                <div class="infoCardDestinosMaisProcurado">
                    <p class="NomeCardDestinoMaisProcurado">Onde Judas Perdeu as Botas</p>
                    <div>
                        <p class="cidadeCardDestinoMaisProcurado">Cidade Invisível</p>
                        <span class="tipoAtrativoCardDestinoMaisProcurado">Perdição</span>
                    </div>
                </div>
            </div>
        )
    }
} 
