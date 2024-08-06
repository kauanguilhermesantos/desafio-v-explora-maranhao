import React from 'react';
import { useEffect, useState } from 'react';
import "./areaPesquisa.css";
import { FaSearch } from "react-icons/fa";
import Card from '../Card/Card';


import api from "../../api";





export default function AreaPesquisa() {

    let tiposFiltros = [];

    // api data
    const [atrativos, setAtrativo] = useState([]);
    // checkbox-verification
    const [isChecked, setIsChecked] = useState(false);


    async function getAtrativos() {
        const atrativosFromApi = await api.get("/atrativos");
        // console.log(atrativosFromApi.data);
        setAtrativo(atrativosFromApi.data);
    }

    useEffect(() => {
        getAtrativos();
    }, []);

    // componente filtro
    const Filtro = ({ tipo }) => {
        return (
            <label className="filter" id="filtro">
                <input type="checkbox" checked={isChecked} onChange={"colocar uma funcao aq !!!"} />
                <span class="checkbox-custom"></span>
                {tipo}
            </label>
        )
    }
    // mexendo end

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
                        {/* parque museu parque aventura natureza Eventos */}
                        <Filtro tipo={"Praia"} />
                        <Filtro tipo={"Museu"} />
                        <Filtro tipo={"Parque"} />
                        <Filtro tipo={"Aventura"} />
                        <Filtro tipo={"Natureza"} />
                        <Filtro tipo={"Evento"} />
                    </ul>
                </aside>
                <div>

                    { // cards dinamicos
                        atrativos.map((props, key) =>
                            <Card nome={props.nome} tipo={props.tipo} descricao={props.descricao} />
                        )

                    }

                </div>
            </main>
        </body>
    )
}
