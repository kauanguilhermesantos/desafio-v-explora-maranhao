import React from "react";
import "./card.css";
import imagemTeste from "../../assets/img/1.png";
import Modal from "react-modal";
import { useState, useEffect, useRef } from "react";

Modal.setAppElement("#root");

export default function Card(props) {
    const [modalIsOpen, setIsOpen] = useState(false);
    const modalRef = useRef();

    function openModal() {
        setIsOpen(true);
    }

    function closeModalButton(event) {
        event.stopPropagation();
        closeModal();
    }


    function closeModal() {
        setIsOpen(false);
    }

    function handleClickOutside(event) {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            closeModal();
        }
    }

    useEffect(() => {
        if (modalIsOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [modalIsOpen]);

    return (
        <div className="cardDestinosMaisProcurados" onClick={openModal}>
            <img src={imagemTeste} alt="Imagem teste" className="imagemCardDestinoMaisProcurado" />
            <div className="infoCardDestinosMaisProcurado">
                <p className="NomeCardDestinoMaisProcurado">{props.nome}</p>
                <div>
                    <p className="cidadeCardDestinoMaisProcurado">Cidade Invisível</p>
                    <span className="tipoAtrativoCardDestinoMaisProcurado">{props.tipo}</span>
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Modal"
                overlayClassName="modal-overlay"
                className="modal-content"
            // shouldCloseOnOverlayClick={true}
            >
                <div ref={modalRef}>
                    <img src={imagemTeste} alt="" className="imagemModal" />
                    <div className="infoModal">
                        <button onClick={closeModalButton} className="botaoModal">X</button>
                        <h4>Val Paraíso</h4>
                        <p className="cidadeModal">São José de Ribamar</p>
                        <p className="descricaoModal">{props.descricao}</p>
                    </div>
                </div>
                {/* <iframe src="" frameborder="0"></iframe> */}
            </Modal>
        </div>
    )
} 
