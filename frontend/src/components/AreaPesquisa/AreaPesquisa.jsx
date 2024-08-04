import React from 'react';
import "./areaPesquisa.css";
import { FaSearch } from "react-icons/fa";
import { Card } from '../Card/Card';

export class AreaPesquisa extends React.Component {
    render() {
        return (
            <body>
                <form className="caixaBuscaContainer" role="search">
                    <div className="caixaBusca">
                        <input className="caixaBusca_input" type="search" placeholder="Pesquisar..." />
                        <button className="caixaBusca_button" type="submit"><FaSearch /></button>
                    </div>
                </form>
                <main>
                    <aside>
                        <h3>Categorias</h3>
                        <ul className="list-filter">
                            <label className="filter">
                                <input type="checkbox" />
                                <span class="checkbox-custom"></span>
                                Praia 
                            </label>
                            <label className="filter">
                                <input type="checkbox" />
                                <span class="checkbox-custom"></span>
                                Museu 
                            </label>
                            <label className="filter">
                                <input type="checkbox" />
                                <span class="checkbox-custom"></span>
                                Eventos 
                            </label>
                            <label className="filter">
                                <input type="checkbox" />
                                <span class="checkbox-custom"></span>
                                Parques 
                            </label>
                            <label className="filter">
                                <input type="checkbox" />
                                <span class="checkbox-custom"></span>
                                Aventura 
                            </label>
                            <label className="filter">
                                <input type="checkbox" />
                                <span class="checkbox-custom"></span>
                                Natureza 
                            </label>
                        </ul>
                    </aside>
                    <div>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </main>
            </body>
        )
    }
}