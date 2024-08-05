import React from "react";
import "./card.css";
import imagemTeste from "../../assets/img/1.png";
import Modal from "react-modal";
import { useState } from "react";

Modal.setAppElement("#root");

export default function Card() {
    const [modalsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    
    return (
        <div class="cardDestinosMaisProcurados" onClick={openModal}>
            <img src={imagemTeste}alt="Imagem teste" class="imagemCardDestinoMaisProcurado"/>
            <div class="infoCardDestinosMaisProcurado">
                <p class="NomeCardDestinoMaisProcurado">Onde Judas Perdeu as Botas</p>
                <div>
                    <p class="cidadeCardDestinoMaisProcurado">Cidade Invisível</p>
                    <span class="tipoAtrativoCardDestinoMaisProcurado">Perdição</span>
                </div>
            </div>
            <Modal
                isOpen={modalsOpen}
                onRequestClose={closeModal}
                contentLabel="Modal"
                overlayClassName="modal-overlay"
                className="modal-content"
            >
                <img src={imagemTeste} alt="" className="imagemModal" />
                {/* <button className="botaoModal" onClick={closeModal}>X</button> */}
                <div className="infoModal">
                    <h4>Val Paraíso</h4>
                    <p className="cidadeModal">São José de Ribamar</p>
                    <p className="descricaoModal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, numquam rerum ullam hic facere corrupti eius nisi culpa laudantium omnis cupiditate nostrum, laboriosam esse! Animi repudiandae soluta ipsam corporis aperiam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur adipisci maxime, molestiae dignissimos sapiente libero commodi fuga reprehenderit cupiditate rem dolor tempore dicta, impedit id natus deleniti autem sit esse.</p>
                </div>
                {/* <iframe src="" frameborder="0"></iframe> */}
            </Modal>
        </div>
    )
} 
