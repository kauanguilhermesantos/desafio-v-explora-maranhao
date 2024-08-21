import React from "react";
import "./card.css";
// import imagemTeste from "../../assets/img/1.png";
import Modal from "react-modal";
// import parse from "html-react-parser"
import { useState, useEffect, useRef } from "react";
//


Modal.setAppElement("#root");

export default function CardSlider(props) {

  return (
    <div className="cardDestinosMaisProcurados" /* onClick={openModal} */>
      <img src={props.imagemSource} alt="Imagem teste" className="imagemCardDestinoMaisProcurado" />
      <div className="infoCardDestinosMaisProcurado">
        <p className="NomeCardDestinoMaisProcurado">{props.nome}</p>
        <div>
          <p className="cidadeCardDestinoMaisProcurado">{props.cidade}</p>
          <span className="tipoAtrativoCardDestinoMaisProcurado">{props.tipo}</span>
        </div>
      </div>
    </div>
  )
} 
