import React from 'react';
import "./areaPesquisa.css";
import { FaSearch } from "react-icons/fa";

export class AreaPesquisa extends React.Component {
    render() {
        return (
            <form className="caixaBuscaContainer" role="search">
                <div className="caixaBusca">
                    <input className="caixaBusca_input" type="search" placeholder="Pesquisar..." />
                    <button className="caixaBusca_button" type="submit"><FaSearch /></button>
                </div>
            </form>
        )
    }
}