import React from "react";
import "./card.css";
// import imagemTeste from "../../assets/img/1.png";
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
            <img src={props.imagemSource} alt="Imagem teste" className="imagemCardDestinoMaisProcurado" />
            <div className="infoCardDestinosMaisProcurado">
                <p className="NomeCardDestinoMaisProcurado">{props.nome}</p>
                <div>
                    <p className="cidadeCardDestinoMaisProcurado">{props.cidade}</p>
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
                    <img src={props.imagemSource} alt="" className="imagemModal" />
                    <div className="infoModal">
                        <button onClick={closeModalButton} className="botaoModal">X</button>
                        <h4>{props.nome}</h4>
                        <p className="cidadeModal">{props.cidade}</p>
                        <p className="descricaoModal">{props.descricao}</p>
                    </div>
                </div>
                <div className="mapaModal">
                    <iframe width="2000" height="200" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=700&amp;height=200&amp;hl=en&amp;q=R.%20Principal%20da%20Pindoba,%203%20-%20Pindoba,%20Pa%C3%A7o%20do%20Lumiar%20-%20MA+(Valpara%C3%ADso%20Adventure%20Park)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps devices</a></iframe>
                </div>
                {/* <iframe src="" frameborder="0"></iframe> */}
            </Modal>
        </div>
    )
} 
